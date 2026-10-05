import { aboutApproach } from "@/content/pages/about";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./Approach.module.css";

/**
 * "Our Approach to Care": the content file's bulleted list, kept as a real list.
 * Each point's bold lead is a <strong>, not a heading, so the outline stays
 * H1 > H2 exactly as the content file defines it.
 */
export function Approach() {
  return (
    <section className={styles.section} aria-labelledby="approach-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.head}>
          <p className="eyebrow" data-reveal="">
            Our approach
          </p>
          <h2 id="approach-title" data-reveal="">
            {aboutApproach.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {aboutApproach.intro}
          </p>
        </div>

        <ul role="list" className={styles.points}>
          {aboutApproach.points.map((point, index) => (
            <li key={point.lead} className={styles.point} data-reveal="">
              <span className={styles.pointIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.pointIcon} aria-hidden="true">
                <Icon name={point.icon as IconName} size={22} />
              </span>
              <p className={styles.pointText}>
                <strong>{point.lead}</strong> {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
