import type { ReactNode } from "react";
import Link from "@/components/ui/SiteLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HoursToday } from "@/components/sections/home/HoursToday";
import { contactLinks, hoursTable, practice } from "@/content/site";
import styles from "./PatientShared.module.css";

/**
 * Pieces shared by the Patient Information pages: the hero side panel, section
 * headers, the office hours card and link cards. Card titles are styled text, not
 * headings, so each page's outline matches its content file exactly.
 */

export type PanelRow = { icon: string; title: string; text?: string; href?: string; track?: string };

type HeroPanelProps = {
  tone?: "navy" | "light";
  label: string;
  /** Live-dot label (open for calls) */
  live?: boolean;
  /** Big call/text block at the top */
  phone?: boolean;
  /** Large serif line under the label */
  lead?: ReactNode;
  rows?: PanelRow[];
  /** Number the rows 01, 02… (jump-link lists) */
  numbered?: boolean;
  children?: ReactNode;
  footer?: ReactNode;
};

/** Hero aside card: the page's key facts or jump links, in place of a photo */
export function HeroPanel({ tone = "navy", label, live, phone, lead, rows, numbered, children, footer }: HeroPanelProps) {
  return (
    <div className={`${styles.panel} ${tone === "light" ? styles.panelLight : ""}`}>
      <p className={styles.panelLabel}>
        {live ? <span className={styles.liveDot} aria-hidden="true" /> : null}
        {label}
      </p>

      {phone ? (
        <>
          <a href={contactLinks.call} className={styles.panelPhone} data-track="call_click">
            {practice.phone.display}
          </a>
          <div className={styles.panelChips}>
            <a href={contactLinks.call} className={styles.panelChip} data-track="call_click">
              <Icon name="phone" size={16} />
              Call
            </a>
            <a href={contactLinks.text} className={styles.panelChip} data-track="text_click">
              <Icon name="message" size={16} />
              Text
            </a>
          </div>
        </>
      ) : null}

      {lead ? <p className={styles.panelLead}>{lead}</p> : null}
      {children}

      {rows?.length ? (
        <ul role="list" className={styles.panelRows}>
          {rows.map((row, index) => {
            const inner = (
              <>
                <span className={styles.panelRowIcon} aria-hidden="true">
                  {numbered ? (
                    <span className={styles.panelIndex}>{String(index + 1).padStart(2, "0")}</span>
                  ) : (
                    <Icon name={row.icon as IconName} size={18} />
                  )}
                </span>
                <span className={styles.panelRowText}>
                  <span className={styles.panelRowTitle}>{row.title}</span>
                  {row.text ? <span className={styles.panelRowSub}>{row.text}</span> : null}
                </span>
                {row.href ? <Icon name="arrowRight" size={16} className={styles.panelArrow} /> : null}
              </>
            );
            return (
              <li key={row.title}>
                {row.href ? (
                  row.href.startsWith("#") ? (
                    <a href={row.href} className={styles.panelRow} data-track={row.track}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={row.href} className={styles.panelRow} data-track={row.track}>
                      {inner}
                    </Link>
                  )
                ) : (
                  <span className={styles.panelRow}>{inner}</span>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}

      {footer ? <div className={styles.panelFooter}>{footer}</div> : null}
    </div>
  );
}

/** Eyebrow + H2 (+ optional lead) for a section */
export function SectionHead({
  id,
  eyebrow,
  title,
  lead,
  center,
  inverse,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  center?: boolean;
  inverse?: boolean;
}) {
  return (
    <div className={`${styles.head} ${center ? styles.headCenter : ""}`}>
      {eyebrow ? (
        <p className={`eyebrow ${inverse ? "eyebrow-inverse" : ""}`} data-reveal="">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} data-reveal="">
        {title}
      </h2>
      {lead ? (
        <p className={styles.headLead} data-reveal="">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Navy office hours card with the H2 the page's content file gives it; today's row is marked */
export function HoursCard({ id, title }: { id: string; title: string }) {
  return (
    <section className={styles.hours} aria-labelledby={id} data-reveal="">
      <span className={styles.hoursIcon} aria-hidden="true">
        <Icon name="clock" size={22} />
      </span>
      <h2 id={id} className={styles.hoursTitle}>
        {title}
      </h2>
      <table className={styles.hoursTable}>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Hours</th>
          </tr>
        </thead>
        <tbody>
          {hoursTable.map((row) => (
            <tr key={row.label} data-days={row.days.join(" ")} data-closed={row.value === "Closed" ? "" : undefined}>
              <th scope="row">{row.label}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <HoursToday />
      <a href={contactLinks.call} className={styles.hoursCall} data-track="call_click">
        <Icon name="phone" size={18} />
        <span>
          Call or text <strong>{practice.phone.display}</strong>
        </span>
      </a>
    </section>
  );
}

export type LinkCardItem = { label: string; text: string; href: string; icon: string; featured?: boolean };

/** Whole-card link: icon chip, serif label, one line of text, arrow */
export function LinkCard({ item }: { item: LinkCardItem }) {
  return (
    <Link href={item.href} className={`${styles.linkCard} ${item.featured ? styles.linkCardFeatured : ""}`} data-reveal="">
      <span className={styles.linkIcon} aria-hidden="true">
        <Icon name={item.icon as IconName} size={22} />
      </span>
      <span className={styles.linkLabel}>{item.label}</span>
      <span className={styles.linkText}>{item.text}</span>
      <span className={styles.linkArrow} aria-hidden="true">
        <Icon name="arrowRight" size={18} />
      </span>
    </Link>
  );
}

/** Numbered steps (first visit, emergency booking); `rest` follows the bold part */
export function Steps({
  steps,
  layout = "row",
}: {
  steps: { title: string; rest?: string; icon: string }[];
  layout?: "row" | "column";
}) {
  return (
    <ol role="list" className={`${styles.steps} ${layout === "column" ? styles.stepsColumn : ""}`}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.step} data-reveal="">
          <span className={styles.stepTop}>
            <span className={styles.stepIndex} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.stepIcon} aria-hidden="true">
              <Icon name={step.icon as IconName} size={22} />
            </span>
          </span>
          <p className={styles.stepText}>
            <strong>{step.title}</strong>
            {step.rest}
          </p>
        </li>
      ))}
    </ol>
  );
}
