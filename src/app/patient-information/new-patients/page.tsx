import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { FirstVisit, FormSection, NewPatientOffers } from "@/components/sections/patient/BookingSections";
import { NewPatientHeroVisual } from "@/components/sections/patient/HeroVisuals";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  newPatientsBreadcrumb,
  newPatientsFaqs,
  newPatientsFinalCta,
  newPatientsForm,
  newPatientsHero,
  newPatientsMeta,
} from "@/content/pages/new-patients";
import { contactLinks, practice } from "@/content/site";
import { faqPage, graph, infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(newPatientsMeta);

/** WebPage + BreadcrumbList + Dentist (3a) and the optional FAQPage (3b) */
const coreSchema = infoPageSchema({ meta: newPatientsMeta, breadcrumb: newPatientsBreadcrumb });
const faqSchema = graph(faqPage({ path: newPatientsMeta.path, items: newPatientsFaqs.items }));

const callButton = (variant: "secondary" | "inverse") => (
  <Button href={contactLinks.call} variant={variant} icon="phone" track="call_click">
    Call or Text {practice.phone.display}
  </Button>
);

export default function NewPatientsPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="new-patients-title"
        breadcrumb={newPatientsBreadcrumb}
        eyebrow={`New patients welcome · ${practice.address.city}`}
        title={newPatientsHero.title}
        intro={newPatientsHero.intro}
        aside={<NewPatientHeroVisual />}
        actions={
          <>
            <Button href={newPatientsHero.cta.href} icon="calendar" track="appointment_click">
              {newPatientsHero.cta.label}
            </Button>
            {callButton("secondary")}
          </>
        }
      />

      <FirstVisit />
      <NewPatientOffers />
      <FormSection
        id="first-appointment-title"
        eyebrow="Book your visit"
        title={newPatientsForm.title}
        body={newPatientsForm.body}
        tone="white"
        form={
          <AppointmentForm
            note={newPatientsForm.note}
            defaultInterest="New Patient Exam & Cleaning"
            submitLabel="Send Request"
          />
        }
      />
      <Faq id="new-patients-faq-title" title={newPatientsFaqs.title} items={newPatientsFaqs.items} />
      <FinalCta
        id="new-patients-book-title"
        title={newPatientsFinalCta.title}
        body=""
        actions={callButton("inverse")}
        links={newPatientsFinalCta.links}
      />
    </>
  );
}
