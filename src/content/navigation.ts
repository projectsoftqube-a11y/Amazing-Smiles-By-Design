import { routes } from "./routes";
import { serviceHubs } from "./services";

export type NavLink = { label: string; href: string };

export type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "services"; label: string }
  | { kind: "group"; label: string; href: string; links: NavLink[] };

/** Primary navigation. "Services" renders the three hubs from services.ts as a mega menu. */
export const mainNav: NavItem[] = [
  { kind: "services", label: "Services" },
  {
    kind: "group",
    label: "Patient Info",
    href: "/patient-information/",
    links: [
      // The hub itself first (the top-level label only opens the dropdown), as About does
      { label: "Patient Information", href: "/patient-information/" },
      { label: "New Patients", href: "/patient-information/new-patients/" },
      { label: "Scheduling", href: "/patient-information/scheduling/" },
      { label: "Emergency Scheduling", href: "/patient-information/emergency-scheduling/" },
      { label: "Insurance & Payment", href: "/patient-information/insurance-payment-options/" },
      { label: "Financing Options", href: "/patient-information/financing-options/" },
      { label: "Advanced Technology", href: "/patient-information/advanced-technology/" },
      { label: "Why Choose Us", href: "/patient-information/why-choose-us/" },
      { label: "Patient Education", href: "/patient-information/patient-education/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  {
    kind: "group",
    label: "About",
    href: "/about-us/",
    links: [
      { label: "About Us", href: "/about-us/" },
      { label: "Dr. Keyur Dudhat", href: "/about-us/dr-keyur-dudhat/" },
      { label: "Patient Reviews", href: "/about-us/patient-reviews/" },
      { label: "Smile Gallery", href: "/smile-gallery/" },
    ],
  },
  { kind: "link", label: "Specials", href: "/specials/" },
  { kind: "link", label: "Areas We Serve", href: "/areas-we-serve/" },
  { kind: "link", label: "Contact", href: "/contact-us/" },
];

export const appointmentHref = "/patient-information/scheduling/";
export const emergencyHref = "/patient-information/emergency-scheduling/";

export const footerNav: { title: string; links: NavLink[] }[] = [
  ...serviceHubs.map((hub) => ({
    title: hub.title,
    links: [
      ...hub.services.map((service) => ({ label: service.name, href: service.path })),
    ],
  })),
  {
    title: "Patients",
    links: [
      { label: "New Patients", href: "/patient-information/new-patients/" },
      { label: "Request an Appointment", href: "/patient-information/scheduling/" },
      { label: "Insurance & Payment", href: "/patient-information/insurance-payment-options/" },
      { label: "Financing Options", href: "/patient-information/financing-options/" },
      { label: "Specials & Membership Plans", href: "/specials/" },
      { label: "Patient Reviews", href: "/about-us/patient-reviews/" },
      { label: "Smile Gallery", href: "/smile-gallery/" },
      { label: "Areas We Serve", href: "/areas-we-serve/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
];

/** Footer "Services near you": every published service + location page, read from routes.ts */
export const nearbyServices: NavLink[] = routes
  .filter((route) => route.group === "service-location" && route.published && !route.noindex)
  .map((route) => ({ label: route.label, href: route.path }));

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "HIPAA Notice of Privacy Practices", href: "/hipaa-notice-of-privacy-practices/" },
  { label: "Accessibility", href: "/accessibility/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Sitemap", href: "/sitemap/" },
];
