import { hasPlaceholders, type LegalPageContent } from "@/content/legal-page";
import { getRoute } from "@/content/routes";
import { accessibility } from "./accessibility";
import { disclaimer } from "./disclaimer";
import { hipaaNoticeOfPrivacyPractices } from "./hipaa-notice-of-privacy-practices";
import { privacyPolicy } from "./privacy-policy";

const all: LegalPageContent[] = [privacyPolicy, hipaaNoticeOfPrivacyPractices, accessibility, disclaimer];

/**
 * Legal pages that can be served. Handoff: "don't publish with placeholders", so a page
 * goes live only when its route is published AND every [CONFIRM] item has been filled in.
 * In development every page renders, with its placeholders marked, for review.
 */
export const legalPages: Record<string, LegalPageContent> = Object.fromEntries(
  all
    .filter(
      (page) =>
        process.env.NODE_ENV !== "production" || (getRoute(page.meta.path)?.published && !hasPlaceholders(page)),
    )
    .map((page) => [page.meta.path.replaceAll("/", ""), page]),
);

export const legalSlugs = Object.keys(legalPages);

/** All four, for the "other policies" links on each page */
export const legalNav = all.map((page) => ({ label: page.breadcrumb[page.breadcrumb.length - 1].name, href: page.meta.path }));
