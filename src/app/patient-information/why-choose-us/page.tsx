import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { HeroPanel } from "@/components/sections/patient/PatientShared";
import { WhyReasons } from "@/components/sections/patient/WhySections";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { whyBreadcrumb, whyFaqs, whyFinalCta, whyHero, whyMeta, whyReasons } from "@/content/pages/why-choose-us";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(whyMeta);

/** WebPage + BreadcrumbList + Dentist (3a) and the optional FAQPage (3b) */
const coreSchema = infoPageSchema({ meta: whyMeta, breadcrumb: whyBreadcrumb });
const faqSchema = graph(faqPage({ path: whyMeta.path, items: whyFaqs.items }));

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="why-page-title"
        breadcrumb={whyBreadcrumb}
        eyebrow={`Why choose us · ${practice.address.city}`}
        title={whyHero.title}
        intro={whyHero.intro}
        aside={
          <HeroPanel
            label="What makes us different"
            numbered
            rows={whyReasons.map((reason) => ({ icon: "check", title: reason.short, href: `#${reason.id}` }))}
          />
        }
        actions={
          <>
            <Button href={whyHero.cta.href} icon="calendar" track="appointment_click">
              {whyHero.cta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <WhyReasons />
      <Faq id="why-faq-title" title={whyFaqs.title} items={whyFaqs.items} />
      <FinalCta
        id="why-book-title"
        title={whyFinalCta.title}
        body={whyFinalCta.body}
        actions={
          <Button href={whyHero.cta.href} variant="inverse" icon="calendar" track="appointment_click">
            {whyHero.cta.label}
          </Button>
        }
      />
    </>
  );
}
