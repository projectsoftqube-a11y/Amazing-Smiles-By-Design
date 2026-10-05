import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import {
  InsuranceAlternatives,
  InsuranceBilling,
  InsurancePanel,
  InsurancePlans,
} from "@/components/sections/patient/InfoSections";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  insuranceBreadcrumb,
  insuranceFaqs,
  insuranceFinalCta,
  insuranceHero,
  insuranceMeta,
} from "@/content/pages/insurance-payment";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(insuranceMeta);

/** WebPage + BreadcrumbList + Dentist (3a) and the optional FAQPage (3b) */
const coreSchema = infoPageSchema({ meta: insuranceMeta, breadcrumb: insuranceBreadcrumb });
const faqSchema = graph(faqPage({ path: insuranceMeta.path, items: insuranceFaqs.items }));

const requestButton = (variant: "secondary" | "inverse") => (
  <Button href={insuranceHero.cta.href} variant={variant} icon="calendar" track="appointment_click">
    {insuranceHero.cta.label}
  </Button>
);

export default function InsurancePaymentPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="insurance-page-title"
        breadcrumb={insuranceBreadcrumb}
        eyebrow={`Insurance & payment · ${practice.address.city}`}
        title={insuranceHero.title}
        intro={insuranceHero.intro}
        aside={<InsurancePanel />}
        actions={
          <>
            <Button href={contactLinks.call} icon="phone" track="call_click">
              Call to Confirm Your Plan
            </Button>
            {requestButton("secondary")}
          </>
        }
      />

      <InsurancePlans />
      <InsuranceBilling />
      <InsuranceAlternatives />
      <Faq id="insurance-faq-title" title={insuranceFaqs.title} items={insuranceFaqs.items} />
      <FinalCta
        id="insurance-book-title"
        title={insuranceFinalCta.title}
        body={insuranceFinalCta.body}
        actions={requestButton("inverse")}
      />
    </>
  );
}
