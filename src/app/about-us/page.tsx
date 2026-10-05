import { Approach } from "@/components/sections/about/Approach";
import { Community } from "@/components/sections/about/Community";
import { DoctorFeature } from "@/components/sections/about/DoctorFeature";
import { Team } from "@/components/sections/about/Team";
import { Visit } from "@/components/sections/about/Visit";
import { Technology } from "@/components/sections/home/Technology";
import { HeroCard, PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { images } from "@/content/images";
import { aboutBreadcrumb, aboutHero, aboutMeta, aboutTechnology } from "@/content/pages/about";
import { homeAreas } from "@/content/pages/home";
import { contactLinks, practice } from "@/content/site";
import { breadcrumbList, dentistEntity, dentistPerson, graph, webPageEntity, websiteEntity } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(aboutMeta);

/**
 * One JSON-LD block (03 Developer Handoff.md, section 3). It reuses the homepage
 * @ids for the business, website and dentist, so search engines join the pages
 * into one entity; NAP, hours and areas come from the same source as the homepage.
 */
const aboutSchema = graph(
  webPageEntity({
    path: aboutMeta.path,
    name: aboutMeta.title,
    description: aboutMeta.description,
    type: "AboutPage",
    breadcrumb: true,
  }),
  breadcrumbList(aboutMeta.path, aboutBreadcrumb),
  dentistEntity({ areaServed: homeAreas.towns.map((town) => town.name) }),
  dentistPerson(),
  websiteEntity(),
);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />

      <PageHero
        id="about-title"
        breadcrumb={aboutBreadcrumb}
        eyebrow={`About us · ${practice.address.city}, ${practice.address.region}`}
        title={aboutHero.title}
        intro={aboutHero.intro}
        image={images.aboutHero}
        actions={
          <>
            <Button href={contactLinks.call} icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
            <Button href={aboutHero.secondaryCta.href} variant="secondary" icon="calendar" track="appointment_click">
              {aboutHero.secondaryCta.label}
            </Button>
          </>
        }
        cards={
          <>
            <HeroCard
              position="top"
              icon={<Icon name="shield" size={20} />}
              title="PPO insurance accepted"
              text="Membership plans without insurance"
            />
            <HeroCard
              position="bottom"
              icon={<Icon name="pin" size={20} />}
              title={`${practice.address.street}`}
              text={`${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}`}
            />
          </>
        }
      />

      <Approach />
      <DoctorFeature />
      <Team />
      <Technology content={aboutTechnology} headingId="about-technology-title" image={images.aboutTechnology} reverse />
      <Community />
      <Visit />
    </>
  );
}
