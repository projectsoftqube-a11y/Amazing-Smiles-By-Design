import { homeCare } from "@/content/pages/home";
import { images } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./CareIntro.module.css";

export function CareIntro() {
  return (
    <section className={styles.section} aria-labelledby="care-title">
      <div className={`container ${styles.grid}`}>
        <MediaFrame
          image={images.homeCare}
          ratio="var(--care-ratio)"
          sizes="(min-width: 992px) 38vw, 90vw"
          reveal="scroll"
          parallax
          className={styles.media}
        />

        <div className={styles.copy}>
          <p className="eyebrow" data-reveal="">
            Our approach
          </p>
          <h2 id="care-title" data-reveal="">
            {homeCare.title}
          </h2>
          {homeCare.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "lead" : undefined} data-reveal="">
              {paragraph}
            </p>
          ))}
          <div data-reveal="">
            <Button href={homeCare.cta.href} variant="secondary">
              {homeCare.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
