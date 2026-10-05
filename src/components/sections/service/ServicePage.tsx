import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Cta, ServiceExtras, ServicePageContent } from "@/content/service-page";
import { practice } from "@/content/site";
import { faqPage, graph, servicePageSchema } from "@/lib/schema";
import { ServiceHeroCard } from "./ServiceHeroCard";
import { ServiceSections } from "./ServiceSections";
import styles from "./ServicePage.module.css";

const isCall = (cta: Cta) => cta.href.startsWith("tel:");

/**
 * A complete treatment page from its content: hero with the side card, the H2
 * sections, FAQs and the closing banner, plus the handoff's JSON-LD.
 */
export function ServicePage({ content, extras }: { content: ServicePageContent; extras: ServiceExtras }) {
  const { meta, breadcrumb, hero, procedure, withHours, sections, faqs, finalCta } = content;
  const emergency = Boolean(hero.safety);
  const callTrack = emergency ? "emergency_click" : "call_click";
  const coreSchema = servicePageSchema({ meta, breadcrumb, procedure, withHours });
  const faqSchema = graph(faqPage({ path: meta.path, items: faqs.items }));
  const slug = meta.path.split("/").filter(Boolean).pop();

  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id={`${slug}-title`}
        breadcrumb={breadcrumb}
        eyebrow={`${extras.eyebrow} · ${practice.address.city}`}
        title={hero.title}
        intro={hero.intro}
        aside={<ServiceHeroCard extras={extras} phone={emergency} />}
        // Emergency: the 911 line sits under the H1 on phones (PageHero note), above the fold
        note={
          hero.safety ? (
            <p className={styles.safety}>
              <Icon name="alert" size={20} />
              <em>{hero.safety}</em>
            </p>
          ) : undefined
        }
        actions={
          <>
            {hero.buttons.map((cta, index) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={index === 0 ? "primary" : "secondary"}
                icon={isCall(cta) ? "phone" : "calendar"}
                track={isCall(cta) ? callTrack : "appointment_click"}
              >
                {cta.label}
              </Button>
            ))}
          </>
        }
      />

      <ServiceSections sections={sections} designs={extras.designs} />
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
                track={isCall(cta) ? callTrack : "appointment_click"}
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
