import Image from "next/image";
import Link from "@/components/ui/SiteLink";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { carrierLogos } from "@/content/insurance";
import {
  financingCompare,
  financingHelp,
  financingPartners,
  financingWhy,
} from "@/content/pages/financing";
import {
  insuranceBilling,
  insuranceCarriers,
  insuranceFinancing,
  insuranceNoInsurance,
  insurancePlans,
} from "@/content/pages/insurance-payment";
import { membershipPlans, practice, contactLinks } from "@/content/site";
import { HeroPanel, SectionHead } from "./PatientShared";
import { PlanFinder } from "./PlanFinder";
import styles from "./InfoSections.module.css";

/* ——— Insurance & Payment ——— */

// Logos only for carriers the copy names (no general "Blue Cross Blue Shield" claim)
const NAMED_LOGOS = ["Aetna", "Anthem", "Cigna", "Delta Dental", "Humana", "MetLife", "UnitedHealthcare", "United Concordia", "Principal"];

/** Hero panel: "PPO insurance accepted" over a wall of the named carriers' logos */
export function InsurancePanel() {
  const logos = carrierLogos.filter((carrier) => NAMED_LOGOS.includes(carrier.name));
  return (
    <HeroPanel
      tone="light"
      label="PPO insurance accepted"
      lead={
        <>
          <span data-count={insuranceCarriers.length}>{insuranceCarriers.length}</span> carriers & plans we work with
        </>
      }
      footer={
        <>
          Don&apos;t see your plan?{" "}
          <a href={contactLinks.call} className={styles.panelCall} data-track="call_click">
            Call {practice.phone.display}
          </a>
        </>
      }
    >
      <ul role="list" className={styles.logoWall}>
        {logos.map((carrier) => (
          <li key={carrier.name}>
            <Image src={carrier.logo} alt={carrier.name} sizes="120px" className={styles.logo} />
          </li>
        ))}
      </ul>
    </HeroPanel>
  );
}

/** "Dental Insurance Plans We Work With": the named carriers, then the full expandable list */
export function InsurancePlans() {
  return (
    <section className={styles.plans} aria-labelledby="plans-title">
      <div className={`container ${styles.plansGrid}`}>
        <div className={styles.plansHead}>
          <SectionHead id="plans-title" eyebrow="In-network" title={insurancePlans.title} lead={insurancePlans.lead} />
          <p className={styles.missing} data-reveal="">
            <Icon name="phone" size={18} />
            <span>
              Don&apos;t see your plan? Call{" "}
              <a href={contactLinks.call} data-track="call_click">
                {practice.phone.display}
              </a>{" "}
              and ask.
            </span>
          </p>
        </div>

        <div className={styles.plansMain}>
          <ul role="list" className={styles.carriers}>
            {insurancePlans.featured.map((carrier) => (
              <li key={carrier} data-reveal="">
                <span className={styles.carrierTick} aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                {carrier}
              </li>
            ))}
          </ul>
          <div data-reveal="">
            <PlanFinder label={insurancePlans.fullListLabel} plans={insuranceCarriers} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** "How Insurance Billing Works": four policy cards */
export function InsuranceBilling() {
  return (
    <section className={styles.billing} aria-labelledby="billing-title">
      <div className="container">
        <SectionHead id="billing-title" eyebrow="Billing & payment" title={insuranceBilling.title} center />
        <ul role="list" className={styles.billingGrid}>
          {insuranceBilling.points.map((point, index) => (
            <li key={point.label} className={`${styles.billingCard} ${index === 1 ? styles.billingNavy : ""}`} data-reveal="">
              <span className={styles.billingIcon} aria-hidden="true">
                <Icon name={point.icon as IconName} size={22} />
              </span>
              <p className={styles.billingText}>
                <strong>{point.label}</strong>
                {point.text ? ` ${point.text}` : null}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** "No Insurance? No Problem" beside "Financing Options" */
export function InsuranceAlternatives() {
  return (
    <div className={styles.alternatives}>
      <div className={`container ${styles.altGrid}`}>
        <section className={`${styles.alt} ${styles.altNavy}`} aria-labelledby="no-insurance-title" data-reveal="">
          <span className={styles.altIcon} aria-hidden="true">
            <Icon name="tag" size={22} />
          </span>
          <h2 id="no-insurance-title" className={styles.altTitle}>
            {insuranceNoInsurance.title}
          </h2>
          <p className={styles.altText}>{insuranceNoInsurance.body}</p>
          <ul role="list" className={styles.prices} aria-hidden="true">
            {membershipPlans.map((plan) => (
              <li key={plan.name}>
                <span className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span data-count={plan.price}>{plan.price}</span>
                </span>
                <span className={styles.priceName}>{plan.name.replace(" Membership", "").replace(" Plan", "")}</span>
              </li>
            ))}
          </ul>
          <TextLink href={insuranceNoInsurance.link.href} inverse>
            {insuranceNoInsurance.link.label}
          </TextLink>
        </section>

        <section className={styles.alt} aria-labelledby="insurance-financing-title" data-reveal="">
          <span className={styles.altIcon} aria-hidden="true">
            <Icon name="wallet" size={22} />
          </span>
          <h2 id="insurance-financing-title" className={styles.altTitle}>
            {insuranceFinancing.title}
          </h2>
          <p className={styles.altText}>{insuranceFinancing.body}</p>
          <ul role="list" className={styles.partners} aria-hidden="true">
            <li>CareCredit</li>
            <li>Cherry</li>
          </ul>
          <TextLink href={insuranceFinancing.link.href}>{insuranceFinancing.link.label}</TextLink>
        </section>
      </div>
    </div>
  );
}

/* ——— Financing Options ——— */

/** Hero panel: the two partners as wordmark tiles */
export function FinancingPanel() {
  return (
    <HeroPanel
      label="Financing partners"
      lead="Monthly payments instead of paying the entire balance at once"
      rows={[
        { icon: "card", title: "CareCredit", text: "Healthcare financing for medical & dental expenses", href: "#carecredit-title" },
        { icon: "wallet", title: "Cherry", text: "Simple monthly payment plans", href: "#cherry-title" },
      ]}
    />
  );
}

/** "Our Financing Partners": a real HTML table (Developer Handoff) */
export function FinancingCompare() {
  return (
    <section className={styles.compare} aria-labelledby="partners-title">
      <div className="container">
        <SectionHead id="partners-title" eyebrow="Compare" title={financingCompare.title} center />
        <div className={styles.tableWrap} data-reveal="">
          <table className={styles.table}>
            <caption className="visually-hidden">CareCredit and Cherry financing compared</caption>
            <thead>
              <tr>
                <td />
                {financingCompare.columns.map((column, index) => (
                  <th key={column} scope="col" className={index === 0 ? styles.colNavy : undefined}>
                    <span className={styles.colIcon} aria-hidden="true">
                      <Icon name={index === 0 ? "card" : "wallet"} size={20} />
                    </span>
                    <span className={styles.colName}>{column}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {financingCompare.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, index) => (
                    <td key={index} className={index === 0 ? styles.cellFeatured : undefined}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** "CareCredit Financing" and "Cherry Financing" */
export function FinancingPartners() {
  return (
    <div className={styles.partnerSection}>
      <div className={`container ${styles.partnerGrid}`}>
        {financingPartners.map((partner, index) => (
          <section
            key={partner.id}
            className={`${styles.partner} ${index === 0 ? styles.partnerNavy : ""}`}
            aria-labelledby={partner.id}
            data-reveal=""
          >
            <span className={styles.partnerIcon} aria-hidden="true">
              <Icon name={index === 0 ? "card" : "wallet"} size={24} />
            </span>
            <h2 id={partner.id} className={styles.partnerTitle}>
              {partner.title}
            </h2>
            <p className={styles.partnerText}>{partner.body}</p>
            <ul role="list" className={styles.tags} aria-hidden="true">
              {partner.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

/** "Why Patients Use Payment Plans" */
export function FinancingWhy() {
  return (
    <section className={styles.why} aria-labelledby="payment-plans-title">
      <div className={`container ${styles.whyGrid}`}>
        <SectionHead id="payment-plans-title" eyebrow="Benefits" title={financingWhy.title} lead={financingWhy.lead} />
        <div className={styles.whyMain}>
          <ul role="list" className={styles.benefits}>
            {financingWhy.points.map((point, index) => (
              <li key={point.text} className={styles.benefit} data-reveal="">
                <span className={styles.benefitIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.benefitIcon} aria-hidden="true">
                  <Icon name={point.icon as IconName} size={22} />
                </span>
                <span className={styles.benefitText}>{point.text}</span>
              </li>
            ))}
          </ul>
          <p className={styles.whyAfter} data-reveal="">
            <Icon name="info" size={20} />
            {financingWhy.after}
          </p>
        </div>
      </div>
    </section>
  );
}

/** "We'll Help You Understand Your Options" with the two other ways to save */
export function FinancingHelp() {
  return (
    <section className={styles.help} aria-labelledby="financing-help-title">
      <div className={`container ${styles.helpGrid}`}>
        <div className={styles.helpCopy}>
          <SectionHead id="financing-help-title" eyebrow="We're here to help" title={financingHelp.title} />
          <p className={styles.helpText} data-reveal="">
            {financingHelp.body}
          </p>
        </div>
        <div className={styles.save} data-reveal="">
          <p className={styles.saveTitle}>{financingHelp.otherTitle}</p>
          <ul role="list" className={styles.saveList}>
            {financingHelp.other.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.saveLink}>
                  <span className={styles.saveIcon} aria-hidden="true">
                    <Icon name={item.icon as IconName} size={20} />
                  </span>
                  <span className={styles.saveText}>
                    <span className={styles.saveLabel}>{item.label}</span>
                    <span>{item.text}</span>
                  </span>
                  <Icon name="arrowRight" size={18} className={styles.saveArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
