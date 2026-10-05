import { ContactCard, FindUs, ReachAndHours } from "@/components/sections/contact/ContactSections";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { contactBreadcrumb, contactFaqs, contactFinalCta, contactHero, contactMeta } from "@/content/pages/contact";
import { homeAreas } from "@/content/pages/home";
import { contactLinks, practice } from "@/content/site";
import { breadcrumbList, dentistEntity, faqPage, graph, webPageEntity, websiteEntity } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(contactMeta);

/**
 * ContactPage + BreadcrumbList + Dentist (03 Developer Handoff.md, 3a): full NAP,
 * fax, hours, map link and an appointments contact point, from site.ts.
 */
const coreSchema = graph(
  webPageEntity({
    path: contactMeta.path,
    name: contactMeta.title,
    description: contactMeta.description,
    type: "ContactPage",
    breadcrumb: true,
  }),
  breadcrumbList(contactMeta.path, contactBreadcrumb),
  dentistEntity({ areaServed: homeAreas.towns.map((town) => town.name), contactPoint: true }),
  websiteEntity(),
);

const faqSchema = graph(faqPage({ path: contactMeta.path, items: contactFaqs.items }));

export default function ContactPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="contact-page-title"
        breadcrumb={contactBreadcrumb}
        eyebrow={`Contact us · ${practice.address.city}, ${practice.address.region}`}
        title={contactHero.title}
        intro={contactHero.intro}
        aside={<ContactCard />}
        actions={
          <>
            <Button href={contactLinks.call} icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
            <Button href={contactHero.cta.href} variant="secondary" icon="calendar" track="appointment_click">
              {contactHero.cta.label}
            </Button>
          </>
        }
      />

      <ReachAndHours />
      <FindUs />
      <Faq id="contact-faq-title" title={contactFaqs.title} items={contactFaqs.items} />
      <FinalCta id="contact-book-title" title={contactFinalCta.title} body="" />
    </>
  );
}
