import type { ReactNode } from "react";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich, splitLead } from "@/components/ui/Rich";
import type { ContentBlock, ServiceSection } from "@/content/service-page";
import { TitleText } from "./DesignKit";
import { DesignedSection, type DesignName } from "./SectionDesigns";
import styles from "./ServiceSections.module.css";

/**
 * Renders a treatment page's H2 sections from the content model. The layout of each
 * section follows its content, so every page gets a varied, premium rhythm without
 * per-page code:
 *   bold-led list ("**Insurance:** …")  → feature cards
 *   numbered list                        → vertical timeline
 *   plain list                           → checklist card beside the text
 *   paragraphs only                      → editorial split
 *   H3 sub-sections                      → cards below (one H3 → a callout)
 * Headings keep the content file's levels (H2 sections, H3 sub-sections).
 * Sections listed in `designs` get a bespoke layout instead (SectionDesigns).
 */
export type SectionDesignMap = Record<string, { design: DesignName; eyebrow?: string }>;

export function ServiceSections({
  sections,
  designs = {},
  startIndex = 0,
}: {
  sections: ServiceSection[];
  /** Bespoke designs for particular sections, by section id */
  designs?: SectionDesignMap;
  startIndex?: number;
}) {
  return (
    <>
      {sections.map((section, index) => {
        const custom = designs[section.id];
        return custom ? (
          <DesignedSection key={section.id} design={custom.design} section={section} eyebrow={custom.eyebrow} />
        ) : (
          <Section key={section.id} section={section} index={startIndex + index} />
        );
      })}
    </>
  );
}

type Layout = "cards" | "steps" | "checklist" | "prose";

const isLeadList = (block: ContentBlock) =>
  block.kind === "ul" && block.items.filter((item) => item.startsWith("**")).length >= Math.ceil(block.items.length / 2);

function layoutOf(blocks: ContentBlock[]): Layout {
  if (blocks.some((block) => block.kind === "ul" && isLeadList(block))) return "cards";
  if (blocks.some((block) => block.kind === "ol")) return "steps";
  if (blocks.some((block) => block.kind === "ul")) return "checklist";
  return "prose";
}

function Section({ section, index }: { section: ServiceSection; index: number }) {
  const main = section.blocks.filter((block) => block.kind !== "h3");
  const subs = section.blocks.filter((block): block is Extract<ContentBlock, { kind: "h3" }> => block.kind === "h3");
  const layout = layoutOf(main);
  const listIndex = main.findIndex((block) => block.kind === "ul" || block.kind === "ol");
  const before = listIndex === -1 ? main : main.slice(0, listIndex);
  const list = listIndex === -1 ? null : main[listIndex];
  const after = listIndex === -1 ? [] : main.slice(listIndex + 1);
  const tone = index % 2 === 0 ? styles.toneWhite : styles.toneIce;
  // Alternate the accent card colour so neighbouring sections never match
  const navy = index % 2 === 1;

  const head = (
    <div className={styles.head}>
      <h2 id={section.id} className={styles.title} data-reveal="">
        <TitleText text={section.title} />
      </h2>
    </div>
  );

  let body: ReactNode;
  if (!main.length) {
    // Only H3 sub-sections: the heading spans the width and the cards follow
    body = head;
  } else if (layout === "cards" && list?.kind === "ul") {
    body = (
      <>
        <div className={styles.cardsHead}>
          {head}
          <Prose blocks={before} lead />
        </div>
        <ul role="list" className={styles.cards}>
          {list.items.map((item, i) => (
            <FeatureCard key={item} text={item} featured={i === 0} />
          ))}
        </ul>
        {after.length ? (
          <div className={styles.afterWide}>
            <Prose blocks={after} />
          </div>
        ) : null}
      </>
    );
  } else if (layout === "steps" && list?.kind === "ol") {
    body = (
      <div className={styles.split}>
        <div className={styles.splitCopy}>
          {head}
          <Prose blocks={before} lead />
          <Prose blocks={after} />
        </div>
        <ol role="list" className={styles.timeline}>
          {list.items.map((item, i) => {
            const { lead, rest } = splitLead(item);
            return (
              <li key={item} className={styles.timelineStep} data-reveal="">
                <span className={styles.timelineIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={styles.timelineText}>
                  {lead ? <strong>{lead} </strong> : null}
                  <Rich text={rest} />
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  } else if (layout === "checklist" && list?.kind === "ul") {
    body = (
      <div className={styles.split}>
        <div className={styles.splitCopy}>
          {head}
          <Prose blocks={before} lead />
        </div>
        <div className={styles.splitSide}>
          <div className={`${styles.checkCard} ${navy ? styles.checkNavy : ""}`} data-reveal="">
            <ul role="list" className={`${styles.checkList} ${list.items.length > 6 ? styles.checkTwo : ""}`}>
              {list.items.map((item) => (
                <li key={item}>
                  <span className={styles.tick} aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  <span>
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Prose blocks={after} />
        </div>
      </div>
    );
  } else {
    body = (
      <div className={styles.split}>
        <div className={styles.splitCopy}>{head}</div>
        <div className={styles.splitSide}>
          <Prose blocks={main} lead />
        </div>
      </div>
    );
  }

  return (
    <section className={`${styles.section} ${tone}`} aria-labelledby={section.id}>
      <div className="container">
        {body}
        {subs.length === 1 ? <Callout sub={subs[0]} /> : null}
        {subs.length > 1 ? (
          <div className={`${styles.subs} ${subs.length >= 5 ? styles.subsThree : ""}`}>
            {subs.map((sub, i) => (
              <SubCard key={sub.title} sub={sub} index={i} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Paragraphs, notes and standalone links, in content order */
function Prose({ blocks, lead = false }: { blocks: ContentBlock[]; lead?: boolean }) {
  if (!blocks.length) return null;
  // The first paragraph gets the larger lead style when `lead` is set
  const leadIndex = lead ? blocks.findIndex((block) => block.kind === "p") : -1;
  return (
    <div className={styles.prose}>
      {blocks.map((block, i) => {
        if (block.kind === "p") {
          const className = i === leadIndex ? styles.lead : styles.text;
          return (
            <p key={i} className={className} data-reveal="">
              <Rich text={block.text} />
            </p>
          );
        }
        if (block.kind === "note") {
          return (
            <p key={i} className={styles.note} data-reveal="">
              <Icon name="info" size={18} />
              <em>
                <Rich text={block.text} />
              </em>
            </p>
          );
        }
        if (block.kind === "link") {
          return (
            <div key={i} data-reveal="">
              <TextLink href={block.href}>{block.label}</TextLink>
            </div>
          );
        }
        if (block.kind === "ul" || block.kind === "ol") return <BlockList key={i} block={block} />;
        if (block.kind === "table") return <DataTable key={i} block={block} />;
        return null;
      })}
    </div>
  );
}

/** A content table as a real <table> (row headers in the first column) */
export function DataTable({ block, className }: { block: Extract<ContentBlock, { kind: "table" }>; className?: string }) {
  return (
    <div className={`${styles.tableWrap} ${className ?? ""}`} data-reveal="">
      <table className={styles.table}>
        <thead>
          <tr>
            {block.head.map((cell, i) => (i === 0 && !cell ? <td key={i} /> : <th key={i} scope="col">{cell}</th>))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row">
                    <Rich text={cell} />
                  </th>
                ) : (
                  <td key={i}>
                    <Rich text={cell} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Lists inside sub-section cards */
function BlockList({ block }: { block: Extract<ContentBlock, { kind: "ul" | "ol" }> }) {
  const items = block.items.map((item) => (
    <li key={item}>
      {block.kind === "ul" ? (
        <span className={styles.dot} aria-hidden="true">
          <Icon name="check" size={12} />
        </span>
      ) : null}
      <span>
        <Rich text={item} />
      </span>
    </li>
  ));
  return block.kind === "ol" ? (
    <ol className={styles.miniSteps}>{items}</ol>
  ) : (
    <ul role="list" className={styles.miniList}>
      {items}
    </ul>
  );
}

const CARD_ICONS: [RegExp, IconName][] = [
  [/no insurance|without insurance|membership/i, "tag"],
  [/insurance/i, "shield"],
  [/financ/i, "wallet"],
  [/\$59|in pain|emergency/i, "alert"],
  [/brush/i, "sparkle"],
  [/floss|interproximal|water/i, "waves"],
  [/rinse|fluoride/i, "shield"],
  [/tongue|lips|palate|neck|tonsil|floor/i, "search"],
  [/scaling|deep cleaning/i, "tooth"],
  [/replac|implant/i, "tooth"],
  [/advanced/i, "plus"],
];

function iconFor(text: string): IconName {
  return CARD_ICONS.find(([pattern]) => pattern.test(text))?.[1] ?? "check";
}

/** One "**Lead:** text" item as a card */
function FeatureCard({ text, featured }: { text: string; featured: boolean }) {
  const { lead, rest } = splitLead(text);
  return (
    <li className={`${styles.card} ${featured ? styles.cardFeatured : ""}`} data-reveal="">
      <span className={styles.cardIcon} aria-hidden="true">
        <Icon name={iconFor(lead ?? rest)} size={22} />
      </span>
      {lead ? (
        <p className={styles.cardLead}>
          {/* Wording stays exact ("Insurance:"); the trailing colon is hidden visually on the card title */}
          {lead.replace(/[:.]$/, "")}
          {/[:.]$/.test(lead) ? <span className={styles.leadPunct}>{lead.slice(-1)}</span> : null}
        </p>
      ) : null}
      <p className={styles.cardText}>
        <Rich text={rest} />
      </p>
    </li>
  );
}

const SUB_ICONS: IconName[] = ["sparkle", "shield", "heart", "check", "clock", "info"];

function SubCard({ sub, index }: { sub: Extract<ContentBlock, { kind: "h3" }>; index: number }) {
  return (
    <div className={styles.sub} data-reveal="">
      <span className={styles.subIcon} aria-hidden="true">
        <Icon name={SUB_ICONS[index % SUB_ICONS.length]} size={20} />
      </span>
      <h3 className={styles.subTitle}>{sub.title}</h3>
      <Prose blocks={sub.blocks} />
    </div>
  );
}

/** A single H3 (e.g. "Are there alternatives?", "Cost") as a highlighted callout */
function Callout({ sub }: { sub: Extract<ContentBlock, { kind: "h3" }> }) {
  return (
    <div className={styles.callout} data-reveal="">
      <span className={styles.calloutIcon} aria-hidden="true">
        <Icon name="info" size={22} />
      </span>
      <div className={styles.calloutBody}>
        <h3 className={styles.subTitle}>{sub.title}</h3>
        <Prose blocks={sub.blocks} />
      </div>
    </div>
  );
}
