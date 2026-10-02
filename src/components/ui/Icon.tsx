import type { SVGProps } from "react";

/**
 * Line icons drawn on a 24px grid, 1.6px stroke, square caps to echo the logo ring's
 * square-cut segments. Decorative by default; pass `title` when an icon carries meaning alone.
 */

const paths = {
  phone: (
    <path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
  ),
  message: <path d="M4 5h16v11H9l-5 4V5Zm4 5h8M8 13h5" />,
  calendar: <path d="M4 6h16v14H4V6Zm0 4h16M8 3v4m8-4v4" />,
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7m-8 0h8v8" />,
  pin: <path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.5V12l3 2" />,
  shield: <path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6l-7-3Zm-3 9 2.2 2.2L15.5 10" />,
  tag: <path d="M3.5 12.5 12 4h8v8l-8.5 8.5-8-8Zm12.5-4.5h.01" />,
  alert: <path d="M12 3 2.5 20h19L12 3Zm0 6.5v5m0 3h.01" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  map: <path d="m9 4-5 2v14l5-2 6 2 5-2V4l-5 2-6-2Zm0 0v14m6-12v14" />,
  quote: (
    <path d="M10 7H6.5A2.5 2.5 0 0 0 4 9.5V14h5v-4H6.7M20 7h-3.5A2.5 2.5 0 0 0 14 9.5V14h5v-4h-2.3" />
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  name: IconName;
  size?: number;
  title?: string;
};

export function Icon({ name, size = 20, title, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="square"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
