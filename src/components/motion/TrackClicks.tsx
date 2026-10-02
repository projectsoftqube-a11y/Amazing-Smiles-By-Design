"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Conversion events for local SEO measurement (SEO handoff: call, text, appointment,
 * directions and emergency clicks are tracked separately). Any element with
 * `data-track="<event>"` pushes `{ event }` to window.dataLayer, ready for GTM once
 * it is added after launch. No third-party script is loaded here.
 */
export function TrackClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
      const name = target?.dataset.track;
      if (!name) return;
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({
        event: name,
        link_url: target instanceof HTMLAnchorElement ? target.href : undefined,
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
