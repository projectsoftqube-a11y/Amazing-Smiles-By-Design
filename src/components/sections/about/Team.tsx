import { aboutTeam } from "@/content/pages/about";
import { TextLink } from "@/components/ui/Button";
import styles from "./Team.module.css";

/**
 * "Our Bensalem Dental Team": copy beside one patient's words. The excerpt is plain
 * text (a <blockquote> with a <figcaption>), with no Review markup, per the
 * Developer Handoff. No star rating: unverifiable ratings are not shown (reviews handoff).
 */
export function Team() {
  const { quote } = aboutTeam;

  return (
    <section className={styles.section} aria-labelledby="team-title">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.copy}>
            <p className="eyebrow" data-reveal="">
              Our team
            </p>
            <h2 id="team-title" data-reveal="">
              {aboutTeam.title}
            </h2>
            <p className={styles.body} data-reveal="">
              {aboutTeam.body}
            </p>
            <div data-reveal="">
              <TextLink href={aboutTeam.link.href}>{aboutTeam.link.label}</TextLink>
            </div>
          </div>

          <figure className={styles.quoteCard} data-reveal="">
            <span className={styles.glyph} aria-hidden="true">
              “
            </span>
            <blockquote className={styles.quote}>
              <p>{quote.text}</p>
            </blockquote>
            <figcaption className={styles.caption}>
              <span className={styles.name}>{quote.name}</span>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.date}>{quote.date}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
