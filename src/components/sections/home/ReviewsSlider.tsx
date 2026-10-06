"use client";

import { useState, useSyncExternalStore } from "react";
import { homeReviews } from "@/content/pages/home";
import { TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./Reviews.module.css";

const noopSubscribe = () => () => {};

/**
 * Testimonial stage: one large quote at a time, cross-fading, moved with the
 * previous/next arrows (no autoplay). On the server (and without JavaScript) every
 * review renders as a plain list, so all of them are in the HTML; once hydrated they
 * stack and fade. Follows the WAI-ARIA carousel pattern.
 */
export function ReviewsSlider() {
  const { reviews, link } = homeReviews;
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const [active, setActive] = useState(0);

  const go = (index: number) => setActive((index + reviews.length) % reviews.length);

  return (
    <div
      className={styles.stage}
      data-reveal=""
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient reviews"
      data-ready={isClient ? "" : undefined}
    >
      <span className={styles.glyph} aria-hidden="true">
        “
      </span>

      <ul role="list" className={styles.slides} aria-live="polite">
        {reviews.map((review, index) => {
          const current = !isClient || index === active;
          return (
            <li
              key={review.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${reviews.length}`}
              className={styles.slide}
              data-active={index === active ? "" : undefined}
              aria-hidden={current ? undefined : true}
              inert={!current}
            >
              <figure className={styles.review}>
                <blockquote className={styles.quote}>
                  <p>{review.quote}</p>
                </blockquote>
                <figcaption className={styles.caption}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.date}>{review.date}</span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      <div className={styles.controls}>
        {isClient ? (
          <div className={styles.arrows}>
            <button type="button" className={styles.arrow} onClick={() => go(active - 1)} aria-label="Previous review">
              <Icon name="arrowRight" size={18} className={styles.flip} />
            </button>
            <button type="button" className={styles.arrow} onClick={() => go(active + 1)} aria-label="Next review">
              <Icon name="arrowRight" size={18} />
            </button>
          </div>
        ) : null}
        <TextLink href={link.href} inverse>
          {link.label}
        </TextLink>
      </div>
    </div>
  );
}
