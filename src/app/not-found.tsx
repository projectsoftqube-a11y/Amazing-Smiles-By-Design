import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import Link from "@/components/ui/SiteLink";
import { contactLinks, practice } from "@/content/site";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${practice.name}` },
  description: "The page you're looking for may have moved or no longer exists. Let's get you back on track.",
  robots: { index: false },
};

// Wording approved as-is in "Developer Questions - Answered" (section C)
const LINKS: { label: string; href: string; icon: IconName }[] = [
  { label: "Find a service", href: "/general-dentistry/", icon: "tooth" },
  { label: "New patients", href: "/patient-information/new-patients/", icon: "family" },
  { label: "Book an appointment", href: "/patient-information/scheduling/", icon: "calendar" },
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

          <h1 id="not-found-title" className={styles.title}>
            That Page <em>Couldn&rsquo;t Be Found</em>
          </h1>
          <p className={styles.lead}>
            The page you&rsquo;re looking for may have moved or no longer exists. Let&rsquo;s get you back on track.
          </p>
          <p className={styles.contact}>
            <Icon name="phone" size={18} />
            <span>
              Or call or text{" "}
              <a href={contactLinks.call} data-track="call_click">
                {practice.phone.display}
              </a>{" "}
              and we&rsquo;ll help.
            </span>
          </p>
          <div className={styles.actions}>
            <Button href="/" icon="home">
              Back to Home
            </Button>
          </div>
        </div>

        <nav className={styles.popular} aria-label="Helpful pages">
          <ul role="list">
            {LINKS.map((page) => (
              <li key={page.href}>
                <Link href={page.href}>
                  <span className={styles.popularIcon} aria-hidden="true">
                    <Icon name={page.icon} size={20} />
                  </span>
                  <span>{page.label}</span>
                  <Icon name="arrowRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
