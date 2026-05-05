const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

export const adminCookieName = "portfolio-admin-session";
export const adminSessionDurationSeconds = 60 * 60 * 12;

type AdminSessionPayload = {
  sub: string;
  iat: number;
  exp: number;
  nonce: string;
};

function encodeBase64(value: Uint8Array) {
  let binary = "";
  for (const byte of value) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary);
}

function decodeBase64(value: string) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function toBase64Url(value: Uint8Array | string) {
  const source = typeof value === "string" ? textEncoder.encode(value) : value;
  return encodeBase64(source)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = (4 - (normalized.length % 4 || 4)) % 4;
  return decodeBase64(`${normalized}${"=".repeat(padding)}`);
}

function safeCompare(left: string, right: string) {
  if (left.length !== right.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return mismatch === 0;
}

async function createSignature(value: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", key, textEncoder.encode(value));
  return toBase64Url(new Uint8Array(signature));
}

function createNonce() {
  return toBase64Url(crypto.getRandomValues(new Uint8Array(18)));
}

export function isAdminSecretStrong(secret: string | undefined) {
  return Boolean(secret && secret.length >= 32 && !secret.toLowerCase().includes("change-this"));
}

export async function createAdminSessionToken(username: string, secret: string) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const payload: AdminSessionPayload = {
    sub: username,
    iat: issuedAt,
    exp: issuedAt + adminSessionDurationSeconds,
    nonce: createNonce(),
  };

  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const signature = await createSignature(encodedPayload, secret);
  return `${encodedPayload}.${signature}`;
}

export async function verifyAdminSessionToken(
  value: string,
  secret: string,
  expectedUsername?: string,
) {
  const [encodedPayload, signature] = value.split(".");
  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = await createSignature(encodedPayload, secret);
  if (!safeCompare(signature, expectedSignature)) {
    return null;
  }

  try {
    const payload = JSON.parse(
      textDecoder.decode(fromBase64Url(encodedPayload)),
    ) as AdminSessionPayload;
    const now = Math.floor(Date.now() / 1000);

    if (
      !payload.sub ||
      !payload.iat ||
      !payload.exp ||
      !payload.nonce ||
      payload.iat > now ||
      payload.exp <= now
    ) {
      return null;
    }

    if (expectedUsername && payload.sub !== expectedUsername) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
