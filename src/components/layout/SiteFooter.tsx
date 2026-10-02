import Link from "next/link";
import { footerNav, legalNav } from "@/content/navigation";
import { contactLinks, hoursTable, practice } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./SiteFooter.module.css";

/**
 * Light footer (the logo only works on light backgrounds). Holds the full NAP as
 * text, matching the Google Business Profile character for character.
 * Column titles are paragraphs, not headings, so each page keeps the exact
 * heading outline from its content file.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
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
          <ul role="list" className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Call or text</span>
              <a href={contactLinks.text} data-track="text_click">
                Send a text to {practice.phone.display}
              </a>
            </li>
            <li>
              <span className={styles.contactLabel}>Fax</span>
              <span>{practice.fax.display}</span>
            </li>
          </ul>
          <a href={contactLinks.directions} className={styles.directions} data-track="directions_click" target="_blank" rel="noopener">
            Get directions<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>

        <div className={styles.hours}>
          <p className={styles.title}>Office hours</p>
          <dl>
            {hoursTable.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <nav aria-label="Footer" className={styles.nav}>
          {footerNav.map((column) => (
            <div key={column.title}>
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
        </div>
      </div>
    </footer>
  );
}
