"use client";

import { useEffect } from "react";
import { LEAD_FLAG } from "@/content/appointment-form";

/**
 * Fires the lead conversion event on arrival at /thank-you/ ("Developer Questions - Answered":
 * on arrival here, not on the form button click). Only a real submission sets the one-time
 * flag, so opening or refreshing the URL directly isn't counted as a lead.
 */
export function ThankYouEvent() {
  useEffect(() => {
    let lead: { variant?: string; from?: string } | null = null;
    try {
      const raw = sessionStorage.getItem(LEAD_FLAG);
      sessionStorage.removeItem(LEAD_FLAG);
      lead = raw ? JSON.parse(raw) : null;
    } catch {
      // Storage blocked or bad value: no event rather than a false one
    }
    if (!lead) return;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: lead.variant === "emergency" ? "emergency_request" : "appointment_request",
      form_page: lead.from,
      page_path: "/thank-you/",
    });
  }, []);
  return null;
}
