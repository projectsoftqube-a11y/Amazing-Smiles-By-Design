import type { Metadata } from "next";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { formNotes } from "@/content/appointment-form";
import { contactLinks, hoursTable, practice } from "@/content/site";
import styles from "./thank-you.module.css";

/** Shown after an appointment request is sent. Not a search landing page: noindex, and out of both sitemaps. */
export const metadata: Metadata = {
  title: { absolute: `Thank You | ${practice.name}` },
  description: formNotes.success,
  robots: { index: false, follow: true },
};

type Props = { searchParams: Promise<{ type?: string }> };

const NEXT: { icon: IconName; title: string; text: string }[] = [
  { icon: "clipboard", title: "We review your request", text: "Your details go straight to our front desk team." },
  { icon: "phone", title: "We confirm your time", text: "Our scheduling coordinator will contact you to confirm your appointment." },
  { icon: "pin", title: "We see you in Bensalem", text: `${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}` },
];

const LINKS = [
  { label: "What to expect as a new patient", href: "/patient-information/new-patients/", icon: "family" as IconName },
  { label: "Insurance & payment options", href: "/patient-information/insurance-payment-options/", icon: "shield" as IconName },
  { label: "Specials & membership plans", href: "/specials/", icon: "tag" as IconName },
];

export default async function ThankYouPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const emergency = type === "emergency";

  return (
    <section className={styles.page} aria-labelledby="thank-you-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.hero}>
          <span className={styles.badge} aria-hidden="true">
            <svg viewBox="0 0 52 52" width="52" height="52" focusable="false">
              <path className={styles.tick} d="M14 27l8 8 16-17" fill="none" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="eyebrow">{emergency ? "Emergency request received" : "Request received"}</p>
          <h1 id="thank-you-title" className={styles.title}>
            We&apos;ve got <em>your request</em>
          </h1>
          <p className={styles.lead}>{formNotes.success}</p>

          {emergency ? (
            <p className={styles.safety}>
              <Icon name="alert" size={20} />
              <span>
                If you have severe facial swelling, trouble breathing or swallowing, or bleeding that won&apos;t stop,
                call 911 or go to the nearest emergency room.
              </span>
            </p>
          ) : null}

          <div className={styles.actions}>
            <Button href={contactLinks.call} icon="phone" track={emergency ? "emergency_click" : "call_click"}>
              {/* Phones keep the button on one line: just "Call (215) 639-5331" */}
              <span className={styles.sooner}>Need us sooner? </span>Call {practice.phone.display}
            </Button>
            <Button href={contactLinks.text} variant="secondary" icon="message" track="call_click">
              Text us
            </Button>
          </div>
        </div>

        <ol className={styles.steps} aria-label="What happens next">
          {NEXT.map((step) => (
            <li key={step.title}>
              <span className={styles.stepIcon} aria-hidden="true">
                <Icon name={step.icon} size={20} />
              </span>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>

        <div className={styles.extras}>
          <div className={styles.hours}>
            <p className={styles.label}>
              <Icon name="clock" size={16} />
              Office hours
            </p>
            <dl>
              {hoursTable.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <TextLink href={contactLinks.directions}>Get directions</TextLink>
          </div>
          <div className={styles.more}>
            <p className={styles.label}>
              <Icon name="book" size={16} />
              While you wait
            </p>
            <ul role="list">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span className={styles.moreIcon} aria-hidden="true">
                      <Icon name={link.icon} size={18} />
                    </span>
                    <span>{link.label}</span>
                    <Icon name="arrowRight" size={16} />
                  </a>
                </li>
              ))}
            </ul>
            <TextLink href="/">Back to the home page</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
