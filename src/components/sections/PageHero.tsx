import type { ReactNode } from "react";
import type { SiteImage } from "@/content/images";
import { Accent, RiseWords } from "@/components/ui/Accent";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  /** id of the H1, used by the section's aria-labelledby */
  id: string;
  breadcrumb: { name: string; path: string }[];
  eyebrow: string;
  title: { lead: string; accent: string };
  intro: string;
  /** Buttons under the intro */
  actions: ReactNode;
  image: SiteImage;
  /** Small floating cards over the photo frame (decorative summaries of page facts) */
  cards?: ReactNode;
};

/**
 * Hero for inner pages: light ice background, breadcrumb, H1 with the italic accent
 * and smile line, intro and actions on the left; the framed photo on the right.
 * Entrance motion is CSS only (it runs at first paint and never delays the LCP):
 * the headline rises word by word, then the copy, actions and photo fade up.
 */
export function PageHero({ id, breadcrumb, eyebrow, title, intro, actions, image, cards }: PageHeroProps) {
  const leadWords = title.lead.split(" ").length;

  return (
    <section className={styles.hero} aria-labelledby={id}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Breadcrumb items={breadcrumb} className={styles.breadcrumb} />
          <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
          <h1 id={id} className={styles.title}>
            <RiseWords text={title.lead} />{" "}
            <Accent smile>
              <RiseWords text={title.accent} start={leadWords} />
            </Accent>
          </h1>
          <p className={styles.intro}>{intro}</p>
          <div className={styles.actions}>{actions}</div>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <MediaFrame
              image={image}
              ratio="5 / 4"
              // Wider than the frame: object-fit cover crops a landscape photo into the 5:4
              // frame, so it renders ~1.2x the frame width and needs the extra pixels.
              sizes="(min-width: 1200px) 52vw, (min-width: 768px) 96vw, 120vw"
              priority
              reveal="load"
              quality={85}
              className={styles.media}
            />
          </div>
          {cards}
        </div>
      </div>
    </section>
  );
}

/** A floating info card for the hero photo: icon chip + one or two short lines */
export function HeroCard({
  icon,
  title,
  text,
  position,
}: {
  icon: ReactNode;
  title: string;
  text?: string;
  position: "top" | "bottom";
}) {
  return (
    <div className={`${styles.card} ${position === "top" ? styles.cardTop : styles.cardBottom}`}>
      <span className={styles.cardIcon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.cardText}>
        <span className={styles.cardTitle}>{title}</span>
        {text ? <span className={styles.cardSub}>{text}</span> : null}
      </span>
    </div>
  );
}
