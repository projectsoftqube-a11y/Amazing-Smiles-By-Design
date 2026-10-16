import { homeGallery, homeReviews } from "@/content/pages/home";
import { patientReviews } from "@/content/pages/reviews";
import { Button } from "@/components/ui/Button";
import { GalleryCompare } from "./GalleryCompare";
import styles from "./Reviews.module.css";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .replace(/[^A-Z]/g, "");

/**
 * Several reviews at once in a grid of cards (client edits, 16 Oct 2026: one review at a
 * time took too much space; set it up like the Hampton site), from the same list as the
 * Patient Reviews page, so a review removed there disappears here too. The sixth tile links
 * to that page. No star ratings, Google rating badge or Review/AggregateRating markup until
 * the practice's verified Google rating and review link are supplied (reviews handoff).
 */
export function Reviews() {
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
        </div>

        <ul role="list" className={styles.grid}>
          {patientReviews.map((review) => (
            <li key={review.name} className={styles.card} data-reveal="">
              <span className={styles.glyph} aria-hidden="true">
                &ldquo;
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
          <li className={styles.more} data-reveal="">
            <p className={styles.moreTitle}>Hear from more of our patients</p>
            <Button href={homeReviews.link.href} variant="inverse">
              {homeReviews.link.label}
            </Button>
          </li>
        </ul>

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
