import { homeEmergency } from "@/content/pages/home";
import { contactLinks, practice } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./Emergency.module.css";

/**
 * Visual shorthand for the emergencies named in the body copy. Decorative
 * (aria-hidden): the paragraph above already says the same thing in full.
 */
const EMERGENCIES: { label: string; icon: IconName }[] = [
  { label: "Toothache", icon: "tooth" },
  { label: "Broken tooth", icon: "tooth" },
  { label: "Knocked-out tooth", icon: "tooth" },
  { label: "Swelling", icon: "alert" },
  { label: "Lost filling or crown", icon: "tooth" },
];

export function Emergency() {
  return (
    <section className={styles.section} aria-labelledby="emergency-title">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.copy}>
            <p className="eyebrow" data-reveal="">
              Urgent care
            </p>
            <h2 id="emergency-title" data-reveal="">
              {homeEmergency.title}
            </h2>
            <p className={styles.body} data-reveal="">
              {homeEmergency.body.before}{" "}
              <a href={contactLinks.call} className={styles.inlinePhone} data-track="emergency_click">
                {practice.phone.display}
              </a>{" "}
              {homeEmergency.body.after}
            </p>
            <ul role="list" className={styles.chips} aria-hidden="true" data-reveal="">
              {EMERGENCIES.map((item) => (
                <li key={item.label}>
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Call card */}
          <div className={styles.call} data-reveal="">
            <span className={styles.live} aria-hidden="true">
              <span className={styles.liveDot} />
              Call or text
            </span>
            <a href={contactLinks.call} className={styles.phone} data-track="emergency_click">
              <span className={styles.phoneIcon}>
                <Icon name="phone" size={28} />
              </span>
              <span className={styles.phoneNumber}>{practice.phone.display}</span>
            </a>
            <div className={styles.callActions}>
              <Button href={homeEmergency.cta.href} variant="inverse" icon="calendar" track="emergency_click">
                {homeEmergency.cta.label}
              </Button>
              <TextLink href={homeEmergency.link.href} inverse>
                {homeEmergency.link.label}
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
