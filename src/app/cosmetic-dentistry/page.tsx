import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceHeroCard } from "@/components/sections/service/ServiceHeroCard";
import { ServiceSections } from "@/components/sections/service/ServiceSections";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  cosmeticBreadcrumb,
  cosmeticFaqs,
  cosmeticFinalCta,
  cosmeticHero,
  cosmeticHeroCard,
  cosmeticMeta,
  cosmeticSections,
  cosmeticServiceList,
} from "@/content/pages/cosmetic/hub";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, serviceHubSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(cosmeticMeta);

/** CollectionPage + BreadcrumbList + Dentist + ItemList of the 5 treatments (3a), FAQPage (3b) */
const coreSchema = serviceHubSchema({
  meta: cosmeticMeta,
  breadcrumb: cosmeticBreadcrumb,
  listName: "Cosmetic dentistry services",
  services: cosmeticServiceList,
});
const faqSchema = graph(faqPage({ path: cosmeticMeta.path, items: cosmeticFaqs.items }));

export default function CosmeticDentistryPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="cosmetic-dentistry-title"
        breadcrumb={cosmeticBreadcrumb}
        eyebrow={`Cosmetic dentist · ${practice.address.city}`}
        title={cosmeticHero.title}
        intro={cosmeticHero.intro}
        aside={<ServiceHeroCard extras={cosmeticHeroCard} />}
        actions={
          <>
            <Button href={cosmeticHero.cta.href} icon="calendar" track="appointment_click">
              {cosmeticHero.cta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <ServiceSections
        sections={cosmeticSections}
        designs={{
          "science-and-artistry-title": { design: "artistry-grid", eyebrow: "Our approach" },
          "our-cosmetic-dental-treatments-title": { design: "treatment-bento", eyebrow: "Treatments" },
          "smile-makeover-title": { design: "makeover-matrix", eyebrow: "Smile makeover" },
          "advanced-imaging-technology-title": { design: "scan-layers", eyebrow: "Technology" },
          "before-and-after-title": { design: "gallery-invite", eyebrow: "Results" },
          "cost-insurance-and-financing-title": { design: "plan-receipt", eyebrow: "Paying for care" },
        }}
      />
      <Faq id="cosmetic-faq-title" title={cosmeticFaqs.title} items={cosmeticFaqs.items} />
      <FinalCta
        id="cosmetic-book-title"
        title={cosmeticFinalCta.title}
        body={cosmeticFinalCta.body}
        actions={
          <Button href={cosmeticFinalCta.button.href} variant="inverse" icon="calendar" track="appointment_click">
            {cosmeticFinalCta.button.label}
          </Button>
        }
        links={cosmeticFinalCta.links}
      />
    </>
  );
}
