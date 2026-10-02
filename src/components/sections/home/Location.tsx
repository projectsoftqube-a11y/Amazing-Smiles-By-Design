import { homeLocation } from "@/content/pages/home";
import { contactLinks, hoursTable, practice } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HoursToday } from "./HoursToday";
import styles from "./Location.module.css";

export function Location() {
  return (
    <section className={styles.section} aria-labelledby="location-title">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headCopy}>
            <p className="eyebrow" data-reveal="">
              Visit us
            </p>
            <h2 id="location-title" data-reveal="">
              {homeLocation.title}
            </h2>
          </div>
          <div data-reveal="">
            <Button href={contactLinks.directions} icon="map" track="directions_click">
              Get Directions
            </Button>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Contact card */}
          <div className={styles.contact} data-reveal="">
            <span className={styles.cardIcon} aria-hidden="true">
              <Icon name="pin" size={22} />
            </span>
            {/* Same NAP string as the footer and the Google Business Profile */}
            <address className={styles.address}>
              <span className={styles.name}>{practice.name},</span>{" "}
              <span>{practice.address.street},</span>{" "}
              <span>
                {practice.address.city}, {practice.address.region} {practice.address.postalCode},
              </span>{" "}
              {/* The "Phone (call or text)" label is CSS-generated so the NAP text stays exact */}
              <a href={contactLinks.call} className={styles.phoneLine} data-track="call_click">
                {practice.phone.display}
              </a>
            </address>
            <div className={styles.contactFoot}>
              <p className={styles.fax}>
                <span className={styles.label}>Fax</span> {practice.fax.display}
              </p>
              <a href={contactLinks.text} className={styles.textLink} data-track="text_click">
                <Icon name="message" size={16} />
                Send a text
              </a>
            </div>
          </div>

          {/* Hours card */}
          <div className={styles.hoursCard} data-reveal="">
            <p className={styles.hoursTitle}>
              <Icon name="clock" size={18} />
              Office hours
            </p>
            <table className={styles.hours}>
              <caption className="visually-hidden">Office hours</caption>
              <thead className="visually-hidden">
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
          </div>

          {/* Real Google Map (keyless embed URL: no API key or billing account). Lazy, so it
              loads only as the visitor scrolls near it. */}
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
      </div>
    </section>
  );
}
