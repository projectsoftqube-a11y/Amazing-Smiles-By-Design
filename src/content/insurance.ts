import type { StaticImageData } from "next/image";
import aetnaLogo from "@/assets/insurance/aetna.png";
import anthemLogo from "@/assets/insurance/anthem.png";
import cignaLogo from "@/assets/insurance/cigna.png";
import deltaDentalLogo from "@/assets/insurance/delta-dental.png";
import humanaLogo from "@/assets/insurance/humana.png";
import metlifeLogo from "@/assets/insurance/metlife.png";
import unitedhealthcareLogo from "@/assets/insurance/unitedhealthcare.png";
import bluecrossBlueshieldLogo from "@/assets/insurance/bluecross-blueshield.png";
import unitedConcordiaLogo from "@/assets/insurance/united-concordia.png";
import gehaLogo from "@/assets/insurance/geha.png";
import principalLogo from "@/assets/insurance/principal.png";
import careingtonLogo from "@/assets/insurance/careington.png";
import fidelioLogo from "@/assets/insurance/fidelio.png";
import unitasLogo from "@/assets/insurance/unitas.png";
import manhattanlifeLogo from "@/assets/insurance/manhattanlife.png";
import teamstersCareLogo from "@/assets/insurance/teamsters-care.png";
import lehbLogo from "@/assets/insurance/lehb.png";

/**
 * Insurance carrier logos for the "Paying for care" section.
 *
 * Sources: the practice's own logo sheet from its current site ("pp.png", split into
 * single logos), plus Anthem and UnitedHealthcare, which the insurance copy names but
 * the sheet lacks: both from Wikimedia Commons, where the files are marked public domain.
 * The carriers named in the copy come first. Logos identify plans the office works
 * with; confirm the list with the practice when it changes.
 */
export type CarrierLogo = {
  name: string;
  logo: StaticImageData;
  source: "practice" | "wikimedia";
};

export const carrierLogos: CarrierLogo[] = [
  { name: "Aetna", logo: aetnaLogo, source: "practice" },
  { name: "Anthem", logo: anthemLogo, source: "wikimedia" },
  { name: "Cigna", logo: cignaLogo, source: "practice" },
  { name: "Delta Dental", logo: deltaDentalLogo, source: "practice" },
  { name: "Humana", logo: humanaLogo, source: "practice" },
  { name: "MetLife", logo: metlifeLogo, source: "practice" },
  { name: "UnitedHealthcare", logo: unitedhealthcareLogo, source: "wikimedia" },
  { name: "BlueCross BlueShield", logo: bluecrossBlueshieldLogo, source: "practice" },
  { name: "United Concordia", logo: unitedConcordiaLogo, source: "practice" },
  { name: "GEHA", logo: gehaLogo, source: "practice" },
  { name: "Principal", logo: principalLogo, source: "practice" },
  { name: "Careington", logo: careingtonLogo, source: "practice" },
  { name: "Fidelio Dental Insurance", logo: fidelioLogo, source: "practice" },
  { name: "Unitas PPO Solutions", logo: unitasLogo, source: "practice" },
  { name: "ManhattanLife", logo: manhattanlifeLogo, source: "practice" },
  { name: "Teamsters Care", logo: teamstersCareLogo, source: "practice" },
  { name: "LEHB", logo: lehbLogo, source: "practice" },
];
