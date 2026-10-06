import type { CSSProperties, ReactNode } from "react";
import Link from "@/components/ui/SiteLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich, splitLead } from "@/components/ui/Rich";
import type { ContentBlock } from "@/content/service-page";
import { aroundList, firstList, Lead, P, paragraphs, Shell, subs, type DesignProps } from "./DesignKit";
import base from "./SectionDesigns.module.css";
import c from "./CosmeticDesigns.module.css";
import {
  AlignerStack,
  BracesIcon,
  EnamelSection,
  GuardArch,
  Incisor,
  IncisorProfile,
  Moon,
  TeethRow,
  TrayIcon,
  type IncisorKind,
  type RowKind,
} from "./CosmeticArt";

/**
 * Bespoke designs for the Cosmetic Dentistry hub and treatment pages (none reused
 * elsewhere). Copy is rendered verbatim with its heading levels; illustrations and
 * small labels are decorative (aria-hidden) and only restate facts from the copy.
 */

type TableBlock = Extract<ContentBlock, { kind: "table" }>;

const CheckDot = () => (
  <span className={c.checkDot} aria-hidden="true">
    <Icon name="check" size={12} />
  </span>
);

const CenterHead = ({ head, children }: { head: ReactNode; children?: ReactNode }) => (
  <div className={base.centerHead}>
    {head}
    {children}
  </div>
);

function LeadItem({ item, className }: { item: string; className?: string }) {
  const { lead, rest } = splitLead(item);
  return (
    <span className={className}>
      {lead ? <Lead text={lead} className={c.itemLead} /> : null}
      {lead ? " " : null}
      <Rich text={rest} />
    </span>
  );
}

const tableOf = (blocks: ContentBlock[]) => blocks.find((block): block is TableBlock => block.kind === "table");

/** A content table as a real <table>; `heads` adds decorative art above column titles */
function Table({
  block,
  className,
  heads,
  hot,
}: {
  block: TableBlock;
  className?: string;
  heads?: (index: number) => ReactNode;
  hot?: number;
}) {
  return (
    <div className={`${c.tableWrap} ${className ?? ""}`} data-reveal="">
      <table className={c.table}>
        <thead>
          <tr>
            {block.head.map((cell, i) =>
              i === 0 && !cell ? (
                <td key={i} />
              ) : (
                <th key={i} scope="col" className={i === hot ? c.hot : undefined}>
                  {heads ? heads(i) : null}
                  <span className={c.headText}>{cell}</span>
                </th>
              ),
            )}
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
                  <td key={i} className={i === hot ? c.hot : undefined}>
                    <Rich text={cell} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <p className={c.swipeHint} aria-hidden="true">
        <Icon name="arrowRight" size={14} className={c.swipeBack} />
        Swipe to compare
        <Icon name="arrowRight" size={14} />
      </p>
    </div>
  );
}

/* ================= Hub ================= */

/** "Science & Artistry": the copy beside a smile-design sketch of the six front teeth */
function ArtistryGrid({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const widths = [40, 52, 64, 64, 52, 40];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.artistry}>
          <div className={c.artistryCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={c.statement} />
            ))}
          </div>
          <div className={c.design} aria-hidden="true" data-reveal="">
            <span className={`${c.designTag} ${c.designTagScience}`}>
              <Icon name="scan" size={16} />
              Science
            </span>
            <div className={c.designRow}>
              {widths.map((width, i) => (
                <span key={i} className={c.designTooth}>
                  <Incisor kind="plain" width={width} />
                </span>
              ))}
            </div>
            <p className={c.designCaption}>Smile design, planned around you</p>
          </div>
        </div>
      )}
    </Shell>
  );
}

const LINK_ITEM = /^\[(.+?)\]\((.+?)\):\s*(.*)$/;

/** Mini illustration for each treatment card, in the hub list order */
const BENTO_ART: ReactNode[] = [
  <span key="veneers" className={c.bentoVeneer}>
    <Incisor kind="veneer" width={92} />
    <span className={c.bentoShades}>
      <i />
      <i />
      <i />
      <i />
    </span>
  </span>,
  <span key="whitening" className={c.bentoPair}>
    <Incisor kind="dull" width={52} />
    <Icon name="arrowRight" size={18} />
    <Incisor kind="polish" width={52} />
  </span>,
  <span key="bonding" className={c.bentoPair}>
    <Incisor kind="chipped" width={52} />
    <Icon name="arrowRight" size={18} />
    <Incisor kind="resin" width={52} />
  </span>,
  <span key="aligners" className={c.bentoTray}>
    <TrayIcon />
  </span>,
  <span key="guards" className={c.bentoNight}>
    <Moon size={44} />
    <GuardArch width={110} />
  </span>,
];

/** "Our Cosmetic Dental Treatments": five linked cards in a bento grid, each with its own illustration */
function TreatmentBento({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const items = (list?.items ?? []).flatMap((item) => {
    const match = LINK_ITEM.exec(item);
    return match ? [{ label: match[1], href: match[2], text: match[3] }] : [];
  });
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <CenterHead head={head} />
          <ul role="list" className={c.bento}>
            {items.map((item, i) => (
              <li key={item.href} className={`${c.bentoCard} ${c[`bento${i}`] ?? ""}`} data-reveal="">
                <div className={c.bentoArt} aria-hidden="true">
                  {BENTO_ART[i]}
                </div>
                <p className={c.bentoText}>
                  {/* "Label: text" stays one sentence; the colon is hidden after the card title */}
                  <span className={c.bentoTitle}>
                    <Link href={item.href} className={c.bentoLink}>
                      {item.label}
                    </Link>
                    <span className={base.punct}>:</span>
                  </span>{" "}
                  {item.text}
                </p>
                <span className={c.bentoGo} aria-hidden="true">
                  <Icon name="arrowUpRight" size={18} />
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Shell>
  );
}

const TREATMENT_KEYS: { label: string; pattern: RegExp; tone: string }[] = [
  { label: "Teeth whitening", pattern: /whitening/i, tone: "#e8b931" },
  { label: "Porcelain veneers", pattern: /veneers/i, tone: "#3a7cb0" },
  { label: "Dental bonding", pattern: /bonding/i, tone: "#2f9e83" },
  { label: "Invisalign", pattern: /invisalign/i, tone: "#8a6fd1" },
  { label: "Night guard", pattern: /night guard/i, tone: "#182752" },
];

/** "Smile Makeover": the concern table with a colour key for each treatment it mentions */
function MakeoverMatrix({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.makeover}>
          <div className={c.makeoverCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            <ul className={c.keyList} aria-hidden="true" data-reveal="">
              {TREATMENT_KEYS.map((key) => (
                <li key={key.label}>
                  <i style={{ background: key.tone }} />
                  {key.label}
                </li>
              ))}
            </ul>
          </div>
          {table ? (
            <div className={c.matchWrap} data-reveal="">
              <table className={c.match}>
                <thead>
                  <tr>
                    {table.head.map((cell) => (
                      <th key={cell} scope="col">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map(([concern, options]) => (
                    <tr key={concern}>
                      <th scope="row">{concern}</th>
                      <td>
                        <span className={c.matchDots} aria-hidden="true">
                          {TREATMENT_KEYS.filter((key) => key.pattern.test(options)).map((key) => (
                            <i key={key.label} style={{ background: key.tone }} />
                          ))}
                        </span>
                        <Rich text={options} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      )}
    </Shell>
  );
}

/** "Advanced Imaging Technology": the copy beside three stacked scan layers */
function ScanLayers({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const layers: { icon: IconName; label: string; tone: string }[] = [
    { icon: "face", label: "RayFace facial scanner", tone: c.layerFace },
    { icon: "scan", label: "Cone Beam CT (CBCT)", tone: c.layerCbct },
    { icon: "xray", label: "Digital X-rays", tone: c.layerXray },
  ];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <div className={c.scan}>
          <div className={c.scanCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.onNavy} />
            ))}
          </div>
          <div className={c.scanStage} aria-hidden="true" data-reveal="">
            <div className={c.planes}>
              {layers.map((layer, i) => (
                <span key={layer.label} className={`${c.plane} ${layer.tone}`} style={{ "--i": i } as CSSProperties}>
                  <Icon name={layer.icon} size={40} />
                </span>
              ))}
            </div>
            <ul className={c.planeLabels}>
              {layers.map((layer) => (
                <li key={layer.label}>
                  <Icon name={layer.icon} size={18} />
                  {layer.label}
                </li>
              ))}
            </ul>
            <p className={c.scanCaption}>Teeth · Bone · Facial structures</p>
          </div>
        </div>
      )}
    </Shell>
  );
}

/** "Before & After": a short invitation to the smile gallery beside an illustrated before/after */
function GalleryInvite({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={c.invite}>
          <div className={c.inviteCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={c.inviteText} />
            ))}
          </div>
          <div className={c.compare} aria-hidden="true" data-reveal="">
            <div className={c.compareSide}>
              <span className={c.compareTag}>Before</span>
              <TeethRow kind="crooked" width={170} dull />
            </div>
            <div className={`${c.compareSide} ${c.compareAfter}`}>
              <span className={c.compareTag}>After</span>
              <TeethRow kind="even" width={170} />
            </div>
            {/* Slider handle, centred on the divider between the two halves */}
            <span className={c.compareHandle}>
              <Icon name="arrowRight" size={14} className={c.swipeBack} />
              <Icon name="arrowRight" size={14} />
            </span>
          </div>
        </div>
      )}
    </Shell>
  );
}

const PLAN_ICONS: IconName[] = ["shield", "wallet", "tag"];

/** "Cost, Insurance & Financing": the ways to pay as lines on a treatment-plan receipt */
function PlanReceipt({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.receiptLayout}>
          <div className={c.receiptCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            {after.map((p) => (
              <P key={p.text} text={p.text} />
            ))}
          </div>
          <div className={c.receipt} data-reveal="">
            <div className={c.receiptPaper}>
              <p className={c.receiptTop} aria-hidden="true">
                <Icon name="receipt" size={18} />
                Personalized treatment plan
              </p>
              <ul role="list" className={c.receiptLines}>
                {list?.items.map((item, i) => (
                  <li key={item}>
                    <span className={c.receiptIcon} aria-hidden="true">
                      <Icon name={PLAN_ICONS[i % PLAN_ICONS.length]} size={18} />
                    </span>
                    <LeadItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ================= Porcelain Veneers ================= */

const TILE_ICONS: IconName[] = ["sparkle", "bolt", "plus", "shield", "tooth", "smile", "check"];

/** "What Veneers Can Fix": each concern on a tooth-shaped tile, arranged along a smile curve */
function ToothTiles({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  const count = list?.items.length ?? 0;
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <CenterHead head={head}>
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </CenterHead>
          <ul role="list" className={c.tiles}>
            {list?.items.map((item, i) => {
              // Depth along the smile curve: deepest in the middle
              const depth = Math.round(Math.sin((Math.PI * (i + 0.5)) / count) * 100) / 100;
              return (
                <li key={item} className={c.tile} style={{ "--depth": depth } as CSSProperties} data-reveal="">
                  <span className={c.tileIcon} aria-hidden="true">
                    <Icon name={TILE_ICONS[i % TILE_ICONS.length]} size={18} />
                  </span>
                  <Rich text={item} />
                </li>
              );
            })}
          </ul>
          {after.map((p) => (
            <P key={p.text} text={p.text} />
          ))}
        </>
      )}
    </Shell>
  );
}

/** "Will Veneers Look Natural?": light reflecting off a veneer, with the functional benefits as a callout */
function VeneerLight({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const [benefits] = subs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={c.light}>
          <div className={c.lightCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            {benefits ? (
              <div className={c.lightCallout} data-reveal="">
                <span className={c.lightIcon} aria-hidden="true">
                  <Icon name="shield" size={20} />
                </span>
                <div>
                  <h3 className={base.subTitle}>{benefits.title}</h3>
                  {paragraphs(benefits.blocks).map((p) => (
                    <P key={p.text} text={p.text} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div className={c.lightArt} aria-hidden="true" data-reveal="">
            <IncisorProfile />
            <ul className={c.lightKey}>
              <li>
                <i className={c.keyVeneer} />
                Porcelain veneer
              </li>
              <li>
                <i className={c.keyTooth} />
                Natural tooth
              </li>
              <li>
                <i className={c.keyLight} />
                Reflects light like enamel
              </li>
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

/** "Porcelain Veneers vs. Dental Bonding": two material samples, overlapped */
function MaterialDuel({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const samples = [
    {
      name: "Porcelain veneers",
      facts: ["Made in a dental laboratory", "Stain resistant", "Long-lasting"],
      tone: c.samplePorcelain,
    },
    {
      name: "Dental bonding",
      facts: ["Tooth-colored composite resin", "Often a single visit", "Cost-effective for smaller fixes"],
      tone: c.sampleResin,
    },
  ];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.duel}>
          <div className={c.duelCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={c.samples} aria-hidden="true" data-reveal="">
            {samples.map((sample) => (
              <div key={sample.name} className={`${c.sample} ${sample.tone}`}>
                <span className={c.sampleChip} />
                <strong className={c.sampleName}>{sample.name}</strong>
                <ul>
                  {sample.facts.map((fact) => (
                    <li key={fact}>
                      <CheckDot />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <span className={c.versus}>vs</span>
          </div>
        </div>
      )}
    </Shell>
  );
}

/** "The Veneer Process": one illustrated strip, three stages, with the H3 copy below each */
function ShellStages({ section, eyebrow }: DesignProps) {
  const stages = subs(section.blocks);
  const art: IncisorKind[] = ["design", "prep", "veneer"];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <CenterHead head={head} />
          <div className={c.strip} aria-hidden="true" data-reveal="">
            {stages.map((stage, i) => (
              <span key={stage.title} className={c.stripCell}>
                <Incisor kind={art[i % art.length]} width={96} />
                {i < stages.length - 1 ? (
                  <span className={c.stripArrow}>
                    <Icon name="arrowRight" size={16} />
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div className={c.stages}>
            {stages.map((stage) => (
              <div key={stage.title} className={c.stage} data-reveal="">
                <h3 className={base.subTitle}>{stage.title}</h3>
                {paragraphs(stage.blocks).map((p) => (
                  <P key={p.text} text={p.text} />
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </Shell>
  );
}

/** "How Long Do Porcelain Veneers Last?": a years ruler that runs past the ten-year mark */
function DecadeMeter({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <div className={c.decade}>
          <div className={c.decadeCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.onNavy} />
            ))}
          </div>
          <div className={c.meter} aria-hidden="true" data-reveal="">
            <p className={c.meterBadge}>
              <Icon name="clock" size={18} />
              Well over a decade
            </p>
            <div className={c.ruler}>
              <span className={c.rulerFill} />
            </div>
            <ul className={c.rulerMarks}>
              <li>Placement</li>
              <li>5 years</li>
              <li>10 years</li>
              <li>10+</li>
            </ul>
            <ul className={c.factors}>
              <li>Oral hygiene</li>
              <li>Habits</li>
              <li>Routine dental care</li>
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ================= Teeth Whitening ================= */

const STAIN_TONES = ["#6f4a2f", "#b07a3b", "#7b1f3a", "#8c7a3f", "#8e3b2a", "#b8ad94"];

/** "What Causes Tooth Discoloration?": each cause with its stain colour, and enamel thinning with age */
function StainSources({ section, eyebrow }: DesignProps) {
  const { after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.stains}>
          <div className={c.stainsMain}>
            {head}
            <ul role="list" className={c.stainList}>
              {list?.items.map((item, i) => (
                <li key={item} data-reveal="">
                  <span
                    className={c.drop}
                    style={{ background: STAIN_TONES[i % STAIN_TONES.length] }}
                    aria-hidden="true"
                  />
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className={c.enamel} data-reveal="">
            <div className={c.enamelArt} aria-hidden="true">
              <figure>
                <EnamelSection thin={false} />
                <figcaption>Thicker enamel</figcaption>
              </figure>
              <Icon name="arrowRight" size={18} />
              <figure>
                <EnamelSection thin />
                <figcaption>Thinner enamel</figcaption>
              </figure>
            </div>
            {after.map((p) => (
              <P key={p.text} text={p.text} />
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

/** "Whitening Options": the in-office / take-home table with a pace bar over each column */
function WhiteningOptions({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <CenterHead head={head}>
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </CenterHead>
          {table ? (
            <Table
              block={table}
              className={c.paceTable}
              hot={1}
              heads={(i) => (
                <span className={c.pace} aria-hidden="true">
                  <span className={c.paceIcon}>
                    <Icon name={i === 1 ? "bolt" : "home"} size={18} />
                  </span>
                  <span className={`${c.paceBar} ${i === 1 ? c.paceFast : c.paceSteady}`}>
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </span>
              )}
            />
          ) : null}
        </>
      )}
    </Shell>
  );
}

/** "Keeping Your Smile Bright": each habit on a shade-guide tab, lightening along the row */
function ShadeTabs({ section, eyebrow }: DesignProps) {
  const { after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <CenterHead head={head} />
          <ul role="list" className={c.shades}>
            {list?.items.map((item, i) => (
              <li key={item} className={c.shade} style={{ "--i": i } as CSSProperties} data-reveal="">
                <span className={c.shadeTip} aria-hidden="true" />
                <Rich text={item} />
              </li>
            ))}
          </ul>
          {after.map((p) => (
            <p key={p.text} className={c.touchUp} data-reveal="">
              <Icon name="sparkle" size={18} />
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

/* ================= Dental Bonding ================= */

/** "What Dental Bonding Can Fix": the list beside a chipped tooth rebuilt in resin */
function ChipRepair({ section, eyebrow }: DesignProps) {
  const { after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.chip}>
          <div className={c.chipCopy}>
            {head}
            <ul role="list" className={c.chipList}>
              {list?.items.map((item) => (
                <li key={item} data-reveal="">
                  <CheckDot />
                  <span>
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ul>
            {after.map((p) => (
              <P key={p.text} text={p.text} />
            ))}
          </div>
          <div className={c.chipArt} aria-hidden="true" data-reveal="">
            <figure>
              <Incisor kind="chipped" width={110} />
              <figcaption>Chipped</figcaption>
            </figure>
            <span className={c.chipArrow}>
              <Icon name="arrowRight" size={18} />
            </span>
            <figure>
              <Incisor kind="resin" width={110} />
              <figcaption>Bonded</figcaption>
            </figure>
            <p className={c.chipNote}>Composite resin, color-matched to your enamel</p>
          </div>
        </div>
      )}
    </Shell>
  );
}

const QUAD_ICONS: IconName[] = ["smile", "shield", "clock", "wallet"];

/** "Benefits of Bonding": four benefits around a polished, bonded tooth */
function BenefitQuad({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const items = list?.items ?? [];
  const card = (item: string, i: number) => (
    <li key={item} className={c.quadCard} data-reveal="">
      <span className={c.quadIcon} aria-hidden="true">
        <Icon name={QUAD_ICONS[i % QUAD_ICONS.length]} size={20} />
      </span>
      <LeadItem item={item} />
    </li>
  );
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <CenterHead head={head} />
          <div className={c.quad}>
            <ul role="list" className={c.quadSide}>
              {items.slice(0, 2).map((item, i) => card(item, i))}
            </ul>
            <div className={c.quadArt} aria-hidden="true" data-reveal="">
              <Incisor kind="polish" width={150} />
            </div>
            <ul role="list" className={c.quadSide}>
              {items.slice(2).map((item, i) => card(item, i + 2))}
            </ul>
          </div>
        </>
      )}
    </Shell>
  );
}

/** "The Bonding Process": four illustrated tiles, the tooth changing at each step */
function BondSteps({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const art: IncisorKind[] = ["rough", "resin", "cure", "polish"];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <CenterHead head={head} />
          <ol className={c.bondSteps}>
            {list?.items.map((item, i) => (
              <li key={item} className={c.bondStep} data-reveal="">
                <span className={c.bondArt} aria-hidden="true">
                  <Incisor kind={art[i % art.length]} width={70} />
                </span>
                <LeadItem item={item} className={c.bondText} />
              </li>
            ))}
          </ol>
        </>
      )}
    </Shell>
  );
}

/** "Bonding vs. Veneers": a mirrored table, bonding on the left and veneers on the right of each row label */
function MirrorTable({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  const notes = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <CenterHead head={head} />
          {table ? (
            <div className={c.mirrorWrap} data-reveal="">
              {/* Rows are laid out with CSS grid, so the table roles are stated explicitly */}
              <table className={c.mirror} role="table">
                <thead role="rowgroup">
                  <tr role="row">
                    <td role="cell" />
                    {table.head.slice(1).map((cell, i) => (
                      <th key={cell} scope="col" role="columnheader" className={i === 0 ? c.mirrorLeft : c.mirrorRight}>
                        <span
                          className={`${c.mirrorSwatch} ${i === 0 ? c.swatchResin : c.swatchPorcelain}`}
                          aria-hidden="true"
                        />
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody role="rowgroup">
                  {table.rows.map(([label, ...cells]) => (
                    <tr key={label} role="row">
                      <th scope="row" role="rowheader">
                        {label}
                      </th>
                      {cells.map((cell, i) => (
                        <td key={i} role="cell" className={i === 0 ? c.mirrorLeft : c.mirrorRight}>
                          <Rich text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {notes.map((p) => (
            <p key={p.text} className={c.compareLinks} data-reveal="">
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

/* ================= Clear Aligners ================= */

const TRAY_STATS: { icon: IconName; stat?: string }[] = [
  { icon: "calendar", stat: "1–2 weeks" },
  { icon: "clock", stat: "20–22 hours" },
  { icon: "sparkle" },
];

/** "How Clear Aligners Work": a fanned series of trays beside the three wear rules */
function TraySeries({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.trays}>
          <div className={c.trayArt} aria-hidden="true" data-reveal="">
            <AlignerStack />
            <p className={c.trayCaption}>Each aligner slightly different</p>
          </div>
          <div className={c.trayCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            <ul role="list" className={c.rules}>
              {list?.items.map((item, i) => {
                const meta = TRAY_STATS[i % TRAY_STATS.length];
                return (
                  <li key={item} className={c.rule} data-reveal="">
                    <span className={c.ruleIcon} aria-hidden="true">
                      <Icon name={meta.icon} size={20} />
                    </span>
                    <span className={c.ruleText}>
                      {meta.stat ? (
                        <span className={c.ruleStat} aria-hidden="true">
                          {meta.stat}
                        </span>
                      ) : null}
                      <Rich text={item} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

const CASE_ART: RowKind[] = ["crooked", "crowded", "gaps", "bite", "shifted"];

/** "What Invisalign Can Treat": each concern with a small drawing of the teeth */
function AlignmentCases({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <CenterHead head={head} />
          <ul role="list" className={c.cases}>
            {list?.items.map((item, i) => (
              <li key={item} className={c.case} data-reveal="">
                <span className={c.caseArt} aria-hidden="true">
                  <TeethRow kind={CASE_ART[i % CASE_ART.length]} width={132} />
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

/** "Clear Aligners vs. Braces": a glass table on navy, the aligner column lit */
function ClearTable({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  const notes = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <>
          <CenterHead head={head} />
          {table ? (
            <Table
              block={table}
              className={c.glassTable}
              hot={1}
              heads={(i) => (
                <span className={c.glassIcon} aria-hidden="true">
                  {i === 1 ? <TrayIcon /> : <BracesIcon />}
                </span>
              )}
            />
          ) : null}
          {notes.map((p) => (
            <p key={p.text} className={c.glassNote} data-reveal="">
              <CheckDot />
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

const ROAD_ICONS: IconName[] = ["message", "scan", "check", "smile", "calendar"];

/** "The Invisalign Treatment Process": a zigzag route, each stop marked by its icon */
function AlignerRoadmap({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <CenterHead head={head} />
          <ol className={c.road}>
            {list?.items.map((item, i) => (
              <li key={item} className={c.roadStop} data-reveal="">
                <span className={c.roadIcon} aria-hidden="true">
                  <Icon name={ROAD_ICONS[i % ROAD_ICONS.length]} size={20} />
                </span>
                <LeadItem item={item} className={c.roadCard} />
              </li>
            ))}
          </ol>
        </>
      )}
    </Shell>
  );
}

/** "How Long Does Invisalign Take?": the two ranges from the copy as large figures */
function RangeStats({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={c.range}>
          <div className={c.rangeCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={c.rangeStats} aria-hidden="true" data-reveal="">
            <div className={c.rangeStat}>
              <span className={c.rangeFigure}>9–15</span>
              <span className={c.rangeLabel}>months for many patients</span>
            </div>
            <div className={`${c.rangeStat} ${c.rangeStatNavy}`}>
              <span className={c.rangeFigure}>18–30</span>
              <span className={c.rangeLabel}>aligners</span>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ================= Night Guards ================= */

/** "Why Grinding Matters": grinding force against chewing force, with the common causes */
function ForceCompare({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const [causes] = subs(section.blocks);
  const causeList = causes ? firstList(causes.blocks) : undefined;
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.force}>
          <div className={c.forceCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            {causes ? (
              <div className={c.causes} data-reveal="">
                <h3 className={base.subTitle}>{causes.title}</h3>
                <ul role="list" className={c.causeChips}>
                  {causeList?.items.map((item) => (
                    <li key={item}>
                      <Rich text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className={c.forceCard} aria-hidden="true" data-reveal="">
            <p className={c.forceLabel}>Force on your teeth</p>
            <div className={c.forceRow}>
              <span>Normal chewing</span>
              <span className={c.forceBar}>
                <i className={c.forceChew} />
              </span>
            </div>
            <div className={c.forceRow}>
              <span>Grinding</span>
              <span className={c.forceBar}>
                <i className={c.forceGrind} />
              </span>
            </div>
            <ul className={c.effects}>
              <li>
                <Icon name="alert" size={16} />
                Worn enamel
              </li>
              <li>
                <Icon name="alert" size={16} />
                Chips & cracks
              </li>
              <li>
                <Icon name="alert" size={16} />
                Jaw strain
              </li>
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

/** "Signs You May Need a Night Guard": the signs as glowing chips under a night sky */
function NightSigns({ section, eyebrow }: DesignProps) {
  const { after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <div className={c.night}>
          <span className={c.moon} aria-hidden="true">
            <Moon size={120} />
          </span>
          <span className={c.stars} aria-hidden="true">
            <Icon name="sparkle" size={14} />
            <Icon name="sparkle" size={10} />
            <Icon name="sparkle" size={16} />
            <Icon name="sparkle" size={12} />
          </span>
          <CenterHead head={head} />
          <ul role="list" className={c.signs}>
            {list?.items.map((item) => (
              <li key={item} data-reveal="">
                <Rich text={item} />
              </li>
            ))}
          </ul>
          {after.map((p) => (
            <p key={p.text} className={c.nightNote} data-reveal="">
              <Rich text={p.text} />
            </p>
          ))}
        </div>
      )}
    </Shell>
  );
}

/** "Custom vs. Store-Bought Night Guards": the table with a drawing of each guard's fit */
function GuardCompare({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <CenterHead head={head} />
          {table ? (
            <Table
              block={table}
              className={c.fitTable}
              hot={1}
              heads={(i) => (
                <span className={c.fitArt} aria-hidden="true">
                  <GuardArch fit={i === 1 ? "custom" : "loose"} width={96} />
                </span>
              )}
            />
          ) : null}
        </>
      )}
    </Shell>
  );
}

const MAKE_ICONS: IconName[] = ["search", "scan", "shield", "check"];

/** "How We Make Your Night Guard": a scanned guard beside the four steps */
function GuardMaking({ section, eyebrow }: DesignProps) {
  const { after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={c.making}>
          <div className={c.makingArt} aria-hidden="true" data-reveal="">
            <span className={c.scanLine} />
            <GuardArch fit="custom" width={240} />
            <p className={c.makingCaption}>Made to fit your bite</p>
          </div>
          <div className={c.makingCopy}>
            {head}
            <ol className={c.makeSteps}>
              {list?.items.map((item, i) => (
                <li key={item} data-reveal="">
                  <span className={c.makeIcon} aria-hidden="true">
                    <Icon name={MAKE_ICONS[i % MAKE_ICONS.length]} size={18} />
                  </span>
                  <LeadItem item={item} />
                </li>
              ))}
            </ol>
            {after.map((p) => (
              <p key={p.text} className={c.adapt} data-reveal="">
                <Icon name="heart" size={18} />
                <Rich text={p.text} />
              </p>
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

export const COSMETIC_DESIGNS = {
  "artistry-grid": ArtistryGrid,
  "treatment-bento": TreatmentBento,
  "makeover-matrix": MakeoverMatrix,
  "scan-layers": ScanLayers,
  "gallery-invite": GalleryInvite,
  "plan-receipt": PlanReceipt,
  "tooth-tiles": ToothTiles,
  "veneer-light": VeneerLight,
  "material-duel": MaterialDuel,
  "shell-stages": ShellStages,
  "decade-meter": DecadeMeter,
  "stain-sources": StainSources,
  "whitening-options": WhiteningOptions,
  "shade-tabs": ShadeTabs,
  "chip-repair": ChipRepair,
  "benefit-quad": BenefitQuad,
  "bond-steps": BondSteps,
  "mirror-table": MirrorTable,
  "tray-series": TraySeries,
  "alignment-cases": AlignmentCases,
  "clear-table": ClearTable,
  "aligner-roadmap": AlignerRoadmap,
  "range-stats": RangeStats,
  "force-compare": ForceCompare,
  "night-signs": NightSigns,
  "guard-compare": GuardCompare,
  "guard-making": GuardMaking,
} as const;
