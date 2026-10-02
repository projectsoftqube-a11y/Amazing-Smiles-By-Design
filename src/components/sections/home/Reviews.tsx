import { homeGallery, homeReviews } from "@/content/pages/home";
import { Button } from "@/components/ui/Button";
import { GalleryCompare } from "./GalleryCompare";
import { ReviewsSlider } from "./ReviewsSlider";
import styles from "./Reviews.module.css";

/**
 * Reviews are the ones on the practice's current site, with name, date and the
 * star rating shown there. No Review or AggregateRating markup: self-serving reviews
 * are not eligible for review rich results (SEO handoff).
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

        <ReviewsSlider />

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
