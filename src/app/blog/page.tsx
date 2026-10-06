import { BlogHeroCard, PostFeed, Resources, TopicShelf } from "@/components/sections/blog/BlogSections";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  blogBreadcrumb,
  blogFinalCta,
  blogHero,
  blogMeta,
  blogPosts,
  blogResources,
  blogTopics,
} from "@/content/pages/blog";
import { practice } from "@/content/site";
import { infoPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

/** Indexed since the first posts went live (handoff: noindex only until 3 posts exist) */
export const metadata = buildMetadata(blogMeta);

/** CollectionPage + BreadcrumbList + Dentist (3a) */
const coreSchema = infoPageSchema({ meta: blogMeta, breadcrumb: blogBreadcrumb, type: "CollectionPage" });

export default function BlogPage() {
  return (
    <>
      <JsonLd data={coreSchema} />

      <PageHero
        id="blog-title"
        breadcrumb={blogBreadcrumb}
        eyebrow={`Patient guides · ${practice.address.city}`}
        title={blogHero.title}
        intro={blogHero.intro}
        aside={<BlogHeroCard topics={blogTopics.items} latest={blogPosts[0]} />}
        actions={
          <Button href={blogHero.cta.href} icon="calendar" track="appointment_click">
            {blogHero.cta.label}
          </Button>
        }
      />

      <PostFeed posts={blogPosts} />
      <TopicShelf id={blogTopics.id} title={blogTopics.title} topics={blogTopics.items} posts={blogPosts} />
      <Resources id={blogResources.id} title={blogResources.title} links={blogResources.links} />
      <FinalCta
        id="blog-book-title"
        title={blogFinalCta.title}
        body={blogFinalCta.body}
        actions={
          <Button href={blogFinalCta.button.href} variant="inverse" icon="calendar" track="appointment_click">
            {blogFinalCta.button.label}
          </Button>
        }
      />
    </>
  );
}
