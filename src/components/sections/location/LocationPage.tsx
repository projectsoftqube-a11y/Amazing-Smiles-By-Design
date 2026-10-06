import type { CSSProperties, ReactNode } from "react";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { TitleText } from "@/components/sections/service/DesignKit";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import type { DriveFacts, LocationPageContent } from "@/content/location-page";
import type { ContentBlock, Cta, ServiceSection } from "@/content/service-page";
import { contactLinks, directionsFrom, practice } from "@/content/site";
import { faqPage, graph, locationPageSchema } from "@/lib/schema";
import { Blocks } from "./LocationBlocks";
import { ProblemLadder } from "./ProblemLadder";
import { GumCare, PhillyReasons } from "./TownSpecials";
import s from "./Location.module.css";

const isCall = (cta: Cta) => cta.href.startsWith("tel:");

/** "Langhorne, PA" → "Langhorne"; "Bustleton, Philadelphia" → "Bustleton" */
const shortName = (place: string) => place.replace(/, (PA|Philadelphia)$/, "");
/** Button label: "Directions from Langhorne", or "Get directions" when the name is long */
const directionsLabel = (place: string) =>
  shortName(place).length > 14 ? "Get directions" : `Directions from ${shortName(place)}`;
/** Origin for Google Maps directions */
const origin = (place: string) => (/, PA$/.test(place) ? place : `${place}, PA`);

/**
 * A town page (06 Locations): hero with the drive card, "Getting Here" beside the
 * office map, the remaining sections as a bento of cards, FAQs and the closing banner.
 * Every section keeps its H2 (and H3) from the content file.
 */
export function LocationPage({ content, drive }: { content: LocationPageContent; drive?: DriveFacts }) {
  const { meta, breadcrumb, hero, sections, faqs, finalCta, areaServed } = content;
  const place = breadcrumb[breadcrumb.length - 1].name;
  const slug = meta.path.replaceAll("/", "");
  const coreSchema = locationPageSchema({ meta, breadcrumb, areaServed });
  const faqSchema = graph(faqPage({ path: meta.path, items: faqs.items }));
  const [route, ...rest] = sections;

  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id={`${slug}-title`}
        breadcrumb={breadcrumb}
        eyebrow={`${drive?.region ?? "Areas we serve"} · ${practice.address.city}`}
        title={hero.title}
        intro={hero.intro}
        aside={<DriveCard place={place} drive={drive} route={route} />}
        actions={
          <>
            {hero.buttons.map((cta, index) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={index === 0 ? "primary" : "secondary"}
                icon={isCall(cta) ? "phone" : "calendar"}
                track={isCall(cta) ? "call_click" : "appointment_click"}
              >
                {cta.label}
              </Button>
            ))}
          </>
        }
      />

      <RouteSection section={route} place={place} />
      <CareBento sections={rest} />

      <Faq id={`${slug}-faq-title`} title={faqs.title} items={faqs.items} />
      <FinalCta
        id={`${slug}-book-title`}
        title={finalCta.title}
        body={finalCta.body}
        actions={
          <>
            {finalCta.buttons.map((cta, index) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={index === 0 ? "inverse" : "inverse-outline"}
                icon={isCall(cta) ? "phone" : "calendar"}
                track={isCall(cta) ? "call_click" : "appointment_click"}
              >
                {cta.label}
              </Button>
            ))}
          </>
        }
        links={finalCta.links}
      />
    </>
  );
}

/* ——— Hero side card: the drive from this town to the office ——— */

const linkLabel = (cell: string) => cell.replace(/^\[(.+)\]\(.+\)$/, "$1");

function DriveCard({ place, drive, route }: { place: string; drive?: DriveFacts; route: ServiceSection }) {
  // Northeast Philadelphia has no single drive: list its neighborhoods from its own table
  const table = route.blocks.find((block): block is Extract<ContentBlock, { kind: "table" }> => block.kind === "table");
  return (
    <div className={s.driveStage}>
      <span className={s.drivePlate} aria-hidden="true" />
      <div className={s.drive}>
        <p className={s.driveLabel}>
          <Icon name="map" size={16} />
          From {shortName(place)} to our office
        </p>
        <div className={s.trip} aria-hidden="true">
          <span className={s.tripStart}>{shortName(place)}</span>
          <svg className={s.tripLine} viewBox="0 0 200 40" preserveAspectRatio="none" focusable="false">
            <path d="M4 30C50 30 60 8 100 10s52 22 92 18" fill="none" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
          </svg>
          <span className={s.tripEnd}>
            <Icon name="pin" size={16} />
            {practice.address.city}
          </span>
        </div>

        {drive ? (
          <dl className={s.stats}>
            <div>
              <dt>Typical drive</dt>
              <dd>{drive.time}</dd>
            </div>
            <div>
              <dt>Distance</dt>
              <dd>{drive.distance}</dd>
            </div>
          </dl>
        ) : table ? (
          <ul role="list" className={s.driveList}>
            {table.rows.slice(0, 4).map((row) => (
              <li key={row[0]}>
                <span>{linkLabel(row[0])}</span>
                <strong>{row[1]}</strong>
              </li>
            ))}
          </ul>
        ) : null}

        <p className={s.driveNote}>Google Maps estimate · changes with traffic</p>
        <div className={s.driveActions}>
          <a href={directionsFrom(origin(place))} className={s.driveButton} target="_blank" rel="noopener noreferrer">
            <Icon name="map" size={18} />
            {directionsLabel(place)}
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

/* ——— "Getting Here": the route copy beside the office map ——— */

function RouteSection({ section, place }: { section: ServiceSection; place: string }) {
  const main = section.blocks.filter((block) => block.kind !== "h3");
  const subs = section.blocks.filter((block): block is Extract<ContentBlock, { kind: "h3" }> => block.kind === "h3");
  // A drive-time table needs the full width, so the map moves below it
  const table = main.some((block) => block.kind === "table");
  return (
    <section className={s.route} aria-labelledby={section.id}>
      <div className="container">
        <div className={`${s.routeGrid} ${table ? s.routeStacked : ""}`}>
          <div className={s.routeCopy}>
            <p className="eyebrow" data-reveal="">
              Directions
            </p>
            <h2 id={section.id} className={s.routeTitle} data-reveal="">
              <TitleText text={section.title} />
            </h2>
            <div className={s.routeBlocks} data-reveal="">
              <Blocks blocks={main} />
            </div>
            {subs.map((sub) => (
              <div key={sub.title} className={s.routeSub} data-reveal="">
                <span className={s.routeSubIcon} aria-hidden="true">
                  <Icon name="pin" size={18} />
                </span>
                <div>
                  <h3 className={s.routeSubTitle}>{sub.title}</h3>
                  <Blocks blocks={sub.blocks} />
                </div>
              </div>
            ))}
          </div>

          {/* Real Google Map of the office (handoff: below the directions; no service-area polygons) */}
          <div className={s.mapCard} data-reveal="">
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
                  {practice.address.street}, {practice.address.city}, {practice.address.region} {practice.address.postalCode}
                </span>
              </p>
              <a href={directionsFrom(origin(place))} className={s.mapButton} target="_blank" rel="noopener noreferrer">
                {directionsLabel(place)}
                <Icon name="arrowUpRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— The other sections as a bento of cards ——— */

type Tone = "urgent" | "pay" | "local" | "plain";

const TOPICS: [RegExp, IconName, Tone][] = [
  [/^(?!.*prevent).*(emergenc|tooth pain|can't wait|goes wrong|urgent|tooth trouble|call first)/i, "alert", "urgent"],
  [/insurance|paying|payment|plans?\b|financ/i, "wallet", "pay"],
  [/implant|denture|replacing|saving|repair|problem tooth|restorative|more than a cleaning/i, "tooth", "plain"],
  [/cosmetic|veneer|invisalign|brighter|straighter/i, "sparkle", "plain"],
  [/kids|children|family|parents|prevent|routine|everyday|checkup|first visit|gums|stage|quick visits|everything/i, "family", "plain"],
  [/about|borough|township|why|southampton|services|one office/i, "pin", "local"],
];

function topicOf(title: string): { icon: IconName; tone: Tone } {
  const match = TOPICS.find(([pattern]) => pattern.test(title));
  return match ? { icon: match[1], tone: match[2] } : { icon: "check", tone: "plain" };
}

const textLength = (blocks: ContentBlock[]): number =>
  blocks.reduce((sum, block) => {
    if (block.kind === "p" || block.kind === "note") return sum + block.text.length;
    if (block.kind === "ul" || block.kind === "ol") return sum + block.items.join(" ").length;
    if (block.kind === "h3") return sum + textLength(block.blocks);
    return sum;
  }, 0);

const isLeadList = (items: string[]) => items.filter((item) => item.startsWith("**")).length * 2 >= items.length;

/**
 * A heavy card needs the full width: a table, steps, three or more lead-in items
 * ("**Close to home:** ...") or long text. Paired next to a short card it would leave
 * the short one mostly empty.
 */
const isHeavy = (section: ServiceSection) =>
  section.id in SPECIAL ||
  section.blocks.some(
    (block) =>
      block.kind === "table" ||
      block.kind === "ol" ||
      (block.kind === "ul" && block.items.length >= 3 && isLeadList(block.items)),
  ) ||
  textLength(section.blocks) > 450;

/** Roughly how tall a card renders: visible text (link labels, not URLs), list rows and call buttons */
const weight = (section: ServiceSection) => {
  const visible = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").length;
  const body = section.blocks.reduce((sum, block) => {
    if (block.kind === "p" || block.kind === "note") return sum + visible(block.text);
    if (block.kind === "ul" || block.kind === "ol") return sum + block.items.reduce((n, item) => n + visible(item) + 40, 0);
    return sum + 60;
  }, 0);
  return body + (topicOf(section.title).tone === "urgent" ? 160 : 0);
};

/**
 * Heavy cards span both columns; short cards pair up. A pair whose cards differ a lot
 * in length would leave the shorter one mostly empty, so both become full-width rows,
 * as does a card left without a partner.
 */
function layout(sections: ServiceSection[]) {
  const wide = sections.map(isHeavy);
  let pending = -1;
  wide.forEach((isWide, i) => {
    if (isWide) {
      if (pending !== -1) wide[pending] = true;
      pending = -1;
    } else if (pending === -1) {
      pending = i;
    } else {
      const [a, b] = [weight(sections[pending]), weight(sections[i])];
      if (Math.max(a, b) / Math.min(a, b) > 1.7) wide[pending] = wide[i] = true;
      pending = -1;
    }
  });
  if (pending !== -1) wide[pending] = true;
  return wide;
}

/** One-off section designs, by section id (each used on one town page) */
const SPECIAL: Record<string, (props: { section: ServiceSection }) => ReactNode> = {
  "fixing-a-problem-tooth-title": ProblemLadder,
  "why-northeast-philly-patients-choose-a-bensalem-dentist-title": PhillyReasons,
  "healthy-gums-for-life-title": GumCare,
};

function CareBento({ sections }: { sections: ServiceSection[] }) {
  const wide = layout(sections);
  return (
    <div className={s.care}>
      <div className="container">
        <div className={s.bento}>
          {sections.map((section, i) => {
            const Special = SPECIAL[section.id];
            if (Special) return <Special key={section.id} section={section} />;
            const { icon, tone } = topicOf(section.title);
            return (
              <section
                key={section.id}
                aria-labelledby={section.id}
                className={`${s.card} ${s[`tone-${tone}`]} ${wide[i] ? s.wide : ""}`}
                style={{ "--i": i } as CSSProperties}
                data-reveal=""
              >
                {wide[i] ? (
                  <WideCard section={section} icon={icon} tone={tone} />
                ) : (
                  <>
                    <CardHead section={section} icon={icon} />
                    <div className={s.cardBody}>
                      <Blocks blocks={section.blocks} inverse={tone === "urgent"} />
                      {tone === "urgent" ? <UrgentActions /> : null}
                    </div>
                  </>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CardHead({ section, icon }: { section: ServiceSection; icon: IconName }) {
  return (
    <div className={s.cardHead}>
      <span className={s.cardIcon} aria-hidden="true">
        <Icon name={icon} size={22} />
      </span>
      <h2 id={section.id} className={s.cardTitle}>
        <TitleText text={section.title} />
      </h2>
    </div>
  );
}

function UrgentActions() {
  return (
    <div className={s.urgentActions}>
      <a href={contactLinks.call} className={s.urgentCall} data-track="emergency_click">
        <Icon name="phone" size={18} />
        Call {practice.phone.display}
      </a>
      <a href={contactLinks.text} className={s.urgentText} data-track="emergency_click">
        <Icon name="message" size={18} />
        Text us
      </a>
    </div>
  );
}

/**
 * Full-width card: heading and intro side by side on top, then lists as tiles across
 * the card (three or four in a row) and any closing text, so no column is left empty.
 */
function WideCard({ section, icon, tone }: { section: ServiceSection; icon: IconName; tone: Tone }) {
  const split = section.blocks.findIndex((block) => block.kind === "ul" || block.kind === "ol" || block.kind === "table");
  const intro = split === -1 ? section.blocks : section.blocks.slice(0, split);
  const rest = split === -1 ? [] : section.blocks.slice(split);
  const urgent = tone === "urgent";
  return (
    <>
      <div className={s.wideTop}>
        <CardHead section={section} icon={icon} />
        {intro.length ? (
          <div className={s.wideIntro}>
            <Blocks blocks={intro} inverse={urgent} />
            {urgent && !rest.length ? <UrgentActions /> : null}
          </div>
        ) : null}
      </div>
      {rest.length ? (
        <div className={s.wideBody}>
          <Blocks blocks={rest} inverse={urgent} tiles />
          {urgent ? <UrgentActions /> : null}
        </div>
      ) : null}
    </>
  );
}
