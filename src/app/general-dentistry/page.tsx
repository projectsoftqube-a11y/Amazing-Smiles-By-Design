import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { StackGroups } from "@/components/sections/patient/HubSections";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceHeroCard } from "@/components/sections/service/ServiceHeroCard";
import { ServiceSections } from "@/components/sections/service/ServiceSections";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  generalBreadcrumb,
  generalBudget,
  generalClusters,
  generalFaqs,
  generalFinalCta,
  generalHero,
  generalHeroCard,
  generalMeta,
  generalServiceList,
} from "@/content/pages/general/hub";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, serviceHubSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(generalMeta);

/** CollectionPage + BreadcrumbList + Dentist + ItemList of the 10 treatments (3a), FAQPage (3b) */
const coreSchema = serviceHubSchema({
  meta: generalMeta,
  breadcrumb: generalBreadcrumb,
  listName: "General dentistry services",
  services: generalServiceList,
});
const faqSchema = graph(faqPage({ path: generalMeta.path, items: generalFaqs.items }));

export default function GeneralDentistryPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="general-dentistry-title"
        breadcrumb={generalBreadcrumb}
        eyebrow={`Family dentist · ${practice.address.city}`}
        title={generalHero.title}
        intro={generalHero.intro}
        aside={<ServiceHeroCard extras={generalHeroCard} />}
        actions={
          <>
            <Button href={generalHero.cta.href} icon="calendar" track="appointment_click">
              {generalHero.cta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <StackGroups groups={generalClusters} countLabel="treatment" />
      <ServiceSections sections={[generalBudget]} designs={{ [generalBudget.id]: { design: "budget-cards", eyebrow: "Paying for care" } }} />
      <Faq id="general-faq-title" title={generalFaqs.title} items={generalFaqs.items} />
      <FinalCta
        id="general-book-title"
        title={generalFinalCta.title}
        body={generalFinalCta.body}
        actions={
          <Button href={generalHero.cta.href} variant="inverse" icon="calendar" track="appointment_click">
            {generalHero.cta.label}
          </Button>
        }
        links={generalFinalCta.links}
      />
    </>
  );
}
