import { timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  adminCookieName,
  createAdminSessionToken,
  isAdminSecretStrong,
  verifyAdminSessionToken,
} from "@/lib/admin-session";

const loginAttemptWindowMs = 15 * 60 * 1000;
const loginAttemptLimit = 5;
const loginLockoutMs = 15 * 60 * 1000;

type LoginAttemptRecord = {
  count: number;
  windowStartedAt: number;
  lockedUntil: number | null;
};

declare global {
  var __portfolioAdminLoginAttempts: Map<string, LoginAttemptRecord> | undefined;
}

const loginAttempts =
  globalThis.__portfolioAdminLoginAttempts ??= new Map<string, LoginAttemptRecord>();

function getAdminConfig() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  return {
    username,
    password,
    secret,
    configured: Boolean(username && password && secret),
    secureSecret: isAdminSecretStrong(secret),
  };
}

export function isAdminConfigured() {
  return getAdminConfig().configured;
}

export function isAdminSecurityReady() {
  const { configured, secureSecret } = getAdminConfig();
  return configured && secureSecret;
}

export function getAdminSecurityWarning() {
  const { configured, secureSecret } = getAdminConfig();
  if (!configured) {
    return "Set ADMIN_USERNAME, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET in your environment before using /admin.";
  }

  if (!secureSecret) {
    return "Use an ADMIN_SESSION_SECRET that is at least 32 characters and does not include placeholder text such as 'change-this' before launching publicly.";
  }

  return null;
}

export async function isAuthenticatedAdmin() {
  const { configured, secret, username } = getAdminConfig();
  if (!configured || !secret || !username) {
    return false;
  }

  const cookieStore = await cookies();
  const value = cookieStore.get(adminCookieName)?.value;
  if (!value) {
    return false;
  }

  const session = await verifyAdminSessionToken(value, secret, username);
  return Boolean(session);
}

export async function requireAdmin() {
  const authenticated = await isAuthenticatedAdmin();
  if (!authenticated) {
    redirect("/admin/login");
  }
}

export async function createAdminSession() {
  const { configured, secret, username } = getAdminConfig();
  if (!configured || !secret || !username) {
    throw new Error("Admin credentials are not configured.");
  }

  const cookieStore = await cookies();
  const sessionValue = await createAdminSessionToken(username, secret);
  cookieStore.set(adminCookieName, sessionValue, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
    priority: "high",
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(adminCookieName);
}

export async function verifyAdminCredentials(username: string, password: string) {
  const config = getAdminConfig();
  if (!config.configured || !config.username || !config.password) {
    throw new Error(
      "Set ADMIN_USERNAME, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET in your environment before using /admin.",
    );
  }

  const usernameBuffer = Buffer.from(username, "utf8");
  const expectedUsernameBuffer = Buffer.from(config.username, "utf8");
  const passwordBuffer = Buffer.from(password, "utf8");
  const expectedPasswordBuffer = Buffer.from(config.password, "utf8");

  const usernameMatches =
    usernameBuffer.length === expectedUsernameBuffer.length &&
    timingSafeEqual(usernameBuffer, expectedUsernameBuffer);
  const passwordMatches =
    passwordBuffer.length === expectedPasswordBuffer.length &&
    timingSafeEqual(passwordBuffer, expectedPasswordBuffer);

  return usernameMatches && passwordMatches;
}

function pruneExpiredAttempts(now: number) {
  for (const [key, value] of loginAttempts.entries()) {
    const expiredWindow = now - value.windowStartedAt > loginAttemptWindowMs;
    const unlocked = value.lockedUntil === null || value.lockedUntil <= now;
    if (expiredWindow && unlocked) {
      loginAttempts.delete(key);
    }
  }
}

export async function getAdminRequestIdentifier() {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = headerStore.get("x-real-ip")?.trim();
  const userAgent = headerStore.get("user-agent")?.trim() ?? "unknown-agent";

  return `${forwardedFor || realIp || "unknown-ip"}:${userAgent.slice(0, 160)}`;
}

export function getAdminLoginLockout(identifier: string) {
  const now = Date.now();
  pruneExpiredAttempts(now);

  const record = loginAttempts.get(identifier);
  if (!record?.lockedUntil || record.lockedUntil <= now) {
    return null;
  }

  return {
    retryAfterSeconds: Math.max(1, Math.ceil((record.lockedUntil - now) / 1000)),
  };
}

export function clearAdminLoginAttempts(identifier: string) {
  loginAttempts.delete(identifier);
}

export function recordAdminLoginFailure(identifier: string) {
  const now = Date.now();
  pruneExpiredAttempts(now);

  const existing = loginAttempts.get(identifier);
  const withinWindow = existing && now - existing.windowStartedAt <= loginAttemptWindowMs;
  const nextRecord: LoginAttemptRecord = withinWindow
    ? {
        count: existing.count + 1,
        windowStartedAt: existing.windowStartedAt,
        lockedUntil: existing.lockedUntil,
      }
    : {
        count: 1,
        windowStartedAt: now,
        lockedUntil: null,
      };

  if (nextRecord.count >= loginAttemptLimit) {
    nextRecord.lockedUntil = now + loginLockoutMs;
  }

  loginAttempts.set(identifier, nextRecord);

  return nextRecord.lockedUntil && nextRecord.lockedUntil > now
    ? {
        retryAfterSeconds: Math.max(1, Math.ceil((nextRecord.lockedUntil - now) / 1000)),
      }
    : null;
}
