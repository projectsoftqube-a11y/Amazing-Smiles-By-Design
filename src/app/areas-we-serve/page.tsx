import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { OfficeHours, RegionBoard, RegionsCard } from "@/components/sections/location/AreasHub";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceSections } from "@/components/sections/service/ServiceSections";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  locationsAreaServed,
  locationsBreadcrumb,
  locationsFaqs,
  locationsFinalCta,
  locationsHero,
  locationsItemList,
  locationsMeta,
  locationsSections,
} from "@/content/pages/locations/hub";
import { practice } from "@/content/site";
import { faqPage, graph, locationsHubSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(locationsMeta);

/** CollectionPage + BreadcrumbList + ItemList of the 25 town pages + Dentist (3a), FAQPage (3b) */
const coreSchema = locationsHubSchema({
  meta: locationsMeta,
  breadcrumb: locationsBreadcrumb,
  towns: locationsItemList,
  areaServed: locationsAreaServed,
});
const faqSchema = graph(faqPage({ path: locationsMeta.path, items: locationsFaqs.items }));

// The drive-time tables, the services list and the hours line, in content order
const regions = locationsSections.filter((section) => section.blocks.some((block) => block.kind === "table"));
const services = locationsSections.filter((section) => section.id === "care-for-patients-across-bucks-county-title");
const officeHours = locationsSections.find((section) => section.id === "office-hours-title");

const isCall = (href: string) => href.startsWith("tel:");

export default function AreasWeServePage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="areas-we-serve-title"
        breadcrumb={locationsBreadcrumb}
        eyebrow={`Dentist in ${practice.address.city}, ${practice.address.region}`}
        title={locationsHero.title}
        intro={locationsHero.intro}
        aside={<RegionsCard regions={regions} />}
        actions={
          <>
            {locationsHero.buttons.map((cta, index) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={index === 0 ? "primary" : "secondary"}
                icon={isCall(cta.href) ? "phone" : "calendar"}
                track={isCall(cta.href) ? "call_click" : "appointment_click"}
              >
                {cta.label}
              </Button>
            ))}
          </>
        }
      />

      <RegionBoard regions={regions} />
      <ServiceSections sections={services} startIndex={1} />
      {officeHours ? <OfficeHours section={officeHours} /> : null}
      <Faq id="areas-faq-title" title={locationsFaqs.title} items={locationsFaqs.items} />
      <FinalCta
        id="areas-book-title"
        title={locationsFinalCta.title}
        body={locationsFinalCta.body}
        actions={
          <>
            {locationsFinalCta.buttons.map((cta) => (
              <Button key={cta.href} href={cta.href} variant="inverse" icon="calendar" track="appointment_click">
                {cta.label}
              </Button>
            ))}
          </>
        }
        links={locationsFinalCta.links}
      />
    </>
  );
}
