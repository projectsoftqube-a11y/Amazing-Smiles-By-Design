import Link from "next/link";
import { homeServices } from "@/content/pages/home";
import { serviceHubs } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/Button";
import { SegmentBar } from "@/components/ui/SegmentBar";
import styles from "./Services.module.css";

/** Which two of the logo's six segments each hub lights up: grey → ice → blue. */
const HUB_SEGMENTS: Record<string, number[]> = {
  general: [0, 1],
  restorative: [2, 3],
  cosmetic: [4, 5],
};

export function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow" data-reveal="">
            Services
          </p>
          <h2 id="services-title" className={styles.title} data-reveal="">
            {homeServices.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {homeServices.intro}
          </p>
        </div>

        <div className={styles.columns}>
          {serviceHubs.map((hub) => (
            <div key={hub.id} className={styles.column} data-reveal="">
              <SegmentBar className={styles.segments} highlight={HUB_SEGMENTS[hub.id]} />
              <h3 className={styles.hubTitle}>{hub.title}</h3>
              <p className={styles.summary}>{hub.summary}</p>
              <ul role="list" className={styles.list}>
                {hub.services.map((service) => (
                  <li key={service.path}>
                    <Link href={service.path} className={styles.link}>
                      <span>{service.name}</span>
                      <Icon name="arrowUpRight" size={18} className={styles.linkIcon} />
                    </Link>
                  </li>
                ))}
              </ul>
              <TextLink href={hub.path} className={styles.all}>
                {hub.allLabel}
              </TextLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
