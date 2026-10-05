"use client";

import { useEffect, useRef, useState, useTransition, type FormEvent } from "react";
import Link from "@/components/ui/SiteLink";
import buttonStyles from "@/components/ui/Button.module.css";
import { Icon } from "@/components/ui/Icon";
import {
  dayOptions,
  fieldLimits,
  formNotes,
  interestOptions,
  timeOptions,
  type FormVariant,
} from "@/content/appointment-form";
import { contactLinks, practice } from "@/content/site";
import { submitAppointment } from "@/lib/appointment";
import { validateAppointment, type AppointmentState, type FieldErrors, type FieldName } from "@/lib/appointment-validation";
import styles from "./AppointmentForm.module.css";

type AppointmentFormProps = {
  variant?: FormVariant;
  /** Pre-selected "I am interested in" option (New Patients: "New Patient Exam & Cleaning") */
  defaultInterest?: (typeof interestOptions)[number]["value"];
  /** The page's privacy line, as worded in its content file */
  note: string;
  submitLabel: string;
};

/**
 * Appointment request form, shared by New Patients, Scheduling and Emergency
 * Scheduling. The wrapper carries `id="appointment-form"` for the hero buttons.
 *
 * Submitted with a transition rather than `<form action>`, so a validation error
 * keeps everything the visitor typed. Errors are announced, linked to their fields
 * and cleared as the field is edited. A successful request pushes a conversion
 * event to the dataLayer (Scheduling handoff: track submissions).
 */
export function AppointmentForm({ variant = "appointment", defaultInterest, note, submitLabel }: AppointmentFormProps) {
  const [state, setState] = useState<AppointmentState>({ status: "idle" });
  const [pending, startTransition] = useTransition();
  const [interest, setInterest] = useState<string>(defaultInterest ?? "");
  const hint = interestOptions.find((option) => option.value === interest)?.hint;
  const doneRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  // Move focus to the first error only when a submit returns, never while the visitor edits
  const focusAfterSubmit = useRef(false);
  const submitted = useRef(false);
  const errors = state.status === "invalid" ? state.errors : {};

  useEffect(() => {
    if (state.status === "sent") {
      doneRef.current?.focus();
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({
        event: variant === "emergency" ? "emergency_request" : "appointment_request",
        page_path: window.location.pathname,
      });
    }
    if (state.status === "invalid" && focusAfterSubmit.current) {
      focusAfterSubmit.current = false;
      // First invalid field in page order, not in the order the rules run
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
    }
  }, [state, variant]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitted.current = true;
    const data = new FormData(event.currentTarget);
    // Same rules as the server: show red messages at once, without a round trip
    const check = validateAppointment(variant, data).errors;
    if (Object.keys(check).length) {
      focusAfterSubmit.current = true;
      setState({ status: "invalid", errors: check });
      return;
    }
    startTransition(async () => {
      const result = await submitAppointment(variant, data);
      focusAfterSubmit.current = true;
      setState(result);
    });
  };

  // Leaving a field re-checks just that field (once it has a value, or after a first submit)
  const onBlur = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name as FieldName;
    if (!name || name === ("company" as FieldName) || (!target.value && !submitted.current)) return;
    const message = validateAppointment(variant, new FormData(event.currentTarget)).errors[name];
    const current: FieldErrors = state.status === "invalid" ? state.errors : {};
    if (message === current[name]) return;
    const next = { ...current };
    if (message) next[name] = message;
    else delete next[name];
    setState(Object.keys(next).length ? { status: "invalid", errors: next } : { status: "idle" });
  };

  // Clear a field's error once the visitor edits it
  const onInput = (event: FormEvent<HTMLFormElement>) => {
    const name = (event.target as HTMLInputElement).name as FieldName;
    if (state.status === "invalid" && state.errors[name]) {
      const rest = { ...state.errors };
      delete rest[name];
      setState({ status: "invalid", errors: rest });
    }
  };

  if (state.status === "sent") {
    return (
      <div id="appointment-form" className={styles.card}>
        <div ref={doneRef} className={styles.done} tabIndex={-1} role="status">
          <span className={styles.doneIcon} aria-hidden="true">
            <Icon name="check" size={28} />
          </span>
          <p className={styles.doneTitle}>Request sent</p>
          <p className={styles.doneText}>{formNotes.success}</p>
          <p className={styles.doneText}>
            Need us sooner? Call or text{" "}
            <a href={contactLinks.call} data-track="call_click">
              {practice.phone.display}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  const field = (name: FieldName) => ({
    name,
    id: `${variant}-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${variant}-${name}-error` : undefined,
  });

  const errorText = (name: FieldName) =>
    errors[name] ? (
      <p id={`${variant}-${name}-error`} className={styles.error}>
        <Icon name="alert" size={16} />
        {errors[name]}
      </p>
    ) : null;

  const label = (name: FieldName, text: string, required = false) => (
    <label htmlFor={`${variant}-${name}`} className={styles.label}>
      {text}
      {required ? (
        <span className={styles.required}>
          <span aria-hidden="true">*</span>
          <span className="visually-hidden"> (required)</span>
        </span>
      ) : null}
    </label>
  );

  return (
    <div id="appointment-form" className={styles.card}>
      <form ref={formRef} className={styles.form} onSubmit={onSubmit} onInput={onInput} onBlur={onBlur} noValidate>
        {variant === "emergency" ? (
          <div className={styles.grid}>
            <div className={`${styles.field} ${styles.wide}`}>
              {label("name", "Name", true)}
              <input {...field("name")} type="text" autoComplete="name" maxLength={fieldLimits.name} required className={styles.input} />
              {errorText("name")}
            </div>
            <div className={styles.field}>
              {label("phone", "Phone number", true)}
              <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" maxLength={fieldLimits.phone} required className={styles.input} />
              {errorText("phone")}
            </div>
            <div className={styles.field}>
              {label("email", "Email address", true)}
              <input {...field("email")} type="email" autoComplete="email" maxLength={fieldLimits.email} required className={styles.input} />
              {errorText("email")}
            </div>
            <div className={`${styles.field} ${styles.wide}`}>
              {label("emergency", "Please specify dental emergency", true)}
              <input
                {...field("emergency")}
                type="text"
                maxLength={fieldLimits.emergency}
                required
                placeholder="For example: pain, swelling, a broken tooth or an infection"
                className={styles.input}
              />
              {errorText("emergency")}
            </div>
          </div>
        ) : (
          <>
            <div className={styles.grid}>
              <div className={styles.field}>
                {label("firstName", "First name", true)}
                <input {...field("firstName")} type="text" autoComplete="given-name" maxLength={fieldLimits.name} required className={styles.input} />
                {errorText("firstName")}
              </div>
              <div className={styles.field}>
                {label("lastName", "Last name", true)}
                <input {...field("lastName")} type="text" autoComplete="family-name" maxLength={fieldLimits.name} required className={styles.input} />
                {errorText("lastName")}
              </div>
              <div className={styles.field}>
                {label("dob", "Date of birth", true)}
                <input {...field("dob")} type="date" autoComplete="bday" min="1900-01-01" required className={styles.input} />
                {errorText("dob")}
              </div>
              <div className={styles.field}>
                {label("phone", "Phone number", true)}
                <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" maxLength={fieldLimits.phone} required className={styles.input} />
                {errorText("phone")}
              </div>
              <div className={`${styles.field} ${styles.wide}`}>
                {label("email", "Email address", true)}
                <input {...field("email")} type="email" autoComplete="email" maxLength={fieldLimits.email} required className={styles.input} />
                {errorText("email")}
              </div>
            </div>

            <div className={`${styles.field} ${styles.wide}`}>
              {label("interest", "I am interested in")}
              <Select
                {...field("interest")}
                placeholder="Choose a visit type"
                options={interestOptions.map((option) => option.value)}
                defaultValue={defaultInterest}
                onChange={(value) => setInterest(value)}
              />
              {hint ? <p className={styles.hint}>{hint}</p> : null}
              {errorText("interest")}
            </div>
          </>
        )}

        <div className={styles.grid}>
          {variant === "appointment" ? (
            <div className={styles.field}>
              {label("time", "Best time")}
              <Select {...field("time")} placeholder="Choose a time" options={timeOptions} />
              {errorText("time")}
            </div>
          ) : null}
          <div className={`${styles.field} ${variant === "emergency" ? styles.wide : ""}`}>
            {label("day", "Preferred day")}
            <Select {...field("day")} placeholder="Choose a day" options={dayOptions} />
            {errorText("day")}
          </div>
        </div>

        {variant === "appointment" ? (
          <div className={styles.field}>
            {label("comments", "Comments or questions")}
            <textarea {...field("comments")} rows={4} maxLength={fieldLimits.comments} className={`${styles.input} ${styles.textarea}`} />
          </div>
        ) : null}

        {/* Honeypot: hidden from people and assistive tech; bots fill it */}
        <div className={styles.trap} aria-hidden="true">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {state.status === "error" ? (
          <p className={styles.alert} role="alert">
            <Icon name="alert" size={18} />
            <span>
              {state.message}{" "}
              <a href={contactLinks.call} data-track="call_click">
                Call {practice.phone.display}
              </a>
            </span>
          </p>
        ) : null}

        <div className={styles.footer}>
          <p className={styles.note}>
            <Icon name="lock" size={18} />
            <span>
              <em>{note}</em> <Link href={formNotes.privacy.href}>{formNotes.privacy.label}</Link>
            </span>
          </p>
          <button
            type="submit"
            className={`${buttonStyles.button} ${buttonStyles.primary} ${styles.submit}`}
            disabled={pending}
            aria-disabled={pending}
          >
            <Icon name={pending ? "clock" : "calendar"} className={buttonStyles.icon} />
            <span className={buttonStyles.label}>{pending ? "Sending…" : submitLabel}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

type SelectProps = {
  name: string;
  id: string;
  placeholder: string;
  options: readonly string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

/** Native <select> (keyboard and screen-reader friendly) styled to match the inputs */
function Select({ placeholder, options, defaultValue, onChange, ...rest }: SelectProps) {
  return (
    <span className={styles.selectWrap}>
      <select
        {...rest}
        defaultValue={defaultValue ?? ""}
        onChange={(event) => onChange?.(event.target.value)}
        className={`${styles.input} ${styles.select}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" size={18} className={styles.selectIcon} />
    </span>
  );
}
