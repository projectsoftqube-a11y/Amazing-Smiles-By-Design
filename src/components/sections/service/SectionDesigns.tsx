import type { ReactNode } from "react";
import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich, splitLead } from "@/components/ui/Rich";
import { carrierLogos } from "@/content/insurance";
import type { SectionDesignName } from "@/content/service-page";
import { membershipPlans } from "@/content/site";
import { COSMETIC_DESIGNS } from "./CosmeticDesigns";
import { RESTORATIVE_DESIGNS } from "./RestorativeDesigns";
import { aroundList, firstList, Lead, P, paragraphs, Shell, subs, type DesignProps } from "./DesignKit";
import styles from "./SectionDesigns.module.css";

/**
 * Bespoke section designs for treatment pages, one per section that asked for it,
 * so no two pages repeat a layout. Every design renders the section's own copy
 * (verbatim, H2 and H3 levels intact); small visual extras are decorative
 * (aria-hidden) and only restate facts already in the copy.
 */

export type DesignName = SectionDesignName;

/* ——— Dental Checkups: "What Happens at a Dental Exam & Cleaning" ——— */
function ExamBento({ section, eyebrow }: DesignProps) {
  const [exam, gum, cancer, cleaning] = subs(section.blocks);
  const examText = aroundList(exam.blocks);
  const examList = firstList(exam.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={styles.centerHead}>{head}</div>
          <div className={styles.bento}>
            <div className={`${styles.bentoCard} ${styles.bentoExam}`} data-reveal="">
              <span className={styles.bentoIcon} aria-hidden="true">
                <Icon name="clipboard" size={24} />
              </span>
              <h3 className={styles.subTitle}>{exam.title}</h3>
              {examText.before.map((p) => (
                <P key={p.text} text={p.text} className={styles.onNavy} />
              ))}
              {examList ? (
                <ul role="list" className={styles.examList}>
                  {examList.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={16} />
                      <Rich text={item} />
                    </li>
                  ))}
                </ul>
              ) : null}
              {examText.after.map((p) => (
                <P key={p.text} text={p.text} className={styles.onNavyMuted} />
              ))}
            </div>

            <div className={`${styles.bentoCard} ${styles.bentoGum}`} data-reveal="">
              <span className={styles.bentoIcon} aria-hidden="true">
                <Icon name="search" size={22} />
              </span>
              <h3 className={styles.subTitle}>{gum.title}</h3>
              {paragraphs(gum.blocks).map((p) => (
                <P key={p.text} text={p.text} />
              ))}
              <div className={styles.pockets} aria-hidden="true">
                <span className={styles.pocket}>
                  <span className={styles.pocketBar} style={{ height: "1.5rem" }} />
                  Shallow
                </span>
                <span className={`${styles.pocket} ${styles.pocketDeep}`}>
                  <span className={styles.pocketBar} style={{ height: "3.75rem" }} />
                  Deeper
                </span>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.bentoCancer}`} data-reveal="">
              <span className={styles.bentoIcon} aria-hidden="true">
                <Icon name="face" size={22} />
              </span>
              <h3 className={styles.subTitle}>{cancer.title}</h3>
              {paragraphs(cancer.blocks).map((p) => (
                <P key={p.text} text={p.text} />
              ))}
              <ul role="list" className={styles.areaChips} aria-hidden="true">
                {["Lips", "Tongue", "Cheeks", "Throat"].map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.bentoCard} ${styles.bentoClean}`} data-reveal="">
              <span className={styles.bentoIcon} aria-hidden="true">
                <Icon name="sparkle" size={22} />
              </span>
              <h3 className={styles.subTitle}>{cleaning.title}</h3>
              {paragraphs(cleaning.blocks).map((p) => (
                <P key={p.text} text={p.text} />
              ))}
              <ol className={styles.cleanFlow} aria-hidden="true">
                <li>Plaque & tartar removed</li>
                <li>Teeth polished</li>
                <li>Home-care tips</li>
              </ol>
            </div>
          </div>
        </>
      )}
    </Shell>
  );
}

/* ——— Oral Cancer Screening ——— */
const SIGN_SWATCH = ["#d9534f", "#f4f6f8", "#e8a87c", "#c9b8a6", "#9db4c9", "#b7c6d6"];

function SignsGrid({ section, eyebrow }: DesignProps) {
  const intro = paragraphs(section.blocks);
  const [signs] = subs(section.blocks);
  const list = firstList(signs.blocks);
  const after = aroundList(signs.blocks).after;
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={styles.signs}>
          <div className={styles.signsCopy}>
            {head}
            {intro.map((p, i) => (
              <P key={p.text} text={p.text} className={i === 0 ? styles.lead : styles.text} />
            ))}
          </div>
          <div className={styles.signsPanel} data-reveal="">
            <h3 className={styles.subTitle}>{signs.title}</h3>
            <ul role="list" className={styles.signTiles}>
              {list?.items.map((item, i) => (
                <li key={item}>
                  <span className={styles.swatch} style={{ background: SIGN_SWATCH[i % SIGN_SWATCH.length] }} aria-hidden="true" />
                  <Rich text={item} />
                </li>
              ))}
            </ul>
            {after.map((p) => (
              <p key={p.text} className={styles.signsNote}>
                <Icon name="info" size={18} />
                <span>
                  <Rich text={p.text} />
                </span>
              </p>
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

function ScanPanel({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={styles.scan}>
          <div className={styles.scanCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
            <p className={styles.scanMeta} aria-hidden="true">
              <Icon name="clock" size={18} />
              Just a few minutes · No special preparation
            </p>
          </div>
          <div className={styles.scanPanel} data-reveal="">
            <span className={styles.scanBeam} aria-hidden="true" />
            <ul role="list" className={styles.scanList}>
              {list?.items.map((item, i) => {
                const { lead, rest } = splitLead(item);
                return (
                  <li key={item}>
                    <span className={styles.scanIndex} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.scanArea}>{lead ? <Lead text={lead} /> : null}</span>{" "}
                    <span className={styles.scanText}>
                      <Rich text={rest} />
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

function SymptomCloud({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={styles.cloudWrap}>
          <div className={styles.centerHead}>{head}</div>
          <div className={styles.cloudCard} data-reveal="">
            <div className={styles.cloudIntro}>
              <span className={styles.cloudIcon} aria-hidden="true">
                <Icon name="alert" size={24} />
              </span>
              {before.map((p) => (
                <P key={p.text} text={p.text} className={styles.cloudLead} />
              ))}
            </div>
            <ul role="list" className={styles.cloud}>
              {list?.items.map((item) => (
                <li key={item}>
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

function RiskStatement({ section, eyebrow }: DesignProps) {
  const [first, ...rest] = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="navy">
      {(head) => (
        <div className={styles.statement}>
          {head}
          <p className={styles.statementText} data-reveal="">
            <Rich text={first.text} />
          </p>
          {rest.map((p) => (
            <P key={p.text} text={p.text} className={styles.onNavy} />
          ))}
          <ul role="list" className={styles.riskTags} aria-hidden="true">
            <li>
              <Icon name="alert" size={16} />
              Tobacco
            </li>
            <li>
              <Icon name="alert" size={16} />
              Excessive alcohol
            </li>
            <li>
              <Icon name="info" size={16} />
              HPV
            </li>
            <li className={styles.riskGood}>
              <Icon name="calendar" size={16} />
              Checked every six months
            </li>
          </ul>
        </div>
      )}
    </Shell>
  );
}

/* ——— Oral Hygiene ——— */

/**
 * "Flossing": the six steps alternate either side of a wavy floss thread, each
 * joined to it by a numbered marker; the bleeding tip closes the section.
 */
function FlossThread({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <div className={styles.threadHead}>
            {head}
            <div className={styles.threadIntro}>
              {before.map((p) => (
                <P key={p.text} text={p.text} className={styles.lead} />
              ))}
              <p className={styles.threadBadge} aria-hidden="true">
                <Icon name="waves" size={18} />
                About 18 inches of floss
              </p>
            </div>
          </div>

          <div className={styles.threadWrap}>
            {/* The floss: a gently waving line down the middle */}
            <svg className={styles.thread} viewBox="0 0 40 600" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path d="M20 0 C 36 50, 4 100, 20 150 S 36 250, 20 300 S 4 400, 20 450 S 36 550, 20 600" />
            </svg>
            <ol className={styles.threadSteps}>
              {list?.items.map((item, i) => (
                <li key={item} className={i % 2 === 0 ? styles.threadLeft : styles.threadRight} data-reveal="">
                  <span className={styles.threadMarker} aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className={styles.threadCard}>
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {after.map((p) => (
            <div key={p.text} className={styles.threadTip} data-reveal="">
              <span className={styles.threadTipIcon} aria-hidden="true">
                <Icon name="drop" size={24} />
              </span>
              <span className={styles.threadTipLabel} aria-hidden="true">
                Good to know
              </span>
              <p className={styles.threadTipText}>
                <Rich text={p.text} />
              </p>
            </div>
          ))}
        </>
      )}
    </Shell>
  );
}

/**
 * "Choosing Oral Hygiene Products" as a routine kit: Brush · Clean between · Rinse.
 * The list stays in the content file's order; CSS places each product in its column.
 */
const KIT_GROUPS = [
  { label: "Brush", icon: "sparkle" as IconName },
  { label: "Clean between", icon: "waves" as IconName },
  { label: "Rinse", icon: "drop" as IconName },
];
// Content order: electric brush, fluoride toothpaste, rinse, interproximal brushes, water flossers
const KIT_PLACE = ["kitA", "kitB", "kitC", "kitD", "kitE"];
const KIT_GROUP_OF = [0, 0, 2, 1, 1];
const KIT_ICONS: IconName[] = ["bolt", "shield", "drop", "sparkle", "waves"];

function RoutineKit({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const { after } = aroundList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={styles.centerHead}>{head}</div>
          <div className={styles.kitLabels} aria-hidden="true">
            {KIT_GROUPS.map((group, i) => (
              <span key={group.label} className={styles.kitLabel}>
                <span className={styles.kitLabelIcon}>
                  <Icon name={group.icon} size={18} />
                </span>
                <span className={styles.kitStep}>Step {i + 1}</span>
                {group.label}
              </span>
            ))}
          </div>
          <ul role="list" className={styles.kit}>
            {list?.items.map((item, i) => {
              const { lead, rest } = splitLead(item);
              return (
                <li key={item} className={`${styles.kitItem} ${styles[KIT_PLACE[i]] ?? ""}`} data-reveal="">
                  <span className={styles.kitGroupTag} aria-hidden="true">
                    {KIT_GROUPS[KIT_GROUP_OF[i] ?? 0].label}
                  </span>
                  <span className={styles.kitIcon} aria-hidden="true">
                    <Icon name={KIT_ICONS[i % KIT_ICONS.length]} size={26} />
                  </span>
                  {lead ? <Lead text={lead} className={styles.kitName} /> : null}{" "}
                  <span className={styles.kitText}>
                    <Rich text={rest} />
                  </span>
                </li>
              );
            })}
          </ul>
          {after.map((p) => (
            <p key={p.text} className={styles.kitNote} data-reveal="">
              <span className={styles.kitNoteIcon} aria-hidden="true">
                <Icon name="message" size={20} />
              </span>
              <Rich text={p.text} />
            </p>
          ))}
        </>
      )}
    </Shell>
  );
}

/* ——— Scaling & Root Planing ——— */
function ProbeGauge({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={styles.gaugeGrid}>
          <div className={styles.gaugeCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
            <ul role="list" className={styles.warnList}>
              {list?.items.map((item) => (
                <li key={item} data-reveal="">
                  <Icon name="alert" size={18} />
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.gaugeCard} data-reveal="">
            <div className={styles.gauge} aria-hidden="true">
              <span className={styles.gaugeLabel}>Pocket depth</span>
              <div className={styles.gaugeScale}>
                {[1, 2, 3, 4, 5, 6].map((mm) => (
                  <span key={mm} className={mm <= 3 ? styles.gaugeHealthy : styles.gaugeDeep}>
                    {mm}
                    <small>mm</small>
                  </span>
                ))}
              </div>
              <div className={styles.gaugeLegend}>
                <span>
                  <i className={styles.legendHealthy} /> Healthy: 1–3 mm
                </span>
                <span>
                  <i className={styles.legendDeep} /> Deeper pockets
                </span>
              </div>
            </div>
            {after.map((p) => (
              <P key={p.text} text={p.text} className={styles.onNavy} />
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

function TwoPhases({ section, eyebrow }: DesignProps) {
  const phases = subs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <div className={styles.centerHead}>{head}</div>
          <div className={styles.phases}>
            {phases.map((phase, i) => {
              const list = firstList(phase.blocks);
              const { before } = aroundList(phase.blocks);
              return (
                <div key={phase.title} className={`${styles.phase} ${i === 1 ? styles.phaseNavy : ""}`} data-reveal="">
                  <span className={styles.phaseTag} aria-hidden="true">
                    Step {i + 1}
                  </span>
                  <span className={styles.phaseIcon} aria-hidden="true">
                    <Icon name={i === 0 ? "tooth" : "sparkle"} size={26} />
                  </span>
                  <h3 className={styles.phaseTitle}>{phase.title}</h3>
                  {before.map((p) => (
                    <P key={p.text} text={p.text} className={i === 1 ? styles.onNavy : styles.text} />
                  ))}
                  {list ? (
                    <ul role="list" className={styles.phaseList}>
                      {list.items.map((item) => (
                        <li key={item}>
                          <Icon name="check" size={16} />
                          <Rich text={item} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
            <span className={styles.phaseArrow} aria-hidden="true">
              <Icon name="arrowRight" size={22} />
            </span>
          </div>
        </>
      )}
    </Shell>
  );
}

function ProcessRow({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  const icons: IconName[] = ["tooth", "sparkle", "shield", "pill"];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={styles.processHead}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
          </div>
          <ol className={styles.process}>
            {list?.items.map((item, i) => (
              <li key={item} data-reveal="">
                <span className={styles.processDot} aria-hidden="true">
                  <Icon name={icons[i % icons.length]} size={22} />
                </span>
                <span className={styles.processText}>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ol>
        </>
      )}
    </Shell>
  );
}

function Versus({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={styles.versus}>
          <div className={styles.versusCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
          </div>
          <div className={styles.versusVisual} aria-hidden="true" data-reveal="">
            <div className={styles.versusCol}>
              <span className={styles.versusTag}>Regular cleaning</span>
              <span className={`${styles.zone} ${styles.zoneActive}`}>Visible surfaces</span>
              <span className={styles.gumLine}>Gum line</span>
              <span className={styles.zone}>Below the gum line</span>
            </div>
            <span className={styles.versusVs}>vs</span>
            <div className={`${styles.versusCol} ${styles.versusDeep}`}>
              <span className={styles.versusTag}>Deep cleaning</span>
              <span className={styles.zone}>Visible surfaces</span>
              <span className={styles.gumLine}>Gum line</span>
              <span className={`${styles.zone} ${styles.zoneActive}`}>Below the gum line</span>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

function CarePlan({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={styles.care}>
          <div className={styles.careCopy}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
          </div>
          <div className={styles.carePad} data-reveal="">
            <div className={styles.carePadHead} aria-hidden="true">
              <Icon name="clipboard" size={20} />
              Your aftercare plan
            </div>
            <ul role="list" className={styles.careList}>
              {list?.items.map((item) => (
                <li key={item}>
                  <span className={styles.checkbox} aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
            {after.map((p) => (
              <p key={p.text} className={styles.careFoot}>
                <Rich text={p.text} />
              </p>
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

function CostSplit({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <div className={styles.centerHead}>{head}</div>
          <ul role="list" className={styles.costSplit} data-reveal="">
            {list?.items.map((item, i) => {
              const { lead, rest } = splitLead(item);
              return (
                <li key={item} className={i === 0 ? styles.costNavy : undefined}>
                  <span className={styles.costIcon} aria-hidden="true">
                    <Icon name={i === 0 ? "shield" : "tag"} size={26} />
                  </span>
                  {lead ? <Lead text={lead} className={styles.costLead} /> : null}{" "}
                  <span className={styles.costText}>
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

/* ——— Periodontal Maintenance ——— */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function VisitCalendar({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={styles.calendarGrid}>
          <div className={styles.calendarCopy}>
            {head}
            {text.map((p, i) => (
              <P key={p.text} text={p.text} className={i === 0 ? styles.lead : styles.text} />
            ))}
          </div>
          <div className={styles.calendar} aria-hidden="true" data-reveal="">
            <p className={styles.calendarTitle}>
              <Icon name="calendar" size={20} />A year of gum care
            </p>
            <ol className={styles.months}>
              {MONTHS.map((month, i) => (
                <li key={month} className={i % 3 === 0 ? styles.monthVisit : undefined}>
                  <span>{month}</span>
                  {i % 3 === 0 ? <em>Visit</em> : null}
                </li>
              ))}
            </ol>
            <p className={styles.calendarFoot}>Every 3–4 months · schedule may vary</p>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ——— Arestin ——— */
function SpecCard({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const specs = [
    ["Antibiotic", "Minocycline"],
    ["Form", "Tiny microspheres"],
    ["Placed into", "Periodontal pockets"],
    ["Release", "Slowly, over time"],
  ];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={styles.spec}>
          <div className={styles.specCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
          </div>
          <div className={styles.specCard} aria-hidden="true" data-reveal="">
            <div className={styles.specTop}>
              <span className={styles.specIcon}>
                <Icon name="pill" size={26} />
              </span>
              <span className={styles.specName}>Arestin</span>
            </div>
            <dl className={styles.specRows}>
              {specs.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </Shell>
  );
}

function FlowBenefits({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const [benefits] = subs(section.blocks);
  const list = benefits ? firstList(benefits.blocks) : undefined;
  const icons: IconName[] = ["search", "clock", "heart", "shield"];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <div className={styles.flowTop}>
            <div className={styles.flowCopy}>
              {head}
              {text.map((p, i) => (
                <P key={p.text} text={p.text} className={i === 0 ? styles.lead : styles.text} />
              ))}
            </div>
            <ol className={styles.flow} aria-hidden="true" data-reveal="">
              <li>
                <Icon name="tooth" size={22} />
                Deep cleaning removes buildup
              </li>
              <li>
                <Icon name="pill" size={22} />
                Arestin placed where pockets remain
              </li>
              <li>
                <Icon name="shield" size={22} />
                Antibiotic works on remaining bacteria
              </li>
            </ol>
          </div>
          {benefits ? (
            <div className={styles.benefitBlock}>
              <h3 className={styles.subTitle} data-reveal="">
                {benefits.title}
              </h3>
              <ul role="list" className={styles.benefitTiles}>
                {list?.items.map((item, i) => {
                  const { lead, rest } = splitLead(item);
                  return (
                    <li key={item} data-reveal="">
                      <span className={styles.benefitIcon} aria-hidden="true">
                        <Icon name={icons[i % icons.length]} size={22} />
                      </span>
                      <span>
                        {lead ? <Lead text={lead} /> : null}{" "}
                        <Rich text={rest} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </>
      )}
    </Shell>
  );
}

function DuringAfter({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const [after] = subs(section.blocks);
  const { before: afterIntro, after: afterOutro } = aroundList(after.blocks);
  const list = firstList(after.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={styles.centerHead}>{head}</div>
          <div className={styles.duringAfter}>
            <div className={styles.during} data-reveal="">
              <span className={styles.stageTag} aria-hidden="true">
                <Icon name="clock" size={16} />
                At your visit
              </span>
              {text.map((p) => (
                <P key={p.text} text={p.text} className={styles.lead} />
              ))}
              <ul role="list" className={styles.quickChips} aria-hidden="true">
                <li>Quick</li>
                <li>Usually painless</li>
                <li>Works right away</li>
              </ul>
            </div>
            <span className={styles.stageArrow} aria-hidden="true">
              <Icon name="arrowRight" size={22} />
            </span>
            <div className={styles.afterCard} data-reveal="">
              <span className={`${styles.stageTag} ${styles.stageTagNavy}`} aria-hidden="true">
                <Icon name="home" size={16} />
                At home
              </span>
              <h3 className={styles.subTitle}>{after.title}</h3>
              {afterIntro.map((p) => (
                <P key={p.text} text={p.text} className={styles.onNavy} />
              ))}
              <ul role="list" className={styles.afterList}>
                {list?.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} />
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
              {afterOutro.map((p) => (
                <P key={p.text} text={p.text} className={styles.onNavyMuted} />
              ))}
            </div>
          </div>
        </>
      )}
    </Shell>
  );
}

function Spotlight({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const [cost] = subs(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <div className={styles.spotlight}>
          <span className={styles.spotMark} aria-hidden="true">
            ?
          </span>
          <div className={styles.spotBody}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
            <ul role="list" className={styles.spotTags} aria-hidden="true">
              <li>Medication allergies</li>
              <li>Pregnant or nursing</li>
              <li>Possible side effects</li>
            </ul>
          </div>
          {cost ? (
            <div className={styles.spotCost} data-reveal="">
              <span className={styles.spotCostIcon} aria-hidden="true">
                <Icon name="wallet" size={22} />
              </span>
              <h3 className={styles.subTitle}>{cost.title}</h3>
              {paragraphs(cost.blocks).map((p) => (
                <P key={p.text} text={p.text} className={styles.onNavy} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </Shell>
  );
}

/* ——— Children's Dentistry ——— */
function Milestone({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const [first] = subs(section.blocks);
  const { before, after } = aroundList(first.blocks);
  const list = firstList(first.blocks);
  const icons: IconName[] = ["family", "search", "xray", "sparkle", "home"];
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={styles.milestone}>
          <div className={styles.milestoneCopy}>
            {head}
            {text.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
            <div className={styles.birthday} aria-hidden="true" data-reveal="">
              <span className={styles.birthdayIcon}>
                <Icon name="cake" size={30} />
              </span>
              <span>
                <strong>Age 1</strong>
                First visit just after the first birthday
              </span>
            </div>
          </div>
          <div className={styles.firstVisit} data-reveal="">
            <h3 className={styles.subTitle}>{first.title}</h3>
            {before.map((p) => (
              <P key={p.text} text={p.text} />
            ))}
            <ul role="list" className={styles.visitSteps}>
              {list?.items.map((item, i) => (
                <li key={item}>
                  <span className={styles.visitIcon} aria-hidden="true">
                    <Icon name={icons[i % icons.length]} size={20} />
                  </span>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
            {after.map((p) => (
              <p key={p.text} className={styles.visitNote}>
                <Icon name="heart" size={18} />
                <span>
                  <Rich text={p.text} />
                </span>
              </p>
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

function TipTiles({ section, eyebrow }: DesignProps) {
  const { before } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  const icons: IconName[] = ["home", "book", "message", "smile"];
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <div className={styles.centerHead}>
            {head}
            {before.map((p) => (
              <P key={p.text} text={p.text} className={styles.lead} />
            ))}
          </div>
          <ul role="list" className={styles.tips}>
            {list?.items.map((item, i) => (
              <li key={item} className={styles[`tip${i % 4}`]} data-reveal="">
                <span className={styles.tipIcon} aria-hidden="true">
                  <Icon name={icons[i % icons.length]} size={28} />
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

function Clipboard({ section, eyebrow }: DesignProps) {
  const { before, after } = aroundList(section.blocks);
  const list = firstList(section.blocks);
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <div className={styles.clipGrid}>
          <div className={styles.clipboard} data-reveal="">
            <span className={styles.clip} aria-hidden="true" />
            {before.map((p) => (
              <p key={p.text} className={styles.clipTitle}>
                <Rich text={p.text} />
              </p>
            ))}
            <ul role="list" className={styles.clipList}>
              {list?.items.map((item) => (
                <li key={item}>
                  <span className={styles.clipCheck} aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.clipCopy}>
            {head}
            {after.map((p) => (
              <div key={p.text} className={styles.sealantNote} data-reveal="">
                <span className={styles.sealantIcon} aria-hidden="true">
                  <Icon name="shield" size={22} />
                </span>
                <p className={styles.lead}>
                  <Rich text={p.text} />
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

function CauseChain({ section, eyebrow }: DesignProps) {
  const text = paragraphs(section.blocks);
  const [tips] = subs(section.blocks);
  const list = tips ? firstList(tips.blocks) : undefined;
  return (
    <Shell section={section} eyebrow={eyebrow} tone="ice">
      {(head) => (
        <>
          <div className={styles.causeTop}>
            <div>
              {head}
              {text.map((p) => (
                <P key={p.text} text={p.text} className={styles.lead} />
              ))}
            </div>
            <ol className={styles.chain} aria-hidden="true" data-reveal="">
              <li>
                <Icon name="cake" size={22} />
                Sugars
              </li>
              <li>
                <Icon name="bolt" size={22} />
                Bacteria digest them
              </li>
              <li>
                <Icon name="clock" size={22} />
                Acids for about 20 minutes
              </li>
            </ol>
          </div>
          {tips ? (
            <div className={styles.tipsBlock}>
              <h3 className={styles.subTitle} data-reveal="">
                {tips.title}
              </h3>
              <ul role="list" className={styles.doGrid}>
                {list?.items.map((item) => (
                  <li key={item} data-reveal="">
                    <span className={styles.doIcon} aria-hidden="true">
                      <Icon name="check" size={16} />
                    </span>
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </>
      )}
    </Shell>
  );
}

/* ——— General Dentistry hub: budget ——— */
const BUDGET_LOGOS = carrierLogos.filter((carrier) => ["Aetna", "Cigna", "Delta Dental", "MetLife"].includes(carrier.name));

function BudgetCards({ section, eyebrow }: DesignProps) {
  const list = firstList(section.blocks);
  const [insurance, noInsurance] = list?.items ?? [];
  const ins = splitLead(insurance ?? "");
  const none = splitLead(noInsurance ?? "");
  const plans = membershipPlans.filter((plan) => !plan.name.startsWith("Perio"));
  return (
    <Shell section={section} eyebrow={eyebrow}>
      {(head) => (
        <>
          <div className={styles.centerHead}>{head}</div>
          <ul role="list" className={styles.budget}>
            <li className={styles.budgetCard} data-reveal="">
              <span className={styles.budgetIcon} aria-hidden="true">
                <Icon name="shield" size={26} />
              </span>
              {ins.lead ? <Lead text={ins.lead} className={styles.budgetLead} /> : null}{" "}
              <span className={styles.budgetText}>
                <Rich text={ins.rest} />
              </span>
              <span className={styles.budgetLogos} aria-hidden="true">
                {BUDGET_LOGOS.map((carrier) => (
                  <span key={carrier.name}>
                    <Image src={carrier.logo} alt="" sizes="96px" className={styles.budgetLogo} />
                  </span>
                ))}
              </span>
            </li>
            <li className={`${styles.budgetCard} ${styles.budgetNavy}`} data-reveal="">
              <span className={styles.budgetIcon} aria-hidden="true">
                <Icon name="tag" size={26} />
              </span>
              {none.lead ? <Lead text={none.lead} className={styles.budgetLead} /> : null}{" "}
              <span className={styles.budgetText}>
                <Rich text={none.rest} />
              </span>
              <span className={styles.budgetPrices} aria-hidden="true">
                {plans.map((plan) => (
                  <span key={plan.name}>
                    <b>
                      <small>$</small>
                      {plan.price}
                    </b>
                    {plan.name.startsWith("Child") ? "Child / yr" : "Regular / yr"}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </>
      )}
    </Shell>
  );
}

const DESIGNS: Record<DesignName, (props: DesignProps) => ReactNode> = {
  ...RESTORATIVE_DESIGNS,
  ...COSMETIC_DESIGNS,
  "exam-bento": ExamBento,
  "signs-grid": SignsGrid,
  "scan-panel": ScanPanel,
  "symptom-cloud": SymptomCloud,
  "risk-statement": RiskStatement,
  "floss-thread": FlossThread,
  "routine-kit": RoutineKit,
  "probe-gauge": ProbeGauge,
  "two-phases": TwoPhases,
  "process-row": ProcessRow,
  versus: Versus,
  "care-plan": CarePlan,
  "cost-split": CostSplit,
  "visit-calendar": VisitCalendar,
  "spec-card": SpecCard,
  "flow-benefits": FlowBenefits,
  "during-after": DuringAfter,
  spotlight: Spotlight,
  milestone: Milestone,
  "tip-tiles": TipTiles,
  clipboard: Clipboard,
  "cause-chain": CauseChain,
  "budget-cards": BudgetCards,
};

export function DesignedSection({ design, section, eyebrow }: { design: DesignName } & DesignProps) {
  const Design = DESIGNS[design];
  return <Design section={section} eyebrow={eyebrow} />;
}
