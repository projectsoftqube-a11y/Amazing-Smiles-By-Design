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
  /** Styled line under the H1 (a paragraph, not a heading) */
  subtitle?: string;
  intro: string;
  /** Buttons under the intro */
  actions: ReactNode;
  /** Short line under the buttons (e.g. the emergency page's 911 safety line) */
  note?: ReactNode;
  /** Framed photo on the right; omit it and pass `aside` instead for a card */
  image?: SiteImage;
  /** CSS aspect ratio of the photo frame, e.g. "4 / 5" for a portrait */
  ratio?: string;
  /** Right-hand column content when there is no photo (e.g. the contact card) */
  aside?: ReactNode;
  /** Small floating cards over the photo frame (decorative summaries of page facts) */
  cards?: ReactNode;
};

/**
 * Hero for inner pages: light ice background, breadcrumb, H1 with the italic accent
 * and smile line, intro and actions on the left; the framed photo on the right.
 * Entrance motion is CSS only (it runs at first paint and never delays the LCP):
 * the headline rises word by word, then the copy, actions and photo fade up.
 */
export function PageHero({
  id,
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  intro,
  actions,
  note,
  image,
  ratio = "5 / 4",
  aside,
  cards,
}: PageHeroProps) {
  const portrait = ratio === "4 / 5";
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
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
          <p className={styles.intro}>{intro}</p>
          <div className={styles.actions}>{actions}</div>
          {note ? <div className={styles.note}>{note}</div> : null}
        </div>

        <div className={`${styles.visual} ${portrait ? styles.visualPortrait : ""}`}>
          {image ? (
            <div className={styles.frame}>
              <MediaFrame
                image={image}
                ratio={ratio}
                // Wider than the frame: object-fit cover crops a landscape photo into the 5:4
                // frame, so it renders ~1.2x the frame width and needs the extra pixels.
                sizes={portrait ? "(min-width: 1200px) 30vw, (min-width: 768px) 60vw, 100vw" : "(min-width: 1200px) 52vw, (min-width: 768px) 96vw, 120vw"}
                priority
                reveal="load"
                quality={85}
                className={styles.media}
              />
            </div>
          ) : (
            aside
          )}
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
