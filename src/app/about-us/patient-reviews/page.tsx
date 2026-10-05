import { FinalCta } from "@/components/sections/home/FinalCta";
import { HeroCard, PageHero } from "@/components/sections/PageHero";
import { ReviewWall, ShareAndNext, Themes } from "@/components/sections/reviews/ReviewsSections";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { images } from "@/content/images";
import { homeAreas } from "@/content/pages/home";
import {
  patientReviews,
  reviewsBreadcrumb,
  reviewsFinalCta,
  reviewsHero,
  reviewsMeta,
  reviewsThemes,
} from "@/content/pages/reviews";
import { contactLinks, practice } from "@/content/site";
import { breadcrumbList, dentistEntity, graph, webPageEntity, websiteEntity } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(reviewsMeta);

/**
 * WebPage + BreadcrumbList + Dentist (03 Developer Handoff.md). Deliberately no
 * Review or AggregateRating markup for the practice's own testimonials.
 */
const schema = graph(
  webPageEntity({
    path: reviewsMeta.path,
    name: reviewsMeta.title,
    description: reviewsMeta.description,
    breadcrumb: true,
    mainEntity: null,
  }),
  breadcrumbList(reviewsMeta.path, reviewsBreadcrumb),
  dentistEntity({ areaServed: homeAreas.towns.map((town) => town.name) }),
  websiteEntity(),
);

const friendly = reviewsThemes.items[0];

export default function PatientReviewsPage() {
  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        id="reviews-page-title"
        breadcrumb={reviewsBreadcrumb}
        eyebrow={`Patient reviews · ${practice.address.city}, ${practice.address.region}`}
        title={reviewsHero.title}
        intro={reviewsHero.intro}
        image={images.reviewsHero}
        actions={
          <>
            <Button href={reviewsHero.cta.href} icon="calendar" track="appointment_click">
              {reviewsHero.cta.label}
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
              icon={<Icon name="quote" size={20} />}
              title={`${patientReviews.length} patient reviews`}
              text="Shared in their own words"
            />
            <HeroCard
              position="bottom"
              icon={<Icon name="smile" size={20} />}
              title={friendly.label}
              text={`Mentioned in ${friendly.count} of ${reviewsThemes.total} reviews`}
            />
          </>
        }
      />

      <Themes />
      <ReviewWall />
      <ShareAndNext />
      <FinalCta
        id="reviews-book-title"
        title={reviewsFinalCta.title}
        body={reviewsFinalCta.body}
        actions={
          <Button href={reviewsFinalCta.cta.href} variant="inverse" icon="calendar" track="appointment_click">
            {reviewsFinalCta.cta.label}
          </Button>
        }
      />
    </>
  );
}
