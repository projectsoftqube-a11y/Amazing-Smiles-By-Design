import { TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Rich, splitLead } from "@/components/ui/Rich";
import { Lead } from "@/components/sections/service/DesignKit";
import type { ContentBlock } from "@/content/service-page";
import s from "./Location.module.css";

type Table = Extract<ContentBlock, { kind: "table" }>;

/** A content table as a real <table>; scrolls sideways on phones with the first column pinned */
export function LocationTable({ block, className }: { block: Table; className?: string }) {
  return (
    <div className={`${s.tableWrap} ${className ?? ""}`} data-reveal="">
      <table className={s.table}>
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
                  // Short values ("About 11 min", "4.5 mi") stay on one line
                  <td key={i} className={cell.length <= 14 ? s.short : undefined}>
                    <Rich text={cell} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {block.head.length > 2 ? (
        <p className={s.swipeHint} aria-hidden="true">
          <Icon name="arrowRight" size={14} className={s.flip} />
          Swipe to compare
          <Icon name="arrowRight" size={14} />
        </p>
      ) : null}
    </div>
  );
}

const isLeadList = (items: string[]) => items.filter((item) => item.startsWith("**")).length * 2 >= items.length;

/** Every block of a section in content order: paragraphs, lists, steps, tables, notes and links */
export function Blocks({
  blocks,
  inverse = false,
  tiles = false,
}: {
  blocks: ContentBlock[];
  inverse?: boolean;
  /** Full-width cards: lists run across the card as tiles */
  tiles?: boolean;
}) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return (
              <p key={i} className={s.text}>
                <Rich text={block.text} />
              </p>
            );
          case "ul":
            return isLeadList(block.items) ? (
              <ul key={i} role="list" className={`${s.leadList} ${tiles ? s.tiles : ""}`}>
                {block.items.map((item) => {
                  const { lead, rest } = splitLead(item);
                  return (
                    <li key={item}>
                      {lead ? <Lead text={lead} className={s.leadName} /> : null}
                      {lead ? " " : null}
                      <span className={s.leadText}>
                        <Rich text={rest} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul key={i} role="list" className={`${s.ticks} ${tiles ? s.tickColumns : ""}`}>
                {block.items.map((item) => (
                  <li key={item}>
                    <span className={s.tick} aria-hidden="true">
                      <Icon name="check" size={12} />
                    </span>
                    <span>
                      <Rich text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            // Steps on a path; the list keeps its order semantically, no "01/02" numbering
            return (
              <ol key={i} className={s.path}>
                {block.items.map((item) => {
                  const { lead, rest } = splitLead(item);
                  return (
                    <li key={item}>
                      {lead ? <Lead text={lead} className={s.leadName} /> : null}
                      {lead ? " " : null}
                      <span className={s.leadText}>
                        <Rich text={rest} />
                      </span>
                    </li>
                  );
                })}
              </ol>
            );
          case "table":
            return <LocationTable key={i} block={block} />;
          case "note":
            return (
              <p key={i} className={s.note}>
                <Icon name="info" size={16} />
                <em>
                  <Rich text={block.text} />
                </em>
              </p>
            );
          case "link":
            return (
              <div key={i} className={s.linkRow}>
                <TextLink href={block.href} inverse={inverse}>
                  {block.label}
                </TextLink>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
