"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import type { FormVariant } from "@/content/appointment-form";
import { practice } from "@/content/site";
import { validateAppointment, type AppointmentState } from "./appointment-validation";

/**
 * Appointment request handler for the shared form (New Patients, Scheduling,
 * Emergency Scheduling). A public endpoint, so every field is validated here and
 * nothing from the request is trusted (Next.js Server Actions security guide).
 *
 * Delivery is SMTP over TLS, configured only through environment variables (see
 * .env.example). Until they are set, the form tells visitors to call or text instead.
 * No health details are collected, and nothing from a submission is logged.
 */

const fallback = `Please call or text ${practice.phone.display} and our team will help you book.`;

// Per-instance limit: 5 requests per IP in 10 minutes. Serverless instances don't
// share memory, so this only slows down simple floods; the honeypot does the rest.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

export async function submitAppointment(variant: FormVariant, data: FormData): Promise<AppointmentState> {
  // Honeypot: real visitors never see or fill this field.
  if (String(data.get("company") ?? "").trim() !== "") return { status: "sent" };

  const { errors, fields } = validateAppointment(variant, data);
  if (Object.keys(errors).length) return { status: "invalid", errors };

  // Only complete requests count toward the limit, so fixing typos never locks anyone out
  const requestHeaders = await headers();
  const ip = (requestHeaders.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return { status: "error", message: `Too many requests in a short time. ${fallback}` };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, FORM_TO_EMAIL, FORM_FROM_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return { status: "error", message: `Online requests aren't available right now. ${fallback}` };
  }

  const subject =
    variant === "emergency"
      ? `Emergency visit request: ${fields[0][1]}`
      : `Appointment request: ${fields[0][1]}`;
  const text = [
    variant === "emergency" ? "New emergency visit request from the website." : "New appointment request from the website.",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: SMTP_SECURE === "true",
      requireTLS: SMTP_SECURE !== "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transport.sendMail({
      from: { name: `${practice.name} website`, address: FORM_FROM_EMAIL || SMTP_USER },
      to: FORM_TO_EMAIL || practice.email,
      replyTo: fields.find(([label]) => label === "Email")?.[1],
      subject,
      text,
    });
    return { status: "sent" };
  } catch {
    return { status: "error", message: `Your request couldn't be sent. ${fallback}` };
  }
}
