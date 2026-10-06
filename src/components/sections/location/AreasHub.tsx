import type { CSSProperties } from "react";
import { TitleText } from "@/components/sections/service/DesignKit";
import { Icon } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import type { ContentBlock, ServiceSection } from "@/content/service-page";
import { contactLinks, hours, practice } from "@/content/site";
import { Blocks } from "./LocationBlocks";
import s from "./Location.module.css";

type Table = Extract<ContentBlock, { kind: "table" }>;

const tableOf = (section: ServiceSection) =>
  section.blocks.find((block): block is Table => block.kind === "table");
const minutes = (cell: string) => Number(cell.match(/(\d+)\s*min/)?.[1] ?? 0);

/** Hero side card: the four areas with their town counts, linking down to each table */
export function RegionsCard({ regions }: { regions: ServiceSection[] }) {
  return (
    <div className={s.driveStage}>
      <span className={s.drivePlate} aria-hidden="true" />
      <div className={s.drive}>
        <p className={s.driveLabel}>
          <Icon name="map" size={16} />
          Drive times to our office
        </p>
        <ul role="list" className={s.regionLinks}>
          {regions.map((region) => (
            <li key={region.id}>
              <a href={`#${region.id}`}>
                <span>{region.title}</span>
                <strong>{tableOf(region)?.rows.length ?? 0}</strong>
                <Icon name="arrowDown" size={16} />
              </a>
            </li>
          ))}
        </ul>
        <p className={s.driveNote}>Google Maps estimates · change with traffic</p>
        <div className={s.driveActions}>
          <a href={contactLinks.directions} className={s.driveButton} target="_blank" rel="noopener noreferrer">
            <Icon name="map" size={18} />
            Get directions
          </a>
          <a href={contactLinks.call} className={s.driveCall} data-track="call_click">
            <Icon name="phone" size={18} />
            {practice.phone.display}
          </a>
        </div>
      </div>
    </div>
  );
}

/** One area's drive-time table: real <table> with crawlable town links; a bar shows the drive */
function DriveTable({ block, longest }: { block: Table; longest: number }) {
  return (
    <div className={s.boardTableWrap}>
      <table className={s.boardTable}>
        <thead>
          <tr>
            {block.head.map((cell) => (
              <th key={cell} scope="col">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map(([area, time, distance]) => (
            <tr key={area}>
              <th scope="row">
                <Rich text={area} />
              </th>
              <td>
                <span className={s.time}>{time}</span>
                <span className={s.bar} aria-hidden="true">
                  <i style={{ "--w": `${Math.round((minutes(time) / longest) * 100)}%` } as CSSProperties} />
                </span>
              </td>
              <td className={s.distance}>{distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The four drive-time tables as one board, followed by the office map */
export function RegionBoard({ regions }: { regions: ServiceSection[] }) {
  const longest = Math.max(...regions.flatMap((region) => tableOf(region)?.rows.map((row) => minutes(row[1])) ?? []));
  return (
    <div className={s.board}>
      <div className="container">
        <div className={s.boardGrid}>
          {regions.map((region, i) => {
            const table = tableOf(region);
            const index = region.blocks.findIndex((block) => block.kind === "table");
            return (
              <section
                key={region.id}
                aria-labelledby={region.id}
                className={`${s.region} ${s[`region${i}`]}`}
                data-reveal=""
              >
                <h2 id={region.id} className={s.regionTitle}>
                  <TitleText text={region.title} />
                </h2>
                <Blocks blocks={region.blocks.slice(0, Math.max(index, 0))} />
                {table ? <DriveTable block={table} longest={longest} /> : null}
                <Blocks blocks={region.blocks.slice(index + 1)} />
              </section>
            );
          })}
        </div>

        {/* Real Google Map of the office below the directions (handoff) */}
        <div className={`${s.mapCard} ${s.mapWide}`} data-reveal="">
          <iframe
            className={s.mapFrame}
            src={contactLinks.mapEmbed}
            title={`Google Map showing ${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className={s.mapBar}>
            <p className={s.mapAddress}>
              <Icon name="pin" size={18} />
              <span>
                {practice.name}, {practice.address.street}, {practice.address.city}, {practice.address.region}{" "}
                {practice.address.postalCode}
              </span>
            </p>
            <a href={contactLinks.directions} className={s.mapButton} target="_blank" rel="noopener noreferrer">
              Get directions
              <Icon name="arrowUpRight" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const DAY = { Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun" };
const clock = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return `${h % 12 || 12}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h < 12 ? "am" : "pm"}`;
};

/** "Office Hours": the hours line from the content beside a week strip built from site.ts */
export function OfficeHours({ section }: { section: ServiceSection }) {
  return (
    <section className={s.hours} aria-labelledby={section.id}>
      <div className="container">
        <div className={s.hoursGrid}>
          <div className={s.hoursCopy}>
            <p className="eyebrow" data-reveal="">
              Visit us
            </p>
            <h2 id={section.id} className={s.routeTitle} data-reveal="">
              <TitleText text={section.title} />
            </h2>
            <div data-reveal="">
              <Blocks blocks={section.blocks} />
            </div>
          </div>
          <ol className={s.week} aria-hidden="true" data-reveal="">
            {hours.map((day) => (
              <li key={day.day} className={day.opens ? s.open : s.closed}>
                <span className={s.day}>{DAY[day.day]}</span>
                {day.opens && day.closes ? (
                  <>
                    <span className={s.from}>{clock(day.opens)}</span>
                    <span className={s.bar2} />
                    <span className={s.to}>{clock(day.closes)}</span>
                  </>
                ) : (
                  <span className={s.shut}>Closed</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
