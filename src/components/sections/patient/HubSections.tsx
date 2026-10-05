import type { CSSProperties } from "react";
import Link from "@/components/ui/SiteLink";
import { StackCards } from "@/components/motion/StackCards";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { hubDetails, hubGroups } from "@/content/pages/patient-information";
import { contactLinks, practice } from "@/content/site";
import styles from "./HubSections.module.css";

const THEMES = [styles.themeLight, styles.themeNavy, styles.themeIce];

export type StackGroup = {
  id: string;
  eyebrow: string;
  title: string;
  /** Paragraph under the H2 (service hubs) */
  intro?: string;
  links: { label: string; text?: string; href: string; icon: string }[];
};

/**
 * Link groups as stacking cards: each group card pins below the header and the
 * next slides up over it while it eases back (StackCards). Every link is a
 * crawlable <a>. Used by the Patient Information and General Dentistry hubs.
 */
export function StackGroups({ groups, countLabel = "page" }: { groups: StackGroup[]; countLabel?: string }) {
  return (
    <div className={styles.groups}>
      <StackCards className={`container ${styles.stack}`}>
        {groups.map((group, index) => (
          <section
            key={group.id}
            className={`${styles.card} ${THEMES[index % THEMES.length]}`}
            style={{ "--i": index } as CSSProperties}
            aria-labelledby={group.id}
            data-stack-card=""
          >
            <div className={styles.cardInner} data-stack-inner="">
              <div className={styles.cardHead}>
                <span className={styles.cardIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                  <span className={styles.cardTotal}>/{String(groups.length).padStart(2, "0")}</span>
                </span>
                <p className={`eyebrow ${index % THEMES.length === 1 ? "eyebrow-inverse" : ""}`} data-reveal="">
                  {group.eyebrow}
                </p>
                <h2 id={group.id} className={styles.cardTitle} data-reveal="">
                  {group.title}
                </h2>
                {group.intro ? (
                  <p className={styles.cardIntro} data-reveal="">
                    {group.intro}
                  </p>
                ) : null}
                <p className={styles.cardCount} aria-hidden="true">
                  <Icon name="book" size={16} />
                  {group.links.length} {group.links.length === 1 ? countLabel : `${countLabel}s`}
                </p>
              </div>

              <ul role="list" className={styles.rows}>
                {group.links.map((link) => (
                  <li key={link.href} data-reveal="">
                    <Link href={link.href} className={styles.row}>
                      <span className={styles.rowIcon} aria-hidden="true">
                        <Icon name={link.icon as IconName} size={22} />
                      </span>
                      <span className={styles.rowText}>
                        <span className={styles.rowLabel}>{link.label}</span>
                        {link.text ? <span className={styles.rowSub}>{link.text}</span> : null}
                      </span>
                      <span className={styles.rowArrow} aria-hidden="true">
                        <Icon name="arrowUpRight" size={18} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <span className={styles.shade} aria-hidden="true" data-stack-shade="" />
            </div>
          </section>
        ))}
      </StackCards>
    </div>
  );
}

/** Patient Information: "Visiting Us", "Paying for Your Care" and "Our Technology & Resources" */
export function HubGroups() {
  return <StackGroups groups={hubGroups} />;
}

/** "Bensalem Dental Office Details": the content file's two-column table as a definition list */
export function OfficeDetails() {
  const rows = [
    {
      label: "Address",
      icon: "pin" as const,
      value: `${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}`,
    },
    { label: "Phone (call or text)", icon: "phone" as const, value: practice.phone.display, href: contactLinks.call },
    { label: "Hours", icon: "clock" as const, value: hubDetails.hours },
    { label: "Payment", icon: "card" as const, value: hubDetails.payment },
  ];

  return (
    <section className={styles.details} aria-labelledby="office-details-title">
      <div className={`container ${styles.detailsGrid}`}>
        <div className={styles.detailsHead}>
          <p className="eyebrow" data-reveal="">
            Visit us
          </p>
          <h2 id="office-details-title" data-reveal="">
            {hubDetails.title}
          </h2>
          <div data-reveal="">
            <TextLink href={hubDetails.link.href}>{hubDetails.link.label}</TextLink>
          </div>
        </div>

        <dl className={styles.facts}>
          {rows.map((row) => (
            <div key={row.label} className={styles.fact} data-reveal="">
              <span className={styles.factIcon} aria-hidden="true">
                <Icon name={row.icon} size={20} />
              </span>
              <dt>{row.label}</dt>
              <dd>
                {row.href ? (
                  <a href={row.href} data-track="call_click">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
