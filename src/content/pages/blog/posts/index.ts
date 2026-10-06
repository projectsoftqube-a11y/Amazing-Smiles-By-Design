import type { BlogPostContent } from "@/content/blog-post";
import { images, type SiteImage } from "@/content/images";
import { getRoute } from "@/content/routes";
import { dentalEmergenciesFirst } from "./dental-emergencies-what-to-do-first";
import { dentalImplantCost } from "./dental-implant-cost-bensalem";
import { porcelainVeneersLast } from "./how-long-do-porcelain-veneers-last";
import { noDentalInsurance } from "./no-dental-insurance-bensalem";

/**
 * Every blog post, newest first (all four were published 6 Oct 2026, kept in the docs' order).
 * A new post: run the converter on its .docx, import it here and add its route in routes.ts.
 */
const all: BlogPostContent[] = [porcelainVeneersLast, dentalImplantCost, dentalEmergenciesFirst, noDentalInsurance];

/** Posts whose route is published (all of them in development, for previewing drafts) */
export const posts = all.filter((post) => getRoute(post.meta.path)?.published || process.env.NODE_ENV !== "production");

/** Cover photos supplied in the post documents; a post without one shows its code-drawn art */
export const postCovers: Partial<Record<string, SiteImage>> = {
  "how-long-do-porcelain-veneers-last": images.blogVeneersCover,
  "dental-implant-cost-bensalem": images.blogImplantCostCover,
  "dental-emergencies-what-to-do-first": images.blogEmergenciesCover,
  "no-dental-insurance-bensalem": images.blogNoInsuranceCover,
};

export const postsBySlug: Record<string, BlogPostContent> = Object.fromEntries(posts.map((post) => [post.slug, post]));
