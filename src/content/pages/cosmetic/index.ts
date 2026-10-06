import type { ServiceExtras, ServicePageContent } from "@/content/service-page";
import { clearAligners } from "./clear-aligners";
import { dentalBonding } from "./dental-bonding";
import { nightGuards } from "./night-guards";
import { porcelainVeneers } from "./porcelain-veneers";
import { teethWhitening } from "./teeth-whitening";

/**
 * The 5 Cosmetic Dentistry treatment pages, keyed by URL slug. `extras` drives
 * the hero side card (facts from each page's own copy) and the bespoke section
 * designs (CosmeticDesigns.tsx; each design is used on one page only).
 */
export const cosmeticServices: Record<string, { content: ServicePageContent; extras: ServiceExtras }> = {
  "porcelain-veneers": {
    content: porcelainVeneers,
    extras: {
      icon: "sparkle",
      eyebrow: "Smile enhancement",
      label: "At a glance",
      facts: [
        { icon: "sparkle", title: "Ultra-thin porcelain", text: "Custom shells bonded to the front of your teeth" },
        { icon: "shield", title: "Stain resistant", text: "Resists coffee, tea and many foods" },
        { icon: "clock", title: "Well over a decade", text: "How long veneers can last with proper care" },
      ],
      related: [
        { label: "Dental bonding", href: "/cosmetic-dentistry/dental-bonding/" },
        { label: "Teeth whitening", href: "/cosmetic-dentistry/teeth-whitening/" },
      ],
      designs: {
        "what-veneers-can-fix-title": { design: "tooth-tiles", eyebrow: "What they fix" },
        "will-veneers-look-natural-title": { design: "veneer-light", eyebrow: "A natural look" },
        "porcelain-veneers-vs-dental-bonding-title": { design: "material-duel", eyebrow: "Compare" },
        "the-veneer-process-title": { design: "shell-stages", eyebrow: "The process" },
        "how-long-do-porcelain-veneers-last-title": { design: "decade-meter", eyebrow: "Longevity" },
      },
    },
  },
  "teeth-whitening": {
    content: teethWhitening,
    extras: {
      icon: "star",
      eyebrow: "Smile enhancement",
      label: "At a glance",
      facts: [
        { icon: "bolt", title: "In-office", text: "The fastest, most dramatic results" },
        { icon: "home", title: "Take-home", text: "Custom trays, whitening at your own pace" },
        { icon: "shield", title: "Dentist-supervised", text: "Gums protected and sensitivity monitored" },
      ],
      related: [
        { label: "Porcelain veneers", href: "/cosmetic-dentistry/porcelain-veneers/" },
        { label: "Dental bonding", href: "/cosmetic-dentistry/dental-bonding/" },
      ],
      designs: {
        "what-causes-tooth-discoloration-title": { design: "stain-sources", eyebrow: "Why teeth darken" },
        "whitening-options-in-office-and-take-home-title": { design: "whitening-options", eyebrow: "Your options" },
        "keeping-your-smile-bright-title": { design: "shade-tabs", eyebrow: "Aftercare" },
      },
    },
  },
  "dental-bonding": {
    content: dentalBonding,
    extras: {
      icon: "tooth",
      eyebrow: "Smile enhancement",
      label: "At a glance",
      facts: [
        { icon: "calendar", title: "Often one visit", text: "Many treatments are completed in one appointment" },
        { icon: "shield", title: "Conservative", text: "Little to no natural tooth structure removed" },
        { icon: "wallet", title: "Cost-effective", text: "Often more affordable than veneers or crowns" },
      ],
      related: [
        { label: "Porcelain veneers", href: "/cosmetic-dentistry/porcelain-veneers/" },
        { label: "Tooth-colored fillings", href: "/restorative-dentistry/dental-fillings/" },
      ],
      designs: {
        "what-dental-bonding-can-fix-title": { design: "chip-repair", eyebrow: "What it fixes" },
        "benefits-of-bonding-title": { design: "benefit-quad", eyebrow: "Why bonding" },
        "the-bonding-process-title": { design: "bond-steps", eyebrow: "The process" },
        "bonding-vs-veneers-title": { design: "mirror-table", eyebrow: "Compare" },
      },
    },
  },
  "clear-aligners": {
    content: clearAligners,
    extras: {
      icon: "smile",
      eyebrow: "Teeth straightening",
      label: "At a glance",
      facts: [
        { icon: "clock", title: "20 to 22 hours a day", text: "Remove only to eat, drink and clean" },
        { icon: "calendar", title: "About 9 to 15 months", text: "18 to 30 aligners for many patients" },
        { icon: "scan", title: "Digital 3D planning", text: "Scans create a precise model of your mouth" },
      ],
      related: [
        { label: "Teeth whitening", href: "/cosmetic-dentistry/teeth-whitening/" },
        { label: "Porcelain veneers", href: "/cosmetic-dentistry/porcelain-veneers/" },
      ],
      designs: {
        "how-clear-aligners-work-title": { design: "tray-series", eyebrow: "How it works" },
        "what-invisalign-can-treat-title": { design: "alignment-cases", eyebrow: "What it treats" },
        "clear-aligners-vs-braces-title": { design: "clear-table", eyebrow: "Compare" },
        "the-invisalign-treatment-process-title": { design: "aligner-roadmap", eyebrow: "The process" },
        "how-long-does-invisalign-take-title": { design: "range-stats", eyebrow: "Timeline" },
      },
    },
  },
  "night-guards": {
    content: nightGuards,
    extras: {
      icon: "shield",
      eyebrow: "Protection",
      label: "At a glance",
      facts: [
        { icon: "tooth", title: "Made to fit your bite", text: "From a digital scan or impression" },
        { icon: "heart", title: "Eases jaw strain", text: "Spreads grinding pressure more evenly" },
        { icon: "clock", title: "Lasts several years", text: "With proper care" },
      ],
      related: [
        { label: "Porcelain veneers", href: "/cosmetic-dentistry/porcelain-veneers/" },
        { label: "Dental crowns", href: "/restorative-dentistry/dental-crowns/" },
      ],
      designs: {
        "why-grinding-matters-title": { design: "force-compare", eyebrow: "Bruxism" },
        "signs-you-may-need-a-night-guard-title": { design: "night-signs", eyebrow: "Warning signs" },
        "custom-vs-store-bought-night-guards-title": { design: "guard-compare", eyebrow: "Compare" },
        "how-we-make-your-night-guard-title": { design: "guard-making", eyebrow: "The process" },
      },
    },
  },
};

export const cosmeticSlugs = Object.keys(cosmeticServices);
