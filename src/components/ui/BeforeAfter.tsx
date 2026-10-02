"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { SiteImage } from "@/content/images";
import styles from "./BeforeAfter.module.css";

type BeforeAfterProps = {
  before: SiteImage;
  after: SiteImage;
  /** CSS aspect ratio, e.g. "4 / 3" */
  ratio?: string;
  sizes: string;
  className?: string;
};

function Layer({ image, sizes, label }: { image: SiteImage; sizes: string; label: string }) {
  return image.src ? (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      quality={85}
      style={{ objectFit: "cover", objectPosition: image.position ?? "center" }}
    />
  ) : (
    <div className={styles.placeholder} role="img" aria-label={image.alt}>
      <span className={styles.placeholderTag}>{label} photo pending</span>
      <span>{image.brief}</span>
    </div>
  );
}

/**
 * Before/after comparison. The "before" photo sits on top and is clipped at the
 * handle; dragging (or the arrow keys) moves it. A native range input drives it, so
 * it is keyboard and screen-reader accessible and needs no custom pointer code.
 */
export function BeforeAfter({ before, after, ratio = "4 / 3", sizes, className }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className={[styles.compare, className].filter(Boolean).join(" ")}
      style={{ aspectRatio: ratio, "--pos": `${position}%` } as CSSProperties}
    >
      <div className={styles.layer}>
        <Layer image={after} sizes={sizes} label="After" />
      </div>
      <div className={`${styles.layer} ${styles.before}`}>
        <Layer image={before} sizes={sizes} label="Before" />
      </div>

      <span className={`${styles.tag} ${styles.tagBefore}`} aria-hidden="true">
        Before
      </span>
      <span className={`${styles.tag} ${styles.tagAfter}`} aria-hidden="true">
        After
      </span>

      <span className={styles.divider} aria-hidden="true">
        <span className={styles.handle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </span>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className={styles.range}
        aria-label="Compare before and after: drag to reveal more of either photo"
        aria-valuetext={`${position}% before`}
      />
    </div>
  );
}
