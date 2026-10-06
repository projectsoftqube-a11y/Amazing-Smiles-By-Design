import type { ServicePageContent } from "./service-page";

/**
 * Content model for the town pages (06 Locations). Same shape as a treatment page,
 * plus the JSON-LD areaServed copied from each page's Developer Handoff.
 */
export type LocationPageContent = ServicePageContent & {
  areaServed: Record<string, unknown>[];
};

/** Drive facts for one town, read from the hub's drive-time tables */
export type DriveFacts = { town: string; time: string; distance: string; region: string };
