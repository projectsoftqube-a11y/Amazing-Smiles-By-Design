import { getRoute } from "@/content/routes";
import type { ServiceExtras, ServicePageContent } from "@/content/service-page";
import { clearAlignersLanghornePa } from "./clear-aligners-langhorne-pa";
import { cosmeticDentistBucksCounty } from "./cosmetic-dentist-bucks-county";
import { dentalImplantsBucksCounty } from "./dental-implants-bucks-county";
import { dentalImplantsFeastervillePa } from "./dental-implants-feasterville-pa";
import { dentalImplantsLanghornePa } from "./dental-implants-langhorne-pa";
import { emergencyDentistBucksCounty } from "./emergency-dentist-bucks-county";
import { emergencyDentistLanghornePa } from "./emergency-dentist-langhorne-pa";

/**
 * The 7 service + location pages (07), keyed by URL slug. `extras` drives the hero
 * side card (facts restated from each page's copy) and the bespoke section designs
 * (ServiceLocationDesigns.tsx; each design is used on one page only).
 */
const all: Record<string, { content: ServicePageContent; extras: ServiceExtras }> = {
  "dental-implants-bucks-county": {
    content: dentalImplantsBucksCounty,
    extras: {
      icon: "tooth",
      eyebrow: "Dental implants",
      label: "At a glance",
      facts: [
        { icon: "tooth", title: "One tooth to a full arch", text: "Single implants, bridges, full-arch and implant dentures" },
        { icon: "scan", title: "In-office 3D imaging", text: "CBCT, digital X-rays and the RayFace scanner" },
        { icon: "map", title: "Across Lower Bucks", text: "About 5 to 19 minutes from nearby towns" },
      ],
      related: [
        { label: "How dental implants work", href: "/restorative-dentistry/dental-implants/" },
        { label: "Areas we serve", href: "/areas-we-serve/" },
      ],
      designs: {
        "implant-options-for-bucks-county-patients-title": { design: "option-ladder", eyebrow: "Your options" },
        "planned-with-in-office-3d-imaging-title": { design: "angle-depth", eyebrow: "Planning" },
        "the-implant-timeline-title": { design: "phase-track", eyebrow: "Timeline" },
        "drive-times-from-across-lower-bucks-title": { design: "town-times", eyebrow: "Drive times" },
      },
    },
  },
  "dental-implants-feasterville-pa": {
    content: dentalImplantsFeastervillePa,
    extras: {
      icon: "tooth",
      eyebrow: "Dental implants · Feasterville",
      label: "At a glance",
      facts: [
        { icon: "map", title: "About 12 minutes", text: "Straight down Bristol Road from Feasterville" },
        { icon: "clipboard", title: "Consultation first", text: "Goals, exam, imaging, options and a plan" },
        { icon: "scan", title: "CBCT when needed", text: "Bone, nerves and sinus structures" },
      ],
      related: [
        { label: "Dentist near Feasterville", href: "/dentist-feasterville-pa/" },
        { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" },
      ],
      designs: {
        "getting-here-from-feasterville-title": { design: "road-strip", eyebrow: "Getting here" },
        "what-happens-at-your-implant-consultation-title": { design: "consult-agenda", eyebrow: "Your first visit" },
        "are-you-a-good-candidate-title": { design: "criteria-toggles", eyebrow: "Candidacy" },
        "paying-for-implants-title": { design: "insurance-card", eyebrow: "Paying for care" },
      },
    },
  },
  "dental-implants-langhorne-pa": {
    content: dentalImplantsLanghornePa,
    extras: {
      icon: "tooth",
      eyebrow: "Dental implants · Langhorne",
      label: "At a glance",
      facts: [
        { icon: "map", title: "About 10 minutes", text: "4.6 miles via South Bellevue Avenue" },
        { icon: "tooth", title: "Implant, bridge or denture", text: "Compare your options at one consultation" },
        { icon: "clock", title: "Built to last", text: "Many implants remain functional for decades" },
      ],
      related: [
        { label: "Dentist near Langhorne", href: "/dentist-langhorne-pa/" },
        { label: "Dental bridges", href: "/restorative-dentistry/dental-bridges/" },
      ],
      designs: {
        "getting-here-from-langhorne-title": { design: "two-routes", eyebrow: "Getting here" },
        "why-replace-a-missing-tooth-title": { design: "ripple-effects", eyebrow: "Why it matters" },
        "implant-bridge-or-denture-title": { design: "three-way", eyebrow: "Compare" },
        "cost-and-financing-title": { design: "fee-tags", eyebrow: "Cost" },
      },
    },
  },
  "cosmetic-dentist-bucks-county": {
    content: cosmeticDentistBucksCounty,
    extras: {
      icon: "sparkle",
      eyebrow: "Cosmetic dentistry",
      label: "At a glance",
      facts: [
        { icon: "sparkle", title: "Veneer training", text: "Dr. Dudhat's ongoing advanced training includes veneers" },
        { icon: "smile", title: "Four treatments", text: "Whitening, bonding, veneers and Invisalign" },
        { icon: "map", title: "Close to home", text: "About 10 to 19 minutes across Lower Bucks" },
      ],
      related: [
        { label: "Cosmetic dentistry", href: "/cosmetic-dentistry/" },
        { label: "Smile gallery", href: "/smile-gallery/" },
      ],
      designs: {
        "how-a-cosmetic-consultation-works-title": { design: "consult-chat", eyebrow: "Your consultation" },
        "cosmetic-options-at-a-glance-title": { design: "option-swatches", eyebrow: "Options" },
        "smile-makeovers-in-bucks-county-title": { design: "makeover-pairs", eyebrow: "Smile makeover" },
        "close-to-home-in-lower-bucks-title": { design: "time-ruler", eyebrow: "Drive times" },
      },
    },
  },
  "emergency-dentist-bucks-county": {
    content: emergencyDentistBucksCounty,
    extras: {
      icon: "alert",
      eyebrow: "Emergency dentistry",
      label: "Call or text now",
      facts: [
        { icon: "clock", title: "Same day", text: "Whenever possible, Monday to Thursday" },
        { icon: "tag", title: "$59 for new patients", text: "The necessary exam and X-rays" },
        { icon: "map", title: "Across Bucks County", text: "About 5 to 18 minutes from nearby towns" },
      ],
      related: [
        { label: "Emergency dentistry", href: "/general-dentistry/emergency-dentistry/" },
        { label: "Emergency scheduling", href: "/patient-information/emergency-scheduling/" },
      ],
      designs: {
        "emergency-office-hours-title": { design: "hours-board", eyebrow: "When we're open" },
        "until-you-can-be-seen-title": { design: "first-aid", eyebrow: "First aid" },
        "emergency-care-from-across-bucks-county-title": { design: "eta-board", eyebrow: "Drive times" },
        "what-same-day-care-can-include-title": { design: "same-day", eyebrow: "Same-day care" },
        "emergency-care-without-insurance-title": { design: "price-spot", eyebrow: "Paying for care" },
      },
    },
  },
  "emergency-dentist-langhorne-pa": {
    content: emergencyDentistLanghornePa,
    extras: {
      icon: "alert",
      eyebrow: "Emergency dentistry · Langhorne",
      label: "Call or text now",
      facts: [
        { icon: "map", title: "About 10 minutes", text: "4.6 miles via South Bellevue Avenue" },
        { icon: "clock", title: "Same day", text: "Whenever possible during office hours" },
        { icon: "tag", title: "$59 for new patients", text: "The necessary exam and X-rays" },
      ],
      related: [
        { label: "Emergency dentist in Bucks County", href: "/emergency-dentist-bucks-county/" },
        { label: "Dentist near Langhorne", href: "/dentist-langhorne-pa/" },
      ],
      designs: {
        "getting-here-from-langhorne-title": { design: "open-days", eyebrow: "Getting here" },
        "toothache-or-swelling-what-to-do-now-title": { design: "do-dont", eyebrow: "Right now" },
        "is-it-an-emergency-title": { design: "symptom-flags", eyebrow: "Is it urgent?" },
        "what-happens-at-your-emergency-visit-title": { design: "visit-steps", eyebrow: "Your visit" },
      },
    },
  },
  "clear-aligners-langhorne-pa": {
    content: clearAlignersLanghornePa,
    extras: {
      icon: "smile",
      eyebrow: "Invisalign · Langhorne",
      label: "At a glance",
      facts: [
        { icon: "map", title: "About 10 minutes", text: "A short trip for each check-up" },
        { icon: "calendar", title: "Check-ups about every 6 weeks", text: "Progress checks and your next aligners" },
        { icon: "clock", title: "About 9 to 15 months", text: "For many patients" },
      ],
      related: [
        { label: "Invisalign clear aligners", href: "/cosmetic-dentistry/clear-aligners/" },
        { label: "Dentist near Langhorne", href: "/dentist-langhorne-pa/" },
      ],
      designs: {
        "getting-here-from-langhorne-title": { design: "checkup-cadence", eyebrow: "Getting here" },
        "your-invisalign-timeline-title": { design: "timeline-table", eyebrow: "Timeline" },
        "daily-life-with-aligners-title": { design: "aligner-day", eyebrow: "Day to day" },
      },
    },
  },
};

/**
 * Pages whose route is published (routes.ts). An unpublished page can still be
 * previewed in development.
 */
export const serviceLocationPages = Object.fromEntries(
  Object.entries(all).filter(
    ([slug]) => getRoute(`/${slug}/`)?.published || process.env.NODE_ENV !== "production",
  ),
);

export const serviceLocationSlugs = Object.keys(serviceLocationPages);
