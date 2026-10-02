"use client";

import { useEffect, useRef } from "react";
import { timeZone } from "@/content/site";

/**
 * Marks today's row in the hours table that precedes it, using the office's
 * time zone. Runs after load, so the server-rendered table is never changed for
 * crawlers or visitors without JavaScript.
 */
export function HoursToday() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const table = ref.current?.previousElementSibling;
    if (!(table instanceof HTMLTableElement)) return;
    const today = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone }).format(new Date());
    const row = table.querySelector<HTMLTableRowElement>(`tr[data-days~="${today}"]`);
    row?.setAttribute("data-today", "");
    return () => row?.removeAttribute("data-today");
  }, []);

  return <span ref={ref} hidden />;
}
