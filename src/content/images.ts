import type { StaticImageData } from "next/image";
import galleryCase1BeforeImg from "@/assets/images/gallery-case-1-before.jpg";
import galleryCase1AfterImg from "@/assets/images/gallery-case-1-after.jpg";
import galleryCase2BeforeImg from "@/assets/images/gallery-case-2-before.jpg";
import galleryCase2AfterImg from "@/assets/images/gallery-case-2-after.jpg";
import galleryCase3BeforeImg from "@/assets/images/gallery-case-3-before.jpg";
import galleryCase3AfterImg from "@/assets/images/gallery-case-3-after.jpg";
import aboutHeroImg from "@/assets/images/about-hero-dentist-exam.jpg";
import aboutTechnologyImg from "@/assets/images/about-technology-dental-microscope.jpg";
import doctorPortraitImg from "@/assets/images/dr-keyur-dudhat-portrait.jpg";
import homeBannerImg from "@/assets/images/home-hero-banner.jpg";
import homeBannerMobileImg from "@/assets/images/home-hero-banner-mobile.jpg";
import homeCareImg from "@/assets/images/home-welcome-team.jpg";
import homeHeroImg from "@/assets/images/home-hero-dental-consultation.jpg";
import homeTechnologyImg from "@/assets/images/home-technology-cbct-patient.jpg";

/**
 * Image registry. Every photo on the site is listed here with its source and licence,
 * so the record survives after the person who downloaded it moves on.
 *
 * Sourcing rules (agreed 2 Oct 2026): no AI-generated images. Generic photos come from
 * free stock (Unsplash/Pexels licence); key dental photos come from Magnific/Freepik
 * stock, downloaded only after the client approves each batch and its credit cost.
 *
 * Masters live in src/assets/images (cropped to their slot, max 2880px wide);
 * next/image serves resized AVIF/WebP from them.
 * `src: null` means a photo is chosen but not downloaded yet; the page then shows
 * a labelled placeholder in that slot.
 */

export type SiteImage = {
  src: StaticImageData | null;
  /** Optional art-directed crop for phones (portrait), served below 768px */
  srcMobile?: StaticImageData;
  alt: string;
  /** Placeholder label shown until the file exists */
  brief: string;
  /** CSS object-position for art-directed crops */
  position?: string;
  source: {
    provider: "magnific" | "unsplash" | "pexels" | "practice";
    id?: string;
    url?: string;
    author?: string;
    licence?: string;
    /** Credits listed on Magnific at download time */
    listedCredits?: number;
    /** Credits actually deducted (checked against the account balance) */
    creditsCharged?: number;
    downloaded?: string;
  };
};

export const images = {
  /** Home hero background: 7920×3360 original; web master 3200px + a 5:6 phone crop */
  homeBanner: {
    src: homeBannerImg,
    srcMobile: homeBannerMobileImg,
    alt: "A smiling patient talking with her dentist in a bright, modern dental treatment room",
    brief: "Wide banner: dentist and smiling patient, bright modern room, clear space on the left",
    position: "62% 50%",
    source: {
      provider: "magnific",
      id: "432172742",
      url: "https://www.magnific.com/premium-photo/dentist-consulting-patient-modern-dental-office-examination-room_432172742.htm",
      author: "yzfboy01",
      licence: "Freepik Premium",
      listedCredits: 150,
      creditsCharged: 0,
      downloaded: "2026-10-02",
    },
  },
  homeHero: {
    src: homeHeroImg,
    alt: "A dentist in blue scrubs talking with a patient in a bright, modern dental office",
    brief: "Consultation scene: dentist and patient talking, bright clinic",
    position: "50% 38%",
    source: {
      provider: "magnific",
      id: "396105675",
      url: "https://www.magnific.com/premium-photo/dental-consultation-with-patient-comfortable-clinic-room_396105675.htm",
      author: "dejansarec",
      licence: "Freepik Premium",
      listedCredits: 150,
      creditsCharged: 0,
      downloaded: "2026-10-02",
    },
  },
  /** Supplied by the client ("Welcome image.png", 2080×2320); master is a centred 4:5 crop */
  homeCare: {
    src: homeCareImg,
    alt: "A smiling dental team talking together around a table in a bright, modern office",
    brief: "Friendly dental team meeting in a bright office",
    position: "50% 40%",
    source: {
      provider: "practice",
      licence: "Supplied by the client",
      downloaded: "2026-10-02",
    },
  },
  /** Supplied by the client ("technolgoy.png", 1272×1292); bottom 1px row trimmed */
  homeTechnology: {
    src: homeTechnologyImg,
    alt: "A patient seated in a 3D cone beam CT scanner in a modern dental office",
    brief: "Patient positioned in a CBCT 3D scanner",
    position: "55% 45%",
    source: {
      provider: "practice",
      licence: "Supplied by the client",
      downloaded: "2026-10-02",
    },
  },
  /*
   * Smile gallery before/after cases: the practice's own patient photos from the
   * current site's gallery, saved by the client from the live site (500×260 each).
   */
  galleryCase1Before: {
    src: galleryCase1BeforeImg,
    alt: "Smile gallery case 1: a patient's smile before treatment at Amazing Smiles By Design",
    brief: "Case 1 before photo",
    source: {
      provider: "practice",
      url: "https://www.pbhshosting.com/wp-content/client-mu-plugins/rw-assets/_public/media/case-1-before_w500_h260.jpg",
      licence: "The practice's own patient photo, as published on its current site (500×260)",
      downloaded: "2026-10-02",
    },
  },
  galleryCase1After: {
    src: galleryCase1AfterImg,
    alt: "Smile gallery case 1: a patient's smile after treatment at Amazing Smiles By Design",
    brief: "Case 1 after photo",
    source: {
      provider: "practice",
      url: "https://www.pbhshosting.com/wp-content/client-mu-plugins/rw-assets/_public/media/case-1-after_w500_h260.jpg",
      licence: "The practice's own patient photo, as published on its current site (500×260)",
      downloaded: "2026-10-02",
    },
  },
  galleryCase2Before: {
    src: galleryCase2BeforeImg,
    alt: "Smile gallery case 2: a patient's smile before treatment at Amazing Smiles By Design",
    brief: "Case 2 before photo",
    source: {
      provider: "practice",
      url: "https://www.pbhshosting.com/wp-content/client-mu-plugins/rw-assets/_public/media/case-2-before_w500_h260.jpg",
      licence: "The practice's own patient photo, as published on its current site (500×260)",
      downloaded: "2026-10-02",
    },
  },
  galleryCase2After: {
    src: galleryCase2AfterImg,
    alt: "Smile gallery case 2: a patient's smile after treatment at Amazing Smiles By Design",
    brief: "Case 2 after photo",
    source: {
      provider: "practice",
      url: "https://www.pbhshosting.com/wp-content/client-mu-plugins/rw-assets/_public/media/case-2-after_w500_h260.jpg",
      licence: "The practice's own patient photo, as published on its current site (500×260)",
      downloaded: "2026-10-02",
    },
  },
  galleryCase3Before: {
    src: galleryCase3BeforeImg,
    alt: "Smile gallery case 3: a patient's smile before treatment at Amazing Smiles By Design",
    brief: "Case 3 before photo",
    source: {
      provider: "practice",
      url: "https://www.pbhshosting.com/wp-content/client-mu-plugins/rw-assets/_public/media/case-3-before_w500_h260.jpg",
      licence: "The practice's own patient photo, as published on its current site (500×260)",
      downloaded: "2026-10-02",
    },
  },
  galleryCase3After: {
    src: galleryCase3AfterImg,
    alt: "Smile gallery case 3: a patient's smile after treatment at Amazing Smiles By Design",
    brief: "Case 3 after photo",
    source: {
      provider: "practice",
      url: "https://www.pbhshosting.com/wp-content/client-mu-plugins/rw-assets/_public/media/case-3-after_w500_h260.jpg",
      licence: "The practice's own patient photo, as published on its current site (500×260)",
      downloaded: "2026-10-02",
    },
  },
  /** Supplied by the client ("Smiling Dental Professional Portrait.png"), cropped to 4:5 */
  doctorPortrait: {
    src: doctorPortraitImg,
    alt: "Dr. Keyur Dudhat, DMD, smiling in an Amazing Smiles By Design shirt",
    brief: "Portrait of Dr. Keyur Dudhat",
    position: "50% 30%",
    source: {
      provider: "practice",
      licence: "Supplied by the client",
      downloaded: "2026-10-02",
    },
  },
  /**
   * About Us hero. Supplied by the client (downloaded file
   * "middle-eastern-male-dentist-examining-patient-dental-office.jpg", 6720×4480,
   * 16.5 MB); web master resized to 2400px wide (0.5 MB).
   */
  aboutHero: {
    src: aboutHeroImg,
    alt: "A dentist in blue scrubs examining a patient in a bright dental treatment room",
    brief: "Dentist examining a patient in a bright treatment room",
    position: "64% 45%",
    source: {
      provider: "practice",
      licence: "Supplied by the client",
      downloaded: "2026-10-05",
    },
  },
  /**
   * About Us "Technology We Use". Supplied by the client (downloaded file
   * "dentist-doctor-treating-root-canals-using-microscope-dentistry-office.jpg",
   * 2832×4256, 5.8 MB); web master resized to 1800px wide (0.7 MB).
   */
  aboutTechnology: {
    src: aboutTechnologyImg,
    alt: "A dentist looking through a dental microscope while treating a patient",
    brief: "Dentist using a dental microscope",
    position: "50% 35%",
    source: {
      provider: "practice",
      licence: "Supplied by the client",
      downloaded: "2026-10-05",
    },
  },
} satisfies Record<string, SiteImage>;

/** Before/after pairs shown in the smile gallery slider, in order */
export const galleryCases = [
  { label: "Case 1", before: images.galleryCase1Before, after: images.galleryCase1After },
  { label: "Case 2", before: images.galleryCase2Before, after: images.galleryCase2After },
  { label: "Case 3", before: images.galleryCase3Before, after: images.galleryCase3After },
];
