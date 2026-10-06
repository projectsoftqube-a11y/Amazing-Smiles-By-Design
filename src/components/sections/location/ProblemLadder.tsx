import type { ReactNode } from "react";
import { Lead, TitleText } from "@/components/sections/service/DesignKit";
import { ImplantView, ToothPulpView, ToothSideView } from "@/components/sections/service/ToothArt";
import { Icon } from "@/components/ui/Icon";
import { Rich, splitLead } from "@/components/ui/Rich";
import type { ContentBlock, ServiceSection } from "@/content/service-page";
import s from "./Location.module.css";

// One drawing per step, in the list's order: cavity, larger damage, infection, a lost tooth
const ART: ReactNode[] = [
  <ToothSideView key="filling" kind="filling" />,
  <ToothSideView key="crown" kind="crown" />,
  <ToothPulpView key="pulp" />,
  <ImplantView key="implant" />,
];

/**
 * Eddington, "Fixing a Problem Tooth": the four problems as a ladder from the simplest
 * repair to the most involved, each with its tooth drawing. The scale below restates the
 * section's own intro ("Finding them early usually means simpler treatment").
 */
export function ProblemLadder({ section }: { section: ServiceSection }) {
  const intro = section.blocks.filter((block): block is Extract<ContentBlock, { kind: "p" }> => block.kind === "p");
  const list = section.blocks.find((block): block is Extract<ContentBlock, { kind: "ul" }> => block.kind === "ul");
  return (
    <section aria-labelledby={section.id} className={`${s.card} ${s.ladderCard}`} data-reveal="">
      <div className={s.ladderHead}>
        <span className={s.cardIcon} aria-hidden="true">
          <Icon name="tooth" size={22} />
        </span>
        <h2 id={section.id} className={s.cardTitle}>
          <TitleText text={section.title} />
        </h2>
        {intro.map((p) => (
          <p key={p.text} className={s.ladderIntro}>
            <Rich text={p.text} />
          </p>
        ))}
      </div>

      <ul role="list" className={s.ladder}>
        {list?.items.map((item, i) => {
          const { lead, rest } = splitLead(item);
          return (
            <li key={item} className={s.rung}>
              <span className={s.rungArt} aria-hidden="true">
                {ART[i % ART.length]}
              </span>
              <span className={s.meter} aria-hidden="true">
                {[0, 1, 2, 3].map((bar) => (
                  <i key={bar} className={bar <= i ? s.meterOn : undefined} />
                ))}
              </span>
              <span className={s.rungText}>
                {lead ? <Lead text={lead} className={s.rungLead} /> : null}
                {lead ? " " : null}
                <span className={s.leadText}>
                  <Rich text={rest} />
                </span>
              </span>
            </li>
          );
        })}
      </ul>

      <p className={s.scale} aria-hidden="true">
        <span>Simpler</span>
        <i />
        <span>More involved</span>
      </p>
    </section>
  );
}
