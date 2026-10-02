"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);

/** Shared motion tokens; the CSS equivalents live in styles/tokens.css. */
export const motion = {
  ease: "power3.out",
  easeMask: "expo.out",
  duration: { ui: 0.18, reveal: 0.8, hero: 1.1 },
  stagger: 0.07,
} as const;

export { DrawSVGPlugin, gsap, ScrollTrigger, useGSAP };
