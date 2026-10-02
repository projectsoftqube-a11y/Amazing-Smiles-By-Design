import Image from "next/image";
import { images } from "@/content/images";
import { homeDoctor } from "@/content/pages/home";
import { practice } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./DoctorIntro.module.css";

const FACT_ICON: Record<string, IconName> = {
  Degree: "cap",
  Undergraduate: "book",
  "Special focus": "tooth",
  Community: "heart",
  Hometown: "pin",
};

/**
 * Profile card: Dr. Dudhat's portrait (supplied by the practice) overlapping the navy
 * cover band, his name and role, then at-a-glance facts taken from his bio.
 */
export function DoctorIntro() {
  const { dentist } = practice;
  const portrait = images.doctorPortrait;
  // "Meet" on the first line, the doctor's full name and degree on the second
  const [titleLead, ...nameParts] = homeDoctor.title.split(" ");
  const titleName = nameParts.join(" ");

  return (
    <section className={styles.section} aria-labelledby="doctor-title">
      <div className={`container ${styles.grid}`}>
        <aside className={styles.card} aria-label={`About ${dentist.displayName}`} data-reveal="">
          <div className={styles.cover} aria-hidden="true">
            <span className={styles.coverTag}>
              <Icon name="tooth" size={14} />
              {practice.address.city}, {practice.address.region}
            </span>
          </div>
          <div className={styles.profile}>
            <div className={styles.portrait}>
              <Image
                src={portrait.src!}
                alt={portrait.alt}
                fill
                sizes="(min-width: 576px) 176px, 144px"
                quality={85}
                style={{ objectFit: "cover", objectPosition: portrait.position }}
              />
            </div>
            <div className={styles.profileText}>
              <p className={styles.cardName}>
                {dentist.displayName}, {dentist.degree}
              </p>
              <p className={styles.cardRole}>Dentist · {practice.name}</p>
            </div>
          </div>
          <dl className={styles.facts}>
            {homeDoctor.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <span className={styles.factIcon} aria-hidden="true">
                  <Icon name={FACT_ICON[fact.label] ?? "check"} size={18} />
                </span>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className={styles.copy}>
          <p className="eyebrow" data-reveal="">
            Meet your dentist
          </p>
          <h2 id="doctor-title" data-reveal="">
            {titleLead} <br />
            <span className={styles.titleName}>{titleName}</span>
          </h2>
          {homeDoctor.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? styles.lead : styles.text} data-reveal="">
              {paragraph}
            </p>
          ))}
          <div data-reveal="">
            <Button href={homeDoctor.link.href} variant="secondary">
              {homeDoctor.link.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
