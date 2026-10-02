"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let instance: Lenis | null = null;

/** The running Lenis instance, or null (reduced motion, or not mounted yet). */
export const getLenis = () => instance;

/**
 * Smooth scrolling for wheel and trackpad. Lenis is driven by GSAP's ticker, so
 * Lenis, ScrollTrigger and every tween share one requestAnimationFrame loop.
 * Touch devices keep native scrolling (syncTouch is off), and visitors who prefer
 * reduced motion get no smoothing at all.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const tick = (time: number) => lenis?.raf(time * 1000);

    const start = () => {
      if (lenis || reduced.matches) return;
      lenis = new Lenis({
        lerp: 0.1,
        autoRaf: false,
        anchors: { offset: -96 },
        syncTouch: false,
      });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      instance = lenis;
    };

    const stop = () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
      instance = null;
    };

    const onPreferenceChange = () => (reduced.matches ? stop() : start());

    start();
    reduced.addEventListener("change", onPreferenceChange);
    return () => {
      reduced.removeEventListener("change", onPreferenceChange);
      stop();
    };
  }, []);

  return null;
}
