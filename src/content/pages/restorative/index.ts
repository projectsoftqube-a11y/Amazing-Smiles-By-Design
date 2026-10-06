import type { ServiceExtras, ServicePageContent } from "@/content/service-page";
import { dentalBridges } from "./dental-bridges";
import { dentalCrowns } from "./dental-crowns";
import { dentalFillings } from "./dental-fillings";
import { dentalImplants } from "./dental-implants";
import { dentures } from "./dentures";
import { inlaysOnlays } from "./inlays-onlays";
import { nonSurgicalRootCanal } from "./non-surgical-root-canal";

/**
 * The 7 Restorative Dentistry treatment pages, keyed by URL slug. `extras` drives
 * the hero side card (facts from each page's own copy) and the bespoke section
 * designs (RestorativeDesigns.tsx; each design is used on one page only).
 */
export const restorativeServices: Record<string, { content: ServicePageContent; extras: ServiceExtras }> = {
  "dental-implants": {
    content: dentalImplants,
    extras: {
      icon: "tooth",
      eyebrow: "Replace missing teeth",
      label: "At a glance",
      facts: [
        { icon: "tooth", title: "Root to crown", text: "Replaces the entire structure of a missing tooth" },
        { icon: "scan", title: "Planned with CBCT", text: "Bone, nerves and the best angle and depth" },
        { icon: "clock", title: "For decades", text: "Many implants remain functional with proper care" },
      ],
      related: [
        { label: "Dentures", href: "/restorative-dentistry/dentures/" },
        { label: "Dental bridges", href: "/restorative-dentistry/dental-bridges/" },
      ],
      designs: {
        "how-dental-implants-work-title": { design: "implant-anatomy", eyebrow: "How it works" },
        "single-tooth-implants-and-full-arch-options-title": { design: "option-duo", eyebrow: "Your options" },
        "are-dental-implants-right-for-you-title": { design: "candidate-check", eyebrow: "Candidacy" },
        "implant-planning-with-advanced-imaging-title": { design: "cbct-viewfinder", eyebrow: "Planning" },
        "what-happens-during-implant-surgery-title": { design: "surgery-stepper", eyebrow: "Surgery" },
        "recovery-and-care-title": { design: "recovery-timeline", eyebrow: "Recovery" },
        "implants-vs-bridges-vs-dentures-title": { design: "compare-matrix", eyebrow: "Compare" },
      },
    },
  },
  "dental-crowns": {
    content: dentalCrowns,
    extras: {
      icon: "shield",
      eyebrow: "Repair damaged teeth",
      label: "At a glance",
      facts: [
        { icon: "calendar", title: "Two visits", text: "Prepare the tooth, then place the final crown" },
        { icon: "sparkle", title: "Made in a dental lab", text: "A temporary crown protects the tooth meanwhile" },
        { icon: "shield", title: "Covers the whole tooth", text: "Porcelain, PFM, zirconia or metal" },
      ],
      related: [
        { label: "Dental bridges", href: "/restorative-dentistry/dental-bridges/" },
        { label: "Inlays & onlays", href: "/restorative-dentistry/inlays-onlays/" },
      ],
      designs: {
        "when-you-need-a-crown-title": { design: "reason-mosaic", eyebrow: "When it helps" },
        "types-of-dental-crowns-title": { design: "material-swatches", eyebrow: "Materials" },
        "the-dental-crown-process-title": { design: "lab-journey", eyebrow: "The process" },
        "crowns-vs-fillings-and-onlays-title": { design: "coverage-scale", eyebrow: "How they compare" },
      },
    },
  },
  "dental-fillings": {
    content: dentalFillings,
    extras: {
      icon: "sparkle",
      eyebrow: "Repair damaged teeth",
      label: "At a glance",
      facts: [
        { icon: "smile", title: "Tooth-colored", text: "Composite resin that matches your teeth" },
        { icon: "check", title: "Quick & comfortable", text: "A routine treatment" },
        { icon: "shield", title: "Bonds to the tooth", text: "More natural tooth preserved" },
      ],
      related: [
        { label: "Inlays & onlays", href: "/restorative-dentistry/inlays-onlays/" },
        { label: "Oral hygiene", href: "/general-dentistry/oral-hygiene/" },
      ],
      designs: {
        "what-to-expect-title": { design: "layer-build", eyebrow: "Step by step" },
        "tooth-colored-vs-metal-fillings-title": { design: "composite-vs-amalgam", eyebrow: "Materials" },
        "preventing-cavities-title": { design: "habit-tracker", eyebrow: "Every day" },
      },
    },
  },
  "inlays-onlays": {
    content: inlaysOnlays,
    extras: {
      icon: "tooth",
      eyebrow: "Repair damaged teeth",
      label: "At a glance",
      facts: [
        { icon: "calendar", title: "Usually two visits", text: "Made to fit in a dental laboratory" },
        { icon: "clock", title: "10 to 30 years", text: "With proper care" },
        { icon: "heart", title: "Conservative", text: "More natural tooth preserved than with a crown" },
      ],
      related: [
        { label: "Dental fillings", href: "/restorative-dentistry/dental-fillings/" },
        { label: "Dental crowns", href: "/restorative-dentistry/dental-crowns/" },
      ],
      designs: {
        "inlay-vs-onlay-vs-crown-title": { design: "coverage-table", eyebrow: "Compare" },
        "materials-title": { design: "material-chips", eyebrow: "Materials" },
        "benefits-title": { design: "benefit-ribbon", eyebrow: "Why choose them" },
      },
    },
  },
  "non-surgical-root-canal": {
    content: nonSurgicalRootCanal,
    extras: {
      icon: "heart",
      eyebrow: "Save infected teeth",
      label: "At a glance",
      facts: [
        { icon: "tooth", title: "Keep your natural tooth", text: "The infected pulp is removed and the tooth sealed" },
        { icon: "shield", title: "Local anesthesia", text: "Numbs the area during treatment" },
        { icon: "plus", title: "Often a crown after", text: "Restores strength and chewing function" },
      ],
      related: [
        { label: "Dental crowns", href: "/restorative-dentistry/dental-crowns/" },
        { label: "Emergency dentistry", href: "/general-dentistry/emergency-dentistry/" },
      ],
      designs: {
        "what-is-a-root-canal-title": { design: "tooth-section", eyebrow: "Inside the tooth" },
        "what-happens-during-treatment-title": { design: "staircase", eyebrow: "The treatment" },
        "does-a-root-canal-hurt-title": { design: "reassure", eyebrow: "Comfort" },
        "root-canal-vs-tooth-extraction-title": { design: "keep-or-extract", eyebrow: "Your choice" },
      },
    },
  },
  "dental-bridges": {
    content: dentalBridges,
    extras: {
      icon: "plus",
      eyebrow: "Replace missing teeth",
      label: "At a glance",
      facts: [
        { icon: "calendar", title: "Two to three visits", text: "Made in a dental laboratory" },
        { icon: "tooth", title: "Three types", text: "Traditional, cantilever or Maryland bonded" },
        { icon: "shield", title: "Stops shifting", text: "Keeps neighboring teeth in place" },
      ],
      related: [
        { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" },
        { label: "Dental crowns", href: "/restorative-dentistry/dental-crowns/" },
      ],
      designs: {
        "why-replacing-a-missing-tooth-matters-title": { design: "gap-diagram", eyebrow: "Why it matters" },
        "types-of-dental-bridges-title": { design: "bridge-schematics", eyebrow: "Types" },
        "the-dental-bridge-process-title": { design: "visit-track", eyebrow: "The process" },
      },
    },
  },
  dentures: {
    content: dentures,
    extras: {
      icon: "smile",
      eyebrow: "Replace missing teeth",
      label: "At a glance",
      facts: [
        { icon: "smile", title: "Full, partial & immediate", text: "For a whole arch or a few missing teeth" },
        { icon: "tooth", title: "Implant-supported", text: "Far less movement when you chew and speak" },
        { icon: "calendar", title: "Relines every 1–2 years", text: "Plus an annual denture exam" },
      ],
      related: [
        { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" },
        { label: "Tooth extraction", href: "/general-dentistry/tooth-extraction/" },
      ],
      designs: {
        "full-dentures-title": { design: "denture-full", eyebrow: "A whole arch" },
        "partial-dentures-title": { design: "denture-partial", eyebrow: "Some teeth remain" },
        "immediate-dentures-title": { design: "denture-immediate", eyebrow: "After extractions" },
        "implant-supported-dentures-title": { design: "attachment-options", eyebrow: "More stability" },
        "denture-relines-liners-and-exams-title": { design: "reline-guide", eyebrow: "Keeping the fit" },
      },
    },
  },
};

export const restorativeSlugs = Object.keys(restorativeServices);
