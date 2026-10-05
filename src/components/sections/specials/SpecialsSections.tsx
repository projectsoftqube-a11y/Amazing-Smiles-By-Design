import Link from "@/components/ui/SiteLink";
import {
  specialsCompare,
  specialsCoverage,
  specialsEmergency,
  specialsHow,
  specialsPlans,
  specialsSave,
} from "@/content/pages/specials";
import { contactLinks, emergencySpecial, membershipPlans, practice } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./SpecialsSections.module.css";

/** Call/text clicks on this page are a separate conversion: membership interest (Handoff) */
export const MEMBERSHIP_TRACK = "membership_call_click";

const priceOf = (name: string) => membershipPlans.find((plan) => plan.name === name)?.price ?? 0;

/** Cell content: tick for "Included"/"Yes", muted dash for "–" */
function Cell({ value }: { value: string }) {
  if (value === "Included" || value === "Yes") {
    return (
      <span className={styles.yes}>
        <span className={styles.tick} aria-hidden="true">
          <Icon name="check" size={14} />
        </span>
        {value}
      </span>
    );
  }
  if (value === "–") {
    return (
      <span className={styles.none}>
        <span aria-hidden="true">–</span>
        <span className="visually-hidden">Not included</span>
      </span>
    );
  }
  return <>{value}</>;
}

/**
 * "Compare Our Membership Plans": a real <table> with a header row (Handoff). On
 * small screens it scrolls sideways with the feature column pinned.
 */
export function Compare() {
  const plans = specialsPlans.map((plan) => ({ ...plan, price: priceOf(plan.planName) }));

  return (
    <section className={styles.compare} aria-labelledby="compare-title">
      <div className="container">
        <div className={styles.headCenter}>
          <p className="eyebrow" data-reveal="">
            No insurance? No problem.
          </p>
          <h2 id="compare-title" data-reveal="">
            {specialsCompare.title}
          </h2>
        </div>

        <div className={styles.tableWrap} data-reveal="" role="region" aria-labelledby="compare-title" tabIndex={0}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">
                  <span className="visually-hidden">Plan detail</span>
                </th>
                {plans.map((plan) => (
                  <th key={plan.id} scope="col" className={plan.id === "regular-plan" ? styles.featured : undefined}>
                    <span className={styles.colIcon} aria-hidden="true">
                      <Icon name={plan.icon as IconName} size={18} />
                    </span>
                    <span className={styles.colName}>{plan.planName}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specialsCompare.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, index) => (
                    <td key={index} className={index === 0 ? styles.featured : undefined}>
                      {row.label === "Annual fee" ? <span className={styles.fee}>{value}</span> : <Cell value={value} />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.scrollHint} aria-hidden="true">
          <Icon name="arrowRight" size={14} className={styles.flip} />
          Swipe to compare
          <Icon name="arrowRight" size={14} />
        </p>
      </div>
    </section>
  );
}

/**
 * The three plan sections. Each H2 keeps the content file's exact text
 * ("Regular Membership Plan: $269 Annual Fee"); the name and price are styled spans.
 */
export function Plans() {
  return (
    <div className={styles.plans}>
      <div className={`container ${styles.planGrid}`}>
        {specialsPlans.map((plan) => {
          const price = priceOf(plan.planName);
          return (
            <section
              key={plan.id}
              id={plan.id}
              className={`${styles.plan} ${plan.id === "regular-plan" ? styles.planFeatured : ""}`}
              aria-labelledby={`${plan.id}-title`}
              data-reveal=""
            >
              <span className={styles.planIcon} aria-hidden="true">
                <Icon name={plan.icon as IconName} size={22} />
              </span>
              <h2 id={`${plan.id}-title`} className={styles.planTitle}>
                <span className={styles.planName}>{plan.planName}:</span>{" "}
                <span className={styles.planPrice}>
                  <span className={styles.currency}>$</span>
                  <span data-count={price}>{price}</span> <span className={styles.planTerm}>Annual Fee</span>
                </span>
              </h2>
              <p className={styles.audience}>
                <em>{plan.audience}</em>
              </p>
              <ul role="list" className={styles.includes}>
                {plan.includes.map((item) => (
                  <li key={item}>
                    <span className={styles.check} aria-hidden="true">
                      <Icon name="check" size={13} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {plan.note ? (
                <p className={styles.note}>
                  {plan.note.text ? <>{plan.note.text} </> : null}
                  <Link href={plan.note.link.href}>{plan.note.link.label}</Link>
                </p>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}

/** "Members Save 20%" beside the "Emergency Visit Special: $59 One-Time Fee" card */
export function SaveAndEmergency() {
  const [fillings, crowns, rootCanals] = specialsSave.links;

  return (
    <div className={styles.save}>
      <div className={`container ${styles.saveGrid}`}>
        <section className={styles.discount} aria-labelledby="save-title" data-reveal="">
          <span className={styles.bigPercent} aria-hidden="true">
            <span data-count="20">20</span>%
          </span>
          <h2 id="save-title" className={styles.cardTitle}>
            {specialsSave.title}
          </h2>
          <p className={styles.cardText}>
            {specialsSave.before} <Link href={fillings.href}>{fillings.label}</Link>,{" "}
            <Link href={crowns.href}>{crowns.label}</Link> and <Link href={rootCanals.href}>{rootCanals.label}</Link>{" "}
            {specialsSave.after}
          </p>
        </section>

        <section className={styles.emergency} aria-labelledby="emergency-special-title" data-reveal="">
          <span className={styles.emergencyIcon} aria-hidden="true">
            <Icon name="alert" size={24} />
          </span>
          <h2 id="emergency-special-title" className={styles.cardTitle}>
            <span>{emergencySpecial.name}:</span>{" "}
            <span className={styles.emergencyPrice}>
              <span className={styles.currency}>$</span>
              <span data-count={emergencySpecial.price}>{emergencySpecial.price}</span> One-Time Fee
            </span>
          </h2>
          <p className={styles.audienceInverse}>
            <em>{specialsEmergency.audience}</em>
          </p>
          <ul role="list" className={styles.includesInverse}>
            {specialsEmergency.includes.map((item) => (
              <li key={item}>
                <span className={styles.checkInverse} aria-hidden="true">
                  <Icon name="check" size={13} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.cardTextInverse}>
            {specialsEmergency.before}{" "}
            <a href={contactLinks.call} data-track={MEMBERSHIP_TRACK}>
              {practice.phone.display}
            </a>
            .
          </p>
          <Button href={specialsEmergency.cta.href} variant="inverse" icon="calendar" track="emergency_click">
            {specialsEmergency.cta.label}
          </Button>
        </section>
      </div>
    </div>
  );
}

/** "How Our In-Office Membership Plan Works": copy beside three decorative steps */
export function HowItWorks() {
  return (
    <section className={styles.how} aria-labelledby="how-title">
      <div className={`container ${styles.howGrid}`}>
        <div className={styles.howCopy}>
          <p className="eyebrow" data-reveal="">
            How it works
          </p>
          <h2 id="how-title" data-reveal="">
            {specialsHow.title}
          </h2>
          <p className={styles.lead} data-reveal="">
            {specialsHow.paragraphs[0]}
          </p>
          <p className={styles.text} data-reveal="">
            {specialsHow.paragraphs[1]} {specialsHow.questions}{" "}
            <a href={contactLinks.call} data-track={MEMBERSHIP_TRACK}>
              {practice.phone.display}
            </a>
            .
          </p>
        </div>

        <ol className={styles.steps} aria-hidden="true">
          {specialsHow.steps.map((step, index) => (
            <li key={step.label} className={styles.step} data-reveal="">
              <span className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.stepIcon}>
                <Icon name={step.icon as IconName} size={22} />
              </span>
              <span className={styles.stepLabel}>{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** "Have Dental Insurance or Need Financing?" */
export function Coverage() {
  return (
    <section className={styles.coverage} aria-labelledby="coverage-alt-title">
      <div className="container">
        <div className={styles.headCenter}>
          <p className="eyebrow" data-reveal="">
            Other ways to pay
          </p>
          <h2 id="coverage-alt-title" data-reveal="">
            {specialsCoverage.title}
          </h2>
        </div>
        <ul role="list" className={styles.coverageGrid}>
          {specialsCoverage.items.map((item) => (
            <li key={item.lead} className={styles.coverageCard} data-reveal="">
              <span className={styles.coverageIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p className={styles.coverageText}>
                <strong>{item.lead}</strong> {item.text}
              </p>
              <TextLink href={item.link.href}>{item.link.label}</TextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
