import { Fragment } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { TitleText } from "@/components/sections/service/DesignKit";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { Rich, splitLead } from "@/components/ui/Rich";
import { PLACEHOLDER, type LegalPageContent } from "@/content/legal-page";
import type { ContentBlock, ServiceSection } from "@/content/service-page";
import { contactLinks, practice } from "@/content/site";
import { infoPageSchema } from "@/lib/schema";
import s from "./Legal.module.css";

/**
 * A legal page (09 Compliance): hero with an "on this page" card, then the policy as a
 * readable document beside a sticky panel (contact and the other policies). Any
 * "[CONFIRM: …]" item renders as a marked box; such pages are only served in development.
 */
export function LegalPage({ content, related }: { content: LegalPageContent; related: { label: string; href: string }[] }) {
  const { meta, breadcrumb, hero, sections, links } = content;
  const slug = meta.path.replaceAll("/", "");
  const schema = infoPageSchema({ meta, breadcrumb });
  const [first, ...more] = hero.intro;
  const others = related.filter((link) => link.href !== meta.path);

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id={`${slug}-title`}
        breadcrumb={breadcrumb}
        eyebrow={`Website policies · ${practice.name}`}
        title={hero.title}
        intro={plain(first ?? "")}
        note={
          more.length || hero.lines.length ? (
            <div className={s.heroLines}>
              {more.map((line) => (
                <p key={line}>
                  <LegalText text={line} />
                </p>
              ))}
              {hero.lines.map((line) => (
                <p key={line} className={s.dateLine}>
                  <Icon name="calendar" size={16} />
                  <span>
                    <LegalText text={line} />
                  </span>
                </p>
              ))}
            </div>
          ) : undefined
        }
        aside={<OnThisPage sections={sections} />}
        actions={
          <>
            {hero.buttons.map((cta) =>
              PLACEHOLDER.test(cta.href) ? (
                <span key={cta.label} className={s.pendingButton}>
                  <Icon name="book" size={18} />
                  {cta.label}
                  <Confirm text={cta.href.match(PLACEHOLDER)?.[1] ?? ""} />
                </span>
              ) : (
                <Button key={cta.href} href={cta.href} icon="book">
                  {cta.label}
                </Button>
              ),
            )}
            <Button
              href={contactLinks.call}
              variant={hero.buttons.length ? "secondary" : "primary"}
              icon="phone"
              track="call_click"
            >
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <div className={s.body}>
        <div className={`container ${s.layout}`}>
          <article className={s.doc}>
            {sections.map((section) => (
              <section key={section.id} className={s.section} aria-labelledby={section.id} data-reveal="">
                <h2 id={section.id} className={s.sectionTitle}>
                  <TitleText text={section.title} />
                </h2>
                <Blocks section={section} />
              </section>
            ))}
            {links.length ? (
              <div className={s.endLinks}>
                {links.map((link) => (
                  <TextLink key={link.href} href={link.href}>
                    {link.label}
                  </TextLink>
                ))}
              </div>
            ) : null}
          </article>

          <aside className={s.side} aria-label="Contact and other policies">
            <div className={s.sideCard}>
              <p className={s.sideLabel}>Questions?</p>
              <p className={s.sideText}>
                {practice.name}
                <br />
                {practice.address.street}, {practice.address.city}, {practice.address.region} {practice.address.postalCode}
              </p>
              <div className={s.sideActions}>
                <a href={contactLinks.call} className={s.sideCall} data-track="call_click">
                  <Icon name="phone" size={16} />
                  Call
                </a>
                <a href={contactLinks.text} className={s.sideText2} data-track="call_click">
                  <Icon name="message" size={16} />
                  Text
                </a>
              </div>
            </div>
            <nav className={s.sideNav} aria-label="Other website policies">
              <p className={s.sideLabel}>Other policies</p>
              <ul role="list">
                {others.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href}>{link.label}</TextLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </>
  );
}

/** Hero side card: the page's sections as jump links */
function OnThisPage({ sections }: { sections: ServiceSection[] }) {
  return (
    <div className={s.stage}>
      <span className={s.plate} aria-hidden="true" />
      <nav className={s.toc} aria-label="On this page">
        <p className={s.tocLabel}>
          <Icon name="book" size={16} />
          On this page
        </p>
        <ol className={s.tocList}>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                {section.title}
                <Icon name="arrowDown" size={14} />
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

const plain = (text: string) => text.replace(/\*\*/g, "");

/** Content text with any "[CONFIRM: …]" item shown as a marked box */
function LegalText({ text }: { text: string }) {
  const parts = text.split(/(\[CONFIRM: [^\]]+\])/);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(PLACEHOLDER);
        return match ? <Confirm key={i} text={match[1]} /> : <Fragment key={i}>{part ? <Rich text={part} /> : null}</Fragment>;
      })}
    </>
  );
}

function Confirm({ text }: { text: string }) {
  return (
    <span className={s.confirm}>
      <strong>To confirm (practice):</strong> {text}
    </span>
  );
}

const RIGHT_ICONS: IconName[] = ["clipboard", "search", "lock", "shield", "receipt", "book", "family", "alert"];
const GOAL_ICONS: IconName[] = ["scan", "clipboard", "sparkle", "book", "check", "headphones"];
const CONTACT_ICONS: IconName[] = ["phone", "pin"];

const isLeadList = (items: string[]) => items.filter((item) => item.startsWith("**")).length * 2 >= items.length;

/** A section's blocks; lists become icon cards (rights, contact ways) or icon tiles (goals) */
function Blocks({ section }: { section: ServiceSection }) {
  return (
    <>
      {section.blocks.map((block: ContentBlock, i) => {
        if (block.kind === "p") {
          const lead = block.text.startsWith("**");
          return (
            <p key={i} className={lead ? s.callout : s.text}>
              {lead ? <Icon name="info" size={18} /> : null}
              <span>
                <LegalText text={block.text} />
              </span>
            </p>
          );
        }
        if (block.kind === "link") {
          return (
            <div key={i} className={s.inlineLink}>
              <TextLink href={block.href}>{block.label}</TextLink>
            </div>
          );
        }
        if (block.kind === "ul" && isLeadList(block.items)) {
          const contact = block.items.length <= 2;
          return (
            <ul key={i} role="list" className={contact ? s.contactCards : s.rights}>
              {block.items.map((item, n) => {
                const { lead, rest } = splitLead(item);
                return (
                  <li key={item}>
                    <span className={s.cardIcon} aria-hidden="true">
                      <Icon name={(contact ? CONTACT_ICONS : RIGHT_ICONS)[n % (contact ? 2 : 8)]} size={20} />
                    </span>
                    <span className={s.cardText}>
                      {lead ? <strong className={s.cardLead}>{lead}</strong> : null}
                      {/* No space before punctuation ("**Request confidential communications**, for example …") */}
                      {lead && !/^[,.;:]/.test(rest) ? " " : null}
                      <Rich text={rest} />
                    </span>
                    {contact && n === 0 ? (
                      <span className={s.cardActions}>
                        <a href={contactLinks.call} data-track="call_click">
                          Call
                        </a>
                        <a href={contactLinks.text} data-track="call_click">
                          Text
                        </a>
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          );
        }
        if (block.kind === "ul") {
          return (
            <ul key={i} role="list" className={s.goals}>
              {block.items.map((item, n) => (
                <li key={item}>
                  <span className={s.goalIcon} aria-hidden="true">
                    <Icon name={GOAL_ICONS[n % GOAL_ICONS.length]} size={18} />
                  </span>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </>
  );
}
