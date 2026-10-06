import { notFound } from "next/navigation";
import { BlogPost } from "@/components/sections/blog/BlogPost";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogTopics } from "@/content/pages/blog";
import { postCovers, posts, postsBySlug } from "@/content/pages/blog/posts";
import { blogPostSchema } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

/** Blog posts, prerendered at build time; any other slug 404s */
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = postsBySlug[slug];
  return post ? buildMetadata({ ...post.meta, ogType: "article" }) : {};
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postsBySlug[slug];
  if (!post) notFound();

  const cover = postCovers[slug];
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.label, path: post.meta.path },
  ];
  const schema = blogPostSchema({
    meta: post.meta,
    headline: `${post.title.lead} ${post.title.accent}`,
    breadcrumb,
    published: post.published,
    updated: post.updated,
    section: blogTopics.items.find((topic) => topic.id === post.topic)?.title ?? "Patient Guides",
    faqs: post.faqs.items,
    image: cover?.src ? absoluteUrl(cover.src.src) : undefined,
  });

  return (
    <>
      <JsonLd data={schema} />
      <BlogPost post={post} breadcrumb={breadcrumb} cover={cover} />
    </>
  );
}
