/**
 * Appointment request form options, shared by New Patients, Scheduling and
 * Emergency Scheduling (Developer Handoffs: one component, `id="appointment-form"`,
 * the same fields as the current site, no health details collected).
 *
 * "Invisalign" is written as "clear aligners" until the practice confirms its
 * certified-provider status (approved decision, 2 Oct 2026).
 */

export const interestOptions = [
  {
    value: "New Patient Exam & Cleaning",
    hint: "For first-time patients; includes exam, X-rays and cleaning if applicable",
  },
  { value: "Routine Cleaning & Checkup", hint: "For existing patients" },
  { value: "Emergency Visit", hint: "Pain, swelling, broken tooth, infection, etc." },
  { value: "Treatment Visit", hint: "Fillings, crowns, root canals, extractions or scheduled procedures" },
  { value: "Consultation / Second Opinion", hint: "Implants, veneers, clear aligners" },
  { value: "Other / Not Sure", hint: null },
] as const;

export const timeOptions = ["Morning", "Afternoon"] as const;

/** The office is open Monday to Thursday only */
export const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday"] as const;

export type FormVariant = "appointment" | "emergency";

/** Server-side length limits (the inputs carry the same maxLength) */
export const fieldLimits = {
  name: 60,
  phone: 25,
  email: 120,
  emergency: 200,
  comments: 1000,
} as const;

/** Each page passes its own privacy line (the wording differs between the content files) */
export const formNotes = {
  privacy: { label: "Privacy policy", href: "/privacy-policy/" },
  success: "Thank you. Our scheduling coordinator will contact you to confirm your appointment.",
};
