import { Faq } from "@/components/sections/Faq";
import { Photos, StartMakeover, Treatments } from "@/components/sections/gallery/GallerySections";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { HeroCard, PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { galleryCases, images } from "@/content/images";
import { galleryBreadcrumb, galleryFaqs, galleryFinalCta, galleryHero, galleryMeta } from "@/content/pages/gallery";
import { homeAreas } from "@/content/pages/home";
import { contactLinks, practice } from "@/content/site";
import { breadcrumbList, dentistEntity, faqPage, graph, webPageEntity, websiteEntity } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(galleryMeta);

/**
 * ImageGallery + BreadcrumbList + Dentist (03 Developer Handoff.md, 3a). The case
 * photos are hosted on this site, so they are listed as ImageObjects, as the
 * handoff asks once real image URLs exist.
 */
const gallery = {
  ...webPageEntity({
    path: galleryMeta.path,
    name: galleryMeta.title,
    description: galleryMeta.description,
    type: "ImageGallery",
    breadcrumb: true,
    mainEntity: null,
  }),
  image: galleryCases.flatMap((item) =>
    [item.before, item.after].flatMap((photo) =>
      photo.src ? [{ "@type": "ImageObject", contentUrl: absoluteUrl(photo.src.src), caption: photo.alt }] : [],
    ),
  ),
};

const coreSchema = graph(
  gallery,
  breadcrumbList(galleryMeta.path, galleryBreadcrumb),
  dentistEntity({ areaServed: homeAreas.towns.map((town) => town.name) }),
  websiteEntity(),
);

const faqSchema = graph(faqPage({ path: galleryMeta.path, items: galleryFaqs.items }));

export default function SmileGalleryPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="gallery-page-title"
        breadcrumb={galleryBreadcrumb}
        eyebrow={`Smile gallery · ${practice.address.city}, ${practice.address.region}`}
        title={galleryHero.title}
        intro={galleryHero.intro}
        image={images.galleryHero}
        actions={
          <>
            <Button href={galleryHero.cta.href} icon="calendar" track="appointment_click">
              {galleryHero.cta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
        cards={
          <>
            <HeroCard
              position="top"
              icon={<Icon name="sparkle" size={20} />}
              title={`${galleryCases.length} before & after cases`}
              text="Real patient results"
            />
            <HeroCard
              position="bottom"
              icon={<Icon name="pin" size={20} />}
              title={practice.address.street}
              text={`${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}`}
            />
          </>
        }
      />

      <Photos />
      <Treatments />
      <StartMakeover />
      <Faq id="gallery-faq-title" title={galleryFaqs.title} items={galleryFaqs.items} />
      <FinalCta id="gallery-book-title" title={galleryFinalCta.title} body="" />
    </>
  );
}
