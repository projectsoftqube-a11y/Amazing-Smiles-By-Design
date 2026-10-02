import Image from "next/image";
import type { SiteImage } from "@/content/images";
import styles from "./MediaFrame.module.css";

type MediaFrameProps = {
  image: SiteImage;
  /** CSS aspect ratio, e.g. "4 / 5" */
  ratio: string;
  sizes: string;
  /** Above-the-fold image: fetched with high priority, never lazy */
  priority?: boolean;
  /** Curtain wipe on load (hero) or on scroll (data hook for MotionController) */
  reveal?: "load" | "scroll";
  parallax?: boolean;
  className?: string;
  /** Object position for art-directed crops */
  position?: string;
  /** next/image quality; must be listed in next.config images.qualities */
  quality?: 75 | 85;
};

/**
 * Image slot with a fixed aspect ratio (no layout shift). While a photo is awaiting
 * approval (`src: null`) it shows a labelled placeholder in the brand palette.
 */
export function MediaFrame({ image, ratio, sizes, priority, reveal, parallax, className, position, quality }: MediaFrameProps) {
  const classes = [styles.frame, reveal === "load" ? styles.revealLoad : null, className].filter(Boolean).join(" ");

  return (
    <div className={classes} style={{ aspectRatio: ratio }} data-reveal-media={reveal === "scroll" ? "" : undefined}>
      <div className={styles.inner} data-parallax={parallax ? "" : undefined}>
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            quality={quality}
            placeholder="blur"
            {...(priority ? { fetchPriority: "high" as const, loading: "eager" as const } : {})}
            style={{ objectFit: "cover", objectPosition: position ?? image.position ?? "center" }}
          />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={image.alt}>
            <span className={styles.placeholderLabel}>
              <span className={styles.placeholderTag}>Photo pending approval</span>
              {image.brief}
            </span>
          </div>
        )}
      </div>
      {reveal ? <span className={styles.curtain} aria-hidden="true" /> : null}
    </div>
  );
}
