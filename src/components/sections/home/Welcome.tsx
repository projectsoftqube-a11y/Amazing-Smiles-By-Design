import Link from "@/components/ui/SiteLink";
import { homeCare, homeHero } from "@/content/pages/home";
import { images } from "@/content/images";
import { contactLinks, hours, insuranceCarriers } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./Welcome.module.css";

/**
 * Welcome + Our approach, merged. The hero's full intro paragraph (the practice's
 * entity definition, kept verbatim) is the lead here, followed by the "Gentle,
 * Personal Dental Care" copy. Heading outline is unchanged: this section's H2.
 */
export function Welcome() {
  const [familyCare, planned] = homeCare.paragraphs;

  return (
    <section className={styles.section} aria-labelledby="care-title">
      <div className={`container ${styles.grid}`}>
        {/* Photo composition */}
        <div className={styles.visual}>
          {/* White frame: 10px padding, border and shadow, same asymmetric corners as the photo */}
          <div className={styles.frame} data-reveal="">
            <MediaFrame
              image={images.homeCare}
              ratio="4 / 5"
              sizes="(min-width: 1100px) 44vw, (min-width: 768px) 60vw, 100vw"
              quality={85}
              className={styles.media}
            />
          </div>
          {/* Opening days: a mini week strip built from the real hours in site.ts */}
          <div className={styles.hoursCard} data-reveal="">
            <div className={styles.cardHead}>
              <span className={styles.cardIcon}>
                <Icon name="clock" size={20} />
              </span>
              <span className={styles.cardTitle}>Open Monday to Thursday</span>
            </div>
            <ol role="list" className={styles.week} aria-label="Days the office is open">
              {hours.map((day) => (
                <li key={day.day} data-open={day.opens ? "" : undefined}>
                  <abbr title={day.opens ? `${day.day}: open` : `${day.day}: closed`}>{day.day[0]}</abbr>
                </li>
              ))}
            </ol>
          </div>

          {/* Insurance: three carriers named in the content, plus the count of the rest */}
          <div className={styles.ppoCard} data-reveal="">
            <div className={styles.cardHead}>
              <span className={`${styles.cardIcon} ${styles.cardIconNavy}`}>
                <Icon name="shield" size={20} />
              </span>
              <span className={styles.cardTitle}>PPO insurance accepted</span>
            </div>
            <ul role="list" className={styles.carriers}>
              {insuranceCarriers.slice(0, 3).map((carrier) => (
                <li key={carrier}>{carrier}</li>
              ))}
              <li className={styles.more}>+{insuranceCarriers.length - 3}</li>
            </ul>
          </div>
        </div>

        {/* Copy */}
        <div className={styles.copy}>
          <p className="eyebrow" data-reveal="">
            Welcome
          </p>
          <h2 id="care-title" data-reveal="">
            {homeCare.title}
          </h2>
          <p className={styles.lead} data-reveal="">
            {homeHero.intro}
          </p>

          <div className={styles.note} data-reveal="">
            <span className={styles.noteIcon} aria-hidden="true">
              <Icon name="family" size={22} />
            </span>
            <p>{familyCare}</p>
          </div>

          <p className={styles.text} data-reveal="">
            {planned}
          </p>

          <div className={styles.actions} data-reveal="">
            <Button href={homeCare.cta.href}>{homeCare.cta.label}</Button>
            <Link href={homeHero.newPatientLink.href} className={styles.pill}>
              <span className={styles.pillIcon}>
                <Icon name="arrowRight" size={16} />
              </span>
              {homeHero.newPatientLink.label}
            </Link>
            <a href={contactLinks.text} className={styles.pill} data-track="text_click">
              <span className={styles.pillIcon}>
                <Icon name="message" size={16} />
              </span>
              Send a text
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
