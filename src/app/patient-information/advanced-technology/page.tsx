import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { HeroPanel } from "@/components/sections/patient/PatientShared";
import { Cbct, DigitalXrays, RayFace } from "@/components/sections/patient/ResourceSections";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  technologyBreadcrumb,
  technologyFaqs,
  technologyFinalCta,
  technologyHero,
  technologyMeta,
} from "@/content/pages/technology";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(technologyMeta);

/** WebPage + BreadcrumbList + Dentist (3a) and the optional FAQPage (3b) */
const coreSchema = infoPageSchema({ meta: technologyMeta, breadcrumb: technologyBreadcrumb });
const faqSchema = graph(faqPage({ path: technologyMeta.path, items: technologyFaqs.items }));

export default function AdvancedTechnologyPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="technology-page-title"
        breadcrumb={technologyBreadcrumb}
        eyebrow={`Diagnostic technology · ${practice.address.city}`}
        title={technologyHero.title}
        intro={technologyHero.intro}
        aside={
          <HeroPanel
            label="In our office"
            lead="Teeth, bone, nerves & facial structures in remarkable detail"
            rows={technologyHero.systems.map((system) => ({
              icon: system.icon,
              title: system.name,
              text: system.detail,
              href: system.href,
            }))}
          />
        }
        actions={
          <>
            <Button href={technologyHero.cta.href} icon="calendar" track="appointment_click">
              {technologyHero.cta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <Cbct />
      <DigitalXrays />
      <RayFace />
      <Faq id="technology-faq-title" title={technologyFaqs.title} items={technologyFaqs.items} />
      <FinalCta
        id="technology-book-title"
        title={technologyFinalCta.title}
        body={technologyFinalCta.body}
        actions={
          <Button href={technologyHero.cta.href} variant="inverse" icon="calendar" track="appointment_click">
            {technologyHero.cta.label}
          </Button>
        }
      />
    </>
  );
}
