import { dayOptions, fieldLimits, interestOptions, timeOptions, type FormVariant } from "@/content/appointment-form";

/**
 * Appointment form rules, shared by the form (instant red messages under each
 * field) and the server action (which re-checks everything, since the request can
 * be sent without the page). One source, so the two can never disagree.
 */

export type FieldName =
  | "firstName"
  | "lastName"
  | "name"
  | "dob"
  | "phone"
  | "email"
  | "interest"
  | "time"
  | "day"
  | "emergency"
  | "comments";

export type FieldErrors = Partial<Record<FieldName, string>>;

export type AppointmentState =
  | { status: "idle" }
  | { status: "invalid"; errors: FieldErrors }
  | { status: "error"; message: string }
  | { status: "sent" };

/** Single-line text: trimmed, no line breaks (blocks header injection), capped */
const line = (data: FormData, key: string, max: number) =>
  String(data.get(key) ?? "")
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .slice(0, max);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validDob(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return false;
  return date.getUTCFullYear() >= 1900 && date.getTime() <= Date.now();
}

/** Errors per field, plus the labelled values for the email to the practice */
export function validateAppointment(variant: FormVariant, data: FormData) {
  const errors: FieldErrors = {};
  const fields: [string, string][] = [];

  const phone = line(data, "phone", fieldLimits.phone);
  const email = line(data, "email", fieldLimits.email);
  const day = line(data, "day", 20);

  if (!phone) errors.phone = "Please enter your phone number.";
  else if (phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number with area code.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(email)) errors.email = "Please enter a valid email address.";
  if (day && !(dayOptions as readonly string[]).includes(day)) errors.day = "Please choose Monday to Thursday.";

  if (variant === "emergency") {
    const name = line(data, "name", fieldLimits.name);
    const emergency = line(data, "emergency", fieldLimits.emergency);
    if (!name) errors.name = "Please enter your name.";
    if (!emergency) errors.emergency = "Please tell us briefly what's happening.";
    fields.push(["Name", name], ["Phone", phone], ["Email", email], ["Dental emergency", emergency], ["Preferred day", day || "Not given"]);
  } else {
    const firstName = line(data, "firstName", fieldLimits.name);
    const lastName = line(data, "lastName", fieldLimits.name);
    const dob = line(data, "dob", 10);
    const interest = line(data, "interest", 60);
    const time = line(data, "time", 20);
    const comments = String(data.get("comments") ?? "").trim().slice(0, fieldLimits.comments);
    if (!firstName) errors.firstName = "Please enter your first name.";
    if (!lastName) errors.lastName = "Please enter your last name.";
    if (!dob) errors.dob = "Please enter your date of birth.";
    else if (!validDob(dob)) errors.dob = "Please enter a valid date of birth.";
    if (interest && !interestOptions.some((option) => option.value === interest)) errors.interest = "Please choose an option.";
    if (time && !(timeOptions as readonly string[]).includes(time)) errors.time = "Please choose morning or afternoon.";
    fields.push(
      ["Name", `${firstName} ${lastName}`],
      ["Date of birth", dob],
      ["Phone", phone],
      ["Email", email],
      ["Interested in", interest || "Not given"],
      ["Best time", time || "Not given"],
      ["Preferred day", day || "Not given"],
      ["Comments or questions", comments || "None"],
    );
  }

  return { errors, fields };
}
