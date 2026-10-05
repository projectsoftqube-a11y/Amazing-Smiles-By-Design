import Link from "@/components/ui/SiteLink";
import { contactAreas, contactFind, contactHours, contactReach } from "@/content/pages/contact";
import { homeAreas } from "@/content/pages/home";
import { linkTo } from "@/content/routes";
import { contactLinks, hoursTable, practice } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProtectedEmail } from "@/components/ui/ProtectedEmail";
import { HoursToday } from "../home/HoursToday";
import styles from "./ContactSections.module.css";

/** Hero aside: the quickest ways to reach the office */
export function ContactCard() {
  return (
    <div className={styles.card}>
      <p className={styles.cardLabel}>
        <span className={styles.liveDot} aria-hidden="true" />
        Call or text
      </p>
      <a href={contactLinks.call} className={styles.cardPhone} data-track="call_click">
        {practice.phone.display}
      </a>
      <div className={styles.cardActions}>
        <a href={contactLinks.call} className={styles.cardChip} data-track="call_click">
          <Icon name="phone" size={16} />
          Call
        </a>
        <a href={contactLinks.text} className={styles.cardChip} data-track="text_click">
          <Icon name="message" size={16} />
          Text
        </a>
      </div>
      <ul role="list" className={styles.cardList}>
        <li>
          <ProtectedEmail className={styles.cardRow} icon={<Icon name="mail" size={18} />} />
        </li>
        <li>
          <span className={styles.cardRow}>
            <Icon name="pin" size={18} />
            <span>
              {practice.address.street}, {practice.address.city}, {practice.address.region} {practice.address.postalCode}
            </span>
          </span>
        </li>
        <li>
          <a href={contactLinks.directions} className={styles.cardRow} data-track="directions_click" target="_blank" rel="noopener">
            <Icon name="map" size={18} />
            <span>
              Get directions<span className="visually-hidden"> (opens in a new tab)</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

/** "How to Reach Us" beside "Office Hours" */
export function ReachAndHours() {
  return (
    <div className={styles.reach}>
      <div className={`container ${styles.reachGrid}`}>
        <section className={styles.reachCard} aria-labelledby="reach-title" data-reveal="">
          <h2 id="reach-title" className={styles.cardTitle}>
            {contactReach.title}
          </h2>
          <dl className={styles.ways}>
            <div className={styles.way}>
              <span className={styles.wayIcon} aria-hidden="true">
                <Icon name="phone" size={20} />
              </span>
              <dt>Phone (call or text)</dt>
              <dd>
                <a href={contactLinks.call} className={styles.strongLink} data-track="call_click">
                  {practice.phone.display}
                </a>
              </dd>
            </div>
            <div className={styles.way}>
              <span className={styles.wayIcon} aria-hidden="true">
                <Icon name="message" size={20} />
              </span>
              <dt>Fax</dt>
              <dd>{practice.fax.display}</dd>
            </div>
            <div className={`${styles.way} ${styles.wayWide}`}>
              <span className={styles.wayIcon} aria-hidden="true">
                <Icon name="mail" size={20} />
              </span>
              <dt>Email</dt>
              <dd>
                <ProtectedEmail />
              </dd>
            </div>
            <div className={`${styles.way} ${styles.wayWide}`}>
              <span className={styles.wayIcon} aria-hidden="true">
                <Icon name="pin" size={20} />
              </span>
              <dt>Address</dt>
              <dd>
                {practice.name}, {practice.address.street}, {practice.address.city}, {practice.address.region}{" "}
                {practice.address.postalCode}
              </dd>
            </div>
            <div className={`${styles.way} ${styles.wayWide}`}>
              <span className={styles.wayIcon} aria-hidden="true">
                <Icon name="calendar" size={20} />
              </span>
              <dt>Appointments</dt>
              <dd>
                <Link href={contactReach.appointmentsLink.href} data-track="appointment_click">
                  {contactReach.appointmentsLink.label}
                </Link>
              </dd>
            </div>
            <div className={`${styles.way} ${styles.wayWide} ${styles.wayAlert}`}>
              <span className={styles.wayIcon} aria-hidden="true">
                <Icon name="alert" size={20} />
              </span>
              <dt>Dental emergency</dt>
              <dd>
                Call or text{" "}
                <a href={contactLinks.call} data-track="emergency_click">
                  {practice.phone.display}
                </a>
                , or see <Link href={contactReach.emergencyLink.href}>{contactReach.emergencyLink.label}</Link>
              </dd>
            </div>
          </dl>
        </section>

        <section className={styles.hoursCard} aria-labelledby="hours-title" data-reveal="">
          <span className={styles.hoursIcon} aria-hidden="true">
            <Icon name="clock" size={22} />
          </span>
          <h2 id="hours-title" className={styles.cardTitle}>
            {contactHours.title}
          </h2>
          <table className={styles.hours}>
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
        </section>
      </div>
    </div>
  );
}

/**
 * "Find Our Office on Bristol Road" with "Serving Bensalem & Nearby Communities"
 * inside it (client request, 5 Oct 2026): copy, Get Directions and the areas card on
 * the left, the map on the right.
 */
export function FindUs() {
  return (
    <section className={styles.find} aria-labelledby="find-title">
      <div className={`container ${styles.findGrid}`}>
        <div className={styles.findCopy}>
          <p className="eyebrow" data-reveal="">
            Directions
          </p>
          <h2 id="find-title" data-reveal="">
            {contactFind.title}
          </h2>
          <p className={styles.lead} data-reveal="">
            {contactFind.body}
          </p>
          <div data-reveal="">
            <Button href={contactLinks.directions} icon="map" track="directions_click">
              {contactFind.directionsLabel}
            </Button>
          </div>

          <section className={styles.areas} aria-labelledby="contact-areas-title" data-reveal="">
            <div className={styles.areasHead}>
              <span className={styles.areasIcon} aria-hidden="true">
                <Icon name="pin" size={20} />
              </span>
              <h2 id="contact-areas-title" className={styles.areasTitle}>
                {contactAreas.title}
              </h2>
            </div>
            <p className={styles.areasText}>{contactAreas.sentence}</p>
            <ul role="list" className={styles.towns}>
              {homeAreas.towns.map((town) => (
                <li key={town.name}>
                  <Link href={town.path ? linkTo(town.path) : "/"} className={town.path ? undefined : styles.townHome}>
                    <Icon name="pin" size={14} />
                    {town.name}
                  </Link>
                </li>
              ))}
            </ul>
            <TextLink href={contactAreas.link.href}>{contactAreas.link.label}</TextLink>
          </section>
        </div>

        <div className={styles.map} data-reveal="">
          <iframe
            className={styles.mapFrame}
            src={contactLinks.mapEmbed}
            title={`Google Map showing ${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
