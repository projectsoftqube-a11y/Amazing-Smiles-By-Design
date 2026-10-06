import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich, splitLead } from "@/components/ui/Rich";
import type { ContentBlock } from "@/content/service-page";
import { contactLinks, hours, practice } from "@/content/site";
import { aroundList, firstList, Lead, P, paragraphs, Shell, type DesignProps } from "./DesignKit";
import { TeethRow } from "./CosmeticArt";
import base from "./SectionDesigns.module.css";
import v from "./ServiceLocationDesigns.module.css";

/**
 * Bespoke designs for the service + location pages (07). Each is used on one page
 * only. Copy is rendered verbatim with its heading levels; small labels and drawings
 * are decorative (aria-hidden) and only restate facts from the page's own copy.
 */

type TableBlock = Extract<ContentBlock, { kind: "table" }>;
const tableOf = (blocks: ContentBlock[]) => blocks.find((block): block is TableBlock => block.kind === "table");
const after = (blocks: ContentBlock[], kind: ContentBlock["kind"]) => {
  const index = blocks.findIndex((block) => block.kind === kind);
  return index === -1 ? [] : blocks.slice(index + 1);
};

const Center = ({ head, children }: { head: ReactNode; children?: ReactNode }) => (
  <div className={base.centerHead}>
    {head}
    {children}
  </div>
);

function LeadText({ item, className }: { item: string; className?: string }) {
  const { lead, rest } = splitLead(item);
  return (
    <span className={className}>
      {lead ? <Lead text={lead} className={v.lead} /> : null}
      {lead ? " " : null}
      <span className={v.rest}>
        <Rich text={rest} />
      </span>
    </span>
  );
}

/** Paragraphs, notes and links after a table or list, in content order */
function Tail({ blocks, className }: { blocks: ContentBlock[]; className?: string }) {
  return (
    <>
      {blocks.map((block, i) =>
        block.kind === "p" || block.kind === "note" ? (
          <p key={i} className={className ?? v.tail} data-reveal="">
            {block.kind === "note" ? (
              <em>
                <Rich text={block.text} />
              </em>
            ) : (
              <Rich text={block.text} />
            )}
          </p>
        ) : null,
      )}
    </>
  );
}

/** A plain real <table>; `cell` lets a design add decorative extras to a cell */
function RealTable({
  block,
  className,
  head,
  cell,
}: {
  block: TableBlock;
  className?: string;
  head?: (index: number) => ReactNode;
  cell?: (row: number, col: number) => ReactNode;
}) {
  return (
    <div className={`${v.tableWrap} ${className ?? ""}`} data-reveal="">
      <table className={v.table}>
        <thead>
          <tr>
            {block.head.map((h, i) =>
              i === 0 && !h ? (
                <td key={i} />
              ) : (
                <th key={i} scope="col">
                  {head ? head(i) : null}
                  <span>{h}</span>
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, r) => (
            <tr key={row[0]}>
              {row.map((text, c) =>
                c === 0 ? (
                  <th key={c} scope="row">
                    {cell ? cell(r, c) : null}
                    <Rich text={text} />
                  </th>
                ) : (
                  <td key={c}>
                    {cell ? cell(r, c) : null}
                    <Rich text={text} />
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

/* ================= Dental implants, Bucks County ================= */

const OPTION_TEETH = [1, 3, 8, 8];

/** Implant options: each situation as a row card, with how many teeth it replaces drawn beside it */
function OptionLadder({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Center head={head} />
          {table ? (
            <RealTable
              block={table}
              className={v.ladder}
              cell={(r, c) =>
                c === 0 ? (
                  <span className={v.teeth} aria-hidden="true">
                    {Array.from({ length: OPTION_TEETH[r] ?? 1 }, (_, i) => (
                      <i key={i} className={r === 3 ? v.toothDenture : undefined} />
                    ))}
                  </span>
                ) : null
              }
            />
          ) : null}
          <Tail blocks={after(section.blocks, "table")} className={v.centerNote} />
        </>
      )}
    </Shell>
  );
}

/** In-office 3D imaging: the four things the scan checks, beside an implant drawn with its angle and depth */
function AngleDepth({ section, eyebrow }: DesignProps) {
  const { before, after: closing } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            <ul role="list" className={v.checks}>
              {list?.items.map((item) => (
                <li key={item} data-reveal="">
                  <span className={v.dot} aria-hidden="true">
                    <Icon name="check" size={12} />
                  </span>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
            <Tail blocks={closing} />
          </div>
          <div className={v.scanPanel} aria-hidden="true" data-reveal="">
            <span className={v.scanTag}>
              <Icon name="scan" size={16} />
              CBCT 3D
            </span>
            <svg viewBox="0 0 200 180" className={v.scanSvg} focusable="false">
              <rect x="10" y="70" width="180" height="100" rx="14" fill="#2a3a63" />
              <rect x="10" y="70" width="180" height="22" rx="10" fill="#c96f6a" opacity="0.55" />
              {/* Nerve canal */}
              <path d="M14 150c40-8 80-8 172 0" stroke="#f2c94c" strokeWidth="2.5" strokeDasharray="6 5" fill="none" />
              {/* Implant, tilted to its planned angle */}
              <g transform="rotate(8 100 110)">
                <path d="M92 74h16l-2 54c-.5 7-11.5 7-12 0L92 74Z" fill="#cfd8e1" />
                <path d="M92.5 84h15M93 94h14M93.4 104h13.2M93.8 114h12.4" stroke="#7d8a97" strokeWidth="1.4" />
                <rect x="95" y="62" width="10" height="12" rx="2" fill="#cfd8e1" />
                <path d="M78 40c0-14 44-14 44 0l-3 20c-1 4-4 6-8 6H89c-4 0-7-2-8-6l-3-20Z" fill="#ffffff" />
              </g>
              {/* Angle guide and depth arrow */}
              <path d="M100 30v120" stroke="#c1deee" strokeWidth="1" strokeDasharray="3 4" />
              <path d="M100 52a26 26 0 0 1 4 1" stroke="#c1deee" strokeWidth="1.5" fill="none" />
              <path d="M150 74v62M146 78l4-4 4 4M146 132l4 4 4-4" stroke="#c1deee" strokeWidth="1.5" fill="none" />
            </svg>
            <ul className={v.scanKey}>
              <li>
                <i className={v.keyBone} />
                Bone
              </li>
              <li>
                <i className={v.keyNerve} />
                Nerve
              </li>
              <li>
                <i className={v.keyGuide} />
                Angle & depth
              </li>
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

const PHASE_ICONS: IconName[] = ["clipboard", "tooth", "clock", "sparkle"];

/** The implant timeline as one track; the healing phase is drawn longest ("several months") */
function PhaseTrack({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Center head={head} />
          <ol className={v.phases}>
            {list?.items.map((item, i) => (
              <li key={item} className={i === 2 ? v.phaseLong : undefined} data-reveal="">
                <span className={v.phaseBar} aria-hidden="true">
                  <span className={v.phaseIcon}>
                    <Icon name={PHASE_ICONS[i % PHASE_ICONS.length]} size={18} />
                  </span>
                </span>
                <LeadText item={item} className={v.phaseText} />
              </li>
            ))}
          </ol>
        </>
      )}
    </Shell>
  );
}

/** Drive times across Lower Bucks: town groups with dotted leaders to their drive time */
function TownTimes({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            <Tail blocks={after(section.blocks, "table")} className={v.navyNote} />
          </div>
          {table ? <RealTable block={table} className={v.leaders} /> : null}
        </div>
      )}
    </Shell>
  );
}

/* ================= Dental implants, Feasterville ================= */

/** Getting here: Bristol Road drawn as a straight road from Feasterville to the office */
function RoadStrip({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={v.road} aria-hidden="true" data-reveal="">
            <span className={v.roadName}>Bristol Road</span>
            <div className={v.roadLine}>
              <span className={v.roadStart}>
                <Icon name="pin" size={16} />
                Feasterville
              </span>
              <span className={v.roadAsphalt} />
              <span className={v.roadEnd}>
                <Icon name="tooth" size={16} />
                {practice.address.city}
              </span>
            </div>
            <dl className={v.roadStats}>
              <div>
                <dt>Distance</dt>
                <dd>About 5 mi</dd>
              </div>
              <div>
                <dt>Typical drive</dt>
                <dd>About 12 min</dd>
              </div>
              <div>
                <dt>Via Street Road</dt>
                <dd>About 13 min</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </Shell>
  );
}

const AGENDA_ICONS: IconName[] = ["message", "search", "scan", "tooth", "clipboard"];

/** The consultation as an appointment agenda: the five steps on a ruled sheet */
function ConsultAgenda({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={v.agenda} data-reveal="">
            <p className={v.agendaTop} aria-hidden="true">
              <Icon name="calendar" size={16} />
              Your implant consultation
            </p>
            <ol className={v.agendaList}>
              {list?.items.map((item, i) => (
                <li key={item}>
                  <span className={v.agendaIcon} aria-hidden="true">
                    <Icon name={AGENDA_ICONS[i % AGENDA_ICONS.length]} size={18} />
                  </span>
                  <LeadText item={item} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </Shell>
  );
}

const CRITERIA = [
  "One or more missing teeth",
  "Healthy gums",
  "Enough jawbone to support an implant",
  "Good overall oral health",
  "No smoking, or willing to stop during healing",
];

/** Good candidate: the paragraph beside the same criteria shown as switched-on toggles */
function CriteriaToggles({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={v.toggles} aria-hidden="true" data-reveal="">
            {CRITERIA.map((label) => (
              <p key={label} className={v.toggleRow}>
                <span>{label}</span>
                <i className={v.toggle} />
              </p>
            ))}
            <p className={v.toggleNote}>
              <Icon name="info" size={16} />
              Older patients can still be candidates
            </p>
          </div>
        </div>
      )}
    </Shell>
  );
}

/** Paying for implants: "bring your insurance details" beside a plan card and the financing partners */
function InsuranceCard({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={v.walletStage} aria-hidden="true" data-reveal="">
            <div className={v.planCard}>
              <span className={v.planChip} />
              <span className={v.planLabel}>Dental plan</span>
              <strong className={v.planType}>PPO accepted</strong>
              <span className={v.planFoot}>Implant benefits differ by plan</span>
            </div>
            <ul className={v.partners}>
              <li>
                <Icon name="card" size={16} />
                CareCredit
              </li>
              <li>
                <Icon name="card" size={16} />
                Cherry
              </li>
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ================= Dental implants, Langhorne ================= */

/** Getting here: the two routes from Langhorne side by side */
function TwoRoutes({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const routes = [
    { name: "South Bellevue Avenue", miles: "4.6 mi" },
    { name: "US-1 South", miles: "5.6 mi" },
  ];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <ul className={v.routes} aria-hidden="true" data-reveal="">
            {routes.map((route, i) => (
              <li key={route.name} className={i === 0 ? v.routeMain : undefined}>
                <span className={v.routeIcon}>
                  <Icon name="map" size={18} />
                </span>
                <strong>{route.name}</strong>
                <span className={v.routeMeta}>
                  {route.miles} · about 10 min
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Shell>
  );
}

/** Why replace a missing tooth: the three knock-on effects named in the paragraph */
function RippleEffects({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Center head={head}>
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </Center>
          <ul className={v.ripples} aria-hidden="true" data-reveal="">
            <li>
              <span className={v.rippleArt}>
                <Icon name="smile" size={30} />
              </span>
              Chewing & speaking change
            </li>
            <li>
              <span className={v.rippleArt}>
                <TeethRow kind="shifted" width={120} />
              </span>
              Neighboring teeth shift
            </li>
            <li>
              <span className={v.rippleArt}>
                <span className={v.boneBars}>
                  <i />
                  <i />
                  <i />
                </span>
              </span>
              The jawbone can weaken
            </li>
          </ul>
        </>
      )}
    </Shell>
  );
}

const THREE_WAY: { label: string; tone: string }[] = [
  { label: "Fixed, in the bone", tone: v.headImplant },
  { label: "Fixed, on neighbors", tone: v.headBridge },
  { label: "Removable", tone: v.headDenture },
];

/** Implant, bridge or denture: the comparison table with a colour band for each option */
function ThreeWay({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Center head={head} />
          {table ? (
            <RealTable
              block={table}
              className={v.threeWay}
              head={(i) =>
                i > 0 ? (
                  <span className={`${v.headBand} ${THREE_WAY[i - 1]?.tone ?? ""}`} aria-hidden="true">
                    {THREE_WAY[i - 1]?.label}
                  </span>
                ) : null
              }
            />
          ) : null}
          <Tail blocks={after(section.blocks, "table")} className={v.centerNote} />
        </>
      )}
    </Shell>
  );
}

/** Cost: one price tag per option, each fee to be listed in your treatment plan */
function FeeTags({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <ul className={v.tags} aria-hidden="true" data-reveal="">
            {["Dental implant", "Dental bridge", "Denture"].map((name, i) => (
              <li key={name} style={{ "--i": i } as CSSProperties}>
                <span className={v.tagHole} />
                <strong>{name}</strong>
                <span>Fee listed in your plan</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Shell>
  );
}

/* ================= Cosmetic dentist, Bucks County ================= */

/** The consultation as a conversation: you speak first, then the practice answers */
function ConsultChat({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Center head={head} />
          <ol className={v.chat}>
            {list?.items.map((item, i) => (
              <li key={item} className={i === 0 ? v.chatYou : v.chatUs} data-reveal="">
                <span className={v.chatAvatar} aria-hidden="true">
                  <Icon name={i === 0 ? "message" : "smile"} size={18} />
                </span>
                <LeadText item={item} className={v.bubble} />
              </li>
            ))}
          </ol>
        </>
      )}
    </Shell>
  );
}

const SWATCH = ["#e8b931", "#2f9e83", "#3a7cb0", "#8a6fd1"];

/** Cosmetic options: each treatment row edged in its own colour, timing marked with a clock */
function OptionSwatches({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Center head={head} />
          {table ? (
            <RealTable
              block={table}
              className={v.swatchTable}
              cell={(r, c) =>
                c === 0 ? (
                  <span className={v.swatch} style={{ background: SWATCH[r % SWATCH.length] }} aria-hidden="true" />
                ) : c === 2 ? (
                  <Icon name="clock" size={16} className={v.timeIcon} />
                ) : null
              }
            />
          ) : null}
        </>
      )}
    </Shell>
  );
}

/** Smile makeovers: the pairings the paragraph names, as a small sequence */
function MakeoverPairs({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={v.pairs} aria-hidden="true" data-reveal="">
            <p className={v.pairLabel}>A common pairing</p>
            <div className={v.pairRow}>
              <span className={v.pairStep}>Invisalign</span>
              <Icon name="arrowRight" size={18} />
              <span className={v.pairStep}>Whitening</span>
            </div>
            <p className={v.pairLabel}>Also part of a makeover</p>
            <div className={v.pairRow}>
              <span className={`${v.pairStep} ${v.pairSoft}`}>Porcelain veneers</span>
            </div>
            <p className={v.pairShield}>
              <Icon name="shield" size={18} />A night guard helps protect your results
            </p>
          </div>
        </div>
      )}
    </Shell>
  );
}

const STOPS = [
  { town: "Langhorne", min: 10 },
  { town: "Feasterville", min: 12 },
  { town: "Fairless Hills", min: 13 },
  { town: "Levittown", min: 16 },
  { town: "Newtown", min: 19 },
];

/** Close to home: the five towns placed on a 0–20 minute ruler */
function TimeRuler({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <>
          <Center head={head}>
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.onNavy} />
            ))}
          </Center>
          <div className={v.ruler} aria-hidden="true" data-reveal="">
            <div className={v.rulerTrack}>
              {STOPS.map((stop, i) => (
                <span
                  key={stop.town}
                  className={`${v.stop} ${i % 2 ? v.stopLow : ""}`}
                  style={{ "--at": `${(stop.min / 20) * 100}%` } as CSSProperties}
                >
                  <strong>{stop.min} min</strong>
                  {stop.town}
                </span>
              ))}
            </div>
            <div className={v.rulerScale}>
              <span>Our office</span>
              <span>20 min</span>
            </div>
          </div>
        </>
      )}
    </Shell>
  );
}

/* ================= Emergency dentist, Bucks County ================= */

/** Emergency hours: the real hours table beside the after-hours guidance as an alert */
function HoursBoard({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {after(section.blocks, "table").map((block, i) =>
              block.kind === "p" ? (
                <p key={i} className={v.alert} data-reveal="">
                  <Icon name="alert" size={20} />
                  <span>
                    <Rich text={block.text} />
                  </span>
                </p>
              ) : null,
            )}
          </div>
          {table ? (
            <RealTable
              block={table}
              className={v.hoursTable}
              cell={(r, c) => (c === 1 && /closed/i.test(table.rows[r][1]) ? <i className={v.closedDot} aria-hidden="true" /> : null)}
            />
          ) : null}
        </div>
      )}
    </Shell>
  );
}

const AID_ICONS: IconName[] = ["tooth", "bolt", "drop", "shield"];

/** First aid: four steps as first-aid kit cards */
function FirstAid({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Center head={head}>
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </Center>
          <ul role="list" className={v.aid}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={v.aidIcon} aria-hidden="true">
                  <Icon name={AID_ICONS[i % AID_ICONS.length]} size={20} />
                </span>
                <LeadText item={item} className={v.aidText} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Shell>
  );
}

/** Drive times for emergencies: areas with their drive time as a pill */
function EtaBoard({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Center head={head} />
          {table ? (
            <RealTable
              block={table}
              className={v.eta}
              cell={(r, c) => (c === 1 ? <Icon name="clock" size={16} className={v.etaIcon} /> : null)}
            />
          ) : null}
          <Tail blocks={after(section.blocks, "table")} className={v.centerNote} />
        </>
      )}
    </Shell>
  );
}

/** Same-day care: the paragraph beside what a visit can include, as a checklist card */
function SameDay({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const items = ["Emergency exam & digital X-rays", "Pain relief", "Temporary or permanent restorations", "A plan to stabilize your smile"];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={v.sameDay} aria-hidden="true" data-reveal="">
            <p className={v.sameDayTop}>
              <Icon name="clock" size={18} />
              Same day, whenever possible
            </p>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <span className={v.dot}>
                    <Icon name="check" size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

/** Without insurance: the $59 new-patient special as a price card, the other options beside it */
function PriceSpot({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const [first, ...rest] = list?.items ?? [];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Center head={head} />
          <ul role="list" className={v.price}>
            {first ? (
              <li className={v.priceMain} data-reveal="">
                <span className={v.priceFigure} aria-hidden="true">
                  $59
                </span>
                <LeadText item={first} />
              </li>
            ) : null}
            {rest.map((item, i) => (
              <li key={item} className={v.priceRow} data-reveal="">
                <span className={v.priceIcon} aria-hidden="true">
                  <Icon name={i === 0 ? "tag" : "wallet"} size={18} />
                </span>
                <LeadText item={item} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Shell>
  );
}

/* ================= Emergency dentist, Langhorne ================= */

const DAY = { Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun" };
const hour = (time: string) => {
  const h = Number(time.split(":")[0]);
  return String(h % 12 || 12);
};

/** Getting here: the paragraph beside the office days as pills (hours from site.ts) */
function OpenDays({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={v.days} aria-hidden="true" data-reveal="">
            <p className={v.daysTop}>
              <Icon name="map" size={16} />
              About 10 min · 4.6 mi
            </p>
            <ul>
              {hours.map((day) => (
                <li key={day.day} className={day.opens ? v.dayOpen : v.dayShut}>
                  <strong>{DAY[day.day]}</strong>
                  <span>{day.opens && day.closes ? `${hour(day.opens)}–${hour(day.closes)}` : "Closed"}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

/** Toothache steps: do's with a green tick, the "don't" with a red cross */
function DoDont({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Center head={head}>
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </Center>
          <ul role="list" className={v.doList}>
            {list?.items.map((item) => {
              const dont = /^\*\*Don't/.test(item);
              const call = /^\*\*Call/.test(item);
              return (
                <li key={item} className={dont ? v.dont : call ? v.doCall : undefined} data-reveal="">
                  <span className={v.doMark} aria-hidden="true">
                    <Icon name={dont ? "close" : call ? "phone" : "check"} size={14} />
                  </span>
                  <LeadText item={item} />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Shell>
  );
}

const FLAGS = ["Pain that won't let you sleep", "A swollen face or gum", "A bad taste with a bump on the gum", "An injury to your teeth"];

/** Is it an emergency: the paragraph beside the four warning signs it names, and call/text */
function SymptomFlags({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            <div className={v.flagActions}>
              <a href={contactLinks.text} className={v.flagText} data-track="emergency_click">
                <Icon name="message" size={18} />
                Text us
              </a>
              <a href={contactLinks.call} className={v.flagCall} data-track="emergency_click">
                <Icon name="phone" size={18} />
                Call {practice.phone.display}
              </a>
            </div>
          </div>
          <ul className={v.flags} aria-hidden="true" data-reveal="">
            {FLAGS.map((flag) => (
              <li key={flag}>
                <Icon name="alert" size={18} />
                {flag}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Shell>
  );
}

const VISIT_ICONS: IconName[] = ["scan", "heart", "tooth"];

/** The emergency visit: three steps as cards, with the $59 special as a badge below */
function VisitSteps({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const closing = after(section.blocks, "ol");
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Center head={head} />
          <ol className={v.visit}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={v.visitIcon} aria-hidden="true">
                  <Icon name={VISIT_ICONS[i % VISIT_ICONS.length]} size={22} />
                </span>
                <LeadText item={item} />
              </li>
            ))}
          </ol>
          {closing.map((block, i) =>
            block.kind === "p" ? (
              <p key={i} className={v.badge} data-reveal="">
                <Icon name="tag" size={18} />
                <span>
                  <Rich text={block.text} />
                </span>
              </p>
            ) : null,
          )}
        </>
      )}
    </Shell>
  );
}

/* ================= Invisalign, Langhorne ================= */

/** Getting here: check-ups about every six weeks, drawn on a strip of weeks */
function CheckupCadence({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={v.split}>
          <div className={v.copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={v.cadence} aria-hidden="true" data-reveal="">
            <p className={v.cadenceTop}>
              <Icon name="calendar" size={16} />
              Check-ups about every six weeks
            </p>
            <div className={v.weeks}>
              {Array.from({ length: 19 }, (_, week) => (
                <i key={week} className={week % 6 === 0 ? v.weekVisit : undefined} />
              ))}
            </div>
            <div className={v.weekLabels}>
              <span>Week 0</span>
              <span>6</span>
              <span>12</span>
              <span>18</span>
            </div>
            <p className={v.cadenceFoot}>
              <Icon name="map" size={16} />
              About 10 minutes from Langhorne each way
            </p>
          </div>
        </div>
      )}
    </Shell>
  );
}

/** The Invisalign timeline table, stages joined by a line down the first column */
function TimelineTable({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Center head={head} />
          {table ? <RealTable block={table} className={v.timeline} /> : null}
        </>
      )}
    </Shell>
  );
}

const DAY_ICONS: IconName[] = ["clock", "heart", "sparkle", "info"];

/** Daily life with aligners: four cards, one per habit */
function AlignerDay({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Center head={head} />
          <ul role="list" className={v.daily}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={v.dailyIcon} aria-hidden="true">
                  <Icon name={DAY_ICONS[i % DAY_ICONS.length]} size={22} />
                </span>
                <Rich text={item} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Shell>
  );
}

export const SERVICE_LOCATION_DESIGNS = {
  "option-ladder": OptionLadder,
  "angle-depth": AngleDepth,
  "phase-track": PhaseTrack,
  "town-times": TownTimes,
  "road-strip": RoadStrip,
  "consult-agenda": ConsultAgenda,
  "criteria-toggles": CriteriaToggles,
  "insurance-card": InsuranceCard,
  "two-routes": TwoRoutes,
  "ripple-effects": RippleEffects,
  "three-way": ThreeWay,
  "fee-tags": FeeTags,
  "consult-chat": ConsultChat,
  "option-swatches": OptionSwatches,
  "makeover-pairs": MakeoverPairs,
  "time-ruler": TimeRuler,
  "hours-board": HoursBoard,
  "first-aid": FirstAid,
  "eta-board": EtaBoard,
  "same-day": SameDay,
  "price-spot": PriceSpot,
  "open-days": OpenDays,
  "do-dont": DoDont,
  "symptom-flags": SymptomFlags,
  "visit-steps": VisitSteps,
  "checkup-cadence": CheckupCadence,
  "timeline-table": TimelineTable,
  "aligner-day": AlignerDay,
} as const;
