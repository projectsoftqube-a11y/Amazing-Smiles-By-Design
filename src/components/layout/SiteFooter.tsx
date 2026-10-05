import Link from "@/components/ui/SiteLink";
import { footerNav, legalNav } from "@/content/navigation";
import { homeAreas } from "@/content/pages/home";
import { linkTo } from "@/content/routes";
import { contactLinks, hoursTable, practice } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { ProtectedEmail } from "@/components/ui/ProtectedEmail";
import { Logo } from "./Logo";
import styles from "./SiteFooter.module.css";

/**
 * Light footer on the same ice-blue background as the services section. Holds the full NAP as text, matching the Google Business Profile character for
 * character. Column titles are paragraphs, not headings, so each page keeps the exact
 * heading outline from its content file.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={`container ${styles.main}`}>
        {/* Practice column */}
        <div className={styles.brand} data-reveal="">
          <Logo className={styles.logo} priority={false} />

          {/* Reads exactly as napLine: "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020, (215) 639-5331" */}
          <address className={styles.nap}>
            <span className={styles.napName}>{practice.name},</span>{" "}
            <span>{practice.address.street},</span>{" "}
            <span>
              {practice.address.city}, {practice.address.region} {practice.address.postalCode},
            </span>{" "}
            <a href={contactLinks.call} className={styles.napPhone} data-track="call_click">
              {practice.phone.display}
            </a>
          </address>

          <ul role="list" className={styles.quick}>
            <li>
              {/* Protected: assembled in the browser so scrapers can't read it from the HTML */}
              <ProtectedEmail icon={<Icon name="mail" size={16} />} />
            </li>
            <li>
              <span>
                <Icon name="phone" size={16} />
                Fax {practice.fax.display}
              </span>
            </li>
            <li>
              <a href={contactLinks.directions} data-track="directions_click" target="_blank" rel="noopener">
                <Icon name="map" size={16} />
                Get directions<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>

          {/* Office hours card */}
          <div className={styles.hours} data-reveal="">
            <p className={styles.hoursTitle}>
              <Icon name="clock" size={16} />
              Office hours
            </p>
            <dl className={styles.hoursList}>
              {hoursTable.map((row) => (
                <div key={row.label} data-closed={row.value === "Closed" ? "" : undefined}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Link columns, with the service-area card underneath */}
        <div className={styles.side}>
          <nav aria-label="Footer" className={styles.nav}>
            {footerNav.map((column) => (
              <div key={column.title} data-reveal="">
                <p className={styles.title}>{column.title}</p>
                <ul role="list">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className={styles.areas} data-reveal="">
            <div className={styles.areasHead}>
              <p className={styles.areasTitle}>
                <Icon name="pin" size={18} />
                Areas we serve
              </p>
              <Link href={homeAreas.link.href} className={styles.areasAll}>
                {homeAreas.link.label}
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
            <ul role="list" className={styles.towns}>
              {homeAreas.towns.map((town) => (
                <li key={town.name}>
                  <Link href={town.path ? linkTo(town.path) : "/"}>{town.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.base}>
        <div className={`container ${styles.baseInner}`}>
          <p>
            © {year} {practice.name}. All rights reserved.
          </p>
          <ul role="list" className={styles.legal}>
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p className={styles.credit}>
            Design and Developed By{" "}
            <a href="https://www.softqubes.com/" target="_blank" rel="noopener">
              Softqube Technologies LLC<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
