import { hasPlaceholders, type LegalPageContent } from "@/content/legal-page";
import { getRoute } from "@/content/routes";
import { accessibility } from "./accessibility";
import { disclaimer } from "./disclaimer";
import { hipaaNoticeOfPrivacyPractices } from "./hipaa-notice-of-privacy-practices";
import { privacyPolicy } from "./privacy-policy";

const all: LegalPageContent[] = [privacyPolicy, hipaaNoticeOfPrivacyPractices, accessibility, disclaimer];

/**
 * Legal pages served when their route is published. On staging all four are live and any
 * "[CONFIRM: …]" item shows as a marked box (hasPlaceholders lists what's still open);
 * the practice must fill them in before the real domain points at this site (handoff).
 */
export const legalPages: Record<string, LegalPageContent> = Object.fromEntries(
  all
    .filter((page) => process.env.NODE_ENV !== "production" || getRoute(page.meta.path)?.published)
    .map((page) => [page.meta.path.replaceAll("/", ""), page]),
);

/** Paths that still contain [CONFIRM] items */
export const legalPagesWithPlaceholders = all.filter(hasPlaceholders).map((page) => page.meta.path);

export const legalSlugs = Object.keys(legalPages);

/** All four, for the "other policies" links on each page */
export const legalNav = all.map((page) => ({ label: page.breadcrumb[page.breadcrumb.length - 1].name, href: page.meta.path }));
