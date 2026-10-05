import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { SchedulingForm, SchedulingNotes } from "@/components/sections/patient/BookingSections";
import { HeroPanel } from "@/components/sections/patient/PatientShared";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  schedulingBreadcrumb,
  schedulingFaqs,
  schedulingFinalCta,
  schedulingHero,
  schedulingMeta,
  schedulingPain,
} from "@/content/pages/scheduling";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(schedulingMeta);

/** WebPage + BreadcrumbList + Dentist with opening hours (3a) and the optional FAQPage (3b) */
const coreSchema = infoPageSchema({ meta: schedulingMeta, breadcrumb: schedulingBreadcrumb, withHours: true });
const faqSchema = graph(faqPage({ path: schedulingMeta.path, items: schedulingFaqs.items }));

export default function SchedulingPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="scheduling-title"
        breadcrumb={schedulingBreadcrumb}
        eyebrow={`Book an appointment · ${practice.address.city}`}
        title={schedulingHero.title}
        intro={schedulingHero.intro}
        aside={
          <HeroPanel
            label="Call or text"
            live
            phone
            rows={[
              { icon: "calendar", title: "Request online", text: "Complete the appointment request form", href: "#appointment-form", track: "appointment_click" },
              { icon: "alert", title: "In pain?", text: "Emergency scheduling", href: schedulingPain.link.href, track: "emergency_click" },
            ]}
          />
        }
        actions={
          <>
            <Button href={contactLinks.call} icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
            <Button href={schedulingHero.cta.href} variant="secondary" icon="calendar" track="appointment_click">
              {schedulingHero.cta.label}
            </Button>
          </>
        }
      />

      <SchedulingForm />
      <SchedulingNotes />
      <Faq id="scheduling-faq-title" title={schedulingFaqs.title} items={schedulingFaqs.items} />
      <FinalCta
        id="scheduling-visit-title"
        title={schedulingFinalCta.title}
        body={schedulingFinalCta.body}
        actions={
          <>
            <Button href={schedulingFinalCta.links[0].href} variant="inverse" icon="map" track="directions_click">
              {schedulingFinalCta.links[0].label}
            </Button>
            <Button href={schedulingFinalCta.links[1].href} variant="inverse-outline" icon="family">
              {schedulingFinalCta.links[1].label}
            </Button>
          </>
        }
      />
    </>
  );
}
