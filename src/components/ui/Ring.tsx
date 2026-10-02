import type { CSSProperties } from "react";

/**
 * The logo's segmented ring: six square-cut arcs, open on the left, running from
 * grey (top) to blue (bottom). Used as the site's main graphic device.
 * Colours are the exact segment fills from the logo SVG.
 */

const LOGO_SEGMENTS = ["#CFCFCF", "#D9D9D9", "#C1DEEE", "#5FA4CA", "#5A96C4", "#5A9AC6"];

type RingProps = {
  className?: string;
  style?: CSSProperties;
  /** Stroke width in viewBox units (viewBox is 200×200) */
  strokeWidth?: number;
  /** Override segment colours, e.g. for navy backgrounds */
  colors?: string[];
  /** Indexes (0–5) to emphasise; other segments are drawn faint */
  highlight?: number[];
  /** Enables the draw-in animation hooks (CSS or GSAP) */
  animate?: "css" | "scroll";
};

function arc(index: number, radius: number) {
  const gap = 2.2; // degrees between segments
  const start = ((225 + 45 * index + gap) * Math.PI) / 180;
  const end = ((225 + 45 * (index + 1) - gap) * Math.PI) / 180;
  const point = (angle: number) =>
    `${(100 + radius * Math.cos(angle)).toFixed(2)} ${(100 + radius * Math.sin(angle)).toFixed(2)}`;
  return `M${point(start)} A${radius} ${radius} 0 0 1 ${point(end)}`;
}

export function Ring({ className, style, strokeWidth = 4, colors = LOGO_SEGMENTS, highlight, animate }: RingProps) {
  const radius = 100 - strokeWidth / 2 - 1;
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
      data-ring={animate}
    >
      {colors.map((color, index) => (
        <path
          key={index}
          d={arc(index, radius)}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
          pathLength={animate === "css" ? 1 : undefined}
          opacity={highlight && !highlight.includes(index) ? 0.28 : 1}
          style={{ "--i": index } as CSSProperties}
        />
      ))}
    </svg>
  );
}

export const RING_ON_NAVY = ["#3B4A75", "#46557F", "#C1DEEE", "#8FBCDD", "#5FA4CA", "#5A96C4"];
