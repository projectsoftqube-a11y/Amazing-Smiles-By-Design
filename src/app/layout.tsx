import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionController } from "@/components/motion/MotionController";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { TrackClicks } from "@/components/motion/TrackClicks";
import { practice, SITE_URL } from "@/content/site";
import { gelasio, hankenGrotesk } from "@/lib/fonts";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: practice.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${gelasio.variable} ${hankenGrotesk.variable}`}>
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to <body>
          before React hydrates; this only silences that attribute mismatch on this element. */}
      <body suppressHydrationWarning>
        <a href="#main" className={styles.skipLink}>
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className={styles.main}>
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
        <SmoothScroll />
        <MotionController />
        <TrackClicks />
      </body>
    </html>
  );
}
