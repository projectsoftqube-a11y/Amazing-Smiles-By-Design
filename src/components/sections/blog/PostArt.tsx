import type { PostArt as PostArtName } from "@/content/blog-post";

/**
 * Cover art for blog posts, drawn in code in the brand palette. The post docs suggest an
 * AI-generated banner, but the project rule is no AI imagery; a practice photo can replace
 * these later. Decorative only (aria-hidden).
 */

const NAVY = "#182752";
const BLUE = "#5a96c4";
const BLUE_DARK = "#2c6a9a";
const ICE = "#c1deee";
const GUM = "#f3d3cf";

// Molar: crown with two roots, centred on 0,0 (about 64 wide, 100 tall)
const MOLAR =
  "M-30-40C-30-56-15-60 0-52C15-60 30-56 30-40L28-6C27 6 22 12 18 32C16 42 8 42 7 30L4 10C2 6-2 6-4 10L-7 30C-8 42-16 42-18 32C-22 12-27 6-28-6Z";

// Incisor: flat edge, rounded shoulders, one root (about 50 wide, 120 tall)
const INCISOR = "M-22-58C-22-64-17-66 0-66C17-66 22-64 22-58L20-2C19 14 10 54 2 58C-2 60-6 56-7 50C-11 28-19 10-20-2Z";

function Veneers() {
  return (
    <svg viewBox="0 0 400 250" aria-hidden="true" focusable="false">
      {/* Timeline of the years a veneer lasts */}
      <path d="M60 212H340" stroke={ICE} strokeWidth="6" strokeLinecap="round" />
      <path d="M60 212H260" stroke={BLUE} strokeWidth="6" strokeLinecap="round" />
      {[60, 160, 260, 340].map((x, i) => (
        <circle key={x} cx={x} cy="212" r={i === 2 ? 10 : 7} fill={i < 3 ? NAVY : "#fff"} stroke={i < 3 ? NAVY : ICE} strokeWidth="3" />
      ))}
      {/* The tooth and the porcelain shell lifting away from its front */}
      <g transform="translate(170 104)">
        <path d={INCISOR} fill="#fff" stroke="#9fb3c6" strokeWidth="2" />
        <path d="M-12-50C-6-54 6-54 12-50" fill="none" stroke={ICE} strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(244 98) rotate(8)">
        <path d="M-24-62C-24-68-18-70 0-70C18-70 24-68 24-62L22 2C21 10 14 18 0 18C-14 18-21 10-22 2Z" fill={ICE} fillOpacity="0.55" stroke={BLUE} strokeWidth="2.5" />
        <path d="M-14-56C-8-60 8-60 14-56" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </g>
      <path d="M206 64c10-10 20-12 30-10" fill="none" stroke={BLUE} strokeWidth="2.5" strokeDasharray="4 6" strokeLinecap="round" />
      {/* Sparkles */}
      <path d="M300 54l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill={NAVY} />
      <path d="M110 70l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill={BLUE} />
    </svg>
  );
}

function Implant() {
  return (
    <svg viewBox="0 0 400 250" aria-hidden="true" focusable="false">
      {/* Gum and bone */}
      <rect x="60" y="120" width="230" height="96" rx="20" fill={GUM} />
      <rect x="60" y="148" width="230" height="68" rx="20" fill="#f7e6e3" />
      {/* Crown, abutment and threaded post */}
      <g transform="translate(175 0)">
        <path d="M-34 60C-34 40-20 34 0 40C20 34 34 40 34 60L31 100C30 110 22 114 0 114C-22 114-30 110-31 100Z" fill="#fff" stroke="#9fb3c6" strokeWidth="2" />
        <path d="M-14 114H14L11 132H-11Z" fill={ICE} stroke={BLUE} strokeWidth="2" />
        <path d="M-11 132H11L8 204C8 210 4 214 0 214C-4 214-8 210-8 204Z" fill={BLUE} />
        {[146, 160, 174, 188].map((y) => (
          <path key={y} d={`M-13 ${y}L13 ${y - 6}`} stroke={NAVY} strokeWidth="3" strokeLinecap="round" />
        ))}
      </g>
      {/* Price tag */}
      <g transform="translate(300 70) rotate(12)">
        <path d="M-34-26H18L38 0 18 26H-34Z" fill={NAVY} />
        <circle cx="16" cy="0" r="5" fill="#fff" />
        <path d="M-12-12c-6-3-14-1-14 5s6 6 10 7 9 3 9 8-8 8-15 4M-15-18v40" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
      <path d="M268 112c-14 0-30 6-44 18" fill="none" stroke={BLUE} strokeWidth="2.5" strokeDasharray="4 6" strokeLinecap="round" />
    </svg>
  );
}

function Emergency() {
  return (
    <svg viewBox="0 0 400 250" aria-hidden="true" focusable="false">
      {/* Cracked molar */}
      <g transform="translate(150 122) scale(1.35)">
        <path d={MOLAR} fill="#fff" stroke="#9fb3c6" strokeWidth="1.6" />
        <path d="M-2-54L-8-34 4-24-6-6" fill="none" stroke={NAVY} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      </g>
      {/* Phone with call waves */}
      <g transform="translate(282 104)">
        <circle r="44" fill={NAVY} />
        <path d="M-14-16c2-4 6-5 9-2l5 6c2 3 1 6-1 8l-3 3c3 6 8 11 14 14l3-3c2-2 5-3 8-1l6 5c3 3 2 7-2 9-6 4-14 4-22-1-9-6-16-13-20-22-3-6-2-12 3-16Z" fill="#fff" />
        <path d="M54-34a62 62 0 0 1 0 68M66-46a80 80 0 0 1 0 92" fill="none" stroke={BLUE} strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* Small cross: urgent care */}
      <g transform="translate(78 62)">
        <rect x="-18" y="-18" width="36" height="36" rx="10" fill={ICE} />
        <path d="M0-9V9M-9 0H9" stroke={BLUE_DARK} strokeWidth="4" strokeLinecap="round" />
      </g>
      <path d="M58 214H342" stroke={ICE} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function Membership() {
  return (
    <svg viewBox="0 0 400 250" aria-hidden="true" focusable="false">
      {/* Second card behind */}
      <rect x="128" y="52" width="196" height="122" rx="18" fill={ICE} transform="rotate(8 226 113)" />
      {/* Membership card */}
      <g transform="rotate(-4 200 125)">
        <rect x="88" y="64" width="210" height="130" rx="18" fill={NAVY} />
        <path d="M106 64H240L88 176V82A18 18 0 0 1 106 64Z" fill="#3a7cb0" fillOpacity="0.45" />
        <g transform="translate(122 100) scale(0.38)">
          <path d={MOLAR} fill="#fff" />
        </g>
        <rect x="146" y="88" width="88" height="8" rx="4" fill="#fff" fillOpacity="0.85" />
        <rect x="146" y="104" width="60" height="6" rx="3" fill="#fff" fillOpacity="0.4" />
        <rect x="108" y="150" width="120" height="7" rx="3.5" fill="#fff" fillOpacity="0.3" />
        <rect x="108" y="166" width="78" height="7" rx="3.5" fill="#fff" fillOpacity="0.3" />
      </g>
      {/* Tick badge */}
      <g transform="translate(304 170)">
        <circle r="30" fill="#fff" stroke={ICE} strokeWidth="4" />
        <circle r="20" fill={BLUE} />
        <path d="M-9 0l6 6 12-13" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

const ART = { veneers: Veneers, implant: Implant, emergency: Emergency, membership: Membership };

export function PostArt({ name }: { name: PostArtName }) {
  const Art = ART[name];
  return <Art />;
}
