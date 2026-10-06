import { homeCoverage } from "@/content/pages/home";
import {
  contactLinks,
  emergencySpecial,
  financingPartners,
  membershipPlans,
  practice,
} from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./Coverage.module.css";

/**
 * Plan names are paragraphs, not headings: the content file defines this section's
 * outline as one H2 with three H3s (insurance, membership, financing, in that order),
 * and the page must keep it exactly.
 * Prices count up when they scroll into view ([data-count], MotionController);
 * the real figure is what the server renders.
 */
export function Coverage() {
  const { insurance, membership, financing } = homeCoverage;

  return (
    <section className={styles.section} aria-labelledby="coverage-title">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow" data-reveal="">
            Paying for care
          </p>
          <h2 id="coverage-title" data-reveal="">
            {homeCoverage.title}
          </h2>
        </div>

        {/* Insurance: navy copy band beside the PPO statement (carrier logos removed until the
            practice supplies its accepted-plan list: Developer Questions, 6 Oct 2026) */}
        <div className={styles.insurance} data-reveal="">
          <div className={styles.insuranceCopy}>
            <div className={styles.insuranceLead}>
              <span className={styles.badgeIcon}>
                <Icon name="shield" size={24} />
              </span>
              <h3 className={styles.subTitle}>{insurance.title}</h3>
            </div>
            <div className={styles.insuranceBody}>
              <p>{insurance.body}</p>
              <TextLink href={insurance.link.href} inverse>
                {insurance.link.label}
              </TextLink>
            </div>
          </div>
          <div className={styles.logoWall}>
            <p className={styles.ppo}>
              <span className={styles.ppoIcon} aria-hidden="true">
                <Icon name="shield" size={26} />
              </span>
              We accept most PPO plans.
            </p>
          </div>
        </div>

        {/* Membership plans */}
        <div className={styles.membership}>
          <div className={styles.membershipHead}>
            <div className={styles.membershipIntro}>
              <h3 className={styles.subTitle} data-reveal="">
                {membership.title}
              </h3>
              <p data-reveal="">{membership.intro}</p>
            </div>
            <div data-reveal="">
              <Button href={membership.cta.href} variant="secondary">
                {membership.cta.label}
              </Button>
            </div>
          </div>

          <ul role="list" className={styles.plans}>
            {membershipPlans.map((plan) => (
              <li key={plan.name} className={styles.plan} data-reveal="">
                <p className={styles.planAudience}>{plan.audience}</p>
                <p className={styles.planName}>{plan.name}</p>
                <p className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span data-count={plan.price}>{plan.price}</span>{" "}
                  <span className={styles.term}>{plan.term}</span>
                </p>
                <ul role="list" className={styles.includes} aria-label={`${plan.name} includes`}>
                  {plan.includes.map((item) => (
                    <li key={item}>
                      <span className={styles.check} aria-hidden="true">
                        <Icon name="check" size={13} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Emergency special: the navy card in the row */}
            <li className={`${styles.plan} ${styles.special}`} data-reveal="">
              <p className={styles.planAudience}>{emergencySpecial.audience}</p>
              <p className={styles.planName}>{emergencySpecial.name}</p>
              <p className={styles.price}>
                <span className={styles.currency}>$</span>
                <span data-count={emergencySpecial.price}>{emergencySpecial.price}</span>{" "}
                <span className={styles.term}>{emergencySpecial.term}</span>
              </p>
              <p className={styles.specialNote}>{emergencySpecial.includes}</p>
              <Button href={contactLinks.call} variant="inverse" icon="phone" track="emergency_click">
                {practice.phone.display}
              </Button>
            </li>
          </ul>
        </div>

        {/* Financing band */}
        <div className={styles.financing} data-reveal="">
          <span className={styles.financingIcon}>
            <Icon name="tag" size={26} />
          </span>
          <div className={styles.financingCopy}>
            <h3 className={styles.subTitle}>{financing.title}</h3>
            <p>{financing.body}</p>
          </div>
          <ul role="list" className={styles.partners} aria-label="Financing partners">
            {financingPartners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
          <TextLink href={financing.link.href}>{financing.link.label}</TextLink>
        </div>
      </div>
    </section>
  );
}
