import { homeDoctor } from "@/content/pages/home";
import { TextLink } from "@/components/ui/Button";
import { Ring, RING_ON_NAVY } from "@/components/ui/Ring";
import styles from "./DoctorIntro.module.css";

/**
 * No real portrait of Dr. Dudhat exists yet, and a stock face would misrepresent him,
 * so this section is typographic: bio on the left, an at-a-glance credentials panel
 * on the right. Add his photo here once the practice supplies one.
 */
export function DoctorIntro() {
  return (
    <section className={styles.section} aria-labelledby="doctor-title">
      <Ring className={styles.ring} strokeWidth={1.2} colors={RING_ON_NAVY} animate="scroll" />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`} data-reveal="">
            Your dentist
          </p>
          <h2 id="doctor-title" className={styles.title} data-reveal="">
            {homeDoctor.title}
          </h2>
          {homeDoctor.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? `lead ${styles.leadText}` : undefined} data-reveal="">
              {paragraph}
            </p>
          ))}
          <div data-reveal="">
            <TextLink href={homeDoctor.link.href} inverse>
              {homeDoctor.link.label}
            </TextLink>
          </div>
        </div>

        <div className={styles.panel} data-reveal="">
          <p className={styles.monogram} aria-hidden="true">
            KD
          </p>
          <dl className={styles.facts}>
            {homeDoctor.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
