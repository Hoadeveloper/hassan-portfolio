import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import type { ManagedContent } from "@/types/managed-content";

const contentFilePath = path.join(process.cwd(), "content", "managed-content.json");

async function ensureContentDirectory() {
  await mkdir(path.dirname(contentFilePath), { recursive: true });
}

export async function getManagedContent(): Promise<ManagedContent> {
  const file = await readFile(contentFilePath, "utf8");
  return JSON.parse(file) as ManagedContent;
}

export async function saveManagedContent(content: ManagedContent) {
  await ensureContentDirectory();
  const nextContent: ManagedContent = {
    ...content,
    updatedAt: new Date().toISOString(),
  };
  await writeFile(contentFilePath, `${JSON.stringify(nextContent, null, 2)}\n`, "utf8");
}

export async function updateManagedContent(
  updater: (current: ManagedContent) => ManagedContent,
) {
  const current = await getManagedContent();
  const next = updater(current);
  await saveManagedContent(next);
  return next;
}

export function splitLines(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export function getOptionalString(formData: FormData, key: string) {
  const value = String(formData.get(key) ?? "").trim();
  return value || undefined;
}

export function requireValue(label: string, value: string) {
  if (!value.trim()) {
    throw new Error(`${label} is required.`);
  }
}
