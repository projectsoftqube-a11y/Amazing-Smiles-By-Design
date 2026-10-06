import type { DriveFacts, LocationPageContent } from "@/content/location-page";
import { locationsSections } from "./hub";
import { andalusiaPa } from "./andalusia-pa";
import { bristolPa } from "./bristol-pa";
import { bustletonPhiladelphia } from "./bustleton-philadelphia";
import { cornwellsHeightsPa } from "./cornwells-heights-pa";
import { croydonPa } from "./croydon-pa";
import { eddingtonPa } from "./eddington-pa";
import { fairlessHillsPa } from "./fairless-hills-pa";
import { farNortheastPhiladelphia } from "./far-northeast-philadelphia";
import { feastervillePa } from "./feasterville-pa";
import { foxChasePhiladelphia } from "./fox-chase-philadelphia";
import { holmesburgPhiladelphia } from "./holmesburg-philadelphia";
import { hulmevillePa } from "./hulmeville-pa";
import { huntingdonValleyPa } from "./huntingdon-valley-pa";
import { langhornePa } from "./langhorne-pa";
import { levittownPa } from "./levittown-pa";
import { morrisvillePa } from "./morrisville-pa";
import { newtownPa } from "./newtown-pa";
import { northeastPhiladelphia } from "./northeast-philadelphia";
import { oakfordPa } from "./oakford-pa";
import { parklandPa } from "./parkland-pa";
import { penndelPa } from "./penndel-pa";
import { somertonPhiladelphia } from "./somerton-philadelphia";
import { torresdalePhiladelphia } from "./torresdale-philadelphia";
import { trevosePa } from "./trevose-pa";
import { yardleyPa } from "./yardley-pa";

/** The 25 town pages, keyed by URL slug ("dentist-langhorne-pa") */
const pages: LocationPageContent[] = [
  andalusiaPa,
  bristolPa,
  bustletonPhiladelphia,
  cornwellsHeightsPa,
  croydonPa,
  eddingtonPa,
  fairlessHillsPa,
  farNortheastPhiladelphia,
  feastervillePa,
  foxChasePhiladelphia,
  holmesburgPhiladelphia,
  hulmevillePa,
  huntingdonValleyPa,
  langhornePa,
  levittownPa,
  morrisvillePa,
  newtownPa,
  northeastPhiladelphia,
  oakfordPa,
  parklandPa,
  penndelPa,
  somertonPhiladelphia,
  torresdalePhiladelphia,
  trevosePa,
  yardleyPa,
];

export const locationPages: Record<string, LocationPageContent> = Object.fromEntries(
  pages.map((page) => [page.meta.path.replaceAll("/", ""), page]),
);

export const locationSlugs = Object.keys(locationPages);

/**
 * Drive time and distance per town page, read from the hub's drive-time tables
 * ("[Langhorne](/dentist-langhorne-pa/) | About 10 min | 4.6 mi"), so the hub and
 * the town pages always show the same Google Maps figures.
 */
export const driveFacts: Record<string, DriveFacts> = Object.fromEntries(
  locationsSections.flatMap((section) =>
    section.blocks.flatMap((block) =>
      block.kind === "table"
        ? block.rows.flatMap(([area, time, distance]) => {
            const link = area.match(/^\[(.+)\]\((.+)\)$/);
            return link ? [[link[2], { town: link[1], time, distance, region: section.title }]] : [];
          })
        : [],
    ),
  ),
);
