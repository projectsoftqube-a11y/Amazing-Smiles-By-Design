import Link from "@/components/ui/SiteLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { ServiceExtras } from "@/content/service-page";
import { contactLinks, practice } from "@/content/site";
import styles from "./ServiceHeroCard.module.css";

/**
 * Treatment hero side card: the treatment icon, three key facts from the page copy
 * and links to related treatments, on a glass card over a tilted textured plate.
 * `phone` adds the large call/text block (emergency page).
 */
export function ServiceHeroCard({ extras, phone = false }: { extras: ServiceExtras; phone?: boolean }) {
  return (
    <div className={styles.stage}>
      <span className={styles.plate} aria-hidden="true" />
      <div className={styles.card}>
        <div className={styles.top}>
          <span className={styles.icon} aria-hidden="true">
            <Icon name={extras.icon as IconName} size={28} />
          </span>
          <p className={styles.label}>
            {phone ? <span className={styles.liveDot} aria-hidden="true" /> : null}
            {extras.label}
          </p>
        </div>

        {phone ? (
          <div className={styles.phoneBlock}>
            <a href={contactLinks.call} className={styles.phone} data-track="emergency_click">
              {practice.phone.display}
            </a>
            <div className={styles.chips}>
              <a href={contactLinks.call} className={styles.chip} data-track="emergency_click">
                <Icon name="phone" size={16} />
                Call
              </a>
              <a href={contactLinks.text} className={styles.chip} data-track="text_click">
                <Icon name="message" size={16} />
                Text
              </a>
            </div>
          </div>
        ) : null}

        <ul role="list" className={styles.facts}>
          {extras.facts.map((fact, index) => (
            <li key={fact.title} className={styles.fact} style={{ animationDelay: `${700 + index * 120}ms` }}>
              <span className={styles.factIcon} aria-hidden="true">
                <Icon name={fact.icon as IconName} size={18} />
              </span>
              <span className={styles.factText}>
                <span className={styles.factTitle}>{fact.title}</span>
                <span className={styles.factSub}>{fact.text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.related}>
          <p className={styles.relatedLabel}>Related</p>
          <ul role="list" className={styles.relatedList}>
            {extras.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.relatedLink}>
                  {item.label}
                  <Icon name="arrowUpRight" size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
