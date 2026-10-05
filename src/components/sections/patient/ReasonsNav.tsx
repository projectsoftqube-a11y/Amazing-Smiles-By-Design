"use client";

import { useEffect, useState, type CSSProperties } from "react";
import styles from "./WhySections.module.css";

/**
 * Sticky navigator beside the six reasons: a live "01 / 06" counter, a progress bar
 * and jump links, with the reason in the middle of the screen highlighted.
 * Server-rendered as plain links; the highlight is an enhancement.
 */
export function ReasonsNav({ items }: { items: { id: string; short: string }[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id)?.closest("section"))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(sections.indexOf(entry.target as HTMLElement));
        }
      },
      // A thin band across the middle of the viewport decides the active reason
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const pad = (value: number) => String(value).padStart(2, "0");

  return (
    <nav className={styles.nav} aria-label="Reasons to choose us" style={{ "--progress": (active + 1) / items.length } as CSSProperties}>
      <p className={styles.navCounter} aria-hidden="true">
        <span key={active} className={styles.navCurrent}>
          {pad(active + 1)}
        </span>
        <span className={styles.navTotal}>/ {pad(items.length)}</span>
      </p>
      <span className={styles.navBar} aria-hidden="true">
        <span className={styles.navFill} />
      </span>
      <ol role="list" className={styles.navList}>
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`${styles.navLink} ${index === active ? styles.navActive : ""}`}
              aria-current={index === active ? "true" : undefined}
            >
              <span className={styles.navIndex} aria-hidden="true">
                {pad(index + 1)}
              </span>
              {item.short}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
