import { homeEmergency } from "@/content/pages/home";
import { contactLinks, practice } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./Emergency.module.css";

export function Emergency() {
  return (
    <section className={styles.section} aria-labelledby="emergency-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`} data-reveal="">
            <Icon name="alert" size={16} />
            Urgent care
          </p>
          <h2 id="emergency-title" className={styles.title} data-reveal="">
            {homeEmergency.title}
          </h2>
          <p className={styles.body} data-reveal="">
            {homeEmergency.body.before}{" "}
            <a href={contactLinks.call} className={styles.inlinePhone} data-track="emergency_click">
              {practice.phone.display}
            </a>{" "}
            {homeEmergency.body.after}
          </p>
        </div>

        <div className={styles.contact} data-reveal="">
          <a href={contactLinks.call} className={styles.phone} data-track="emergency_click">
            <span className={styles.phoneLabel}>Call or text</span>
            <span className={styles.phoneNumber}>{practice.phone.display}</span>
          </a>
          <div className={styles.actions}>
            <Button href={homeEmergency.cta.href} variant="inverse" icon="calendar" track="emergency_click">
              {homeEmergency.cta.label}
            </Button>
            <Button href={contactLinks.text} variant="inverse-outline" icon="message" track="text_click">
              Send a text
            </Button>
          </div>
          <TextLink href={homeEmergency.link.href} inverse>
            {homeEmergency.link.label}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
