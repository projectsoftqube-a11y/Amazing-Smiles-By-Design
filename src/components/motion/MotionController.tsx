"use client";

import { usePathname } from "next/navigation";
import { gsap, motion, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Scroll-driven motion, declared in markup with data attributes:
 *   data-reveal          fade up as it enters (batched, so siblings stagger)
 *   data-reveal-media    navy curtain lifts off an image (MediaFrame reveal="scroll")
 *   data-parallax        slight vertical drift inside its frame
 *   data-ring="scroll"   ring segments draw in sequence
 *
 * Only elements starting below the fold are hidden first, so nothing visible on
 * load ever flashes. Without JavaScript, or with reduced motion, everything is
 * simply shown.
 */
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
          gsap.set(revealItems, { autoAlpha: 0, y: 28 });
          ScrollTrigger.batch(revealItems, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: motion.duration.reveal,
                ease: motion.ease,
                stagger: motion.stagger,
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
            .timeline({ scrollTrigger: { trigger: frame, start: "top 82%", once: true } })
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

        gsap.utils.toArray<SVGSVGElement>('[data-ring="scroll"]').forEach((ring) => {
          const segments = ring.querySelectorAll("path");
          gsap.from(segments, {
            drawSVG: "0%",
            duration: 0.9,
            ease: "power2.inOut",
            stagger: 0.09,
            scrollTrigger: { trigger: ring, start: "top 85%", once: true },
          });
        });
      });

      // Fonts and late images change section heights; recalculate trigger positions.
      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);
      window.addEventListener("load", refresh, { once: true });

      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
