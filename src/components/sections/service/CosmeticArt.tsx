/**
 * Small decorative illustrations for the Cosmetic Dentistry pages (aria-hidden).
 * Incisor: a front tooth seen from the front, with optional chip, resin, guides or shine.
 * IncisorProfile: the same tooth from the side, with a veneer shell and light rays.
 * TeethRow: five small teeth showing an alignment concern.
 * Arch / GuardArch: aligner trays and night guards seen from above.
 */

const ENAMEL = "#ffffff";
const EDGE = "#9fb3c6";
const GUM = "#f3d3cf";
const RESIN = "#5a96c4";

// Upper incisor, front view: narrower at the gum, wider and rounded at the biting edge
const INCISOR = "M9 6C9 2.5 17 1 30 1s21 1.5 21 5l3 56c.6 12-9.5 20-24 20S5.4 74 6 62L9 6Z";
// Same tooth with its lower-right corner chipped away
const INCISOR_CHIPPED = "M9 6C9 2.5 17 1 30 1s21 1.5 21 5l2.4 46L46 58l3 8-7 10c-4 4-8 6-12 6C15.5 82 5.4 74 6 62L9 6Z";
// The missing corner, rebuilt in resin
const CHIP = "M53.4 52 46 58l3 8-7 10c7-2 12.6-7.2 12-14l-.6-10Z";

export type IncisorKind =
  "plain" | "chipped" | "resin" | "rough" | "cure" | "polish" | "design" | "prep" | "veneer" | "dull";

export function Incisor({ kind = "plain", width = 60 }: { kind?: IncisorKind; width?: number }) {
  const chipped = kind === "chipped" || kind === "rough";
  const fill = kind === "dull" ? "#ece2c8" : ENAMEL;
  return (
    <svg viewBox="-12 -14 84 108" width={width} height={(width * 108) / 84} aria-hidden="true" focusable="false">
      {/* Gum line */}
      <path d="M-12 -14h84v20c-10-6-20 2-42 2S-2 0-12 6Z" fill={GUM} />
      {kind === "design" ? (
        // Smile design guides: proportions sketched around the tooth
        <g stroke={RESIN} strokeWidth="1" strokeDasharray="3 3" fill="none">
          <path d="M6 -10v100M54 -10v100M-8 82h76M-8 40h76" />
        </g>
      ) : null}
      <path d={chipped ? INCISOR_CHIPPED : INCISOR} fill={fill} stroke={EDGE} strokeWidth="1.5" />
      {kind === "chipped" ? (
        <path d={CHIP} fill="none" stroke={RESIN} strokeWidth="1.4" strokeDasharray="3 2.5" />
      ) : null}
      {kind === "rough" ? (
        // The surface gently roughened so the resin adheres
        <path d="M44 56l4 3M42 62l5 3M40 68l5 2M38 74l4 1" stroke={EDGE} strokeWidth="1.2" strokeLinecap="round" />
      ) : null}
      {kind === "resin" || kind === "cure" ? <path d={CHIP} fill={RESIN} opacity="0.75" /> : null}
      {kind === "cure" ? (
        // Curing light from above-right
        <g stroke="#7fb3d9" strokeWidth="2" strokeLinecap="round" opacity="0.9">
          <path d="M70 34 56 52M74 46 58 60M66 26 52 46" />
        </g>
      ) : null}
      {kind === "prep" ? (
        // A very thin layer of enamel at the front, shown as an inset outline
        <path
          d="M12.5 9c2-3 9-4 17.5-4s15.5 1 17.5 4l2.6 52.5c.5 10-8 16.5-20.1 16.5S9.4 71.5 9.9 61.5L12.5 9Z"
          fill="none"
          stroke={RESIN}
          strokeWidth="1.2"
          strokeDasharray="3 2.5"
        />
      ) : null}
      {kind === "veneer" || kind === "polish" || kind === "plain" ? (
        // Light catching the front surface
        <path d="M17 12c-2.5 16-2.5 34 0 50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
      ) : null}
      {kind === "veneer" ? <path d={INCISOR} fill="none" stroke={RESIN} strokeWidth="2.2" opacity="0.55" /> : null}
      {kind === "polish" || kind === "veneer" ? (
        <path d="M60 14l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="#f2c94c" />
      ) : null}
    </svg>
  );
}

/**
 * Incisor from the side (front surface on the left): a porcelain veneer bonded to
 * the front, with light reflecting off it the way it does off natural enamel.
 */
export function IncisorProfile() {
  return (
    <svg viewBox="0 0 220 240" width="220" height="240" aria-hidden="true" focusable="false">
      <defs>
        <marker
          id="ray-head"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0 10 5 0 10Z" fill="#f2c94c" />
        </marker>
      </defs>
      {/* Bone and gum around the root, on both sides of the tooth */}
      <path d="M78 0h124v78c-16 8-34 10-62 6s-46-2-62 4V0Z" fill="#ead9c0" />
      <path d="M78 64c16-6 34-8 62-4s46 2 62-4v26c-16 8-34 10-62 6s-46-2-62 4V64Z" fill={GUM} />
      {/* Tooth: root above, crown tapering to the biting edge */}
      <path
        d="M120 6c12-6 30-6 38 4l6 92c2 34-8 76-24 118-4 9-12 9-14 0-14-40-22-82-20-118L120 6Z"
        fill={ENAMEL}
        stroke={EDGE}
        strokeWidth="2"
      />
      {/* Veneer shell on the front surface */}
      <path
        d="M106 100c-2 36 6 78 20 118 1.6 4.6 5 6.6 8 5.6-3.4.8-10.8-1.8-13.6-9.6C106.6 176 98 136 99.6 100c.2-5 6.6-5 6.4 0Z"
        fill={RESIN}
        opacity="0.85"
      />
      {/* Light in, light reflected */}
      <path d="M18 64 96 126" stroke="#f2c94c" strokeWidth="2.5" markerEnd="url(#ray-head)" />
      <path d="M96 134 20 188" stroke="#f2c94c" strokeWidth="2.5" strokeDasharray="6 5" markerEnd="url(#ray-head)" />
    </svg>
  );
}

/** Five small front teeth showing one alignment concern */
export type RowKind = "crooked" | "crowded" | "gaps" | "bite" | "shifted" | "even";

const SMALL = "M0 0h16v22c0 6-3.6 9-8 9s-8-3-8-9V0Z";
const LOWER = "M0 31h16V9c0-6-3.6-9-8-9S0 3 0 9v22Z";

export function TeethRow({ kind, width = 140, dull = false }: { kind: RowKind; width?: number; dull?: boolean }) {
  const layouts: Record<RowKind, { x: number; r: number; y?: number }[]> = {
    even: [0, 20, 40, 60, 80].map((x) => ({ x, r: 0 })),
    crooked: [
      { x: 0, r: -10 },
      { x: 20, r: 8, y: 3 },
      { x: 40, r: -4 },
      { x: 60, r: 12, y: 2 },
      { x: 80, r: -8 },
    ],
    crowded: [
      { x: 6, r: 8 },
      { x: 20, r: -14, y: 4 },
      { x: 40, r: 0 },
      { x: 54, r: 16, y: 5 },
      { x: 74, r: -6 },
    ],
    gaps: [-8, 18, 40, 62, 88].map((x) => ({ x, r: 0 })),
    bite: [0, 20, 40, 60, 80].map((x) => ({ x, r: 0 })),
    shifted: [
      { x: 0, r: 0 },
      { x: 20, r: 0 },
      { x: 44, r: 10, y: 4 },
      { x: 60, r: 0 },
      { x: 80, r: 0 },
    ],
  };
  const teeth = layouts[kind];
  return (
    <svg viewBox="-14 -12 124 74" width={width} height={(width * 74) / 124} aria-hidden="true" focusable="false">
      <path d="M-14 -12h124v12c-20-6-40-2-62-2S-2-6-14 0Z" fill={GUM} />
      {kind === "shifted" ? (
        <path
          d={SMALL}
          transform="translate(40 0)"
          fill="none"
          stroke={RESIN}
          strokeWidth="1.2"
          strokeDasharray="3 2.5"
        />
      ) : null}
      {teeth.map((tooth, i) => (
        <path
          key={i}
          d={SMALL}
          transform={`translate(${tooth.x} ${tooth.y ?? 0}) rotate(${tooth.r} 8 14)`}
          fill={dull ? "#ece2c8" : ENAMEL}
          stroke={EDGE}
          strokeWidth="1.3"
        />
      ))}
      {kind === "bite"
        ? // Lower teeth sitting off-center from the upper teeth
          [10, 30, 50, 70].map((x) => (
            <path key={x} d={LOWER} transform={`translate(${x} 30)`} fill="#f5f8fb" stroke={EDGE} strokeWidth="1.3" />
          ))
        : null}
      {kind === "shifted" ? (
        <path d="M58 48h-12m0 0 4-3m-4 3 4 3" stroke={RESIN} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      ) : null}
    </svg>
  );
}

/** Upper arch seen from above */
const ARCH = "M14 92C10 46 30 12 70 12s60 34 56 80";

/** A series of clear aligners, each one slightly different */
export function AlignerStack() {
  return (
    <svg viewBox="0 0 140 150" width="280" height="300" aria-hidden="true" focusable="false">
      {[0, 1, 2, 3].map((i) => (
        <g
          key={i}
          transform={`translate(${i * 0} ${36 - i * 12}) scale(${1 - (3 - i) * 0.02})`}
          opacity={0.35 + i * 0.2}
        >
          <path d={ARCH} fill="none" stroke="#c1deee" strokeWidth="16" strokeLinecap="round" />
          <path d={ARCH} fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" opacity="0.85" />
          <path d={ARCH} fill="none" stroke="#5a96c4" strokeWidth="1" strokeDasharray="2 6" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

/** Clear aligner and metal braces, for the comparison table heads */
export function TrayIcon() {
  return (
    <svg viewBox="0 0 48 40" width="44" height="36" aria-hidden="true" focusable="false">
      <path d="M6 34C4 18 12 6 24 6s20 12 18 28" fill="none" stroke="#c1deee" strokeWidth="8" strokeLinecap="round" />
      <path d="M6 34C4 18 12 6 24 6s20 12 18 28" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function BracesIcon() {
  return (
    <svg viewBox="0 0 48 40" width="44" height="36" aria-hidden="true" focusable="false">
      {[4, 16, 28, 40].map((x) => (
        <path
          key={x}
          d={`M${x} 8h8v18c0 4-2 6-4 6s-4-2-4-6V8Z`}
          transform="translate(-2 0)"
          fill="#ffffff"
          stroke="#9fb3c6"
          strokeWidth="1.2"
        />
      ))}
      <path d="M2 17h44" stroke="#7d8a97" strokeWidth="1.6" />
      {[6, 18, 30, 42].map((x) => (
        <rect key={x} x={x - 2.5} y="14.5" width="5" height="5" rx="1" fill="#7d8a97" />
      ))}
    </svg>
  );
}

/** A night guard from above: a custom one hugs the teeth, a store-bought one sits loose and bulky */
export function GuardArch({ fit = "custom", width = 120 }: { fit?: "custom" | "loose"; width?: number }) {
  const custom = fit === "custom";
  return (
    <svg viewBox="0 0 140 110" width={width} height={(width * 110) / 140} aria-hidden="true" focusable="false">
      {/* Teeth along the arch */}
      {[
        [22, 88],
        [24, 66],
        [32, 46],
        [44, 30],
        [60, 20],
        [80, 20],
        [96, 30],
        [108, 46],
        [116, 66],
        [118, 88],
      ].map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x - 6}
          y={y - 6}
          width="12"
          height="12"
          rx="4"
          fill="#ffffff"
          stroke="#9fb3c6"
          strokeWidth="1.2"
        />
      ))}
      <path
        d="M14 100C8 52 30 10 70 10s62 42 56 90"
        fill="none"
        stroke={custom ? "#5a96c4" : "#9fb3c6"}
        strokeWidth={custom ? 22 : 34}
        strokeLinecap="round"
        opacity={custom ? 0.42 : 0.3}
        transform={custom ? undefined : "translate(0 6)"}
      />
    </svg>
  );
}

// Tooth crown in cross-section: enamel outside, dentin inside
const CROWN = "M14 6h36c5 0 8 3 8 8v34c0 16-11 28-26 28S6 64 6 48V14c0-5 3-8 8-8Z";

/** Enamel over dentin; with age the enamel thins and the darker dentin shows through */
export function EnamelSection({ thin }: { thin: boolean }) {
  return (
    <svg viewBox="0 0 64 84" width="84" height="110" aria-hidden="true" focusable="false">
      <path d={CROWN} fill={thin ? "#f4ecd6" : ENAMEL} stroke={EDGE} strokeWidth="1.4" />
      <path
        d={CROWN}
        transform={
          thin ? "translate(32 41) scale(0.86) translate(-32 -41)" : "translate(32 41) scale(0.62) translate(-32 -41)"
        }
        fill={thin ? "#ddc184" : "#f1e3bd"}
      />
    </svg>
  );
}

/** Crescent moon for the night-time sections */
export function Moon({ size = 96 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" focusable="false">
      <path d="M42 6a26 26 0 1 0 16 40A22 22 0 0 1 42 6Z" fill="#f4e7b8" />
    </svg>
  );
}
