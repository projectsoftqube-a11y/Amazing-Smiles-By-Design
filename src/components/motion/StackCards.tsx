"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Stacking cards: each direct child with `data-stack-card` is sticky (CSS), and as
 * the next card slides up over it, the card underneath eases back (scale) and dims.
 * Scrubbed to the scroll position, so it never runs on its own.
 *
 * Desktop and tall-enough screens only (the same media query as the sticky CSS);
 * phones, short screens and reduced motion get a plain list of cards.
 */
export const STACK_QUERY = "(min-width: 992px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)";

export function StackCards({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(STACK_QUERY, () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]", ref.current);
        cards.forEach((card, index) => {
          const next = cards[index + 1];
          if (!next) return;
          const inner = card.querySelector<HTMLElement>("[data-stack-inner]");
          const shade = card.querySelector<HTMLElement>("[data-stack-shade]");
          const top = parseFloat(getComputedStyle(next).top) || 0;
          const timeline = gsap.timeline({
            scrollTrigger: { trigger: next, start: "top bottom", end: `top ${top}px`, scrub: true },
          });
          if (inner) timeline.fromTo(inner, { scale: 1 }, { scale: 0.94 - (cards.length - 2 - index) * 0.02, ease: "none" }, 0);
          if (shade) timeline.fromTo(shade, { opacity: 0 }, { opacity: 1, ease: "none" }, 0);
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
