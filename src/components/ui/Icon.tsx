import type { SVGProps } from "react";

/**
 * Line icons drawn on a 24px grid, 1.6px stroke, square caps to echo the logo ring's
 * square-cut segments. Decorative by default; pass `title` when an icon carries meaning alone.
 */

const paths = {
  phone: (
    <path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
  ),
  plane: <path d="M3 13.5 21 6l-4.5 15-5-6.5L3 13.5Zm8.5 1L21 6" />,
  mountain: <path d="M3 19h18L14.5 7l-4 6.5-2-3L3 19Zm11.5-12 2.5 4" />,
  waves: <path d="M3 9c2 0 2-1.5 4.5-1.5S10 9 12 9s2-1.5 4.5-1.5S19 9 21 9M3 14c2 0 2-1.5 4.5-1.5S10 14 12 14s2-1.5 4.5-1.5S19 14 21 14M3 19c2 0 2-1.5 4.5-1.5S10 19 12 19s2-1.5 4.5-1.5S19 19 21 19" />,
  flag: <path d="M6 21V4m0 0h11l-2 4 2 4H6" />,
  mail: <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />,
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
  family: (
    <path d="M8 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8.5 1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 20c0-3.3 2.5-5.8 5.5-5.8s5.5 2.5 5.5 5.8m-.3-2.6c.8-1.9 2.4-3 4.3-3 2.8 0 4.5 2.1 4.5 5" />
  ),
  tooth: (
    <path d="M7.5 3.5c-2.6 0-4 2.1-4 4.6 0 2.2.9 3.4 1.5 5.4.6 2 .7 6.9 2.6 6.9 1.8 0 1.6-4.6 3.1-5.6.8-.5 1.8-.5 2.6 0 1.5 1 1.3 5.6 3.1 5.6 1.9 0 2-4.9 2.6-6.9.6-2 1.5-3.2 1.5-5.4 0-2.5-1.4-4.6-4-4.6-1.7 0-2.8 1.1-4.5 1.1S9.2 3.5 7.5 3.5Z" />
  ),
  sparkle: (
    <path d="M12 3c.6 3.9 2.6 5.9 6.5 6.5-3.9.6-5.9 2.6-6.5 6.5-.6-3.9-2.6-5.9-6.5-6.5C9.4 8.9 11.4 6.9 12 3Zm6.5 11c.3 1.8 1.2 2.7 3 3-1.8.3-2.7 1.2-3 3-.3-1.8-1.2-2.7-3-3 1.8-.3 2.7-1.2 3-3Z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  star: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />,
  scan: <path d="M4 8V4h4m8 0h4v4m0 8v4h-4m-8 0H4v-4M7 12h10M9 8.5h6M9 15.5h6" />,
  xray: <path d="M4 5h16v14H4V5Zm4 4c1.3 1.3 1.3 4.7 0 6m8-6c-1.3 1.3-1.3 4.7 0 6m-4-7v8" />,
  face: (
    <path d="M12 3c4 0 6.5 3 6.5 7.2 0 5-3 10.8-6.5 10.8S5.5 15.2 5.5 10.2C5.5 6 8 3 12 3Zm-2.5 7.5h.01m4.99 0h.01M10 15.5c1.2.8 2.8.8 4 0" />
  ),
  smile: (
    <path d="M3 9.5c3.2 0 5.4-1.5 9-1.5s5.8 1.5 9 1.5c-1.1 5.3-4.7 8.5-9 8.5s-7.9-3.2-9-8.5Zm2.2 1.1c4.4 1.6 9.2 1.6 13.6 0M9 11.5v1.6m3-1.4v1.8m3-2v1.6" />
  ),
  cap: <path d="m2 9.5 10-5 10 5-10 5-10-5Zm4 2.1v4.6c0 1.6 2.7 3.3 6 3.3s6-1.7 6-3.3v-4.6M22 9.5V15" />,
  book: <path d="M4 18.5V5.5A2.5 2.5 0 0 1 6.5 3H20v13H6.5A2.5 2.5 0 0 0 4 18.5Zm0 0A2.5 2.5 0 0 0 6.5 21H20v-5M8 7h8" />,
  headphones: <path d="M4 15v-3a8 8 0 0 1 16 0v3M4 15a2 2 0 0 1 2-2h1v7H6a2 2 0 0 1-2-2v-3Zm16 0a2 2 0 0 0-2-2h-1v7h1a2 2 0 0 0 2-2v-3Z" />,
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />,
  wallet: <path d="M4 7.5V18a1.5 1.5 0 0 0 1.5 1.5H20V9H5.5A1.5 1.5 0 0 1 4 7.5Zm0 0A1.5 1.5 0 0 1 5.5 6H17V4.5H5.5M16 14.25h.01" />,
  card: <path d="M3.5 6h17v12h-17V6Zm0 4h17M7 15h4" />,
  bell: <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15L6 16.5Zm4 3.5a2 2 0 0 0 4 0" />,
  clipboard: <path d="M8 4.5H5.5V21h13V4.5H16M8 3h8v3H8V3Zm0 8h8m-8 4h5" />,
  search: <path d="M10.5 17.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 5 5" />,
  receipt: <path d="M5.5 3h13v18l-2.2-1.5-2.1 1.5-2.2-1.5-2.2 1.5-2.1-1.5L5.5 21V3Zm3.5 5h6m-6 4h6m-6 4h3" />,
  info: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-10v6m0-9.5h.01" />,
  bolt: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />,
  lock: <path d="M6 10.5h12V20H6v-9.5Zm2.5 0V8a3.5 3.5 0 0 1 7 0v2.5M12 14v2.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
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
