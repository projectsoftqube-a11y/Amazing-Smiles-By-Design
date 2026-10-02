import type { StaticImageData } from "next/image";

/**
 * Image registry. Every photo on the site is listed here with its source and licence,
 * so the record survives after the person who downloaded it moves on.
 *
 * Sourcing rules (agreed 2 Oct 2026): no AI-generated images. Generic photos come from
 * free stock (Unsplash/Pexels licence); key dental photos come from Magnific/Freepik
 * stock, downloaded only after the client approves each batch and its credit cost.
 *
 * `src: null` means the photo is chosen but not downloaded yet; the page shows a
 * labelled placeholder in that slot instead.
 */

export type SiteImage = {
  src: StaticImageData | null;
  alt: string;
  /** Placeholder label shown until the file exists */
  brief: string;
  source: {
    provider: "magnific" | "unsplash" | "pexels" | "practice";
    id?: string;
    title?: string;
    licence?: string;
    credits?: number;
  };
};

export const images = {
  homeHero: {
    src: null,
    alt: "A dentist talking with a patient in a bright, modern dental office",
    brief: "Consultation scene: dentist and patient talking, bright clinic",
    source: {
      provider: "magnific",
      id: "396105675",
      title: "Dental consultation with patient in comfortable clinic room",
      licence: "Freepik Premium",
      credits: 150,
    },
  },
  homeCare: {
    src: null,
    alt: "A young patient wearing headphones and smiling in a dental chair",
    brief: "Relaxed patient with headphones in the dental chair",
    source: {
      provider: "magnific",
      id: "379977279",
      title: "Smiling girl wearing headphones at a dental clinic",
      licence: "Freepik Premium",
      credits: 150,
    },
  },
  homeTechnology: {
    src: null,
    alt: "A patient standing in a 3D cone beam CT scanner while a dentist checks the scan on a tablet",
    brief: "Patient in a CBCT 3D scanner, dentist with tablet",
    source: {
      provider: "magnific",
      id: "18893192",
      title: "Young man in a dental 3D scanner",
      licence: "Freepik (free licence)",
      credits: 40,
    },
  },
} satisfies Record<string, SiteImage>;
