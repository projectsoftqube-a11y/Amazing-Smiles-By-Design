import Link from "@/components/ui/SiteLink";
import { galleryCases, images } from "@/content/images";
import { galleryPhotos, galleryStart, galleryTreatments } from "@/content/pages/gallery";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./GallerySections.module.css";

/**
 * "Before & After Photos": the three cases from the current site, each shown once
 * with an accessible, keyboard-operable comparison slider and a visible label.
 * The "Individual results vary" line sits directly under the photos (Handoff).
 */
export function Photos() {
  return (
    <section className={styles.photos} aria-labelledby="photos-title">
      <div className="container">
        <div className={styles.headCenter}>
          <p className="eyebrow" data-reveal="">
            Real patient results
          </p>
          <h2 id="photos-title" data-reveal="">
            {galleryPhotos.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {galleryPhotos.intro}
          </p>
        </div>

        <ul role="list" className={styles.cases}>
          {galleryCases.map((item) => (
            <li key={item.label} className={styles.case} data-reveal="">
              <div className={styles.caseHead}>
                <span className={styles.caseLabel}>{item.label}</span>
                <span className={styles.caseHint} aria-hidden="true">
                  <Icon name="arrowRight" size={14} className={styles.flip} />
                  Drag
                  <Icon name="arrowRight" size={14} />
                </span>
              </div>
              <BeforeAfter
                before={item.before}
                after={item.after}
                ratio="25 / 13"
                sizes="(min-width: 1200px) 30vw, (min-width: 768px) 46vw, 100vw"
                label={item.label.toLowerCase()}
                className={styles.compare}
              />
            </li>
          ))}
        </ul>

        <p className={styles.disclaimer} data-reveal="">
          <em>{galleryPhotos.disclaimer}</em>
        </p>
      </div>
    </section>
  );
}

/** "Treatments Behind a Smile Makeover": the six treatments, each linked */
export function Treatments() {
  return (
    <section className={styles.treatments} aria-labelledby="treatments-title">
      <div className="container">
        <div className={styles.headCenter}>
          <p className="eyebrow" data-reveal="">
            Smile makeover
          </p>
          <h2 id="treatments-title" data-reveal="">
            {galleryTreatments.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {galleryTreatments.intro}
          </p>
        </div>

        <ul role="list" className={styles.treatmentGrid}>
          {galleryTreatments.items.map((item, index) => (
            <li key={item.href} className={styles.treatment} data-reveal="">
              <span className={styles.treatmentIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.treatmentIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <p className={styles.treatmentText}>
                <strong>
                  <Link href={item.href}>{item.name}</Link>:
                </strong>{" "}
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className={styles.center} data-reveal="">
          <TextLink href={galleryTreatments.link.href}>{galleryTreatments.link.label}</TextLink>
        </div>
      </div>
    </section>
  );
}

/** "Start Your Own Smile Makeover": Dr. Dudhat's portrait beside the copy */
export function StartMakeover() {
  const portrait = { ...images.doctorPortrait, alt: "Dr. Keyur Dudhat, DMD, dentist at Amazing Smiles By Design in Bensalem, PA" };

  return (
    <section className={styles.start} aria-labelledby="start-title">
      <div className="container">
        <div className={styles.startCard}>
          <div className={styles.startMedia} data-reveal="">
            <MediaFrame
              image={portrait}
              ratio="4 / 5"
              sizes="(min-width: 1200px) 26vw, (min-width: 768px) 40vw, 100vw"
              quality={85}
              className={styles.startFrame}
            />
          </div>
          <div className={styles.startCopy}>
            <p className="eyebrow" data-reveal="">
              Your plan
            </p>
            <h2 id="start-title" data-reveal="">
              {galleryStart.title}
            </h2>
            {galleryStart.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? styles.lead : styles.text} data-reveal="">
                {paragraph}
              </p>
            ))}
            <div className={styles.startLinks} data-reveal="">
              {galleryStart.links.map((link) => (
                <TextLink key={link.href} href={link.href}>
                  {link.label}
                </TextLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
