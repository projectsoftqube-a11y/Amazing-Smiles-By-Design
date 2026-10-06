import { Lead, TitleText } from "@/components/sections/service/DesignKit";
import { GumProbeView } from "@/components/sections/service/ToothArt";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich, splitLead } from "@/components/ui/Rich";
import type { ContentBlock, ServiceSection } from "@/content/service-page";
import s from "./Location.module.css";

type P = Extract<ContentBlock, { kind: "p" }>;
type List = Extract<ContentBlock, { kind: "ul" }>;

const firstList = (section: ServiceSection) => section.blocks.find((block): block is List => block.kind === "ul");

const REASON_ICONS: IconName[] = ["pin", "family", "sparkle", "wallet"];

/**
 * Northeast Philadelphia, "Why Northeast Philly Patients Choose a Bensalem Dentist":
 * a navy band with the drive time from the first reason as a large figure, and the
 * four reasons as glass tiles.
 */
export function PhillyReasons({ section }: { section: ServiceSection }) {
  const list = firstList(section);
  return (
    <section aria-labelledby={section.id} className={`${s.card} ${s.reasons}`} data-reveal="">
      <div className={s.reasonsLead}>
        <span className={s.reasonsIcon} aria-hidden="true">
          <Icon name="map" size={22} />
        </span>
        <h2 id={section.id} className={s.reasonsTitle}>
          <TitleText text={section.title} />
        </h2>
        <div className={s.reasonsStat} aria-hidden="true">
          <span className={s.reasonsFigure}>11–14</span>
          <span className={s.reasonsUnit}>minutes</span>
          <span className={s.reasonsFrom}>from the Far Northeast and Somerton</span>
        </div>
      </div>
      <ul role="list" className={s.reasonsGrid}>
        {list?.items.map((item, i) => {
          const { lead, rest } = splitLead(item);
          return (
            <li key={item}>
              <span className={s.reasonIcon} aria-hidden="true">
                <Icon name={REASON_ICONS[i % REASON_ICONS.length]} size={20} />
              </span>
              {lead ? <Lead text={lead} className={s.reasonName} /> : null}
              {lead ? " " : null}
              <span className={s.reasonText}>
                <Rich text={rest} />
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const GUM_ICONS: IconName[] = ["sparkle", "pill", "calendar"];

/**
 * Andalusia, "Healthy Gums for Life": the gum health check intro and the three gum
 * treatments as a care path, beside a probe illustration and the Perio Maintenance
 * Plan as a price card (the section's closing paragraph).
 */
export function GumCare({ section }: { section: ServiceSection }) {
  const index = section.blocks.findIndex((block) => block.kind === "ul");
  const list = firstList(section);
  const intro = section.blocks.slice(0, index).filter((block): block is P => block.kind === "p");
  const plan = section.blocks.slice(index + 1).filter((block): block is P => block.kind === "p");
  return (
    <section aria-labelledby={section.id} className={`${s.card} ${s.gums}`} data-reveal="">
      <div className={s.gumsCopy}>
        <span className={s.cardIcon} aria-hidden="true">
          <Icon name="shield" size={22} />
        </span>
        <h2 id={section.id} className={s.gumsTitle}>
          <TitleText text={section.title} />
        </h2>
        {intro.map((p) => (
          <p key={p.text} className={s.gumsIntro}>
            <Rich text={p.text} />
          </p>
        ))}
        <ul role="list" className={s.gumPath}>
          {list?.items.map((item, i) => (
            <li key={item}>
              <span className={s.gumIcon} aria-hidden="true">
                <Icon name={GUM_ICONS[i % GUM_ICONS.length]} size={18} />
              </span>
              <span className={s.gumText}>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.gumsSide}>
        <div className={s.gumsArt} aria-hidden="true">
          <GumProbeView />
          <span className={s.gumsCaption}>Gum health check at every exam</span>
        </div>
        {plan.map((p) => (
          <div key={p.text} className={s.planCard}>
            <p className={s.planPrice} aria-hidden="true">
              $450 <span>a year</span>
            </p>
            <p className={s.planText}>
              <Rich text={p.text} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
