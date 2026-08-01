"use server";

import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export interface ApplicationState {
  status: "idle" | "success" | "error";
}

interface ApplicationRecord {
  id: string;
  createdAt: string;
  serviceSlug: string;
  tierId: string;
  name: string;
  phone: string;
  email: string;
  nationality: string;
  visaStatus: string;
  message: string;
  lang: string;
}

export async function submitApplication(
  _prevState: ApplicationState,
  formData: FormData
): Promise<ApplicationState> {
  const serviceSlug = formData.get("serviceSlug")?.toString().trim() ?? "";
  const tierId = formData.get("tierId")?.toString().trim() ?? "";
  const name = formData.get("name")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const nationality = formData.get("nationality")?.toString().trim() ?? "";
  const visaStatus = formData.get("visaStatus")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const lang = formData.get("lang")?.toString().trim() ?? "ko";

  if (!serviceSlug || !tierId || !name || !phone || !nationality || !visaStatus) {
    return { status: "error" };
  }

  const record: ApplicationRecord = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    serviceSlug,
    tierId,
    name,
    phone,
    email,
    nationality,
    visaStatus,
    message,
    lang,
  };

  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, "submissions.json");
    let existing: ApplicationRecord[] = [];
    try {
      const raw = await fs.readFile(file, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    existing.push(record);
    await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to persist application", err);
    return { status: "error" };
  }

  return { status: "success" };
}

export interface ContactState {
  status: "idle" | "success" | "error";
}

interface ContactRecord {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error" };
  }

  const record: ContactRecord = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    email,
    subject,
    message,
  };

  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, "contact-messages.json");
    let existing: ContactRecord[] = [];
    try {
      const raw = await fs.readFile(file, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    existing.push(record);
    await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to persist contact message", err);
    return { status: "error" };
  }

  return { status: "success" };
}
