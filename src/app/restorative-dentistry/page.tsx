import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ToothJourney } from "@/components/sections/service/ToothJourney";
import { ServiceHeroCard } from "@/components/sections/service/ServiceHeroCard";
import { ServiceSections } from "@/components/sections/service/ServiceSections";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  restorativeBreadcrumb,
  restorativeFaqs,
  restorativeFinalCta,
  restorativeHero,
  restorativeHeroCard,
  restorativeMeta,
  restorativePaths,
  restorativeSections,
  restorativeServiceList,
} from "@/content/pages/restorative/hub";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, serviceHubSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(restorativeMeta);

/** CollectionPage + BreadcrumbList + Dentist + ItemList of the 7 treatments (3a), FAQPage (3b) */
const coreSchema = serviceHubSchema({
  meta: restorativeMeta,
  breadcrumb: restorativeBreadcrumb,
  listName: "Restorative dentistry services",
  services: restorativeServiceList,
});
const faqSchema = graph(faqPage({ path: restorativeMeta.path, items: restorativeFaqs.items }));

export default function RestorativeDentistryPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="restorative-dentistry-title"
        breadcrumb={restorativeBreadcrumb}
        eyebrow={`Restorative dentist · ${practice.address.city}`}
        title={restorativeHero.title}
        intro={restorativeHero.intro}
        aside={<ServiceHeroCard extras={restorativeHeroCard} />}
        actions={
          <>
            <Button href={restorativeHero.cta.href} icon="calendar" track="appointment_click">
              {restorativeHero.cta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <ToothJourney groups={restorativePaths} />
      <ServiceSections
        sections={restorativeSections}
        designs={{
          "which-treatment-title": { design: "situation-table", eyebrow: "Find your option" },
          "imaging-title": { design: "imaging-band", eyebrow: "Technology" },
        }}
      />
      <Faq id="restorative-faq-title" title={restorativeFaqs.title} items={restorativeFaqs.items} />
      <FinalCta
        id="restorative-book-title"
        title={restorativeFinalCta.title}
        body={restorativeFinalCta.body}
        actions={
          <Button href={restorativeHero.cta.href} variant="inverse" icon="calendar" track="appointment_click">
            {restorativeHero.cta.label}
          </Button>
        }
        links={restorativeFinalCta.links}
      />
    </>
  );
}
