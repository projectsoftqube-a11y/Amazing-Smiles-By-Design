import type { ReactNode } from "react";
import Link from "@/components/ui/SiteLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { ImplantView, ToothPulpView, ToothSideView } from "./ToothArt";
import styles from "./ToothJourney.module.css";

type PathGroup = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  links: { label: string; text?: string; href: string; icon: string }[];
};

// One illustration and chip icon per stage: Repair, Save, Replace
const STAGES: { art: ReactNode; icon: IconName; caption: string }[] = [
  { art: <ToothSideView kind="filling" />, icon: "shield", caption: "A damaged tooth, repaired" },
  { art: <ToothPulpView />, icon: "heart", caption: "An infected tooth, saved" },
  { art: <ImplantView />, icon: "plus", caption: "A missing tooth, replaced" },
];

/**
 * Service hub clusters as a tooth's journey across a full-width navy band:
 * three glass cards (Repair · Save · Replace), each led by its own tooth
 * illustration and joined by glowing connectors. Each card is its own H2
 * section with crawlable links to its treatments.
 */
export function ToothJourney({ groups }: { groups: PathGroup[] }) {
  return (
    <div className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow eyebrow-inverse ${styles.kicker}`} data-reveal="">
          Repair · Save · Replace
        </p>
        <div className={styles.grid}>
          {groups.map((group, index) => {
            const stage = STAGES[index % STAGES.length];
            return (
              <section key={group.id} className={styles.card} aria-labelledby={group.id} data-reveal="">
                <div className={styles.art} aria-hidden="true">
                  <span className={styles.artGlow} />
                  <span className={styles.artTooth}>{stage.art}</span>
                  <span className={styles.artCaption}>{stage.caption}</span>
                </div>

                <div className={styles.body}>
                  <span className={styles.chip} aria-hidden="true">
                    <Icon name={stage.icon} size={16} />
                    {group.eyebrow}
                  </span>
                  <h2 id={group.id} className={styles.title}>
                    {group.title}
                  </h2>
                  {group.intro ? (
                    <p className={styles.intro}>
                      <Rich text={group.intro} />
                    </p>
                  ) : null}
                  <ul role="list" className={styles.links}>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className={styles.link}>
                          <span className={styles.linkIcon} aria-hidden="true">
                            <Icon name={link.icon as IconName} size={18} />
                          </span>
                          <span className={styles.linkText}>
                            <span className={styles.linkLabel}>{link.label}</span>
                            {link.text ? <span className={styles.linkSub}>{link.text}</span> : null}
                          </span>
                          <Icon name="arrowUpRight" size={18} className={styles.linkArrow} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {index < groups.length - 1 ? (
                  <span className={styles.connector} aria-hidden="true">
                    <Icon name="arrowRight" size={18} />
                  </span>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
