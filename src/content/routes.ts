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
  r("/cosmetic-dentistry/", "Cosmetic Dentistry", "cosmetic"),
  r("/cosmetic-dentistry/porcelain-veneers/", "Porcelain Veneers", "cosmetic"),
  r("/cosmetic-dentistry/clear-aligners/", "Clear Aligners", "cosmetic"),
  r("/cosmetic-dentistry/teeth-whitening/", "Teeth Whitening", "cosmetic"),
  r("/cosmetic-dentistry/dental-bonding/", "Dental Bonding", "cosmetic"),
  r("/cosmetic-dentistry/night-guards/", "Night Guards", "cosmetic"),

  // Locations
  r("/areas-we-serve/", "Areas We Serve", "location"),
  r("/dentist-langhorne-pa/", "Langhorne", "location"),
  r("/dentist-fairless-hills-pa/", "Fairless Hills", "location"),
  r("/dentist-feasterville-pa/", "Feasterville", "location"),
  r("/dentist-trevose-pa/", "Trevose", "location"),
  r("/dentist-hulmeville-pa/", "Hulmeville", "location"),
  r("/dentist-parkland-pa/", "Parkland", "location"),
  r("/dentist-levittown-pa/", "Levittown", "location"),
  r("/dentist-bristol-pa/", "Bristol", "location"),
  r("/dentist-croydon-pa/", "Croydon", "location"),
  r("/dentist-penndel-pa/", "Penndel", "location"),
  r("/dentist-morrisville-pa/", "Morrisville", "location"),
  r("/dentist-yardley-pa/", "Yardley", "location"),
  r("/dentist-newtown-pa/", "Newtown", "location"),
  r("/dentist-cornwells-heights-pa/", "Cornwells Heights", "location"),
  r("/dentist-andalusia-pa/", "Andalusia", "location"),
  r("/dentist-oakford-pa/", "Oakford", "location"),
  r("/dentist-eddington-pa/", "Eddington", "location"),
  r("/dentist-huntingdon-valley-pa/", "Huntingdon Valley", "location"),
  r("/dentist-northeast-philadelphia/", "Northeast Philadelphia", "location"),
  r("/dentist-far-northeast-philadelphia/", "Far Northeast Philadelphia", "location"),
  r("/dentist-somerton-philadelphia/", "Somerton", "location"),
  r("/dentist-bustleton-philadelphia/", "Bustleton", "location"),
  r("/dentist-torresdale-philadelphia/", "Torresdale", "location"),
  r("/dentist-holmesburg-philadelphia/", "Holmesburg", "location"),
  r("/dentist-fox-chase-philadelphia/", "Fox Chase", "location"),

  // Service + location (/clear-aligners-langhorne-pa/ is on hold until Invisalign status is confirmed)
  r("/dental-implants-bucks-county/", "Dental Implants, Bucks County", "service-location"),
  r("/dental-implants-feasterville-pa/", "Dental Implants, Feasterville", "service-location"),
  r("/dental-implants-langhorne-pa/", "Dental Implants, Langhorne", "service-location"),
  r("/cosmetic-dentist-bucks-county/", "Cosmetic Dentist, Bucks County", "service-location"),
  r("/emergency-dentist-bucks-county/", "Emergency Dentist, Bucks County", "service-location"),
  r("/emergency-dentist-langhorne-pa/", "Emergency Dentist, Langhorne", "service-location"),

  // Content, legal, utility
  r("/blog/", "Blog", "content"),
  r("/disclaimer/", "Disclaimer", "legal"),
  r("/privacy-policy/", "Privacy Policy", "legal"),
  r("/hipaa-notice-of-privacy-practices/", "HIPAA Notice of Privacy Practices", "legal"),
  r("/accessibility/", "Accessibility", "legal"),
  r("/sitemap/", "Sitemap", "utility"),

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
