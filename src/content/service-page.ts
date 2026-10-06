/**
 * Content model for treatment pages (General Dentistry now; Restorative and Cosmetic
 * use the same shape). Text is stored exactly as in the SEO content files; inline
 * **bold** and [label](/path) are kept in the strings and rendered by <Rich>.
 */

export type RichText = string;

export type ContentBlock =
  | { kind: "p"; text: RichText }
  | { kind: "ul"; items: RichText[] }
  | { kind: "ol"; items: RichText[] }
  | { kind: "h3"; title: string; blocks: ContentBlock[] }
  | { kind: "link"; label: string; href: string }
  | { kind: "note"; text: RichText }
  /** A real HTML table (handoffs: comparison tables); head[0] is usually empty */
  | { kind: "table"; head: string[]; rows: RichText[][] };

export type ServiceSection = { id: string; title: string; blocks: ContentBlock[] };

export type Cta = { label: string; href: string };

export type ServicePageContent = {
  meta: { path: string; title: string; description: string };
  breadcrumb: { name: string; path: string }[];
  hero: {
    title: { lead: string; accent: string };
    intro: string;
    buttons: Cta[];
    /** 911 safety line (emergency page) */
    safety?: string;
  };
  /** MedicalProcedure node (name and description from the Developer Handoff); null on Oral Hygiene */
  procedure: { name: string; description: string } | null;
  /** Dentist node carries opening hours (emergency page handoff) */
  withHours: boolean;
  sections: ServiceSection[];
  faqs: { title: string; items: { question: string; answer: string }[] };
  finalCta: { title: { lead: string; accent: string }; body: string; buttons: Cta[]; links: Cta[] };
  /** Service + location pages (07): the handoff's page type and the Dentist areaServed */
  pageType?: "MedicalWebPage" | "WebPage";
  areaServed?: Record<string, unknown>[];
};

/** Hero side card: page icon, three key facts and the related pages (design only, from the copy) */
export type ServiceExtras = {
  icon: string;
  eyebrow: string;
  label: string;
  facts: { icon: string; title: string; text: string }[];
  related: { label: string; href: string }[];
  /** Bespoke section designs by section id (components/sections/service/SectionDesigns) */
  designs?: Record<string, { design: SectionDesignName; eyebrow?: string }>;
};

/** Every bespoke design (SectionDesigns, RestorativeDesigns and CosmeticDesigns); each is used on one page only */
export type SectionDesignName =
  | "exam-bento"
  | "signs-grid"
  | "scan-panel"
  | "symptom-cloud"
  | "risk-statement"
  | "floss-thread"
  | "routine-kit"
  | "probe-gauge"
  | "two-phases"
  | "process-row"
  | "versus"
  | "care-plan"
  | "cost-split"
  | "visit-calendar"
  | "spec-card"
  | "flow-benefits"
  | "during-after"
  | "spotlight"
  | "milestone"
  | "tip-tiles"
  | "clipboard"
  | "cause-chain"
  | "budget-cards"
  // Restorative Dentistry (RestorativeDesigns.tsx)
  | "implant-anatomy"
  | "option-duo"
  | "candidate-check"
  | "cbct-viewfinder"
  | "surgery-stepper"
  | "recovery-timeline"
  | "compare-matrix"
  | "reason-mosaic"
  | "material-swatches"
  | "lab-journey"
  | "coverage-scale"
  | "layer-build"
  | "composite-vs-amalgam"
  | "habit-tracker"
  | "coverage-table"
  | "material-chips"
  | "benefit-ribbon"
  | "tooth-section"
  | "staircase"
  | "reassure"
  | "keep-or-extract"
  | "gap-diagram"
  | "bridge-schematics"
  | "visit-track"
  | "denture-full"
  | "denture-partial"
  | "denture-immediate"
  | "attachment-options"
  | "reline-guide"
  | "situation-table"
  | "imaging-band"
  // Cosmetic Dentistry (CosmeticDesigns.tsx)
  | "artistry-grid"
  | "treatment-bento"
  | "makeover-matrix"
  | "scan-layers"
  | "gallery-invite"
  | "plan-receipt"
  | "tooth-tiles"
  | "veneer-light"
  | "material-duel"
  | "shell-stages"
  | "decade-meter"
  | "stain-sources"
  | "whitening-options"
  | "shade-tabs"
  | "chip-repair"
  | "benefit-quad"
  | "bond-steps"
  | "mirror-table"
  | "tray-series"
  | "alignment-cases"
  | "clear-table"
  | "aligner-roadmap"
  | "range-stats"
  | "force-compare"
  | "night-signs"
  | "guard-compare"
  | "guard-making"
  // Service + location (ServiceLocationDesigns.tsx)
  | "option-ladder"
  | "angle-depth"
  | "phase-track"
  | "town-times"
  | "road-strip"
  | "consult-agenda"
  | "criteria-toggles"
  | "insurance-card"
  | "two-routes"
  | "ripple-effects"
  | "three-way"
  | "fee-tags"
  | "consult-chat"
  | "option-swatches"
  | "makeover-pairs"
  | "time-ruler"
  | "hours-board"
  | "first-aid"
  | "eta-board"
  | "same-day"
  | "price-spot"
  | "open-days"
  | "do-dont"
  | "symptom-flags"
  | "visit-steps"
  | "checkup-cadence"
  | "timeline-table"
  | "aligner-day";
