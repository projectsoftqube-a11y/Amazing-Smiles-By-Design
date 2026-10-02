/**
 * The 22 services, grouped by hub. Names and order match the Home content
 * ("Dental Services at Our Bensalem Office"); the header menu and the Dentist
 * JSON-LD reuse this list so all three stay in sync.
 */

export type Service = { name: string; path: string };

export type ServiceHub = {
  id: "general" | "restorative" | "cosmetic";
  /** H3 on the Home page */
  title: string;
  /** Short label for the menu */
  navLabel: string;
  summary: string;
  path: string;
  /** "All general dentistry" link text */
  allLabel: string;
  services: Service[];
};

export const serviceHubs: ServiceHub[] = [
  {
    id: "general",
    title: "General and Family Dentistry",
    navLabel: "General & Family",
    summary: "Preventive care that keeps teeth and gums healthy for every age.",
    path: "/general-dentistry/",
    allLabel: "All general dentistry",
    services: [
      { name: "Dental checkups, cleanings and X-rays", path: "/general-dentistry/dental-checkups-x-rays/" },
      { name: "Children's dentistry", path: "/general-dentistry/child-dentistry/" },
      { name: "Dental sealants", path: "/general-dentistry/dental-sealants/" },
      { name: "Deep cleaning (scaling and root planing)", path: "/general-dentistry/scaling-and-root-planing/" },
      { name: "Periodontal maintenance", path: "/general-dentistry/periodontal-maintenance/" },
      { name: "Arestin gum treatment", path: "/general-dentistry/arestin/" },
      { name: "Oral cancer screening", path: "/general-dentistry/oral-cancer-screening/" },
      { name: "Tooth extraction", path: "/general-dentistry/tooth-extraction/" },
      { name: "Emergency dentistry", path: "/general-dentistry/emergency-dentistry/" },
      { name: "Oral hygiene tips", path: "/general-dentistry/oral-hygiene/" },
    ],
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    navLabel: "Restorative",
    summary: "Repair damaged teeth and replace missing ones.",
    path: "/restorative-dentistry/",
    allLabel: "All restorative dentistry",
    services: [
      { name: "Dental implants", path: "/restorative-dentistry/dental-implants/" },
      { name: "Dental crowns", path: "/restorative-dentistry/dental-crowns/" },
      { name: "Dental bridges", path: "/restorative-dentistry/dental-bridges/" },
      { name: "Dental fillings", path: "/restorative-dentistry/dental-fillings/" },
      { name: "Non-surgical root canal", path: "/restorative-dentistry/non-surgical-root-canal/" },
      { name: "Inlays and onlays", path: "/restorative-dentistry/inlays-onlays/" },
      { name: "Dentures", path: "/restorative-dentistry/dentures/" },
    ],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    navLabel: "Cosmetic",
    summary: "Brighten, straighten and reshape your smile.",
    path: "/cosmetic-dentistry/",
    allLabel: "All cosmetic dentistry",
    services: [
      { name: "Porcelain veneers", path: "/cosmetic-dentistry/porcelain-veneers/" },
      { name: "Clear aligners", path: "/cosmetic-dentistry/clear-aligners/" },
      { name: "Teeth whitening", path: "/cosmetic-dentistry/teeth-whitening/" },
      { name: "Dental bonding", path: "/cosmetic-dentistry/dental-bonding/" },
      { name: "Night guards", path: "/cosmetic-dentistry/night-guards/" },
    ],
  },
];
