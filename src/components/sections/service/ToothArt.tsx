/**
 * Small tooth illustrations for restorative comparisons (decorative, aria-hidden).
 * TopView: a molar seen from above with the area each restoration covers.
 * SideView: a molar with its roots, showing a filling, an onlay or a full crown.
 */

type Kind = "inlay" | "onlay" | "crown" | "filling";

// Molar outline seen from above: four cusps around a central groove
const TOP_OUTLINE =
  "M24 4.5c4.6 0 6.6 2.2 9.6 2.4 4.2.3 9.4 2.7 9.4 9.4 0 3.2-1.6 4.9-1.6 7.7s1.6 4.5 1.6 7.7c0 6.7-5.2 9.1-9.4 9.4-3 .2-5 2.4-9.6 2.4s-6.6-2.2-9.6-2.4C10.2 40.8 5 38.4 5 31.7c0-3.2 1.6-4.9 1.6-7.7S5 19.5 5 16.3c0-6.7 5.2-9.1 9.4-9.4 3-.2 5-2.4 9.6-2.4Z";

export function ToothTopView({ kind, inverse = false }: { kind: Kind; inverse?: boolean }) {
  const fill = inverse ? "#c1deee" : "#5a96c4";
  return (
    <svg viewBox="0 0 48 48" width="76" height="76" aria-hidden="true" focusable="false">
      <path d={TOP_OUTLINE} fill={inverse ? "#24376a" : "#ffffff"} stroke={inverse ? "#c1deee" : "#9fb3c6"} strokeWidth="1.4" />
      {kind === "crown" ? <path d={TOP_OUTLINE} fill={fill} /> : null}
      {kind === "onlay" ? (
        // The centre plus one cusp (upper right)
        <path d="M16.5 20.5a4 4 0 0 1 4-4h6.2c1-3.6 4.2-6.4 8-6.4 4.5 0 7.6 3.3 7.6 7.4s-3.1 7.3-7.6 7.3h-3.2v6.7a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4Z" fill={fill} />
      ) : null}
      {kind === "inlay" ? (
        // Inside the cusp tips: the central grooves only
        <rect x="17.5" y="17.5" width="13" height="13" rx="4" fill={fill} />
      ) : null}
      {/* Central groove lines, drawn on top so the tooth reads as a molar */}
      <path d="M24 12v24M14 24h20" stroke={inverse ? "#c1deee" : "#c9d4e0"} strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.7" />
    </svg>
  );
}

// Molar side view: crown with two cusps on top, two roots below the gum line
const SIDE_TOOTH =
  "M18 24c0-9 6-14 12-11 3-5 17-5 20 0 6-3 12 2 12 11l-2 30c-.4 3-2.6 5-5.5 5L52 98c-.6 7-8 7-8.6 0L41 66h-2l-2.4 32c-.6 7-8 7-8.6 0L25.5 59c-2.9 0-5.1-2-5.5-5L18 24Z";
// Visible crown (above the gum line at y≈58)
const SIDE_CROWN = "M18 24c0-9 6-14 12-11 3-5 17-5 20 0 6-3 12 2 12 11l-2 30c-.4 3-2.6 5-5.5 5h-29c-2.9 0-5.1-2-5.5-5L18 24Z";

export function ToothSideView({ kind }: { kind: Kind }) {
  return (
    <svg viewBox="0 0 80 110" width="96" height="132" aria-hidden="true" focusable="false">
      {/* Gum and bone */}
      <rect x="4" y="56" width="72" height="54" rx="10" fill="#f3d3cf" />
      <rect x="4" y="68" width="72" height="42" rx="8" fill="#ead9c0" />
      <path d={SIDE_TOOTH} fill="#ffffff" stroke="#9fb3c6" strokeWidth="1.5" />
      {kind === "filling" ? (
        // A small cavity filled in the chewing surface
        <path d="M34 14.5c2.5 4.5 9.5 4.5 12 0 .8 5-1.8 9-6 9s-6.8-4-6-9Z" fill="#2c6a9a" />
      ) : null}
      {kind === "onlay" ? (
        // Rebuilds the chewing surface and one cusp
        <path d="M30 13c3-5 17-5 20 0 6-3 12 2 12 11l-.6 9c-6 2.4-14 3-22 2.2-3.2-.3-5.4-3.6-6.4-7.2L30 13Z" fill="#2c6a9a" />
      ) : null}
      {kind === "crown" ? <path d={SIDE_CROWN} fill="#2c6a9a" /> : null}
      {/* Gum line */}
      <path d="M8 58c10 0 14-2 20-2M52 56c6 0 10 2 20 2" stroke="#e57368" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/** An infected tooth: red pulp and canals inside (root canal) */
export function ToothPulpView() {
  return (
    <svg viewBox="0 0 80 110" width="96" height="132" aria-hidden="true" focusable="false">
      <rect x="4" y="56" width="72" height="54" rx="10" fill="#f3d3cf" />
      <rect x="4" y="68" width="72" height="42" rx="8" fill="#ead9c0" />
      <path d={SIDE_TOOTH} fill="#ffffff" stroke="#9fb3c6" strokeWidth="1.5" />
      {/* Pulp chamber and the two canals */}
      <path d="M32 30c0-7 16-7 16 0v16c0 4-3 6-8 6s-8-2-8-6V30Z" fill="#e57368" />
      <path d="M34 50 30.5 96M46 50l3.5 46" stroke="#c0504a" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      {/* Inflammation glow at the root tip */}
      <path d="M26 100c2-4 8-4 9 0M45 100c1-4 7-4 9 0" stroke="#e57368" strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M8 58c10 0 14-2 20-2M52 56c6 0 10 2 20 2" stroke="#e57368" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/** A dental implant: crown, abutment and threaded post in the jawbone */
export function ImplantView() {
  return (
    <svg viewBox="0 0 80 110" width="96" height="132" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="implant-metal" x1="0" x2="1">
          <stop offset="0" stopColor="#7d8a97" />
          <stop offset="0.5" stopColor="#dfe6ec" />
          <stop offset="1" stopColor="#7d8a97" />
        </linearGradient>
      </defs>
      <rect x="4" y="56" width="72" height="54" rx="10" fill="#f3d3cf" />
      <rect x="4" y="68" width="72" height="42" rx="8" fill="#ead9c0" />
      {/* Threaded post */}
      <path d="M33 62h14l-1.5 38c-.4 6-10.6 6-11 0L33 62Z" fill="url(#implant-metal)" />
      <path d="M33.4 70h13.2M33.7 77h12.6M34 84h12M34.3 91h11.4M34.8 98h10.4" stroke="#5f6c79" strokeWidth="1.3" opacity="0.6" />
      {/* Abutment */}
      <rect x="35" y="54" width="10" height="9" rx="2" fill="url(#implant-metal)" />
      {/* Crown */}
      <path d={SIDE_CROWN} transform="translate(0 -4)" fill="#ffffff" stroke="#9fb3c6" strokeWidth="1.5" />
      <path d="M8 58c10 0 14-2 20-2M52 56c6 0 10 2 20 2" stroke="#e57368" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
