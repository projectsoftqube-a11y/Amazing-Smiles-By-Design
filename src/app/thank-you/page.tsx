import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { contactLinks, practice } from "@/content/site";
import { ThankYouEvent } from "./ThankYouEvent";
import styles from "./thank-you.module.css";

/**
 * Shown after an appointment request is sent. Wording approved as-is in "Developer Questions -
 * Answered" (section C). Not a search landing page: noindex, and out of both sitemaps.
 */
export const metadata: Metadata = {
  title: { absolute: `Thank You | ${practice.name}` },
  description:
    "Thanks for reaching out to Amazing Smiles By Design. Our team will get back to you during office hours to confirm your appointment.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className={styles.page} aria-labelledby="thank-you-title">
      <ThankYouEvent />
      <div className={`container ${styles.inner}`}>
        <div className={styles.hero}>
          <span className={styles.badge} aria-hidden="true">
            <svg viewBox="0 0 52 52" width="52" height="52" focusable="false">
              <path className={styles.tick} d="M14 27l8 8 16-17" fill="none" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h1 id="thank-you-title" className={styles.title}>
            Thank You — <em>We&apos;ve Got Your Request</em>
          </h1>
          <p className={styles.lead}>
            Thanks for reaching out to Amazing Smiles By Design. Our team will get back to you during office hours to
            confirm your appointment.
          </p>
          <p className={styles.sooner}>
            <Icon name="phone" size={20} />
            <span>
              Need to be seen sooner, or have a dental emergency? Call or text us at{" "}
              <a href={contactLinks.call} data-track="call_click">
                {practice.phone.display}
              </a>
              .
            </span>
          </p>
          <div className={styles.actions}>
            <Button href="/" icon="home">
              Back to Home
            </Button>
          </div>
          {/* Each part wraps as a whole, so "Open Monday to Thursday" never splits */}
          <p className={styles.nap}>
            <span>Amazing Smiles By Design</span> · <span>3101 Bristol Road, Suite 1, Bensalem, PA 19020</span> ·{" "}
            <span>Open Monday to Thursday</span>
          </p>
        </div>
      </div>
    </section>
  );
}
