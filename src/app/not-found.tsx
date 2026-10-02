import type { Metadata } from "next";
import { appointmentHref } from "@/content/navigation";
import { contactLinks, practice } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${practice.name}` },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">Error 404</p>
        <h1>We couldn’t find that page</h1>
        <p className="lead">
          The page may have moved. You can head back to the home page, or call or text us at {practice.phone.display}.
        </p>
        <div className={styles.actions}>
          <Button href="/">Back to the home page</Button>
          <Button href={appointmentHref} variant="secondary">
            Request an Appointment
          </Button>
        </div>
        <TextLink href={contactLinks.call} track="call_click">
          Call {practice.phone.display}
        </TextLink>
      </div>
    </section>
  );
}
