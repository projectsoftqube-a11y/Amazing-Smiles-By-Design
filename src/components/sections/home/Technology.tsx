import { homeTechnology } from "@/content/pages/home";
import { images } from "@/content/images";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./Technology.module.css";

const ITEM_ICON: IconName[] = ["scan", "xray", "face"];

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
            {homeTechnology.items.map((item, index) => (
              <div key={item.term} className={styles.item} data-reveal="">
                <span className={styles.itemIcon} aria-hidden="true">
                  <Icon name={ITEM_ICON[index]} size={24} />
                </span>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
          <div data-reveal="">
            <TextLink href={homeTechnology.link.href}>{homeTechnology.link.label}</TextLink>
          </div>
        </div>

        <div className={styles.visual}>
          <MediaFrame
            image={images.homeTechnology}
            ratio="var(--tech-ratio)"
            sizes="(min-width: 1200px) 46vw, 100vw"
            quality={85}
            reveal="scroll"
            className={styles.media}
          />
        </div>
      </div>
    </section>
  );
}
