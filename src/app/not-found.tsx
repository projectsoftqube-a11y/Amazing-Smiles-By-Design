import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import Link from "@/components/ui/SiteLink";
import { appointmentHref } from "@/content/navigation";
import { contactLinks, practice } from "@/content/site";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${practice.name}` },
  robots: { index: false },
};

const POPULAR: { label: string; href: string; icon: IconName }[] = [
  { label: "General Dentistry", href: "/general-dentistry/", icon: "tooth" },
  { label: "Restorative Dentistry", href: "/restorative-dentistry/", icon: "shield" },
  { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry/", icon: "sparkle" },
  { label: "Emergency Dentistry", href: "/general-dentistry/emergency-dentistry/", icon: "alert" },
  { label: "Patient Information", href: "/patient-information/", icon: "clipboard" },
  { label: "Areas We Serve", href: "/areas-we-serve/", icon: "map" },
];

// Upper front teeth, one missing (drawn as a dashed outline)
const TEETH = [0, 22, 44, 66, 88];

export default function NotFound() {
  return (
    <section className={styles.section} aria-labelledby="not-found-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <div className={styles.art} aria-hidden="true">
            <svg viewBox="-6 -10 120 64" focusable="false">
              <path d="M-6-10h120v12c-20-6-40-2-60-2S14-4-6 2Z" fill="#f3d3cf" />
              {TEETH.map((x, i) =>
                i === 2 ? (
                  <path
                    key={x}
                    d="M0 0h18v26c0 7-4 11-9 11s-9-4-9-11V0Z"
                    transform={`translate(${x} 0)`}
                    fill="none"
                    stroke="#5a96c4"
                    strokeWidth="1.4"
                    strokeDasharray="3 3"
                  />
                ) : (
                  <path
                    key={x}
                    d="M0 0h18v26c0 7-4 11-9 11s-9-4-9-11V0Z"
                    transform={`translate(${x} 0)`}
                    fill="#ffffff"
                    stroke="#9fb3c6"
                    strokeWidth="1.4"
                  />
                ),
              )}
            </svg>
            <span className={styles.code}>404</span>
          </div>

          <p className="eyebrow">Error 404</p>
          <h1 id="not-found-title" className={styles.title}>
            We couldn&rsquo;t find <em>that page</em>
          </h1>
          <p className={styles.lead}>
            The page may have moved. You can head back to the home page, or call or text us at {practice.phone.display}.
          </p>
          <div className={styles.actions}>
            <Button href="/" icon="home">
              Back to the home page
            </Button>
            <Button href={appointmentHref} variant="secondary" icon="calendar" track="appointment_click">
              Request an Appointment
            </Button>
          </div>
          <div className={styles.contact}>
            <a href={contactLinks.call} data-track="call_click">
              <Icon name="phone" size={16} />
              Call {practice.phone.display}
            </a>
            <a href={contactLinks.text} data-track="call_click">
              <Icon name="message" size={16} />
              Text us
            </a>
          </div>
        </div>

        <nav className={styles.popular} aria-label="Popular pages">
          <p className={styles.popularLabel}>Popular pages</p>
          <ul role="list">
            {POPULAR.map((page) => (
              <li key={page.href}>
                <Link href={page.href}>
                  <span className={styles.popularIcon} aria-hidden="true">
                    <Icon name={page.icon} size={18} />
                  </span>
                  <span>{page.label}</span>
                  <Icon name="arrowRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/sitemap/" className={styles.sitemap}>
            See every page in the sitemap
            <Icon name="arrowRight" size={16} />
          </Link>
        </nav>
      </div>
    </section>
  );
}
