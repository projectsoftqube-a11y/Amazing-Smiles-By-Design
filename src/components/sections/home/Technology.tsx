import { homeTechnology } from "@/content/pages/home";
import { images, type SiteImage } from "@/content/images";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./Technology.module.css";

const ITEM_ICON: IconName[] = ["scan", "xray", "face"];

type TechnologyContent = {
  title: string;
  intro: string;
  items: readonly { term: string; detail: string }[];
  link: { label: string; href: string };
};

type TechnologyProps = {
  /** Section copy; the home page's by default (the About page passes its own) */
  content?: TechnologyContent;
  /** id of the H2 (must be unique on the page) */
  headingId?: string;
  /** Photo on the left instead of the right */
  reverse?: boolean;
  /** Section photo; the home page's CBCT photo by default */
  image?: SiteImage;
};

/** Imaging technology: copy with the three systems, beside the CBCT photo. Shared by Home and About. */
export function Technology({
  content = homeTechnology,
  headingId = "technology-title",
  reverse = false,
  image = images.homeTechnology,
}: TechnologyProps) {
  return (
    <section
      className={`${styles.section} ${reverse ? styles.reverse : ""}`}
      aria-labelledby={headingId}
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow" data-reveal="">
            Technology
          </p>
          <h2 id={headingId} data-reveal="">
            {content.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {content.intro}
          </p>
          <dl className={styles.items}>
            {content.items.map((item, index) => (
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
            <TextLink href={content.link.href}>{content.link.label}</TextLink>
          </div>
        </div>

        <div className={styles.visual}>
          <MediaFrame
            image={image}
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
