import Link from "@/components/ui/SiteLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import { hubGroups } from "@/content/pages/patient-information";
import { contactLinks, emergencySpecial, membershipPlans, practice } from "@/content/site";
import styles from "./HeroVisuals.module.css";

/**
 * Layered hero compositions for the Patient Information pages (no photos: the
 * handoffs allow only real office photos). A main glass card with floating detail
 * pills (and a tilted price tag on New Patients); everything shown comes from the page's content.
 */

const childPlan = membershipPlans.find((plan) => plan.name.startsWith("Child"));

/** Hub: a "before your visit" board with the four most-used pages and the call line */
export function HubHeroVisual() {
  const [visiting, paying] = hubGroups;
  const tiles = [visiting.links[0], visiting.links[1], paying.links[0], paying.links[1]];

  return (
    <div className={styles.stage}>
      <div className={styles.glass}>
        <div className={styles.glassHead}>
          <p className={styles.kicker}>
            <span className={styles.liveDot} aria-hidden="true" />
            Before your visit
          </p>
          <a href={contactLinks.call} className={styles.phone} data-track="call_click">
            {practice.phone.display}
          </a>
          <p className={styles.phoneNote}>Call or text us</p>
        </div>

        <ul role="list" className={styles.tiles}>
          {tiles.map((tile) => (
            <li key={tile.href}>
              <Link href={tile.href} className={styles.tile}>
                <span className={styles.tileIcon} aria-hidden="true">
                  <Icon name={tile.icon as IconName} size={20} />
                </span>
                <span className={styles.tileLabel}>{tile.label}</span>
                <Icon name="arrowUpRight" size={16} className={styles.tileArrow} />
              </Link>
            </li>
          ))}
        </ul>

        <a href={contactLinks.directions} className={styles.address} target="_blank" rel="noopener" data-track="directions_click">
          <Icon name="pin" size={18} />
          <span>
            {practice.address.street}, {practice.address.city}, {practice.address.region}
            <span className="visually-hidden"> (directions, opens in a new tab)</span>
          </span>
          <Icon name="map" size={18} className={styles.addressEnd} />
        </a>
      </div>

      <p className={`${styles.pill} ${styles.pillTop}`} aria-hidden="true">
        <span className={styles.pillIcon}>
          <Icon name="shield" size={16} />
        </span>
        PPO insurance accepted
      </p>
      <p className={`${styles.pill} ${styles.pillBottom}`} aria-hidden="true">
        <span className={`${styles.pillIcon} ${styles.pillIconNavy}`}>
          <Icon name="wallet" size={16} />
        </span>
        CareCredit & Cherry
      </p>
    </div>
  );
}

/** New Patients: a first-visit appointment card, a tilted $59 tag and detail pills (decorative summary) */
export function NewPatientHeroVisual() {
  const steps = ["Your dental concerns", "Medical & dental history", "Comprehensive evaluation", "Your treatment plan"];

  return (
    <div className={`${styles.stage} ${styles.stageTicket}`} aria-hidden="true">
      <div className={styles.priceTag}>
        <span className={styles.priceTop}>New patients</span>
        <span className={styles.priceValue}>
          <span className={styles.priceCurrency}>$</span>
          {emergencySpecial.price}
        </span>
        <span className={styles.priceBottom}>Emergency visit</span>
      </div>

      <div className={styles.ticket}>
        <div className={styles.ticketTop}>
          <span className={styles.ticketIcon}>
            <Icon name="family" size={22} />
          </span>
          <span className={styles.ticketKicker}>Welcome</span>
          <span className={styles.ticketTitle}>Your first visit</span>
        </div>

        <ol className={styles.timeline}>
          {steps.map((step, index) => (
            <li key={step} style={{ animationDelay: `${900 + index * 140}ms` }}>
              <span className={styles.timelineDot}>
                <Icon name="check" size={14} />
              </span>
              <span className={styles.timelineIndex}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.timelineText}>{step}</span>
            </li>
          ))}
        </ol>

        <div className={styles.ticketFoot}>
          <span className={styles.footLabel}>Includes</span>
          <span className={styles.footChips}>
            <span>Exam</span>
            <span>X-rays</span>
            <span>Cleaning*</span>
          </span>
        </div>
        <p className={styles.footNote}>*If applicable</p>
      </div>

      {childPlan ? (
        <p className={`${styles.pill} ${styles.pillRight}`}>
          <span className={`${styles.pillIcon} ${styles.pillIconNavy}`}>
            <Icon name="tag" size={16} />
          </span>
          Membership from ${childPlan.price}/yr
        </p>
      ) : null}
    </div>
  );
}
