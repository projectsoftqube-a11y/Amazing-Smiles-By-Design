import { Gelasio, Hanken_Grotesk } from "next/font/google";

/**
 * Titles: the logo's "Amazing Smiles" wordmark is set in Georgia Bold. Gelasio is an
 * open-source face drawn to Georgia's metrics, so titles match the logo, and the
 * Georgia fallback swaps in with no layout shift. Italic is used for accents, like
 * "By Design" in the logo.
 */
export const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

/** Everything else: paragraphs, navigation, buttons, labels and forms. */
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});
