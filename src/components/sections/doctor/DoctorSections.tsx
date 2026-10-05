import Link from "@/components/ui/SiteLink";
import {
  doctorEducation,
  doctorFocus,
  doctorGivingBack,
  doctorGlance,
  doctorOutside,
  doctorTraining,
} from "@/content/pages/doctor";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./DoctorSections.module.css";

const HOBBY_ICON: Record<string, IconName> = {
  Traveling: "plane",
  Hiking: "mountain",
  "Scuba diving": "waves",
  Golfing: "flag",
};

/**
 * "Dr. Dudhat at a Glance": a real <dl> (Developer Handoff: AI tools and search
 * engines read these facts directly), laid out as a bento of fact tiles.
 */
export function Glance() {
  return (
    <section className={styles.glance} aria-labelledby="glance-title">
      <div className="container">
        <div className={styles.headCenter}>
          <p className="eyebrow" data-reveal="">
            At a glance
          </p>
          <h2 id="glance-title" data-reveal="">
            {doctorGlance.title}
          </h2>
        </div>
        <dl className={styles.facts}>
          {doctorGlance.facts.map((fact) => (
            <div key={fact.label} className={styles.fact} data-reveal="">
              <span className={styles.factIcon} aria-hidden="true">
                <Icon name={fact.icon as IconName} size={20} />
              </span>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** "Education & Background": the paragraph beside a decorative timeline of the same facts */
export function Education() {
  return (
    <section className={styles.education} aria-labelledby="education-title">
      <div className={`container ${styles.split}`}>
        <div className={styles.copy}>
          <p className="eyebrow" data-reveal="">
            Background
          </p>
          <h2 id="education-title" data-reveal="">
            {doctorEducation.title}
          </h2>
          <p className={styles.lead} data-reveal="">
            {doctorEducation.body}
          </p>
        </div>

        <ol className={styles.timeline} aria-hidden="true">
          {doctorEducation.steps.map((step, index) => (
            <li key={step.label} className={styles.step} data-reveal="">
              <span className={styles.stepIcon}>
                <Icon name={step.icon as IconName} size={20} />
              </span>
              <span className={styles.stepText}>
                <span className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.stepLabel}>{step.label}</span>
                <span className={styles.stepValue}>{step.value}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** "Clinical Focus: Implant & Cosmetic Dentistry": the two focus areas as cards */
export function Focus() {
  const { implants, cosmetic, also } = doctorFocus;

  return (
    <section className={styles.focus} aria-labelledby="focus-title">
      <div className="container">
        <div className={styles.headCenter}>
          <p className="eyebrow" data-reveal="">
            Clinical focus
          </p>
          <h2 id="focus-title" data-reveal="">
            {doctorFocus.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {doctorFocus.intro}
          </p>
        </div>

        <ul role="list" className={styles.focusCards}>
          <li className={`${styles.focusCard} ${styles.focusNavy}`} data-reveal="">
            <span className={styles.focusIcon} aria-hidden="true">
              <Icon name="tooth" size={28} />
            </span>
            <p className={styles.focusText}>
              <strong>{implants.name}:</strong> {implants.text}
            </p>
            <TextLink href={implants.link.href} inverse>
              {implants.link.label}
            </TextLink>
          </li>
          <li className={styles.focusCard} data-reveal="">
            <span className={styles.focusIcon} aria-hidden="true">
              <Icon name="smile" size={28} />
            </span>
            <p className={styles.focusText}>
              <strong>{cosmetic.name}:</strong> {cosmetic.lead}{" "}
              <Link href={cosmetic.treatments[0].href}>{cosmetic.treatments[0].label}</Link>,{" "}
              <Link href={cosmetic.treatments[1].href}>{cosmetic.treatments[1].label}</Link> and{" "}
              <Link href={cosmetic.treatments[2].href}>{cosmetic.treatments[2].label}</Link>.
            </p>
            <TextLink href={cosmetic.link.href}>{cosmetic.link.label}</TextLink>
          </li>
        </ul>

        <p className={styles.also} data-reveal="">
          <Icon name="check" size={18} />
          <span>
            {also.before} <Link href={also.general.href}>{also.general.label}</Link> {also.middle}{" "}
            <Link href={also.restorative.href}>{also.restorative.label}</Link> {also.after}
          </span>
        </p>
      </div>
    </section>
  );
}

/** Training, Giving Back and Outside the Office: three H2 sections as a bento */
export function Highlights() {
  return (
    <div className={styles.highlights}>
      <div className={`container ${styles.bento}`}>
        <section className={styles.training} aria-labelledby="training-title" data-reveal="">
          <div className={styles.trainingCopy}>
            <span className={styles.tileIcon} aria-hidden="true">
              <Icon name="sparkle" size={24} />
            </span>
            <h2 id="training-title" className={styles.tileTitle}>
              {doctorTraining.title}
            </h2>
            {doctorTraining.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? styles.trainingLead : styles.tileText}>
                {paragraph}
              </p>
            ))}
            <TextLink href={doctorTraining.link.href}>{doctorTraining.link.label}</TextLink>
          </div>

          {/* Decorative: the three systems the paragraph names */}
          <ul className={styles.systems} aria-hidden="true">
            {doctorTraining.systems.map((system, index) => (
              <li key={system.name} className={styles.system}>
                <span className={styles.systemIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.systemIcon}>
                  <Icon name={system.icon as IconName} size={22} />
                </span>
                <span className={styles.systemText}>
                  <span className={styles.systemName}>{system.name}</span>
                  <span className={styles.systemDetail}>{system.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${styles.tile} ${styles.tileGiving}`} aria-labelledby="giving-title" data-reveal="">
          <span className={styles.tileIcon} aria-hidden="true">
            <Icon name="heart" size={24} />
          </span>
          <h2 id="giving-title" className={styles.tileTitle}>
            {doctorGivingBack.title}
          </h2>
          <p className={styles.tileText}>{doctorGivingBack.body}</p>
        </section>

        <section className={`${styles.tile} ${styles.tileOutside}`} aria-labelledby="outside-title" data-reveal="">
          <span className={styles.tileIcon} aria-hidden="true">
            <Icon name="mountain" size={24} />
          </span>
          <h2 id="outside-title" className={styles.tileTitle}>
            {doctorOutside.title}
          </h2>
          <p className={styles.tileText}>{doctorOutside.body}</p>
          {/* Decorative: the hobbies named in the sentence above */}
          <ul className={styles.hobbies} aria-hidden="true">
            {doctorOutside.hobbies.map((hobby) => (
              <li key={hobby}>
                <Icon name={HOBBY_ICON[hobby]} size={16} />
                {hobby}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
