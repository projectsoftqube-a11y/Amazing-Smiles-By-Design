import { FinalCta } from "@/components/sections/home/FinalCta";
import { HeroPanel } from "@/components/sections/patient/PatientShared";
import { EducationTopics } from "@/components/sections/patient/ResourceSections";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  educationBreadcrumb,
  educationFinalCta,
  educationHero,
  educationMeta,
  educationTopics,
} from "@/content/pages/patient-education";
import { contactLinks, practice } from "@/content/site";
import { infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(educationMeta);

/** CollectionPage + BreadcrumbList + Dentist (03 Developer Handoff.md, 3a) */
const schema = infoPageSchema({ meta: educationMeta, breadcrumb: educationBreadcrumb, type: "CollectionPage" });

/**
 * "Latest Articles" (the 6 newest /blog/ posts) is left out until the blog has posts;
 * the handoff says to hide the block until then (copy is kept in patient-education.ts).
 */
export default function PatientEducationPage() {
  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        id="education-page-title"
        breadcrumb={educationBreadcrumb}
        eyebrow={`Dental health guides · ${practice.address.city}`}
        title={educationHero.title}
        intro={educationHero.intro}
        aside={
          <HeroPanel
            tone="light"
            label="Guides by topic"
            rows={educationTopics.map((topic) => ({
              icon: topic.icon,
              title: topic.title,
              text: `${topic.items.flat().length} ${topic.items.flat().length === 1 ? "guide" : "guides"}`,
              href: `#${topic.id}`,
            }))}
          />
        }
        actions={
          <>
            <Button href={educationHero.cta.href} icon="calendar" track="appointment_click">
              {educationHero.cta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <EducationTopics />
      <FinalCta
        id="education-book-title"
        title={educationFinalCta.title}
        body={educationFinalCta.body}
        actions={
          <Button href={educationHero.cta.href} variant="inverse" icon="calendar" track="appointment_click">
            {educationHero.cta.label}
          </Button>
        }
      />
    </>
  );
}
