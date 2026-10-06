import type { Cta, ServiceSection } from "./service-page";

/**
 * Content model for the legal pages (09 Compliance). Text is verbatim from the content
 * files, including any "[CONFIRM: …]" item the practice still has to supply.
 */
export type LegalPageContent = {
  meta: { path: string; title: string; description: string };
  breadcrumb: { name: string; path: string }[];
  hero: {
    title: { lead: string; accent: string };
    /** Hero paragraphs (may start with a bold lead-in) */
    intro: string[];
    /** Dated lines under the intro ("**Effective date:** …", "**Last updated:** …") */
    lines: string[];
    buttons: Cta[];
  };
  sections: ServiceSection[];
  /** Standalone links after the last section */
  links: Cta[];
};

/** A "[CONFIRM: …]" item the practice still has to fill in */
export const PLACEHOLDER = /\[CONFIRM: ([^\]]+)\]/;

export const hasPlaceholders = (page: LegalPageContent) => JSON.stringify(page).includes("[CONFIRM");
