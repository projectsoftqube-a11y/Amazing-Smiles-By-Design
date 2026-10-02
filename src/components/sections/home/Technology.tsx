import { homeTechnology } from "@/content/pages/home";
import { images } from "@/content/images";
import { TextLink } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./Technology.module.css";

export function Technology() {
  return (
    <section className={styles.section} aria-labelledby="technology-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow" data-reveal="">
            Technology
          </p>
          <h2 id="technology-title" data-reveal="">
            {homeTechnology.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {homeTechnology.intro}
          </p>
          <dl className={styles.items}>
            {homeTechnology.items.map((item) => (
              <div key={item.term} className={styles.item} data-reveal="">
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
          <div data-reveal="">
            <TextLink href={homeTechnology.link.href}>{homeTechnology.link.label}</TextLink>
          </div>
        </div>

        <MediaFrame
          image={images.homeTechnology}
          ratio="var(--tech-ratio)"
          sizes="(min-width: 992px) 50vw, 90vw"
          reveal="scroll"
          parallax
          className={styles.media}
        />
      </div>
    </section>
  );
}
