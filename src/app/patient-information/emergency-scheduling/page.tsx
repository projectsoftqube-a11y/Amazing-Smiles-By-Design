import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { EmergencyHoursForm, EmergencyLearn, EmergencySteps } from "@/components/sections/patient/BookingSections";
import { HeroPanel } from "@/components/sections/patient/PatientShared";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  emergencyBreadcrumb,
  emergencyFaqs,
  emergencyFinalCta,
  emergencyHero,
  emergencyMeta,
} from "@/content/pages/emergency-scheduling";
import { contactLinks, emergencySpecial, practice } from "@/content/site";
import { faqPage, graph, infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata(emergencyMeta);

/** WebPage + BreadcrumbList + Dentist with opening hours (3a) and the optional FAQPage (3b) */
const coreSchema = infoPageSchema({ meta: emergencyMeta, breadcrumb: emergencyBreadcrumb, withHours: true });
const faqSchema = graph(faqPage({ path: emergencyMeta.path, items: emergencyFaqs.items }));

const callButton = (variant: "primary" | "inverse") => (
  <Button href={contactLinks.call} variant={variant} icon="phone" track="emergency_click">
    Call or Text {practice.phone.display}
  </Button>
);

export default function EmergencySchedulingPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="emergency-scheduling-title"
        breadcrumb={emergencyBreadcrumb}
        eyebrow={`Emergency appointments · ${practice.address.city}`}
        title={emergencyHero.title}
        intro={emergencyHero.intro}
        // Call button and the 911 line sit above the fold on phones (Developer Handoff)
        note={
          <p className={styles.safety}>
            <Icon name="alert" size={20} />
            <em>{emergencyHero.safety}</em>
          </p>
        }
        aside={
          <HeroPanel
            label="In pain?"
            live
            phone
            rows={[
              { icon: "calendar", title: "Every attempt to see you that day", text: "If you have pain or an emergency situation" },
              {
                icon: "tag",
                title: `$${emergencySpecial.price} emergency visit`,
                text: "New patients only. Includes the necessary exam and X-rays.",
              },
            ]}
          />
        }
        actions={
          <>
            {callButton("primary")}
            <Button href={emergencyHero.cta.href} variant="secondary" icon="calendar" track="appointment_click">
              {emergencyHero.cta.label}
            </Button>
          </>
        }
      />

      <EmergencySteps />
      <EmergencyHoursForm />
      <EmergencyLearn />
      <Faq id="emergency-faq-title" title={emergencyFaqs.title} items={emergencyFaqs.items} />
      <FinalCta
        id="emergency-call-title"
        title={emergencyFinalCta.title}
        body={emergencyFinalCta.body}
        actions={callButton("inverse")}
        links={emergencyFinalCta.links}
      />
    </>
  );
}
