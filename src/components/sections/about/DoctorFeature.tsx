import { aboutDoctor } from "@/content/pages/about";
import { homeDoctor } from "@/content/pages/home";
import { images } from "@/content/images";
import { practice } from "@/content/site";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./DoctorFeature.module.css";

/** Credential tiles: three of the bio facts shared with the home page */
const CREDENTIALS: { label: string; icon: IconName }[] = [
  { label: "Degree", icon: "cap" },
  { label: "Undergraduate", icon: "book" },
  { label: "Special focus", icon: "tooth" },
];

export function DoctorFeature() {
  const { dentist } = practice;
  // "Meet" on the first line, the doctor's full name and degree on the second (as on Home)
  const [titleLead, ...nameParts] = aboutDoctor.title.split(" ");
  const portrait = { ...images.doctorPortrait, alt: aboutDoctor.portraitAlt };
  const credentials = CREDENTIALS.map((credential) => ({
    ...credential,
    value: homeDoctor.facts.find((fact) => fact.label === credential.label)?.value ?? "",
  }));

  return (
    <section className={styles.section} aria-labelledby="about-doctor-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <div className={styles.frame} data-reveal="">
            <MediaFrame
              image={portrait}
              ratio="4 / 5"
              sizes="(min-width: 1200px) 34vw, (min-width: 768px) 60vw, 100vw"
              quality={85}
              className={styles.media}
            />
          </div>
          <div className={styles.badge} data-reveal="">
            <span className={styles.badgeIcon} aria-hidden="true">
              <Icon name="cap" size={20} />
            </span>
            <span className={styles.badgeText}>
              <span className={styles.badgeTitle}>
                {dentist.displayName}, {dentist.degree}
              </span>
              <span className={styles.badgeSub}>{dentist.school}</span>
            </span>
          </div>
        </div>

        <div className={styles.copy}>
          <p className="eyebrow" data-reveal="">
            Meet your dentist
          </p>
          <h2 id="about-doctor-title" data-reveal="">
            {titleLead} <br />
            <span className={styles.titleName}>{nameParts.join(" ")}</span>
          </h2>
          {aboutDoctor.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? styles.lead : styles.text} data-reveal="">
              {paragraph}
            </p>
          ))}

          <dl className={styles.credentials}>
            {credentials.map((credential) => (
              <div key={credential.label} className={styles.credential} data-reveal="">
                <span className={styles.credentialIcon} aria-hidden="true">
                  <Icon name={credential.icon} size={18} />
                </span>
                <dt>{credential.label}</dt>
                <dd>{credential.value}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal="">
            <TextLink href={aboutDoctor.link.href}>{aboutDoctor.link.label}</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
