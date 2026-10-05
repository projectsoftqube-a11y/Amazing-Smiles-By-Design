import type { CSSProperties } from "react";
import Link from "@/components/ui/SiteLink";
import { patientReviews, reviewsListTitle, reviewsNext, reviewsShare, reviewsThemes } from "@/content/pages/reviews";
import { contactLinks, practice } from "@/content/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./ReviewsSections.module.css";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .replace(/[^A-Z]/g, "");

/**
 * "What Patients Mention Most": the content file's list, each item with its
 * count as text ("4 of 6 reviews") plus a decorative bar. Counts must match the
 * reviews below (Developer Handoff).
 */
export function Themes() {
  return (
    <section className={styles.themes} aria-labelledby="themes-title">
      <div className="container">
        <div className={styles.headCenter}>
          <p className="eyebrow" data-reveal="">
            In their words
          </p>
          <h2 id="themes-title" data-reveal="">
            {reviewsThemes.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {reviewsThemes.intro}
          </p>
        </div>

        <ul role="list" className={styles.themeList}>
          {reviewsThemes.items.map((item) => (
            <li
              key={item.label}
              className={styles.theme}
              style={{ "--share": item.count / reviewsThemes.total } as CSSProperties}
              data-reveal=""
            >
              <span className={styles.themeIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <span className={styles.themeCount} aria-hidden="true">
                <span data-count={item.count}>{item.count}</span>
                <span className={styles.themeOf}>/{reviewsThemes.total}</span>
              </span>
              <p className={styles.themeText}>
                <strong>{item.label}:</strong>{" "}
                {item.count === 1 ? "1 review" : `${item.count} of ${reviewsThemes.total} reviews`}
              </p>
              <span className={styles.themeBar} aria-hidden="true">
                <span />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * "What Our Patients Say": all six reviews, each once and in full, as plain HTML
 * (blockquote + cite). No stars and no Review markup (Developer Handoff).
 */
export function ReviewWall() {
  return (
    <section className={styles.wall} aria-labelledby="wall-title">
      <div className="container">
        <div className={styles.headCenter}>
          <p className="eyebrow" data-reveal="">
            Patient reviews
          </p>
          <h2 id="wall-title" data-reveal="">
            {reviewsListTitle}
          </h2>
        </div>

        <ul role="list" className={styles.reviews}>
          {patientReviews.map((review, index) => (
            <li key={review.name} className={`${styles.review} ${index === 0 ? styles.reviewFeatured : ""}`} data-reveal="">
              <figure>
                <span className={styles.glyph} aria-hidden="true">
                  “
                </span>
                <blockquote className={styles.quote}>
                  <p>{review.quote}</p>
                </blockquote>
                <figcaption className={styles.caption}>
                  <span className={styles.avatar} aria-hidden="true">
                    {initials(review.name)}
                  </span>
                  <span className={styles.who}>
                    <cite className={styles.name}>{review.name}</cite>
                    <span className={styles.date}>{review.date}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** "Share Your Experience" and "Read the Reviews, Then Meet Us", side by side */
export function ShareAndNext() {
  return (
    <div className={styles.next}>
      <div className={`container ${styles.nextGrid}`}>
        <section className={styles.share} aria-labelledby="share-title" data-reveal="">
          <span className={styles.shareIcon} aria-hidden="true">
            <Icon name="message" size={24} />
          </span>
          <h2 id="share-title" className={styles.shareTitle}>
            {reviewsShare.title}
          </h2>
          <p className={styles.shareText}>
            {reviewsShare.before}{" "}
            <a href={contactLinks.call} data-track="call_click">
              {practice.phone.display}
            </a>
            .
          </p>

          <ul role="list" className={styles.shareLinks}>
            <li>
              <a href={contactLinks.call} className={styles.shareLink} data-track="call_click">
                <span className={styles.shareLinkIcon} aria-hidden="true">
                  <Icon name="phone" size={18} />
                </span>
                <span className={styles.shareLinkText}>
                  <span className={styles.shareLinkLabel}>Call us</span>
                  <span className={styles.shareLinkValue}>{practice.phone.display}</span>
                </span>
                <Icon name="arrowRight" size={16} className={styles.shareArrow} />
              </a>
            </li>
            <li>
              <a href={contactLinks.text} className={styles.shareLink} data-track="text_click">
                <span className={styles.shareLinkIcon} aria-hidden="true">
                  <Icon name="message" size={18} />
                </span>
                <span className={styles.shareLinkText}>
                  <span className={styles.shareLinkLabel}>Send a text</span>
                  <span className={styles.shareLinkValue}>{practice.phone.display}</span>
                </span>
                <Icon name="arrowRight" size={16} className={styles.shareArrow} />
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.meet} aria-labelledby="meet-title" data-reveal="">
          <h2 id="meet-title" className={styles.meetTitle}>
            {reviewsNext.title}
          </h2>
          <p className={styles.meetIntro}>{reviewsNext.intro}</p>
          <ul role="list" className={styles.meetLinks}>
            {reviewsNext.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.meetLink}>
                  <span className={styles.meetIcon} aria-hidden="true">
                    <Icon name={link.icon as IconName} size={18} />
                  </span>
                  <span className={styles.meetLabel}>{link.label}</span>
                  <Icon name="arrowRight" size={16} className={styles.meetArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
