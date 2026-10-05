import type { ReactNode } from "react";
import Link from "@/components/ui/SiteLink";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import {
  whyAccess,
  whyCare,
  whyComfort,
  whyComprehensive,
  whyHero,
  whyHonesty,
  whyPersonal,
  whyReasons,
} from "@/content/pages/why-choose-us";
import { ReasonsNav } from "./ReasonsNav";
import styles from "./WhySections.module.css";

type ReasonProps = {
  id: string;
  index: number;
  icon: IconName;
  title: string;
  tone?: "navy" | "ice";
  children: ReactNode;
};

/** One reason: its H2 (from the content file) with a large italic number and icon */
function Reason({ id, index, icon, title, tone, children }: ReasonProps) {
  return (
    <section
      className={`${styles.reason} ${tone === "navy" ? styles.reasonNavy : ""} ${tone === "ice" ? styles.reasonIce : ""}`}
      aria-labelledby={id}
      data-reveal=""
    >
      <div className={styles.reasonSide} aria-hidden="true">
        <span className={styles.reasonIndex}>{String(index).padStart(2, "0")}</span>
        <span className={styles.reasonIcon}>
          <Icon name={icon} size={24} />
        </span>
      </div>
      <div className={styles.reasonBody}>
        <h2 id={id} className={styles.reasonTitle}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

/**
 * The six reasons (each an H2 in the content file): a sticky navigator on the left
 * that follows the scroll, and the reason cards on the right.
 */
export function WhyReasons() {
  return (
    <div className={styles.reasons}>
      <div className={`container ${styles.grid}`}>
        <aside className={styles.aside}>
          <div className={styles.asideInner}>
            <p className="eyebrow eyebrow-inverse">What makes us different</p>
            <ReasonsNav items={whyReasons.map((reason) => ({ id: reason.id, short: reason.short }))} />
            <Button href={whyHero.cta.href} variant="inverse" icon="calendar" track="appointment_click" className={styles.asideCta}>
              {whyHero.cta.label}
            </Button>
          </div>
        </aside>

        <div className={styles.list}>
          <Reason id={whyCare.id} index={1} icon="heart" title={whyCare.title}>
            <p className={styles.lead}>{whyCare.body}</p>
            <TextLink href={whyCare.link.href}>{whyCare.link.label}</TextLink>
          </Reason>

          <Reason id={whyHonesty.id} index={2} icon="tag" title={whyHonesty.title} tone="navy">
            <p className={styles.text}>{whyHonesty.body}</p>
            <ul role="list" className={styles.points}>
              {whyHonesty.points.map((point) => (
                <li key={point.label}>
                  <span className={styles.pointIcon} aria-hidden="true">
                    <Icon name={point.icon as IconName} size={20} />
                  </span>
                  <span className={styles.pointText}>
                    <strong>{point.label}</strong> {point.text}
                  </span>
                  <Link href={point.link.href} className={styles.pointLink}>
                    {point.link.label}
                    <Icon name="arrowUpRight" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </Reason>

          <Reason id={whyAccess.id} index={3} icon="bell" title={whyAccess.title}>
            <p className={styles.text}>{whyAccess.body}</p>
            <ul role="list" className={styles.stats} aria-hidden="true">
              {whyAccess.chips.map((chip) => (
                <li key={chip.label}>
                  <span className={styles.statIcon}>
                    <Icon name={chip.icon as IconName} size={20} />
                  </span>
                  {chip.label}
                </li>
              ))}
            </ul>
          </Reason>

          <Reason id={whyComprehensive.id} index={4} icon="tooth" title={whyComprehensive.title} tone="ice">
            <p className={styles.text}>{whyComprehensive.body}</p>
            <ul role="list" className={styles.chips} aria-hidden="true">
              {whyComprehensive.chips.map((chip) => (
                <li key={chip}>
                  <Icon name="check" size={16} />
                  {chip}
                </li>
              ))}
            </ul>
          </Reason>

          <Reason id={whyComfort.id} index={5} icon="headphones" title={whyComfort.title}>
            <p className={styles.text}>{whyComfort.body}</p>
            <ul role="list" className={styles.stats} aria-hidden="true">
              <li>
                <span className={styles.statIcon}>
                  <Icon name="message" size={20} />
                </span>
                Clear explanations
              </li>
              <li>
                <span className={styles.statIcon}>
                  <Icon name="headphones" size={20} />
                </span>
                Headphones & music welcome
              </li>
              <li>
                <span className={styles.statIcon}>
                  <Icon name="heart" size={20} />
                </span>
                Ask about sedation
              </li>
            </ul>
          </Reason>

          <Reason id={whyPersonal.id} index={6} icon="smile" title={whyPersonal.title} tone="navy">
            <p className={styles.quote}>
              <Icon name="quote" size={32} className={styles.quoteIcon} />
              {whyPersonal.body}
            </p>
          </Reason>
        </div>
      </div>
    </div>
  );
}
