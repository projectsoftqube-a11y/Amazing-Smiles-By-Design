import type { RouteGroup } from "@/content/routes";

/**
 * HTML sitemap copy, verbatim from docs/seo-content/10 Utility/01 HTML Sitemap/HTML Sitemap/02 Content.md
 * (Final v1). Group headings use "&" (client rule). The page merges these labels with the
 * route list, so pages published later appear automatically (handoff).
 */

export const sitemapMeta = {
  "path": "/sitemap/",
  "title": "Sitemap | Amazing Smiles By Design, Bensalem PA",
  "description": "A list of every page on the Amazing Smiles By Design website: services, patient information, areas we serve and more. Bensalem, PA dentist."
};

export const sitemapBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "Sitemap", path: "/sitemap/" },
];

export const sitemapHero = {
  "title": {
    "lead": "",
    "accent": "Sitemap"
  },
  "intro": "Find any page on the Amazing Smiles By Design website. Need help? Call or text (215) 639-5331."
};

export type SitemapGroup = { id: string; title: string; group: RouteGroup; links: { label: string; path: string }[] };

export const sitemapGroups: SitemapGroup[] = [
  {
    "id": "main-pages-title",
    "title": "Main Pages",
    "group": "core",
    "links": [
      {
        "label": "Home",
        "path": "/"
      },
      {
        "label": "About Us",
        "path": "/about-us/"
      },
      {
        "label": "Dr. Keyur Dudhat",
        "path": "/about-us/dr-keyur-dudhat/"
      },
      {
        "label": "Patient Reviews",
        "path": "/about-us/patient-reviews/"
      },
      {
        "label": "Specials & Membership Plans",
        "path": "/specials/"
      },
      {
        "label": "Contact Us",
        "path": "/contact-us/"
      },
      {
        "label": "Smile Gallery",
        "path": "/smile-gallery/"
      }
    ]
  },
  {
    "id": "patient-information-title",
    "title": "Patient Information",
    "group": "patient-info",
    "links": [
      {
        "label": "Patient Information",
        "path": "/patient-information/"
      },
      {
        "label": "Financing Options",
        "path": "/patient-information/financing-options/"
      },
      {
        "label": "Insurance & Payment",
        "path": "/patient-information/insurance-payment-options/"
      },
      {
        "label": "New Patients",
        "path": "/patient-information/new-patients/"
      },
      {
        "label": "Emergency Scheduling",
        "path": "/patient-information/emergency-scheduling/"
      },
      {
        "label": "Scheduling",
        "path": "/patient-information/scheduling/"
      },
      {
        "label": "Advanced Technology",
        "path": "/patient-information/advanced-technology/"
      },
      {
        "label": "Why Choose Us",
        "path": "/patient-information/why-choose-us/"
      },
      {
        "label": "Patient Education",
        "path": "/patient-information/patient-education/"
      }
    ]
  },
  {
    "id": "general-dentistry-title",
    "title": "General Dentistry",
    "group": "general",
    "links": [
      {
        "label": "General Dentistry",
        "path": "/general-dentistry/"
      },
      {
        "label": "Dental Checkups & X-Rays",
        "path": "/general-dentistry/dental-checkups-x-rays/"
      },
      {
        "label": "Child Dentistry",
        "path": "/general-dentistry/child-dentistry/"
      },
      {
        "label": "Emergency Dentistry",
        "path": "/general-dentistry/emergency-dentistry/"
      },
      {
        "label": "Tooth Extraction",
        "path": "/general-dentistry/tooth-extraction/"
      },
      {
        "label": "Dental Sealants",
        "path": "/general-dentistry/dental-sealants/"
      },
      {
        "label": "Periodontal Maintenance",
        "path": "/general-dentistry/periodontal-maintenance/"
      },
      {
        "label": "Scaling & Root Planing",
        "path": "/general-dentistry/scaling-and-root-planing/"
      },
      {
        "label": "Oral Cancer Screening",
        "path": "/general-dentistry/oral-cancer-screening/"
      },
      {
        "label": "Oral Hygiene",
        "path": "/general-dentistry/oral-hygiene/"
      },
      {
        "label": "Arestin",
        "path": "/general-dentistry/arestin/"
      }
    ]
  },
  {
    "id": "restorative-dentistry-title",
    "title": "Restorative Dentistry",
    "group": "restorative",
    "links": [
      {
        "label": "Restorative Dentistry",
        "path": "/restorative-dentistry/"
      },
      {
        "label": "Dental Crowns",
        "path": "/restorative-dentistry/dental-crowns/"
      },
      {
        "label": "Non-Surgical Root Canal",
        "path": "/restorative-dentistry/non-surgical-root-canal/"
      },
      {
        "label": "Dental Implants",
        "path": "/restorative-dentistry/dental-implants/"
      },
      {
        "label": "Dentures",
        "path": "/restorative-dentistry/dentures/"
      },
      {
        "label": "Dental Fillings",
        "path": "/restorative-dentistry/dental-fillings/"
      },
      {
        "label": "Inlays & Onlays",
        "path": "/restorative-dentistry/inlays-onlays/"
      },
      {
        "label": "Dental Bridges",
        "path": "/restorative-dentistry/dental-bridges/"
      }
    ]
  },
  {
    "id": "cosmetic-dentistry-title",
    "title": "Cosmetic Dentistry",
    "group": "cosmetic",
    "links": [
      {
        "label": "Cosmetic Dentistry",
        "path": "/cosmetic-dentistry/"
      },
      {
        "label": "Porcelain Veneers",
        "path": "/cosmetic-dentistry/porcelain-veneers/"
      },
      {
        "label": "Teeth Whitening",
        "path": "/cosmetic-dentistry/teeth-whitening/"
      },
      {
        "label": "Clear Aligners",
        "path": "/cosmetic-dentistry/clear-aligners/"
      },
      {
        "label": "Dental Bonding",
        "path": "/cosmetic-dentistry/dental-bonding/"
      },
      {
        "label": "Night Guards",
        "path": "/cosmetic-dentistry/night-guards/"
      }
    ]
  },
  {
    "id": "areas-we-serve-title",
    "title": "Areas We Serve",
    "group": "location",
    "links": [
      {
        "label": "Areas We Serve",
        "path": "/areas-we-serve/"
      },
      {
        "label": "Dentist Near Andalusia, PA",
        "path": "/dentist-andalusia-pa/"
      },
      {
        "label": "Dentist Near Bristol, PA",
        "path": "/dentist-bristol-pa/"
      },
      {
        "label": "Dentist Near Bustleton, Philadelphia",
        "path": "/dentist-bustleton-philadelphia/"
      },
      {
        "label": "Dentist Near Cornwells Heights, PA",
        "path": "/dentist-cornwells-heights-pa/"
      },
      {
        "label": "Dentist Near Croydon, PA",
        "path": "/dentist-croydon-pa/"
      },
      {
        "label": "Dentist Near Eddington, PA",
        "path": "/dentist-eddington-pa/"
      },
      {
        "label": "Dentist Near Fairless Hills, PA",
        "path": "/dentist-fairless-hills-pa/"
      },
      {
        "label": "Dentist Near Far Northeast Philadelphia",
        "path": "/dentist-far-northeast-philadelphia/"
      },
      {
        "label": "Dentist Near Feasterville, PA",
        "path": "/dentist-feasterville-pa/"
      },
      {
        "label": "Dentist Near Fox Chase, Philadelphia",
        "path": "/dentist-fox-chase-philadelphia/"
      },
      {
        "label": "Dentist Near Holmesburg, Philadelphia",
        "path": "/dentist-holmesburg-philadelphia/"
      },
      {
        "label": "Dentist Near Hulmeville, PA",
        "path": "/dentist-hulmeville-pa/"
      },
      {
        "label": "Dentist Near Huntingdon Valley, PA",
        "path": "/dentist-huntingdon-valley-pa/"
      },
      {
        "label": "Dentist Near Langhorne, PA",
        "path": "/dentist-langhorne-pa/"
      },
      {
        "label": "Dentist Near Levittown, PA",
        "path": "/dentist-levittown-pa/"
      },
      {
        "label": "Dentist Near Morrisville, PA",
        "path": "/dentist-morrisville-pa/"
      },
      {
        "label": "Dentist Near Newtown, PA",
        "path": "/dentist-newtown-pa/"
      },
      {
        "label": "Dentist Near Northeast Philadelphia",
        "path": "/dentist-northeast-philadelphia/"
      },
      {
        "label": "Dentist Near Oakford, PA",
        "path": "/dentist-oakford-pa/"
      },
      {
        "label": "Dentist Near Parkland, PA",
        "path": "/dentist-parkland-pa/"
      },
      {
        "label": "Dentist Near Penndel, PA",
        "path": "/dentist-penndel-pa/"
      },
      {
        "label": "Dentist Near Somerton, Philadelphia",
        "path": "/dentist-somerton-philadelphia/"
      },
      {
        "label": "Dentist Near Torresdale, Philadelphia",
        "path": "/dentist-torresdale-philadelphia/"
      },
      {
        "label": "Dentist Near Trevose, PA",
        "path": "/dentist-trevose-pa/"
      },
      {
        "label": "Dentist Near Yardley, PA",
        "path": "/dentist-yardley-pa/"
      }
    ]
  },
  {
    "id": "services-by-area-title",
    "title": "Services by Area",
    "group": "service-location",
    "links": [
      {
        "label": "Dental Implants, Bucks County",
        "path": "/dental-implants-bucks-county/"
      },
      {
        "label": "Dental Implants, Feasterville",
        "path": "/dental-implants-feasterville-pa/"
      },
      {
        "label": "Dental Implants, Langhorne",
        "path": "/dental-implants-langhorne-pa/"
      },
      {
        "label": "Cosmetic Dentist, Bucks County",
        "path": "/cosmetic-dentist-bucks-county/"
      },
      {
        "label": "Emergency Dentist, Bucks County",
        "path": "/emergency-dentist-bucks-county/"
      },
      {
        "label": "Emergency Dentist, Langhorne",
        "path": "/emergency-dentist-langhorne-pa/"
      },
      {
        "label": "Clear Aligners / Invisalign, Langhorne",
        "path": "/clear-aligners-langhorne-pa/"
      }
    ]
  },
  {
    "id": "blog-title",
    "title": "Blog",
    "group": "content",
    "links": [
      {
        "label": "Blog",
        "path": "/blog/"
      }
    ]
  },
  {
    "id": "legal-and-accessibility-title",
    "title": "Legal & Accessibility",
    "group": "legal",
    "links": [
      {
        "label": "Accessibility Statement",
        "path": "/accessibility/"
      },
      {
        "label": "Disclaimer",
        "path": "/disclaimer/"
      },
      {
        "label": "HIPAA Notice of Privacy Practices",
        "path": "/hipaa-notice-of-privacy-practices/"
      },
      {
        "label": "Privacy Policy",
        "path": "/privacy-policy/"
      }
    ]
  }
];

export const sitemapNap = "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020 · (215) 639-5331";
