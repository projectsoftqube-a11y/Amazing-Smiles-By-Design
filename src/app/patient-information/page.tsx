import { HubGroups, OfficeDetails } from "@/components/sections/patient/HubSections";
import { HubHeroVisual } from "@/components/sections/patient/HeroVisuals";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { hubBreadcrumb, hubHero, hubMeta } from "@/content/pages/patient-information";
import { contactLinks, practice } from "@/content/site";
import { infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(hubMeta);

/** CollectionPage + BreadcrumbList + Dentist (03 Developer Handoff.md, 3a) */
const schema = infoPageSchema({ meta: hubMeta, breadcrumb: hubBreadcrumb, type: "CollectionPage" });

export default function PatientInformationPage() {
  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        id="patient-info-title"
        breadcrumb={hubBreadcrumb}
        eyebrow={`Before your visit · ${practice.address.city}`}
        title={hubHero.title}
        intro={hubHero.intro}
        aside={<HubHeroVisual />}
        actions={
          <>
            <Button href={hubHero.cta.href} icon="calendar" track="appointment_click">
              {hubHero.cta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <HubGroups />
      <OfficeDetails />
    </>
  );
}
