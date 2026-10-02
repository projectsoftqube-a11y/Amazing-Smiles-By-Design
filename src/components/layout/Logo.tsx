import Link from "@/components/ui/SiteLink";
import { practice } from "@/content/site";

/**
 * The supplied logo SVG, unchanged (4333 × 1010). It only works on light backgrounds,
 * so it is never placed on navy.
 */
export function Logo({ className, priority = true }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" className={className} aria-label={`${practice.name}, home`}>
      {/* A plain <img>: SVGs gain nothing from the image optimizer. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/amazing-smiles-by-design-logo.svg"
        alt={practice.name}
        width={4333}
        height={1010}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </Link>
  );
}
