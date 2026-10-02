import { Hanken_Grotesk, Newsreader } from "next/font/google";

/** Display and headings. Variable weight plus the optical-size axis, with real italics for accents. */
export const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});

/** Body copy, UI, buttons and forms. */
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});
