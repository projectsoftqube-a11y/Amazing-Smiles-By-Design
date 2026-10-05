import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import {
  FinancingCompare,
  FinancingHelp,
  FinancingPanel,
  FinancingPartners,
  FinancingWhy,
} from "@/components/sections/patient/InfoSections";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  financingBreadcrumb,
  financingFaqs,
  financingFinalCta,
  financingHero,
  financingMeta,
} from "@/content/pages/financing";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(financingMeta);

/** WebPage + BreadcrumbList + Dentist (3a) and the optional FAQPage (3b) */
const coreSchema = infoPageSchema({ meta: financingMeta, breadcrumb: financingBreadcrumb });
const faqSchema = graph(faqPage({ path: financingMeta.path, items: financingFaqs.items }));

const requestButton = (variant: "secondary" | "inverse") => (
  <Button href={financingHero.cta.href} variant={variant} icon="calendar" track="appointment_click">
    {financingHero.cta.label}
  </Button>
);

export default function FinancingOptionsPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="financing-page-title"
        breadcrumb={financingBreadcrumb}
        eyebrow={`CareCredit & Cherry · ${practice.address.city}`}
        title={financingHero.title}
        intro={financingHero.intro}
        aside={<FinancingPanel />}
        actions={
          <>
            <Button href={contactLinks.call} icon="phone" track="call_click">
              {financingHero.callLabel} {practice.phone.display}
            </Button>
            {requestButton("secondary")}
          </>
        }
      />

      <FinancingCompare />
      <FinancingPartners />
      <FinancingWhy />
      <FinancingHelp />
      <Faq id="financing-faq-title" title={financingFaqs.title} items={financingFaqs.items} />
      <FinalCta
        id="financing-book-title"
        title={financingFinalCta.title}
        body={financingFinalCta.body}
        actions={requestButton("inverse")}
      />
    </>
  );
}
