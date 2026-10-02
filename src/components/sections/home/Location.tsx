import { homeLocation } from "@/content/pages/home";
import { contactLinks, hoursTable, practice } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { HoursToday } from "./HoursToday";
import { MapFacade } from "./MapFacade";
import styles from "./Location.module.css";

export function Location() {
  return (
    <section className={styles.section} aria-labelledby="location-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <p className="eyebrow" data-reveal="">
            Visit us
          </p>
          <h2 id="location-title" data-reveal="">
            {homeLocation.title}
          </h2>

          <div className={styles.details} data-reveal="">
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

            <p className={styles.fax}>
              <span className={styles.label}>Fax</span> {practice.fax.display}
            </p>
          </div>

          <table className={styles.hours} data-reveal="">
            <caption className="visually-hidden">Office hours</caption>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Hours</th>
              </tr>
            </thead>
            <tbody>
              {hoursTable.map((row) => (
                <tr key={row.label} data-days={row.days.join(" ")}>
                  <th scope="row">{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <HoursToday />

          <div data-reveal="">
            <Button href={contactLinks.directions} icon="map" track="directions_click">
              Get Directions
            </Button>
          </div>
        </div>

        <div className={styles.map} data-reveal="">
          <MapFacade />
        </div>
      </div>
    </section>
  );
}
