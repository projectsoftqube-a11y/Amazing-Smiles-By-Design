import { serializeJsonLd } from "@/lib/schema";

/** Structured data is not executable, so a plain <script> is used (Next.js JSON-LD guide). */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
