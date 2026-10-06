/**
 * Every URL from the SEO sitemap (Keyword Map & Sitemap, corrected).
 * Flip `published` to true when a page is built: it is then listed in sitemap.xml,
 * and links that use `linkTo()` stop falling back.
 */

export type RouteGroup =
  | "core"
  | "patient-info"
  | "general"
  | "restorative"
  | "cosmetic"
  | "location"
  | "service-location"
  | "content"
  | "legal"
  | "utility"
  | "paid";

export type RouteEntry = {
  path: string;
  /** Short label for navigation and link lists */
  label: string;
  group: RouteGroup;
  published: boolean;
  /** Paid landing pages are noindex and stay out of sitemap.xml */
  noindex?: boolean;
};

const r = (path: string, label: string, group: RouteGroup, published = false, noindex = false): RouteEntry => ({
  path,
  label,
  group,
  published,
  ...(noindex ? { noindex } : {}),
});

export const routes: RouteEntry[] = [
  // Core
  r("/", "Home", "core", true),
  r("/about-us/", "About Us", "core", true),
  r("/about-us/dr-keyur-dudhat/", "Dr. Keyur Dudhat", "core", true),
  r("/about-us/patient-reviews/", "Patient Reviews", "core", true),
  r("/smile-gallery/", "Smile Gallery", "core", true),
  r("/specials/", "Specials & Membership Plans", "core", true),
  r("/contact-us/", "Contact Us", "core", true),

  // Patient information
  r("/patient-information/", "Patient Information", "patient-info", true),
  r("/patient-information/new-patients/", "New Patients", "patient-info", true),
  r("/patient-information/scheduling/", "Scheduling", "patient-info", true),
  r("/patient-information/emergency-scheduling/", "Emergency Scheduling", "patient-info", true),
  r("/patient-information/insurance-payment-options/", "Insurance & Payment", "patient-info", true),
  r("/patient-information/financing-options/", "Financing Options", "patient-info", true),
  r("/patient-information/advanced-technology/", "Advanced Technology", "patient-info", true),
  r("/patient-information/why-choose-us/", "Why Choose Us", "patient-info", true),
  r("/patient-information/patient-education/", "Patient Education", "patient-info", true),

  // General dentistry
  r("/general-dentistry/", "General Dentistry", "general", true),
  r("/general-dentistry/dental-checkups-x-rays/", "Dental Checkups & X-Rays", "general", true),
  r("/general-dentistry/child-dentistry/", "Child Dentistry", "general", true),
  r("/general-dentistry/dental-sealants/", "Dental Sealants", "general", true),
  r("/general-dentistry/scaling-and-root-planing/", "Scaling & Root Planing", "general", true),
  r("/general-dentistry/periodontal-maintenance/", "Periodontal Maintenance", "general", true),
  r("/general-dentistry/arestin/", "Arestin", "general", true),
  r("/general-dentistry/oral-cancer-screening/", "Oral Cancer Screening", "general", true),
  r("/general-dentistry/tooth-extraction/", "Tooth Extraction", "general", true),
  r("/general-dentistry/emergency-dentistry/", "Emergency Dentistry", "general", true),
  r("/general-dentistry/oral-hygiene/", "Oral Hygiene", "general", true),

  // Restorative
  r("/restorative-dentistry/", "Restorative Dentistry", "restorative", true),
  r("/restorative-dentistry/dental-implants/", "Dental Implants", "restorative", true),
  r("/restorative-dentistry/dental-crowns/", "Dental Crowns", "restorative", true),
  r("/restorative-dentistry/dental-bridges/", "Dental Bridges", "restorative", true),
  r("/restorative-dentistry/dental-fillings/", "Dental Fillings", "restorative", true),
  r("/restorative-dentistry/non-surgical-root-canal/", "Non-Surgical Root Canal", "restorative", true),
  r("/restorative-dentistry/inlays-onlays/", "Inlays & Onlays", "restorative", true),
  r("/restorative-dentistry/dentures/", "Dentures", "restorative", true),

  // Cosmetic
  r("/cosmetic-dentistry/", "Cosmetic Dentistry", "cosmetic", true),
  r("/cosmetic-dentistry/porcelain-veneers/", "Porcelain Veneers", "cosmetic", true),
  r("/cosmetic-dentistry/clear-aligners/", "Clear Aligners", "cosmetic", true),
  r("/cosmetic-dentistry/teeth-whitening/", "Teeth Whitening", "cosmetic", true),
  r("/cosmetic-dentistry/dental-bonding/", "Dental Bonding", "cosmetic", true),
  r("/cosmetic-dentistry/night-guards/", "Night Guards", "cosmetic", true),

  // Locations
  r("/areas-we-serve/", "Areas We Serve", "location", true),
  r("/dentist-langhorne-pa/", "Langhorne", "location", true),
  r("/dentist-fairless-hills-pa/", "Fairless Hills", "location", true),
  r("/dentist-feasterville-pa/", "Feasterville", "location", true),
  r("/dentist-trevose-pa/", "Trevose", "location", true),
  r("/dentist-hulmeville-pa/", "Hulmeville", "location", true),
  r("/dentist-parkland-pa/", "Parkland", "location", true),
  r("/dentist-levittown-pa/", "Levittown", "location", true),
  r("/dentist-bristol-pa/", "Bristol", "location", true),
  r("/dentist-croydon-pa/", "Croydon", "location", true),
  r("/dentist-penndel-pa/", "Penndel", "location", true),
  r("/dentist-morrisville-pa/", "Morrisville", "location", true),
  r("/dentist-yardley-pa/", "Yardley", "location", true),
  r("/dentist-newtown-pa/", "Newtown", "location", true),
  r("/dentist-cornwells-heights-pa/", "Cornwells Heights", "location", true),
  r("/dentist-andalusia-pa/", "Andalusia", "location", true),
  r("/dentist-oakford-pa/", "Oakford", "location", true),
  r("/dentist-eddington-pa/", "Eddington", "location", true),
  r("/dentist-huntingdon-valley-pa/", "Huntingdon Valley", "location", true),
  r("/dentist-northeast-philadelphia/", "Northeast Philadelphia", "location", true),
  r("/dentist-far-northeast-philadelphia/", "Far Northeast Philadelphia", "location", true),
  r("/dentist-somerton-philadelphia/", "Somerton", "location", true),
  r("/dentist-bustleton-philadelphia/", "Bustleton", "location", true),
  r("/dentist-torresdale-philadelphia/", "Torresdale", "location", true),
  r("/dentist-holmesburg-philadelphia/", "Holmesburg", "location", true),
  r("/dentist-fox-chase-philadelphia/", "Fox Chase", "location", true),

  // Service + location. The Invisalign page was conditional (handoff); the practice confirmed
  // it offers Invisalign (6 Oct 2026).
  r("/dental-implants-bucks-county/", "Dental Implants, Bucks County", "service-location", true),
  r("/dental-implants-feasterville-pa/", "Dental Implants, Feasterville", "service-location", true),
  r("/dental-implants-langhorne-pa/", "Dental Implants, Langhorne", "service-location", true),
  r("/cosmetic-dentist-bucks-county/", "Cosmetic Dentist, Bucks County", "service-location", true),
  r("/emergency-dentist-bucks-county/", "Emergency Dentist, Bucks County", "service-location", true),
  r("/emergency-dentist-langhorne-pa/", "Emergency Dentist, Langhorne", "service-location", true),
  r("/clear-aligners-langhorne-pa/", "Clear Aligners, Langhorne", "service-location", true),

  // Content, legal, utility
  // Live but noindex (and out of sitemap.xml) until the first 3 posts are published
  r("/blog/", "Blog", "content", true, true),
  // Legal (09). Live on staging; the [CONFIRM] items show as "to confirm" boxes and must be
  // filled in and approved by the practice before the real domain points here (handoff).
  r("/disclaimer/", "Disclaimer", "legal", true),
  r("/privacy-policy/", "Privacy Policy", "legal", true),
  r("/hipaa-notice-of-privacy-practices/", "HIPAA Notice of Privacy Practices", "legal", true),
  r("/accessibility/", "Accessibility", "legal", true),
  r("/sitemap/", "Sitemap", "utility", true),
  // After a form is sent: noindex, so it stays out of sitemap.xml and the HTML sitemap
  r("/thank-you/", "Thank You", "utility", true, true),

  // Paid traffic (noindex)
  r("/lp/dental-implants/", "Dental Implants (paid)", "paid", false, true),
  r("/lp/emergency-dentist/", "Emergency Dentist (paid)", "paid", false, true),
  r("/lp/clear-aligners/", "Clear Aligners (paid)", "paid", false, true),
  r("/lp/membership-plans/", "Membership Plans (paid)", "paid", false, true),
];

const byPath = new Map(routes.map((route) => [route.path, route]));

export function getRoute(path: string): RouteEntry | undefined {
  return byPath.get(path);
}

/**
 * Href for an internal link. Unbuilt location pages fall back to /areas-we-serve/
 * (SEO handoff: avoid linking town names to 404s). Every other path is returned
 * unchanged because those pages are built in the same release.
 */
export function linkTo(path: string): string {
  const route = byPath.get(path);
  if (route?.group === "location" && !route.published && path !== "/areas-we-serve/") {
    return "/areas-we-serve/";
  }
  return path;
}

export const routesByGroup = (group: RouteGroup) => routes.filter((route) => route.group === group);
