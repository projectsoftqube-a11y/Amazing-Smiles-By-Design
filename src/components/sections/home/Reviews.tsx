import type { CSSProperties } from "react";
import { homeGallery, homeReviews } from "@/content/pages/home";
import { patientReviews } from "@/content/pages/reviews";
import { contactLinks, googleRating } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { GalleryCompare } from "./GalleryCompare";
import styles from "./Reviews.module.css";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .replace(/[^A-Z]/g, "");

/** Five stars filled up to `value` (4.8 fills the fifth star to 80%); decorative */
function Stars({ value }: { value: number }) {
  return (
    <span className={styles.stars} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <span
          key={index}
          className={styles.star}
          style={{ "--fill": `${Math.round(Math.min(1, Math.max(0, value - index)) * 100)}%` } as CSSProperties}
        >
          <Icon name="star" size={16} fill="currentColor" className={styles.starBase} />
          <Icon name="star" size={16} fill="currentColor" className={styles.starFill} />
        </span>
      ))}
    </span>
  );
}

/**
 * Set up like the Hampton site's reviews (client edits, 16 Oct and 3 Nov 2026): the Google
 * rating badge under the title, a grid of review cards, and a "Read all" button, both linking
 * to the practice's Google listing (no attribution line: user, 3 Nov 2026). The cards are the
 * first six Google reviews from the list the Patient Reviews page shows in full. A card shows
 * stars only when its Google rating is set. No Review/AggregateRating markup (handoff).
 */
export function Reviews() {
  const ratingText = googleRating.rating.toFixed(1);

  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow" data-reveal="">
            Patient reviews
          </p>
          <h2 id="reviews-title" data-reveal="">
            {homeReviews.title}
          </h2>
          <div data-reveal="">
            <a
              href={contactLinks.map}
              target="_blank"
              rel="noopener"
              className={styles.rating}
              aria-label={`Rated ${ratingText} out of 5 from ${googleRating.count} Google reviews (opens Google in a new tab)`}
            >
              <span className={styles.ratingValue}>{ratingText}</span>
              <Stars value={googleRating.rating} />
              <span className={styles.ratingRule} aria-hidden="true" />
              <span className={styles.ratingCount}>{googleRating.count} Google reviews</span>
              <Icon name="arrowUpRight" size={16} className={styles.ratingArrow} />
            </a>
          </div>
        </div>

        <ul role="list" className={styles.grid}>
          {patientReviews.slice(0, 6).map((review) => (
            <li key={review.name} className={styles.card} data-reveal="">
              <span className={styles.cardTop}>
                {review.rating ? (
                  <>
                    <Stars value={review.rating} />
                    <span className="visually-hidden">Rated {review.rating} out of 5.</span>
                  </>
                ) : null}
                <span className={styles.glyph} aria-hidden="true">
                  &ldquo;
                </span>
              </span>
              <blockquote className={styles.quote}>
                <p>{review.quote}</p>
              </blockquote>
              <p className={styles.who}>
                <span className={styles.avatar} aria-hidden="true">
                  {initials(review.name)}
                </span>
                <span>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.date}>{review.date}</span>
                </span>
              </p>
            </li>
          ))}
        </ul>

        <div className={styles.foot} data-reveal="">
          <Button href={contactLinks.map} icon="arrowUpRight">
            Read all {googleRating.count} reviews
          </Button>
          <TextLink href={homeReviews.link.href}>{homeReviews.link.label}</TextLink>
        </div>

        {/* Smile gallery teaser */}
        <section className={styles.gallery} aria-labelledby="gallery-title">
          <div className={styles.galleryCopy}>
            <p className="eyebrow" data-reveal="">
              Smile gallery
            </p>
            <h2 id="gallery-title" data-reveal="">
              {homeGallery.title}
            </h2>
            <p className={styles.galleryBody} data-reveal="">
              {homeGallery.body}
            </p>
            <div data-reveal="">
              <Button href={homeGallery.link.href}>{homeGallery.link.label}</Button>
            </div>
          </div>

          <GalleryCompare />
        </section>
      </div>
    </section>
  );
}
