import { aboutCommunity } from "@/content/pages/about";
import { Icon } from "@/components/ui/Icon";
import styles from "./Community.module.css";

/** "Giving Back to Our Community": navy band with the copy and a volunteer badge. */
export function Community() {
  return (
    <section className={styles.section} aria-labelledby="community-title">
      <div className="container">
        <div className={styles.band}>
          <div className={styles.copy}>
            <p className="eyebrow eyebrow-inverse" data-reveal="">
              Community
            </p>
            <h2 id="community-title" className={styles.title} data-reveal="">
              {aboutCommunity.title}
            </h2>
            <p className={styles.body} data-reveal="">
              {aboutCommunity.body}
            </p>
          </div>

          {/* Decorative summary of the paragraph above (aria-hidden: it repeats the copy) */}
          <div className={styles.visual} aria-hidden="true" data-reveal="">
            <span className={styles.backCard} />
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardIcon}>
                  <Icon name="heart" size={24} />
                </span>
                <span className={styles.cardLabel}>Volunteer dentist</span>
              </div>
              <span className={styles.cardTitle}>Missions of Mercy</span>
              <span className={styles.cardPlace}>
                <Icon name="pin" size={16} />
                Pennsylvania
              </span>
              <ul className={styles.cardList}>
                <li>
                  <span className={styles.cardListIcon}>
                    <Icon name="tooth" size={16} />
                  </span>
                  Dental care
                </li>
                <li>
                  <span className={styles.cardListIcon}>
                    <Icon name="family" size={16} />
                  </span>
                  Underserved populations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
