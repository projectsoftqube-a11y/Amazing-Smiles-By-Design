import type { ReactNode } from "react";
import Link from "@/components/ui/SiteLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich, splitLead } from "@/components/ui/Rich";
import type { ContentBlock } from "@/content/service-page";
import { aroundList, firstList, Lead, P, paragraphs, Shell, subs, type DesignProps } from "./DesignKit";
import base from "./SectionDesigns.module.css";
import s from "./RestorativeDesigns.module.css";
import { ToothSideView, ToothTopView } from "./ToothArt";

/**
 * Bespoke designs for the Restorative Dentistry pages (none reused elsewhere).
 * Copy is rendered verbatim with its heading levels; visual extras are
 * decorative (aria-hidden) and only restate facts from the copy.
 */

/** Round navy tick, the same check used across the site's lists */
const CheckDot = () => (
  <span className={s.checkDot} aria-hidden="true">
    <Icon name="check" size={12} />
  </span>
);

const Head = ({ head, center }: { head: ReactNode; center?: boolean }) =>
  center ? <div className={base.centerHead}>{head}</div> : <>{head}</>;

function LeadItem({ item, className }: { item: string; className?: string }) {
  const { lead, rest } = splitLead(item);
  return (
    <span className={className}>
      {lead ? <Lead text={lead} className={s.itemLead} /> : null}
      {lead ? " " : null}
      <Rich text={rest} />
    </span>
  );
}

function TableBlock({
  block,
  highlight = 1,
  headExtras,
  className,
}: {
  block: Extract<ContentBlock, { kind: "table" }>;
  highlight?: number;
  headExtras?: (index: number) => ReactNode;
  className?: string;
}) {
  return (
    <div className={`${s.tableWrap} ${className ?? ""}`} data-reveal="">
      <table className={s.table}>
        <thead>
          <tr>
            {block.head.map((cell, i) =>
              i === 0 && !cell ? (
                <td key={i} />
              ) : (
                <th key={i} scope="col" className={i === highlight ? s.colHot : undefined}>
                  {headExtras ? headExtras(i) : null}
                  <span className={s.headText}>{cell}</span>
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
                  <td key={i} className={i === highlight ? s.cellHot : undefined}>
                    {/^(Yes|No)\b/.test(cell) ? (
                      <span className={s.markRow}>
                        <span className={`${s.mark} ${cell.startsWith("Yes") ? s.markYes : s.markNo}`} aria-hidden="true">
                          <Icon name={cell.startsWith("Yes") ? "check" : "close"} size={14} />
                        </span>
                        <span>
                          <Rich text={cell} />
                        </span>
                      </span>
                    ) : (
                      <Rich text={cell} />
                    )}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <p className={s.swipeHint} aria-hidden="true">
        <Icon name="arrowRight" size={14} className={s.swipeBack} />
        Swipe to compare
        <Icon name="arrowRight" size={14} />
      </p>
    </div>
  );
}

const tableOf = (blocks: ContentBlock[]) =>
  blocks.find((block): block is Extract<ContentBlock, { kind: "table" }> => block.kind === "table");

/* ================= Dental Implants ================= */

function ImplantAnatomy({ section, eyebrow }: DesignProps) {
  const intro = paragraphs(section.blocks);
  const steps = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={s.anatomy}>
          <div className={s.anatomyCopy}>
            {head}
            {intro.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            <ol className={s.anatomySteps}>
              {steps?.items.map((item, i) => (
                <li key={item} data-reveal="">
                  <span className={s.anatomyNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <LeadItem item={item} />
                </li>
              ))}
            </ol>
          </div>
          <div className={s.anatomyVisual} aria-hidden="true" data-reveal="">
            <p className={s.anatomyCaption}>Root to crown: a complete tooth replacement</p>
            <div className={s.layer}>
              <span className={s.crown} />
              <span className={s.layerLabel}>Custom crown</span>
            </div>
            <div className={s.layer}>
              <span className={s.abutment} />
              <span className={s.layerLabel}>Abutment</span>
            </div>
            <div className={s.layer}>
              <span className={s.post} />
              <span className={s.layerLabel}>Implant post</span>
            </div>
            <div className={s.bone}>
              <span>Jawbone · osseointegration</span>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

function OptionDuo({ section, eyebrow }: DesignProps) {
  const [single, arch] = subs(section.blocks);
  const teeth = Array.from({ length: 8 });
  const card = (sub: typeof single, full: boolean) => (
    <div className={`${s.option} ${full ? s.optionNavy : ""}`} data-reveal="">
      <div className={s.teethRow} aria-hidden="true">
        {teeth.map((_, i) => (
          <span key={i} className={`${s.toothBox} ${full || i === 3 ? s.toothNew : ""}`}>
            {(!full && i === 3) || (full && [1, 3, 4, 6].includes(i)) ? <i className={s.toothPost} /> : null}
          </span>
        ))}
      </div>
      <span className={s.optionTag} aria-hidden="true">
        {full ? "Most or all teeth" : "One tooth"}
      </span>
      <h3 className={s.optionTitle}>{sub.title}</h3>
      <Prose blocks={sub.blocks} navy={full} />
    </div>
  );
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Head head={head} center />
          <div className={s.optionGrid}>
            {single ? card(single, false) : null}
            {arch ? card(arch, true) : null}
          </div>
        </>
      )}
    </Shell>
  );
}

function CandidateCheck({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={s.candidate}>
          <div className={s.candidateCopy}>
            {head}
            {after.map((p) => (
              <P key={p.text} text={p.text} />
            ))}
          </div>
          <div className={s.selfCheck} data-reveal="">
            <p className={s.selfCheckHead}>
              <Icon name="clipboard" size={20} />
              {before[0] ? <Rich text={before[0].text} /> : null}
            </p>
            <ul role="list" className={s.toggles}>
              {list?.items.map((item) => (
                <li key={item}>
                  <span className={s.toggle} aria-hidden="true">
                    <i />
                  </span>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

function CbctViewfinder({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <div className={s.viewfinder}>
          <div className={s.viewCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.onNavy} />
            ))}
            {after.map((p) => (
              <P key={p.text} text={p.text} className={base.onNavy} />
            ))}
          </div>
          <div className={s.screen} data-reveal="">
            <span className={s.cornerTL} aria-hidden="true" />
            <span className={s.cornerTR} aria-hidden="true" />
            <span className={s.cornerBL} aria-hidden="true" />
            <span className={s.cornerBR} aria-hidden="true" />
            <span className={s.crossH} aria-hidden="true" />
            <span className={s.crossV} aria-hidden="true" />
            <p className={s.screenLabel} aria-hidden="true">
              <i /> CBCT · 3D
            </p>
            <ul role="list" className={s.readouts}>
              {list?.items.map((item, i) => (
                <li key={item}>
                  <span className={s.readoutIndex} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

function SurgeryStepper({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  const icons: IconName[] = ["tooth", "plus", "bolt", "check"];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <div className={s.stepperHead}>
            {head}
            <div className={s.stepperIntro}>
              {before.map((p) => (
                <P key={p.text} text={p.text} className={base.lead} />
              ))}
            </div>
          </div>
          <ol className={s.chevrons}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={s.chevronTop} aria-hidden="true">
                  <span className={s.chevronIcon}>
                    <Icon name={icons[i % icons.length]} size={22} />
                  </span>
                  <span className={s.chevronNum}>Step {i + 1}</span>
                </span>
                <span className={s.chevronText}>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ol>
          {after.map((p) => (
            <p key={p.text} className={s.stepperFoot} data-reveal="">
              <Icon name="clock" size={18} />
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

function RecoveryTimeline({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  const marks = [
    ["Shortly after surgery", "Back to daily activities"],
    ["Several months", "Full integration"],
    ["For decades", "With proper care"],
  ];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={s.recoveryHead}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <ol className={s.milestones} aria-hidden="true" data-reveal="">
            {marks.map(([when, what]) => (
              <li key={when}>
                <span className={s.milestoneWhen}>{when}</span>
                <span className={s.milestoneWhat}>{what}</span>
              </li>
            ))}
          </ol>
          <div className={s.careRow}>
            <ul role="list" className={s.careChips}>
              {list?.items.map((item) => (
                <li key={item} data-reveal="">
                  <CheckDot />
                  <Rich text={item} />
                </li>
              ))}
            </ul>
            {after.map((p) => (
              <p key={p.text} className={s.decades} data-reveal="">
                <Rich text={p.text} />
              </p>
            ))}
          </div>
        </>
      )}
    </Shell>
  );
}

function CompareMatrix({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  const notes = paragraphs(section.blocks);
  const icons: IconName[] = ["tooth", "tooth", "plus", "smile"];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Head head={head} center />
          {table ? (
            <TableBlock
              block={table}
              highlight={1}
              className={s.matrix}
              headExtras={(i) => (
                <span className={s.headIcon} aria-hidden="true">
                  <Icon name={icons[i] ?? "tooth"} size={20} />
                </span>
              )}
            />
          ) : null}
          {notes.map((p) => (
            <p key={p.text} className={s.compareLinks} data-reveal="">
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

/* ================= Dental Crowns ================= */

const REASON_ICONS: IconName[] = ["shield", "bolt", "heart", "tooth", "plus", "card", "sparkle", "smile"];

function ReasonMosaic({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={s.mosaicHead}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <ul role="list" className={s.mosaic}>
            {list?.items.map((item, i) => (
              <li key={item} className={i < 2 ? s.mosaicBig : undefined} data-reveal="">
                <span className={s.mosaicIcon} aria-hidden="true">
                  <Icon name={REASON_ICONS[i % REASON_ICONS.length]} size={i < 2 ? 26 : 20} />
                </span>
                <Rich text={item} />
              </li>
            ))}
          </ul>
          {after.map((p) => (
            <p key={p.text} className={s.saveTooth} data-reveal="">
              <Icon name="heart" size={20} />
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

const SWATCHES = [
  "linear-gradient(135deg, #fbf8f2 0%, #efe7da 55%, #fffdf8 100%)",
  "linear-gradient(135deg, #f3eee5 0%, #f3eee5 55%, #9aa3ad 55%, #c5ccd3 100%)",
  "linear-gradient(135deg, #ffffff 0%, #eef3f7 50%, #ffffff 100%)",
  "linear-gradient(135deg, #b8862e 0%, #f0cf7a 45%, #c99a3f 100%)",
];

function MaterialSwatches({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const { after } = aroundList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Head head={head} center />
          <ul role="list" className={s.swatches}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={s.swatchBlock} style={{ background: SWATCHES[i % SWATCHES.length] }} aria-hidden="true" />
                <LeadItem item={item} className={s.swatchText} />
              </li>
            ))}
          </ul>
          {after.map((p) => (
            <p key={p.text} className={s.swatchNote} data-reveal="">
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

function LabJourney({ section, eyebrow }: DesignProps) {
  const intro = paragraphs(section.blocks);
  const [first, second] = subs(section.blocks);
  const visit = (sub: typeof first, number: number, chips: string[], navy: boolean) => (
    <li className={s.apptItem} data-reveal="">
      <span className={`${s.apptDate} ${navy ? s.apptDateNavy : ""}`} aria-hidden="true">
        <small>Visit</small>
        {number}
      </span>
      <div className={`${s.apptCard} ${navy ? s.apptCardNavy : ""}`}>
        <h3 className={s.apptTitle}>{sub.title}</h3>
        <Prose blocks={sub.blocks} navy={navy} />
        <ul className={s.apptChips} aria-hidden="true">
          {chips.map((chip) => (
            <li key={chip}>
              <CheckDot />
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={s.appt}>
          <div className={s.apptIntro}>
            {head}
            {intro.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            <p className={s.apptBadge} aria-hidden="true">
              <strong>2</strong>
              <span>visits, with your crown made in a dental laboratory in between</span>
            </p>
          </div>
          <ol className={s.apptLine}>
            {first ? visit(first, 1, ["Decay removed", "Tooth reshaped", "Impression or scan", "Temporary crown"], false) : null}
            <li className={s.apptLab} aria-hidden="true">
              <span className={s.apptLabIcon}>
                <Icon name="sparkle" size={18} />
              </span>
              Your permanent crown is made in a dental laboratory
            </li>
            {second ? visit(second, 2, ["Temporary removed", "Fit, comfort & look checked", "Bonded in place"], true) : null}
          </ol>
        </div>
      )}
    </Shell>
  );
}

function CoverageScale({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const teeth = [
    { kind: "filling" as const, name: "Filling", note: "Repairs a small cavity" },
    { kind: "onlay" as const, name: "Onlay", note: "Rebuilds part of the chewing surface" },
    { kind: "crown" as const, name: "Crown", note: "Covers the entire tooth" },
  ];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={s.scale}>
          <div className={s.scaleCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={s.teethCard} aria-hidden="true" data-reveal="">
            <ol className={s.teethCompare}>
              {teeth.map((tooth) => (
                <li key={tooth.kind} className={tooth.kind === "crown" ? s.teethHot : undefined}>
                  <ToothSideView kind={tooth.kind} />
                  <span className={s.scaleName}>{tooth.name}</span>
                  <span className={s.scaleNote}>{tooth.note}</span>
                </li>
              ))}
            </ol>
            <p className={s.teethScale}>
              <span>Less coverage</span>
              <span className={s.teethArrow} />
              <span>Most protection</span>
            </p>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ================= Dental Fillings ================= */

function LayerBuild({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  const count = list?.items.length ?? 0;
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={s.layers}>
          <div className={s.layersCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            {after.map((p) => (
              <p key={p.text} className={s.layersDone} data-reveal="">
                <CheckDot />
                <Rich text={p.text} />
              </p>
            ))}
          </div>
          {/* Steps stack up like the composite layers, widest at the base */}
          <ol className={s.pyramid}>
            {list?.items.map((item, i) => (
              <li key={item} style={{ width: `${100 - (count - 1 - i) * 5}%` }} data-reveal="">
                <span className={s.pyramidNum} aria-hidden="true">
                  {i + 1}
                </span>
                <Rich text={item} />
              </li>
            ))}
          </ol>
        </div>
      )}
    </Shell>
  );
}

function CompositeVsAmalgam({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Head head={head} center />
          <div className={s.versus2}>
            <div className={s.composite} data-reveal="">
              <span className={s.matTag} aria-hidden="true">
                Composite resin
              </span>
              {before.map((p) => (
                <P key={p.text} text={p.text} />
              ))}
              <ul role="list" className={s.benefitList}>
                {list?.items.map((item) => (
                  <li key={item}>
                    <CheckDot />
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.amalgam} data-reveal="">
              <span className={`${s.matTag} ${s.matTagMetal}`} aria-hidden="true">
                Amalgam
              </span>
              {after.map((p) => (
                <P key={p.text} text={p.text} />
              ))}
              <p className={s.ada} aria-hidden="true">
                <Icon name="shield" size={18} />
                ADA: both considered safe & effective
              </p>
            </div>
          </div>
        </>
      )}
    </Shell>
  );
}

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function HabitTracker({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const links = section.blocks.filter((block): block is Extract<ContentBlock, { kind: "link" }> => block.kind === "link");
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={s.tracker}>
          <div className={s.trackerCopy}>
            {head}
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={s.trackerLink}>
                {link.label}
                <Icon name="arrowRight" size={18} />
              </Link>
            ))}
          </div>
          <div className={s.trackerCard} data-reveal="">
            <div className={s.trackerDays} aria-hidden="true">
              <span />
              {DAYS.map((day, i) => (
                <span key={i}>{day}</span>
              ))}
            </div>
            <ul role="list" className={s.trackerRows}>
              {list?.items.map((item, row) => (
                <li key={item}>
                  <span className={s.habit}>
                    <Rich text={item} />
                  </span>
                  {DAYS.map((_, i) => (
                    <span
                      key={i}
                      className={`${s.tick} ${(row + i) % 3 !== 2 || row < 3 ? s.tickOn : ""}`}
                      aria-hidden="true"
                    />
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ================= Inlays & Onlays ================= */

function CoverageTable({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  const notes = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Head head={head} center />
          {table ? (
            <TableBlock
              block={table}
              highlight={2}
              className={s.coverTable}
              headExtras={(i) => (
                <span className={s.toothTop}>
                  <ToothTopView kind={i === 1 ? "inlay" : i === 2 ? "onlay" : "crown"} inverse={i === 2} />
                </span>
              )}
            />
          ) : null}
          {notes.map((p) => (
            <p key={p.text} className={s.coverNote} data-reveal="">
              <Icon name="info" size={18} />
              <span>
                <Rich text={p.text} />
              </span>
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

function MaterialChips({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={s.matGrid}>
          <div className={s.matCopy}>
            {head}
            {text.map((p) => (
              <p key={p.text} className={s.matStatement} data-reveal="">
                <Rich text={p.text} />
              </p>
            ))}
          </div>
          <ul role="list" className={s.matChips} aria-hidden="true" data-reveal="">
            <li className={s.matHot}>
              <span className={s.matDot} style={{ background: SWATCHES[0] }} />
              Porcelain
              <em>Most common</em>
            </li>
            <li>
              <span className={s.matDot} style={{ background: "linear-gradient(135deg,#f7f1e6,#e9dcc6)" }} />
              Composite resin
            </li>
            <li>
              <span className={s.matDot} style={{ background: SWATCHES[3] }} />
              Gold
            </li>
          </ul>
        </div>
      )}
    </Shell>
  );
}

function BenefitRibbon({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const icons: IconName[] = ["shield", "clock", "sparkle", "heart", "check"];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <Head head={head} center />
          <ul role="list" className={s.ribbon}>
            {list?.items.map((item, i) => {
              const { lead, rest } = splitLead(item);
              const years = /10 to 30 years/.test(rest);
              return (
                <li key={item} className={years ? s.ribbonHot : undefined} data-reveal="">
                  {years ? (
                    <span className={s.ribbonYears} aria-hidden="true">
                      10–30
                      <small>years</small>
                    </span>
                  ) : (
                    <span className={s.ribbonIcon} aria-hidden="true">
                      <Icon name={icons[i % icons.length]} size={22} />
                    </span>
                  )}
                  {lead ? <Lead text={lead} className={s.ribbonLead} /> : null}{" "}
                  <span className={s.ribbonText}>
                    <Rich text={rest} />
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Shell>
  );
}

/* ================= Root Canal ================= */

function ToothSection({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const [causes] = subs(section.blocks);
  const list = causes ? firstList(causes.blocks) : undefined;
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={s.anatomy2}>
          <div className={s.toothDiagram} aria-hidden="true" data-reveal="">
            <div className={s.toothShape}>
              <span className={s.enamel} />
              <span className={s.dentin} />
              <span className={s.pulp} />
              <span className={s.canalL} />
              <span className={s.canalR} />
            </div>
            <ul className={s.toothLabels}>
              <li>
                <i className={s.keyEnamel} /> Enamel
              </li>
              <li>
                <i className={s.keyDentin} /> Dentin
              </li>
              <li>
                <i className={s.keyPulp} /> Pulp: nerves & blood vessels
              </li>
            </ul>
          </div>
          <div className={s.anatomy2Copy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            {causes ? (
              <div className={s.causes} data-reveal="">
                <h3 className={base.subTitle}>{causes.title}</h3>
                <ul role="list" className={s.causeList}>
                  {list?.items.map((item) => (
                    <li key={item} className={/^Trauma/.test(item) ? s.causeLast : undefined}>
                      <Icon name="alert" size={16} />
                      <Rich text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </Shell>
  );
}

function Staircase({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Head head={head} center />
          <ol className={s.stairs}>
            {list?.items.map((item, i) => (
              <li key={item} style={{ marginTop: `calc(${(list.items.length - 1 - i) * 2.5}rem)` }} data-reveal="">
                <span className={s.stairNum} aria-hidden="true">
                  {i + 1}
                </span>
                <LeadItem item={item} className={s.stairText} />
              </li>
            ))}
          </ol>
        </>
      )}
    </Shell>
  );
}

function Reassure({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={s.reassure}>
          <div className={s.reassureCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={s.relief} aria-hidden="true" data-reveal="">
            <div className={s.reliefRow}>
              <span className={s.reliefLabel}>Before: infected pulp</span>
              <span className={s.reliefBar}>
                <i style={{ width: "88%" }} className={s.reliefHigh} />
              </span>
            </div>
            <div className={s.reliefRow}>
              <span className={s.reliefLabel}>After: pressure relieved</span>
              <span className={s.reliefBar}>
                <i style={{ width: "18%" }} className={s.reliefLow} />
              </span>
            </div>
            <ul className={s.reliefChips}>
              <li>Local anesthesia</li>
              <li>Mild tenderness, briefly</li>
            </ul>
          </div>
        </div>
      )}
    </Shell>
  );
}

function KeepOrExtract({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={s.fork}>
          <div className={s.forkCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={s.forkPaths} aria-hidden="true" data-reveal="">
            <div className={s.forkStart}>
              <Icon name="alert" size={18} />
              An infected tooth
            </div>
            <div className={s.forkSplit}>
              <div className={`${s.path} ${s.pathKeep}`}>
                <span className={s.pathTag}>Usually preferred</span>
                <strong>Root canal</strong>
                <span>Keep your natural tooth</span>
                <ul>
                  <li>
                    <CheckDot />
                    Maintains your bite
                  </li>
                  <li>
                    <CheckDot />
                    Neighbors don&apos;t shift
                  </li>
                  <li>
                    <CheckDot />
                    Often more cost-effective
                  </li>
                </ul>
              </div>
              <div className={s.path}>
                <strong>Extraction</strong>
                <span>Then an implant or bridge to replace it</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ================= Dental Bridges ================= */

function GapDiagram({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={s.gap}>
          <div className={s.gapCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            <div className={s.gapVisual} aria-hidden="true" data-reveal="">
              <span className={s.gapTooth} />
              <span className={`${s.gapTooth} ${s.tiltRight}`} />
              <span className={s.gapHole}>
                <Icon name="arrowRight" size={16} className={s.gapArrowL} />
                <Icon name="arrowRight" size={16} className={s.gapArrowR} />
              </span>
              <span className={`${s.gapTooth} ${s.tiltLeft}`} />
              <span className={s.gapTooth} />
            </div>
          </div>
          <ul role="list" className={s.effects}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={s.effectNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Rich text={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Shell>
  );
}

function BridgeSchematics({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const { after } = aroundList(section.blocks);
  const plans: ("crown" | "pontic" | "wing")[][] = [
    ["crown", "pontic", "crown"],
    ["crown", "pontic"],
    ["wing", "pontic", "wing"],
  ];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <Head head={head} center />
          <ul role="list" className={s.bridges}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={s.schematic} aria-hidden="true">
                  {plans[i]?.map((part, j) => (
                    <span key={j} className={s[`part-${part}`]}>
                      {part === "pontic" ? "New tooth" : part === "crown" ? "Crown" : "Wing"}
                    </span>
                  ))}
                </span>
                <LeadItem item={item} className={s.bridgeText} />
              </li>
            ))}
          </ul>
          {after.map((p) => (
            <p key={p.text} className={s.bridgeNote} data-reveal="">
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

function VisitTrack({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={s.trackHead}>
            {head}
            {before.map((p) => (
              <p key={p.text} className={s.trackBadge} data-reveal="">
                <Icon name="calendar" size={18} />
                <Rich text={p.text} />
              </p>
            ))}
          </div>
          <ol className={s.track}>
            {list?.items.map((item) => (
              <li key={item} data-reveal="">
                <span className={s.station} aria-hidden="true" />
                <LeadItem item={item} className={s.trackText} />
              </li>
            ))}
          </ol>
        </>
      )}
    </Shell>
  );
}

/* ================= Dentures ================= */

function ArchVisual({ gaps = [], clasps = [] }: { gaps?: number[]; clasps?: number[] }) {
  return (
    <span className={s.arch} aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span
          key={i}
          className={`${s.archTooth} ${gaps.includes(i) ? s.archGap : ""} ${clasps.includes(i) ? s.archClasp : ""}`}
          style={{ transform: `rotate(${(i - 5.5) * 13}deg) translateY(-6.4rem)` }}
        />
      ))}
    </span>
  );
}

function DentureFull({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={s.denture}>
          <div className={s.dentureVisual} data-reveal="">
            <ArchVisual />
            <span className={s.dentureCaption} aria-hidden="true">
              An entire arch on a gum-colored base
            </span>
          </div>
          <div className={s.dentureCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

function DenturePartial({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={`${s.denture} ${s.dentureFlip}`}>
          <div className={s.dentureCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <div className={`${s.dentureVisual} ${s.dentureVisualLight}`} data-reveal="">
            <ArchVisual gaps={[0, 1, 2, 9, 10, 11]} clasps={[3, 8]} />
            <span className={s.dentureCaption} aria-hidden="true">
              Fills the gaps · clasps on nearby teeth
            </span>
          </div>
        </div>
      )}
    </Shell>
  );
}

function DentureImmediate({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const steps = ["Impressions before extractions", "Denture made in advance", "Placed right after removal", "Adjusted or relined as you heal"];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={s.immediateHead}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          <ol className={s.immediateFlow} aria-hidden="true" data-reveal="">
            {steps.map((step, i) => (
              <li key={step}>
                <span>{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </>
      )}
    </Shell>
  );
}

function AttachmentOptions({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  const posts = [2, 4, 5];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <>
          <div className={s.attachHead}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.onNavy} />
            ))}
          </div>
          <ul role="list" className={s.attach}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={s.attachVisual} aria-hidden="true">
                  <span className={s.attachBase} />
                  <span className={`${s.attachPosts} ${i === 1 ? s.attachBar : ""}`}>
                    {Array.from({ length: posts[i] ?? 2 }, (_, j) => (
                      <i key={j} />
                    ))}
                  </span>
                  <span className={s.attachCount}>{i === 0 ? "2 implants" : i === 1 ? "Several implants" : "5+ implants"}</span>
                </span>
                <LeadItem item={item} className={s.attachText} />
              </li>
            ))}
          </ul>
          {after.map((p) => (
            <p key={p.text} className={s.attachNote} data-reveal="">
              <Icon name="info" size={18} />
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

function RelineGuide({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={s.reline}>
          <div className={s.relineCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
            <div className={s.relineBadge} aria-hidden="true" data-reveal="">
              <strong>1–2</strong>
              <span>years between relines, typically</span>
            </div>
            {after.map((p) => (
              <P key={p.text} text={p.text} />
            ))}
          </div>
          <ul role="list" className={s.relineGrid}>
            {list?.items.map((item, i) => (
              <li key={item} className={i === 0 ? s.relineHot : undefined} data-reveal="">
                <LeadItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Shell>
  );
}

/* ================= Restorative hub ================= */

const SITUATION_ICONS: IconName[] = ["sparkle", "tooth", "shield", "alert", "plus", "smile"];

function SituationTable({ section, eyebrow }: DesignProps) {
  const table = tableOf(section.blocks);
  const notes = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={s.situation}>
          <div className={s.situationCopy}>
            {head}
            {notes.map((p) => (
              <P key={p.text} text={p.text} className={base.lead} />
            ))}
          </div>
          {table ? (
            <div className={s.situationWrap} data-reveal="">
              <table className={s.situationTable}>
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
                  {table.rows.map((row, i) => (
                    <tr key={row[0]}>
                      <th scope="row">
                        <span className={s.sitIcon} aria-hidden="true">
                          <Icon name={SITUATION_ICONS[i % SITUATION_ICONS.length]} size={18} />
                        </span>
                        <Rich text={row[0]} />
                      </th>
                      <td>
                        <span className={s.sitOption}>
                          <Rich text={row[1]} />
                        </span>
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

function ImagingBand({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <div className={s.imaging}>
          <div className={s.imagingCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={base.onNavy} />
            ))}
          </div>
          <ul role="list" className={s.imagingTools} aria-hidden="true" data-reveal="">
            <li>
              <Icon name="scan" size={24} />
              CBCT 3D scans
            </li>
            <li>
              <Icon name="xray" size={24} />
              Digital X-rays
            </li>
            <li>
              <Icon name="face" size={24} />
              RayFace scanner
            </li>
          </ul>
        </div>
      )}
    </Shell>
  );
}

/* ——— shared small renderer ——— */
function Prose({ blocks, navy }: { blocks: ContentBlock[]; navy?: boolean }) {
  return (
    <>
      {blocks.map((block, i) =>
        block.kind === "p" ? (
          <p key={i} className={navy ? base.onNavy : base.text}>
            <Rich text={block.text} />
          </p>
        ) : null,
      )}
    </>
  );
}

export const RESTORATIVE_DESIGNS = {
  "implant-anatomy": ImplantAnatomy,
  "option-duo": OptionDuo,
  "candidate-check": CandidateCheck,
  "cbct-viewfinder": CbctViewfinder,
  "surgery-stepper": SurgeryStepper,
  "recovery-timeline": RecoveryTimeline,
  "compare-matrix": CompareMatrix,
  "reason-mosaic": ReasonMosaic,
  "material-swatches": MaterialSwatches,
  "lab-journey": LabJourney,
  "coverage-scale": CoverageScale,
  "layer-build": LayerBuild,
  "composite-vs-amalgam": CompositeVsAmalgam,
  "habit-tracker": HabitTracker,
  "coverage-table": CoverageTable,
  "material-chips": MaterialChips,
  "benefit-ribbon": BenefitRibbon,
  "tooth-section": ToothSection,
  staircase: Staircase,
  reassure: Reassure,
  "keep-or-extract": KeepOrExtract,
  "gap-diagram": GapDiagram,
  "bridge-schematics": BridgeSchematics,
  "visit-track": VisitTrack,
  "denture-full": DentureFull,
  "denture-partial": DenturePartial,
  "denture-immediate": DentureImmediate,
  "attachment-options": AttachmentOptions,
  "reline-guide": RelineGuide,
  "situation-table": SituationTable,
  "imaging-band": ImagingBand,
} as const;

export type RestorativeDesignName = keyof typeof RESTORATIVE_DESIGNS;
