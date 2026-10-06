import type { ContentBlock, Cta } from "@/content/service-page";

/**
 * Content model for blog posts (docs/seo-content/08 Blog/01 Posts). Text is stored exactly
 * as in the post documents; inline **bold**, *italic* and [label](/path) are rendered by <Rich>.
 */

type BaseBlock = Exclude<ContentBlock, { kind: "h3" }>;

export type BlogBlock =
  | BaseBlock
  | { kind: "h3"; title: string; blocks: BlogBlock[] }
  /** The doc's "▸ Button" lines, with the italic line under them as the note */
  | { kind: "cta"; buttons: Cta[]; note?: string };

/** Code-drawn cover art per post (components/sections/blog/PostArt); no stock or AI imagery */
export type PostArt = "veneers" | "implant" | "emergency" | "membership";

export type BlogPostContent = {
  slug: string;
  meta: { path: string; title: string; description: string };
  /** Short title for breadcrumbs, the sitemap and link lists */
  label: string;
  /** id of the matching "Browse by Topic" card on /blog/ */
  topic: string;
  art: PostArt;
  title: { lead: string; accent: string };
  author: string;
  /** ISO dates for the dated byline and the BlogPosting schema */
  published: string;
  updated: string;
  quickAnswer: { text: string[]; buttons: Cta[] };
  takeaways: string[];
  sections: { id: string; title: string; blocks: BlogBlock[] }[];
  faqs: { id: string; title: string; items: { question: string; answer: string }[] };
  finalCta: { id: string; title: { lead: string; accent: string }; body: string; buttons: Cta[] };
  /** The treatment page this post supports (handoff: each post links to its service page) */
  related: Cta;
};

export const formatPostDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

/** Reading time at ~230 words a minute, from the article text */
export function readingMinutes(post: BlogPostContent) {
  const text = [
    ...post.quickAnswer.text,
    ...post.takeaways,
    JSON.stringify(post.sections),
    ...post.faqs.items.flatMap((item) => [item.question, item.answer]),
  ].join(" ");
  const words = text.replace(/"(kind|text|items|title|blocks|head|rows|buttons|label|href|note|id)":/g, " ").split(/\s+/);
  return Math.max(1, Math.round(words.length / 230));
}
