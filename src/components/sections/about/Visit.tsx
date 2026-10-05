import Link from "@/components/ui/SiteLink";
import { aboutVisit } from "@/content/pages/about";
import { homeAreas } from "@/content/pages/home";
import { linkTo } from "@/content/routes";
import { contactLinks, hoursTable, practice } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HoursToday } from "../home/HoursToday";
import styles from "./Visit.module.css";

/**
 * "Visit Our Office in Bensalem": NAP and hours as plain text, identical to the
 * homepage and footer (Developer Handoff), then the new-patient note with the
 * section's one CTA and its three links.
 */
export function Visit() {
  return (
    <section className={styles.section} aria-labelledby="visit-title">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow" data-reveal="">
            Visit us
          </p>
          <h2 id="visit-title" data-reveal="">
            {aboutVisit.title}
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Address, hours and areas */}
          <div className={styles.info} data-reveal="">
            <div className={styles.infoHead}>
              <span className={styles.infoIcon} aria-hidden="true">
                <Icon name="pin" size={22} />
              </span>
              {/* Same NAP string as the homepage, footer and Google Business Profile */}
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
            </div>

            <div className={styles.hoursBlock}>
              <p className={styles.blockTitle}>
                <Icon name="clock" size={16} />
                Hours
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

            {/* Areas we serve: the content file's sentence, then the towns as links (as in the footer) */}
            <div className={styles.areas}>
              <div className={styles.areasHead}>
                <p className={styles.blockTitle}>
                  <Icon name="pin" size={16} />
                  Areas we serve
                </p>
                <Link href={homeAreas.link.href} className={styles.areasAll}>
                  {homeAreas.link.label}
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
              <p className={styles.areasLine}>{aboutVisit.areasLine}</p>
              <ul role="list" className={styles.towns}>
                {homeAreas.towns.map((town) => (
                  <li key={town.name}>
                    <Link href={town.path ? linkTo(town.path) : "/"}>{town.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* New patients: the section's call to action */}
          <div className={styles.cta} data-reveal="">
            <span className={styles.ctaIcon} aria-hidden="true">
              <Icon name="calendar" size={24} />
            </span>
            <p className={styles.ctaText}>{aboutVisit.newPatients}</p>
            <Button href={aboutVisit.cta.href} variant="inverse" icon="calendar" track="appointment_click">
              {aboutVisit.cta.label}
            </Button>
            <ul role="list" className={styles.links}>
              {aboutVisit.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.linkIcon} aria-hidden="true">
                      <Icon name={link.icon as IconName} size={18} />
                    </span>
                    <span className={styles.linkLabel}>{link.label}</span>
                    <Icon name="arrowRight" size={16} className={styles.linkArrow} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
