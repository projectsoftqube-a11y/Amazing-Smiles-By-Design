import { homeCoverage } from "@/content/pages/home";
import { emergencySpecial, insuranceCarriers, membershipPlans } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import styles from "./Coverage.module.css";

/**
 * Plan names are paragraphs, not headings: the content file defines this section's
 * outline as one H2 with three H3s, and the page must keep it exactly.
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

        <div className={styles.insurance}>
          <h3 className={styles.subTitle} data-reveal="">
            {insurance.title}
          </h3>
          <div className={styles.insuranceBody}>
            <p data-reveal="">{insurance.body}</p>
            <ul role="list" className={styles.carriers} aria-label="Insurance carriers we work with" data-reveal="">
              {insuranceCarriers.map((carrier) => (
                <li key={carrier}>{carrier}</li>
              ))}
            </ul>
            <div data-reveal="">
              <TextLink href={insurance.link.href}>{insurance.link.label}</TextLink>
            </div>
          </div>
        </div>

        <div className={styles.membership}>
          <div className={styles.membershipHead}>
            <h3 className={styles.subTitle} data-reveal="">
              {membership.title}
            </h3>
            <p data-reveal="">{membership.intro}</p>
          </div>

          <ul role="list" className={styles.plans}>
            {membershipPlans.map((plan) => (
              <li key={plan.name} className={styles.plan} data-reveal="">
                <p className={styles.planName}>{plan.name}</p>
                <p className={styles.planAudience}>{plan.audience}</p>
                <p className={styles.price}>
                  <span className={styles.currency}>$</span>
                  {plan.price}{" "}
                  <span className={styles.term}>{plan.term}</span>
                </p>
                <ul role="list" className={styles.includes} aria-label={`${plan.name} includes`}>
                  {plan.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
            <li className={`${styles.plan} ${styles.special}`} data-reveal="">
              <p className={styles.planName}>{emergencySpecial.name}</p>
              <p className={styles.planAudience}>For {emergencySpecial.audience.toLowerCase()}</p>
              <p className={styles.price}>
                <span className={styles.currency}>$</span>
                {emergencySpecial.price}{" "}
                <span className={styles.term}>{emergencySpecial.term}</span>
              </p>
              <p className={styles.specialNote}>{emergencySpecial.includes}</p>
            </li>
          </ul>

          <div className={styles.membershipCta} data-reveal="">
            <Button href={membership.cta.href} variant="secondary">
              {membership.cta.label}
            </Button>
          </div>
        </div>

        <div className={styles.financing}>
          <h3 className={styles.subTitle} data-reveal="">
            {financing.title}
          </h3>
          <div className={styles.financingBody} data-reveal="">
            <p>{financing.body}</p>
            <TextLink href={financing.link.href}>{financing.link.label}</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
