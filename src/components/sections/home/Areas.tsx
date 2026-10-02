import Link from "@/components/ui/SiteLink";
import { homeAreas } from "@/content/pages/home";
import { linkTo } from "@/content/routes";
import { practice } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/Button";
import styles from "./Areas.module.css";

/** Town links fall back to /areas-we-serve/ until each location page is published (routes.ts). */
export function Areas() {
  return (
    <section className={styles.section} aria-labelledby="areas-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow" data-reveal="">
            Service area
          </p>
          <h2 id="areas-title" data-reveal="">
            {homeAreas.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {homeAreas.intro}
          </p>
          <div data-reveal="">
            <TextLink href={homeAreas.link.href}>{homeAreas.link.label}</TextLink>
          </div>
        </div>

        <ul role="list" className={styles.towns}>
          {homeAreas.towns.map((town) => (
            <li key={town.name} data-reveal="">
              {town.path ? (
                <Link href={linkTo(town.path)} className={styles.town}>
                  <span className={styles.pin}>
                    <Icon name="pin" size={18} />
                  </span>
                  <span className={styles.townName}>{town.name}</span>
                  <Icon name="arrowUpRight" size={18} className={styles.arrow} />
                </Link>
              ) : (
                <span className={`${styles.town} ${styles.home}`}>
                  <span className={styles.pin}>
                    <Icon name="pin" size={18} />
                  </span>
                  <span className={styles.townName}>{town.name}</span>
                  <span className={styles.homeTag}>Our office · {practice.address.postalCode}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
