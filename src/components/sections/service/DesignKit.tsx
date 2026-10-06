import type { ReactNode } from "react";
import { Rich } from "@/components/ui/Rich";
import type { ContentBlock, ServiceSection } from "@/content/service-page";
import styles from "./SectionDesigns.module.css";

/**
 * Shared building blocks for the bespoke section designs: block helpers, the
 * section shell (tone + eyebrow + H2) and small text components.
 */

export type DesignProps = { section: ServiceSection; eyebrow?: string };

export type H3Block = Extract<ContentBlock, { kind: "h3" }>;
export type ListBlock = Extract<ContentBlock, { kind: "ul" | "ol" }>;

export const paragraphs = (blocks: ContentBlock[]) =>
  blocks.filter((block): block is Extract<ContentBlock, { kind: "p" }> => block.kind === "p");
export const firstList = (blocks: ContentBlock[]) =>
  blocks.find((block): block is ListBlock => block.kind === "ul" || block.kind === "ol");
export const subs = (blocks: ContentBlock[]) => blocks.filter((block): block is H3Block => block.kind === "h3");
/** Paragraphs before and after the first list */
export function aroundList(blocks: ContentBlock[]) {
  const index = blocks.findIndex((block) => block.kind === "ul" || block.kind === "ol");
  const own = blocks.filter((block) => block.kind !== "h3");
  if (index === -1) return { before: paragraphs(own), after: [] as ReturnType<typeof paragraphs> };
  return { before: paragraphs(blocks.slice(0, index)), after: paragraphs(blocks.slice(index + 1)) };
}

/** Bold lead-in ("Insurance:") with its trailing colon kept in the text but hidden visually */
export function Lead({ text, className }: { text: string; className?: string }) {
  const punct = /[:.]$/.test(text);
  return (
    <strong className={className}>
      {punct ? text.slice(0, -1) : text}
      {punct ? <span className={styles.punct}>{text.slice(-1)}</span> : null}
    </strong>
  );
}

export const P = ({ text, className }: { text: string; className?: string }) => (
  <p className={className ?? styles.text} data-reveal="">
    <Rich text={text} />
  </p>
);

export function Shell({
  section,
  eyebrow,
  tone = "white",
  children,
}: {
  section: ServiceSection;
  eyebrow?: string;
  tone?: "white" | "ice" | "navy";
  children: (head: ReactNode) => ReactNode;
}) {
  const head = (
    <div className={styles.head}>
      {eyebrow ? (
        <p className={`eyebrow ${tone === "navy" ? "eyebrow-inverse" : ""}`} data-reveal="">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={section.id} className={styles.title} data-reveal="">
        {section.title}
      </h2>
    </div>
  );
  return (
    <section className={`${styles.section} ${styles[`tone-${tone}`]}`} aria-labelledby={section.id}>
      <div className="container">{children(head)}</div>
    </section>
  );
}

