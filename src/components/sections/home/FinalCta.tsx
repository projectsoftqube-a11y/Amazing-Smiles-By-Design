import { homeFinalCta, homeHero } from "@/content/pages/home";
import { contactLinks, practice } from "@/content/site";
import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Ring, RING_ON_NAVY } from "@/components/ui/Ring";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="book-title">
      <Ring className={styles.ring} strokeWidth={1.2} colors={RING_ON_NAVY} animate="scroll" />
      <div className={`container ${styles.inner}`}>
        <h2 id="book-title" className={styles.title} data-reveal="">
          {homeFinalCta.title.lead} <Accent>{homeFinalCta.title.accent}</Accent>
        </h2>
        <p className={styles.body} data-reveal="">
          {homeFinalCta.body}
        </p>
        <div className={styles.actions} data-reveal="">
          <Button href={contactLinks.call} variant="inverse" icon="phone" track="call_click">
            Call or Text {practice.phone.display}
          </Button>
          <Button
            href={homeHero.secondaryCta.href}
            variant="inverse-outline"
            icon="calendar"
            track="appointment_click"
          >
            {homeHero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
