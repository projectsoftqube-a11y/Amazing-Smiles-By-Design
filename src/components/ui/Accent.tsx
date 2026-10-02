import { Fragment, type CSSProperties, type ReactNode } from "react";
import styles from "./Accent.module.css";

/**
 * The italic phrase in a headline, echoing "By Design" in the logo.
 * `smile` draws the logo's tapered smile line under it (hero headlines only).
 */
export function Accent({ children, smile = false }: { children: ReactNode; smile?: boolean }) {
  return (
    <em className={smile ? `${styles.accent} ${styles.withSmile}` : styles.accent}>
      {children}
      {smile ? (
        <svg className={styles.smile} viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          {/* Same taper as the logo swoosh: thick through the middle, fine at both ends */}
          <path d="M2 10 C 70 22, 210 22, 298 6 C 210 16, 80 16, 2 10 Z" />
        </svg>
      ) : null}
    </em>
  );
}

/**
 * Splits text into words wrapped for the hero's line-rise entrance.
 * Pure CSS (no JS), so it runs at first paint and never delays LCP.
 */
export function RiseWords({ text, start = 0 }: { text: string; start?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className={styles.word}>
            <span className={styles.wordInner} style={{ "--i": start + i } as CSSProperties}>
              {word}
            </span>
          </span>
          {/* The space sits outside the inline-block mask, where it is not trimmed */}
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
