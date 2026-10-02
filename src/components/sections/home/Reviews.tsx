import { homeGallery, homeReviews } from "@/content/pages/home";
import { Button, TextLink } from "@/components/ui/Button";
import styles from "./Reviews.module.css";

/**
 * Reviews are plain text with name and date. No Review or AggregateRating markup:
 * self-serving reviews are not eligible for review rich results (SEO handoff).
 */
export function Reviews() {
  return (
    <>
      <section className={styles.section} aria-labelledby="reviews-title">
        <div className="container">
          <div className={styles.head}>
            <div className={styles.headText}>
              <p className="eyebrow" data-reveal="">
                Patient reviews
              </p>
              <h2 id="reviews-title" data-reveal="">
                {homeReviews.title}
              </h2>
            </div>
            <div data-reveal="">
              <TextLink href={homeReviews.link.href}>{homeReviews.link.label}</TextLink>
            </div>
          </div>

          <ul role="list" className={styles.list}>
            {homeReviews.reviews.map((review) => (
              <li key={review.name} data-reveal="">
                <figure className={styles.review}>
                  <span className={styles.mark} aria-hidden="true">
                    “
                  </span>
                  <blockquote className={styles.quote}>
                    <p>{review.quote}</p>
                  </blockquote>
                  <figcaption className={styles.caption}>
                    <span className={styles.name}>{review.name}</span>
                    <span className={styles.date}>{review.date}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.gallery} aria-labelledby="gallery-title">
        <div className={`container ${styles.galleryInner}`}>
          <div className={styles.galleryText}>
            <p className="eyebrow" data-reveal="">
              Smile gallery
            </p>
            <h2 id="gallery-title" className={styles.galleryTitle} data-reveal="">
              {homeGallery.title}
            </h2>
            <p data-reveal="">{homeGallery.body}</p>
          </div>
          <div data-reveal="">
            <Button href={homeGallery.link.href}>{homeGallery.link.label}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
