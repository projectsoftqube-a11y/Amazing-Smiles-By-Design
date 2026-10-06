import { Fragment } from "react";
import Link from "@/components/ui/SiteLink";
import { getRoute, linkTo } from "@/content/routes";

const TOKEN = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]\([^)]+\))/g;

/**
 * Renders content-file text with its inline **bold**, *italic* and [label](/path) markup, so
 * copy stays verbatim in src/content. Internal links go through SiteLink (no
 * prefetch for unbuilt pages); tel:/sms: links are plain anchors.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{renderLinks(part.slice(2, -2))}</strong>;
        }
        // *Italic* notes inside a paragraph ("*This page is for Parkland in Bucks County …*")
        if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) return <Fragment key={index}>{anchor(link[1], link[2])}</Fragment>;
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

function renderLinks(text: string) {
  const link = text.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  return link ? anchor(link[1], link[2]) : text;
}

function anchor(label: string, href: string) {
  if (/^(tel:|sms:|mailto:|https?:)/.test(href)) return <a href={href}>{label}</a>;
  // Location handoffs: service + location pages that aren't live yet stay unlinked text
  const route = getRoute(href);
  if (route?.group === "service-location" && !route.published) return label;
  return <Link href={linkTo(href)}>{label}</Link>;
}

/** Splits "**Lead:** rest of the text" into its bold lead and the remainder */
export function splitLead(text: string): { lead: string | null; rest: string } {
  const match = text.match(/^\*\*([^*]+)\*\*\s*(.*)$/);
  return match ? { lead: match[1], rest: match[2] } : { lead: null, rest: text };
}
