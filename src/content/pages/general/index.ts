import type { ServiceExtras, ServicePageContent } from "@/content/service-page";
import { arestin } from "./arestin";
import { childDentistry } from "./child-dentistry";
import { dentalCheckupsXRays } from "./dental-checkups-x-rays";
import { dentalSealants } from "./dental-sealants";
import { emergencyDentistry } from "./emergency-dentistry";
import { oralCancerScreening } from "./oral-cancer-screening";
import { oralHygiene } from "./oral-hygiene";
import { periodontalMaintenance } from "./periodontal-maintenance";
import { scalingAndRootPlaning } from "./scaling-and-root-planing";
import { toothExtraction } from "./tooth-extraction";

/**
 * The 10 General Dentistry treatment pages, keyed by URL slug. `extras` drives the
 * hero side card only; every fact in it is taken from that page's own copy.
 */
export const generalServices: Record<string, { content: ServicePageContent; extras: ServiceExtras }> = {
  "dental-checkups-x-rays": {
    content: dentalCheckupsXRays,
    extras: {
      icon: "sparkle",
      eyebrow: "Preventive care",
      label: "At a glance",
      facts: [
        { icon: "calendar", title: "Every six months", text: "A dental exam and cleaning for most patients" },
        { icon: "xray", title: "Digital X-rays", text: "Typically once a year, with less radiation" },
        { icon: "tag", title: "$269 a year", text: "Regular Membership Plan for patients without insurance" },
      ],
      related: [
        { label: "Oral cancer screening", href: "/general-dentistry/oral-cancer-screening/" },
        { label: "Oral hygiene", href: "/general-dentistry/oral-hygiene/" },
      ],
      designs: {
        "what-happens-at-a-dental-exam-and-cleaning-title": { design: "exam-bento", eyebrow: "At your checkup" },
      },
    },
  },
  "oral-cancer-screening": {
    content: oralCancerScreening,
    extras: {
      icon: "search",
      eyebrow: "Preventive care",
      label: "At a glance",
      facts: [
        { icon: "clock", title: "Just a few minutes", text: "Part of your routine checkup" },
        { icon: "check", title: "Quick & painless", text: "No special preparation needed" },
        { icon: "face", title: "Lips to throat", text: "Tongue, palate, cheeks, neck and jaw are checked" },
      ],
      related: [
        { label: "Dental checkups & X-rays", href: "/general-dentistry/dental-checkups-x-rays/" },
        { label: "Oral hygiene", href: "/general-dentistry/oral-hygiene/" },
      ],
      designs: {
        "why-oral-cancer-screenings-matter-title": { design: "signs-grid", eyebrow: "Why it matters" },
        "what-happens-during-an-oral-cancer-screening-title": { design: "scan-panel", eyebrow: "During your exam" },
        "symptoms-you-should-have-checked-title": { design: "symptom-cloud", eyebrow: "When to see us" },
        "reducing-your-risk-title": { design: "risk-statement", eyebrow: "Prevention" },
      },
    },
  },
  "oral-hygiene": {
    content: oralHygiene,
    extras: {
      icon: "smile",
      eyebrow: "Preventive care",
      label: "Daily routine",
      facts: [
        { icon: "sparkle", title: "Brush twice a day", text: "Soft-bristled brush and fluoride toothpaste" },
        { icon: "check", title: "Floss daily", text: "Where your toothbrush can't reach" },
        { icon: "calendar", title: "Professional cleanings", text: "Remove the tartar you can't remove yourself" },
      ],
      related: [
        { label: "Dental checkups & X-rays", href: "/general-dentistry/dental-checkups-x-rays/" },
        { label: "Children's dentistry", href: "/general-dentistry/child-dentistry/" },
      ],
      designs: {
        "flossing-cleaning-where-your-toothbrush-can-t-reach-title": { design: "floss-thread", eyebrow: "Daily flossing" },
        "choosing-oral-hygiene-products-title": { design: "routine-kit", eyebrow: "Products" },
      },
    },
  },
  "scaling-and-root-planing": {
    content: scalingAndRootPlaning,
    extras: {
      icon: "tooth",
      eyebrow: "Gum health",
      label: "At a glance",
      facts: [
        { icon: "shield", title: "Below the gum line", text: "Treats the areas where gum disease develops" },
        { icon: "calendar", title: "One or more visits", text: "Usually done in sections of the mouth" },
        { icon: "clock", title: "Every 3–4 months after", text: "Periodontal maintenance keeps gums healthy" },
      ],
      related: [
        { label: "Periodontal maintenance", href: "/general-dentistry/periodontal-maintenance/" },
        { label: "Arestin", href: "/general-dentistry/arestin/" },
      ],
      designs: {
        "signs-of-gum-disease-title": { design: "probe-gauge", eyebrow: "Warning signs" },
        "what-scaling-and-root-planing-involves-title": { design: "two-phases", eyebrow: "The treatment" },
        "what-to-expect-during-treatment-title": { design: "process-row", eyebrow: "Step by step" },
        "deep-cleaning-vs-regular-cleaning-title": { design: "versus", eyebrow: "How it differs" },
        "recovery-and-aftercare-title": { design: "care-plan", eyebrow: "Healing" },
        "cost-of-a-deep-cleaning-in-bensalem-title": { design: "cost-split", eyebrow: "Cost" },
      },
    },
  },
  "periodontal-maintenance": {
    content: periodontalMaintenance,
    extras: {
      icon: "calendar",
      eyebrow: "Gum health",
      label: "At a glance",
      facts: [
        { icon: "clock", title: "Every 3–4 months", text: "For many patients after a deep cleaning" },
        { icon: "shield", title: "Keeps gum disease in check", text: "Ongoing care after scaling and root planing" },
        { icon: "tag", title: "$450 a year", text: "Perio Maintenance Plan for patients without insurance" },
      ],
      related: [
        { label: "Scaling & root planing", href: "/general-dentistry/scaling-and-root-planing/" },
        { label: "Arestin", href: "/general-dentistry/arestin/" },
      ],
      designs: {
        "how-often-you-need-periodontal-maintenance-title": { design: "visit-calendar", eyebrow: "Your schedule" },
      },
    },
  },
  arestin: {
    content: arestin,
    extras: {
      icon: "shield",
      eyebrow: "Gum health",
      label: "At a glance",
      facts: [
        { icon: "sparkle", title: "Minocycline microspheres", text: "An antibiotic placed in infected gum pockets" },
        { icon: "tooth", title: "After a deep cleaning", text: "Usually placed after scaling and root planing" },
        { icon: "check", title: "Quick & comfortable", text: "Placed during your visit" },
      ],
      related: [
        { label: "Scaling & root planing", href: "/general-dentistry/scaling-and-root-planing/" },
        { label: "Periodontal maintenance", href: "/general-dentistry/periodontal-maintenance/" },
      ],
      designs: {
        "what-is-arestin-title": { design: "spec-card", eyebrow: "The medicine" },
        "how-arestin-works-with-a-deep-cleaning-title": { design: "flow-benefits", eyebrow: "How it works" },
        "what-to-expect-title": { design: "during-after", eyebrow: "Your visit" },
        "is-arestin-right-for-you-title": { design: "spotlight", eyebrow: "Is it for you?" },
      },
    },
  },
  "child-dentistry": {
    content: childDentistry,
    extras: {
      icon: "family",
      eyebrow: "Children's care",
      label: "For your child",
      facts: [
        { icon: "calendar", title: "First visit after age one", text: "Just after your child's first birthday" },
        { icon: "shield", title: "Fluoride & sealants", text: "Protection for growing teeth" },
        { icon: "tag", title: "$212 a year", text: "Child Membership Plan, ages 13 and younger" },
      ],
      related: [
        { label: "Dental sealants", href: "/general-dentistry/dental-sealants/" },
        { label: "Oral hygiene", href: "/general-dentistry/oral-hygiene/" },
      ],
      designs: {
        "when-should-a-child-first-see-a-dentist-title": { design: "milestone", eyebrow: "First visit" },
        "preparing-your-child-for-the-dentist-title": { design: "tip-tiles", eyebrow: "Getting ready" },
        "children-s-dental-exams-cleanings-fluoride-and-sealants-title": { design: "clipboard", eyebrow: "Every visit" },
        "why-children-get-cavities-title": { design: "cause-chain", eyebrow: "Cavity prevention" },
      },
    },
  },
  "dental-sealants": {
    content: dentalSealants,
    extras: {
      icon: "shield",
      eyebrow: "Children's care",
      label: "At a glance",
      facts: [
        { icon: "tooth", title: "Back teeth", text: "Molars and premolars with deep grooves" },
        { icon: "check", title: "No drilling", text: "Usually quick to apply" },
        { icon: "family", title: "Mostly for kids", text: "Back teeth are prone to cavities as they come in" },
      ],
      related: [
        { label: "Children's dentistry", href: "/general-dentistry/child-dentistry/" },
        { label: "Oral hygiene", href: "/general-dentistry/oral-hygiene/" },
      ],
    },
  },
  "tooth-extraction": {
    content: toothExtraction,
    extras: {
      icon: "tooth",
      eyebrow: "Urgent care",
      label: "At a glance",
      facts: [
        { icon: "shield", title: "Local anesthesia", text: "The tooth, gum and nearby bone are numbed" },
        { icon: "clock", title: "A couple of days", text: "Mild discomfort and swelling usually improve" },
        { icon: "tooth", title: "Replacement options", text: "Implants, bridges or dentures" },
      ],
      related: [
        { label: "Emergency dentistry", href: "/general-dentistry/emergency-dentistry/" },
        { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" },
      ],
    },
  },
  "emergency-dentistry": {
    content: emergencyDentistry,
    extras: {
      icon: "alert",
      eyebrow: "Urgent care",
      label: "In pain?",
      facts: [
        { icon: "calendar", title: "Same-day appointments", text: "Whenever possible" },
        { icon: "tag", title: "$59 emergency visit", text: "New patients only, with the necessary exam and X-rays" },
        { icon: "family", title: "New patients welcome", text: "You don't need to be an existing patient" },
      ],
      related: [
        { label: "Emergency scheduling", href: "/patient-information/emergency-scheduling/" },
        { label: "Tooth extraction", href: "/general-dentistry/tooth-extraction/" },
      ],
    },
  },
};

export const generalSlugs = Object.keys(generalServices);
