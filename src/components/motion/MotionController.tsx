"use client";

import { usePathname } from "next/navigation";
import { gsap, motion, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Scroll-driven motion, declared in markup with data attributes:
 *   data-reveal          fade up as it enters (batched, so siblings stagger)
 *   data-reveal-media    navy curtain lifts off an image (MediaFrame reveal="scroll")
 *   data-parallax        slight vertical drift inside its frame
 *
 * Only elements starting below the fold are hidden first, so nothing visible on
 * load ever flashes. Without JavaScript, or with reduced motion, everything is
 * simply shown.
 *
 * Timing: items start when their top edge is about a quarter of the way up the
 * viewport (REVEAL_START), so the motion plays where the visitor is looking rather
 * than at the very bottom edge. Trigger positions are re-measured whenever the page
 * height changes (tabs, FAQ answers, late images, the map), so sections further down
 * never fire early or late.
 */
// clamp(): items near the end of the page (footer) can never scroll up to 78%, so
// their start is capped at the maximum scroll position and they still reveal.
const REVEAL_START = "clamp(top 78%)";
const MEDIA_START = "clamp(top 72%)";
const COUNT_START = "clamp(top 80%)";
export function MotionController() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const foldLine = window.innerHeight * 0.92;
        const belowFold = (el: Element) => el.getBoundingClientRect().top > foldLine;

        const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]").filter(belowFold);
        if (revealItems.length) {
          gsap.set(revealItems, { autoAlpha: 0, y: 32 });
          ScrollTrigger.batch(revealItems, {
            start: REVEAL_START,
            interval: 0.12,
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: motion.duration.reveal,
                ease: motion.ease,
                // Cap the whole cascade at ~0.35s so the last item in a large group
                // (plan cards, town list, footer columns) doesn't lag behind the scroll.
                stagger: Math.min(motion.stagger, 0.35 / Math.max(batch.length - 1, 1)),
                overwrite: true,
                clearProps: "transform",
              }),
          });
        }

        gsap.utils.toArray<HTMLElement>("[data-reveal-media]").filter(belowFold).forEach((frame) => {
          const curtain = frame.querySelector<HTMLElement>(":scope > span");
          const inner = frame.firstElementChild;
          if (!curtain || !inner) return;
          gsap.set(curtain, { scaleY: 1, transformOrigin: "top center" });
          gsap.set(inner, { scale: 1.08 });
          gsap
            .timeline({ scrollTrigger: { trigger: frame, start: MEDIA_START, once: true } })
            .to(curtain, { scaleY: 0, duration: 1, ease: "power4.inOut" })
            .to(inner, { scale: 1, duration: 1.4, ease: motion.easeMask }, "<0.1");
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((layer) => {
          gsap.fromTo(
            layer,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: layer.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        // Prices and figures count up once as they enter (the server renders the real value).
        gsap.utils.toArray<HTMLElement>("[data-count]").filter(belowFold).forEach((el) => {
          const target = Number(el.dataset.count);
          if (!Number.isFinite(target)) return;
          const counter = { value: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: COUNT_START,
            once: true,
            onEnter: () =>
              gsap.to(counter, {
                value: target,
                duration: 1.6,
                ease: "expo.out",
                onStart: () => {
                  counter.value = 0;
                },
                onUpdate: () => {
                  el.textContent = String(Math.round(counter.value));
                },
              }),
          });
        });

      });

      // Anything that changes the page height (fonts, late images, the map, switching a
      // service tab, opening an FAQ answer) moves every section below it, so trigger
      // positions are re-measured whenever the document height changes.
      let timer = 0;
      const refresh = () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
      };
      let lastHeight = document.documentElement.scrollHeight;
      const resizeObserver = new ResizeObserver(() => {
        const height = document.documentElement.scrollHeight;
        if (Math.abs(height - lastHeight) < 2) return;
        lastHeight = height;
        refresh();
      });
      resizeObserver.observe(document.body);
      document.fonts?.ready.then(refresh);
      window.addEventListener("load", refresh, { once: true });

      return () => {
        window.clearTimeout(timer);
        resizeObserver.disconnect();
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
