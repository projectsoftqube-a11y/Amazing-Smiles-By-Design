import styles from "./SegmentBar.module.css";

const LOGO_SEGMENTS = ["#CFCFCF", "#D9D9D9", "#C1DEEE", "#5FA4CA", "#5A96C4", "#5A9AC6"];

/**
 * The logo ring's six segments laid out flat. `highlight` lights a subset, which
 * marks where an item sits in the grey → blue progression (e.g. a service hub).
 */
export function SegmentBar({ highlight, className }: { highlight: number[]; className?: string }) {
  return (
    <span className={[styles.bar, className].filter(Boolean).join(" ")} aria-hidden="true">
      {LOGO_SEGMENTS.map((color, index) => (
        <span
          key={index}
          className={styles.segment}
          style={{ background: color, opacity: highlight.includes(index) ? 1 : 0.35 }}
          data-on={highlight.includes(index) ? "" : undefined}
        />
      ))}
    </span>
  );
}
