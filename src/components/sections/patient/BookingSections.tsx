import type { ReactNode } from "react";
import Image from "next/image";
import Link from "@/components/ui/SiteLink";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import {
  emergencyForm,
  emergencyHours,
  emergencyLearn,
  emergencyOffer,
  emergencySteps,
} from "@/content/pages/emergency-scheduling";
import { firstVisit, newPatientOffers } from "@/content/pages/new-patients";
import { schedulingForm, schedulingHours, schedulingOnTime, schedulingPain } from "@/content/pages/scheduling";
import { carrierLogos } from "@/content/insurance";
import { contactLinks, emergencySpecial, membershipPlans, practice } from "@/content/site";
import { HoursCard, SectionHead, Steps } from "./PatientShared";
import styles from "./BookingSections.module.css";

/* ——— New Patients ——— */

/** "What Happens at Your First Visit": four numbered steps, then the two notes */
export function FirstVisit() {
  return (
    <section className={styles.visit} aria-labelledby="first-visit-title">
      <div className="container">
        <SectionHead id="first-visit-title" eyebrow="Your first visit" title={firstVisit.title} lead={firstVisit.lead} />
        <div className={styles.visitSteps}>
          <Steps steps={firstVisit.steps} />
        </div>
        <div className={styles.visitNotes}>
          <p className={styles.includes} data-reveal="">
            <span className={styles.includesIcon} aria-hidden="true">
              <Icon name="check" size={22} />
            </span>
            {firstVisit.includes}
          </p>
          <p className={styles.why} data-reveal="">
            <Icon name="quote" size={28} className={styles.whyIcon} />
            {firstVisit.why}
          </p>
        </div>
      </div>
    </section>
  );
}

/** Decorative extras on each payment row, built from the same facts as the copy */
function OfferExtra({ icon }: { icon: string }) {
  if (icon === "tag") {
    const shown = membershipPlans.filter((plan) => !plan.name.startsWith("Perio"));
    return (
      <span className={styles.extraPrices} aria-hidden="true">
        {shown.map((plan) => (
          <span key={plan.name} className={styles.extraPrice}>
            <span className={styles.extraValue}>
              <span className={styles.currency}>$</span>
              <span data-count={plan.price}>{plan.price}</span>
            </span>
            <span className={styles.extraName}>{plan.name.startsWith("Child") ? "Child / yr" : "Regular / yr"}</span>
          </span>
        ))}
      </span>
    );
  }
  if (icon === "shield") {
    return (
      <span className={styles.extraLogos} aria-hidden="true">
        {OFFER_LOGOS.map((carrier) => (
          <span key={carrier.name} className={styles.extraLogo}>
            <Image src={carrier.logo} alt="" sizes="96px" className={styles.extraLogoImg} />
          </span>
        ))}
      </span>
    );
  }
  return (
    <span className={styles.extraPartners} aria-hidden="true">
      <span>CareCredit</span>
      <span>Cherry</span>
    </span>
  );
}

const OFFER_LOGOS = carrierLogos.filter((carrier) => ["Aetna", "Cigna", "Delta Dental", "MetLife"].includes(carrier.name));

/**
 * "New Patient Specials & Payment Options": the $59 special as a tall navy feature
 * card beside three payment rows (membership, insurance, financing), each with a
 * small visual summary of its facts.
 */
export function NewPatientOffers() {
  const [featured, ...rows] = newPatientOffers.items;

  return (
    <section className={styles.offers} aria-labelledby="new-offers-title">
      <div className="container">
        <div className={styles.offersHead}>
          <SectionHead id="new-offers-title" eyebrow="Specials & payment" title={newPatientOffers.title} />
        </div>

        <div className={styles.offersGrid}>
          <div className={styles.feature} data-reveal="">
            <span className={styles.featureWatermark} aria-hidden="true">
              {emergencySpecial.price}
            </span>
            <p className={styles.featureTag}>
              <Icon name={featured.icon as IconName} size={16} />
              New patients only
            </p>
            <p className={styles.featurePrice} aria-hidden="true">
              <span className={styles.currency}>$</span>
              <span data-count={emergencySpecial.price}>{emergencySpecial.price}</span>
            </p>
            <p className={styles.featureLabel}>{featured.label}</p>
            <p className={styles.featureText}>{featured.text}</p>
            <ul role="list" className={styles.featureIncludes} aria-hidden="true">
              <li>
                <Icon name="check" size={16} />
                Exam
              </li>
              <li>
                <Icon name="check" size={16} />
                X-rays
              </li>
              <li>
                <Icon name="check" size={16} />
                One-time fee
              </li>
            </ul>
            <Link href={featured.link.href} className={styles.featureLink} data-track="emergency_click">
              {featured.link.label}
              <span className={styles.featureLinkIcon} aria-hidden="true">
                <Icon name="arrowUpRight" size={18} />
              </span>
            </Link>
          </div>

          <ul role="list" className={styles.offerRows}>
            {rows.map((item) => (
              <li key={item.label} className={styles.offerRow} data-reveal="">
                <span className={styles.offerIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={24} />
                </span>
                <span className={styles.offerBody}>
                  <span className={styles.offerLabel}>{item.label}</span>
                  <span className={styles.offerText}>{item.text}</span>
                  <TextLink href={item.link.href} className={styles.offerLink}>
                    {item.link.label}
                  </TextLink>
                </span>
                <OfferExtra icon={item.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** "Prefer to talk?" call/text card shown beside every form */
function ContactCard() {
  return (
    <div className={styles.contactCard} data-reveal="">
      <span className={styles.contactIcon} aria-hidden="true">
        <Icon name="phone" size={20} />
      </span>
      <span className={styles.contactText}>
        <span className={styles.contactLabel}>Prefer to talk?</span>
        <a href={contactLinks.call} className={styles.contactPhone} data-track="call_click">
          {practice.phone.display}
        </a>
      </span>
      <span className={styles.contactChips}>
        <a href={contactLinks.call} className={styles.contactChip} data-track="call_click">
          <Icon name="phone" size={16} />
          Call
        </a>
        <a href={contactLinks.text} className={styles.contactChip} data-track="text_click">
          <Icon name="message" size={16} />
          Text
        </a>
      </span>
    </div>
  );
}

/**
 * Form section. Without `side`: the H2, intro and call card on the left (sticky),
 * the form on the right. With `side` (an office hours card): the H2 sits above the
 * form, and the side column holds the hours and call card; `sideFirst` puts that
 * column first so the H2s follow the content file's order.
 */
export function FormSection({
  id,
  eyebrow,
  title,
  body,
  form,
  side,
  sideFirst = false,
  tone = "ice",
}: {
  id: string;
  eyebrow: string;
  title: string;
  body?: string;
  form: ReactNode;
  side?: ReactNode;
  sideFirst?: boolean;
  tone?: "ice" | "white";
}) {
  const head = <SectionHead id={id} eyebrow={eyebrow} title={title} lead={body} />;
  const classes = [styles.formSection, tone === "white" ? styles.formWhite : null].filter(Boolean).join(" ");

  if (!side) {
    return (
      <section className={classes} aria-labelledby={id}>
        <div className={`container ${styles.formGrid}`}>
          <div className={`${styles.formAside} ${styles.sticky}`}>
            {head}
            <ContactCard />
          </div>
          <div className={styles.formMain} data-reveal="">
            {form}
          </div>
        </div>
      </section>
    );
  }

  const sideColumn = (
    <div className={`${styles.formAside} ${styles.sticky}`}>
      {side}
      <ContactCard />
    </div>
  );

  return (
    <div className={classes}>
      <div className={`container ${styles.formGrid} ${sideFirst ? styles.sideFirst : styles.sideLast}`}>
        {sideFirst ? sideColumn : null}
        <section className={styles.formMain} aria-labelledby={id}>
          {head}
          <div className={styles.formBody} data-reveal="">
            {form}
          </div>
        </section>
        {sideFirst ? null : sideColumn}
      </div>
    </div>
  );
}

/* ——— Scheduling ——— */

/** "Request an Appointment Online" with "Office Hours" beside it (content order) */
export function SchedulingForm() {
  return (
    <FormSection
      id="request-online-title"
      eyebrow="Request online"
      title={schedulingForm.title}
      form={<AppointmentForm note={schedulingForm.note} submitLabel="Send Request" />}
      side={<HoursCard id="office-hours-title" title={schedulingHours.title} />}
    />
  );
}

/** "In Pain? Tell Us When You Book" and "Staying on Schedule" */
export function SchedulingNotes() {
  return (
    <div className={styles.notes}>
      <div className={`container ${styles.notesGrid}`}>
        <section className={`${styles.note} ${styles.noteNavy}`} aria-labelledby="in-pain-title" data-reveal="">
          <span className={styles.noteIcon} aria-hidden="true">
            <Icon name="alert" size={22} />
          </span>
          <h2 id="in-pain-title" className={styles.noteTitle}>
            {schedulingPain.title}
          </h2>
          <p className={styles.noteText}>{schedulingPain.body}</p>
          <TextLink href={schedulingPain.link.href} inverse track="emergency_click">
            {schedulingPain.link.label}
          </TextLink>
        </section>
        <section className={styles.note} aria-labelledby="on-schedule-title" data-reveal="">
          <span className={styles.noteIcon} aria-hidden="true">
            <Icon name="clock" size={22} />
          </span>
          <h2 id="on-schedule-title" className={styles.noteTitle}>
            {schedulingOnTime.title}
          </h2>
          <p className={styles.noteText}>{schedulingOnTime.body}</p>
        </section>
      </div>
    </div>
  );
}

/* ——— Emergency Scheduling ——— */

/** "How to Get an Emergency Appointment" beside the navy "$59 Emergency Visit Special" */
export function EmergencySteps() {
  return (
    <div className={styles.emergency}>
      <div className={`container ${styles.emergencyGrid}`}>
        <section className={styles.emergencySteps} aria-labelledby="emergency-how-title">
          <SectionHead id="emergency-how-title" eyebrow="Three steps" title={emergencySteps.title} />
          <Steps steps={emergencySteps.steps} layout="column" />
          <p className={styles.after} data-reveal="">
            {emergencySteps.after}
          </p>
        </section>

        <section className={styles.special} aria-labelledby="emergency-special-title" data-reveal="">
          <p className={styles.specialTag}>New patients only</p>
          <p className={styles.specialPrice} aria-hidden="true">
            <span className={styles.currency}>$</span>
            <span data-count={emergencySpecial.price}>{emergencySpecial.price}</span>
          </p>
          <h2 id="emergency-special-title" className={styles.specialTitle}>
            {emergencyOffer.title}
          </h2>
          <p className={styles.specialText}>{emergencyOffer.body}</p>
          <ul role="list" className={styles.specialList} aria-hidden="true">
            <li>
              <Icon name="check" size={18} />
              Exam
            </li>
            <li>
              <Icon name="check" size={18} />
              X-rays
            </li>
            <li>
              <Icon name="check" size={18} />
              One-time fee
            </li>
          </ul>
          <TextLink href={emergencyOffer.link.href} inverse>
            {emergencyOffer.link.label}
          </TextLink>
        </section>
      </div>
    </div>
  );
}

/** "Emergency Office Hours", then "Request an Emergency Visit Online" (content order) */
export function EmergencyHoursForm() {
  return (
    <FormSection
      id="emergency-form-title"
      eyebrow="Request online"
      title={emergencyForm.title}
      tone="white"
      form={<AppointmentForm variant="emergency" note={emergencyForm.note} submitLabel="Request Emergency Visit" />}
      side={<HoursCard id="emergency-hours-title" title={emergencyHours.title} />}
      sideFirst
    />
  );
}

/** "Learn About Emergency Dental Care": a short band linking to the treatment page */
export function EmergencyLearn() {
  return (
    <section className={styles.learn} aria-labelledby="emergency-learn-title">
      <div className={`container ${styles.learnInner}`} data-reveal="">
        <span className={styles.learnIcon} aria-hidden="true">
          <Icon name="book" size={24} />
        </span>
        <div className={styles.learnCopy}>
          <h2 id="emergency-learn-title" className={styles.learnTitle}>
            {emergencyLearn.title}
          </h2>
          <p>
            {emergencyLearn.before} <Link href={emergencyLearn.link.href}>{emergencyLearn.link.label}</Link>{" "}
            {emergencyLearn.after}
          </p>
        </div>
      </div>
    </section>
  );
}
