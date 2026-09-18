export function GraffitiWall({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="320" height="220" rx="14" fill="#FDF2F8" />

      <g fill="#FBCFE8" opacity="0.6">
        <rect x="12" y="14" width="60" height="24" rx="3" />
        <rect x="76" y="14" width="60" height="24" rx="3" />
        <rect x="140" y="14" width="60" height="24" rx="3" />
        <rect x="204" y="14" width="60" height="24" rx="3" />
        <rect x="268" y="14" width="40" height="24" rx="3" />
        <rect x="12" y="42" width="44" height="24" rx="3" />
        <rect x="60" y="42" width="60" height="24" rx="3" />
        <rect x="124" y="42" width="60" height="24" rx="3" />
        <rect x="188" y="42" width="60" height="24" rx="3" />
        <rect x="252" y="42" width="56" height="24" rx="3" />
        <rect x="12" y="70" width="60" height="24" rx="3" />
        <rect x="76" y="70" width="60" height="24" rx="3" />
        <rect x="140" y="70" width="60" height="24" rx="3" />
        <rect x="204" y="70" width="60" height="24" rx="3" />
        <rect x="268" y="70" width="40" height="24" rx="3" />
        <rect x="12" y="98" width="44" height="24" rx="3" />
        <rect x="60" y="98" width="60" height="24" rx="3" />
        <rect x="124" y="98" width="60" height="24" rx="3" />
        <rect x="188" y="98" width="60" height="24" rx="3" />
        <rect x="252" y="98" width="56" height="24" rx="3" />
      </g>

      <g>
        <circle cx="110" cy="120" r="26" fill="#EC4899" className="animate-splash" />
        <circle cx="150" cy="98" r="14" fill="#F472B6" className="animate-splash" style={{ animationDelay: "0.5s" }} />
        <circle cx="182" cy="132" r="20" fill="#DB2777" className="animate-splash" style={{ animationDelay: "1s" }} />
        <circle cx="212" cy="106" r="10" fill="#F9A8D4" className="animate-splash" style={{ animationDelay: "1.5s" }} />
      </g>

      <text
        x="160"
        y="132"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="44"
        fontWeight="800"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        transform="rotate(-6 160 120)"
      >
        Aa
      </text>

      <g className="animate-float">
        <rect x="236" y="128" width="26" height="52" rx="7" fill="#831843" />
        <rect x="241" y="118" width="16" height="14" rx="4" fill="#BE185D" />
        <path d="M249 118 L249 100" stroke="#EC4899" strokeWidth="7" strokeLinecap="round" className="animate-pulse-soft" />
        <circle cx="249" cy="96" r="7" fill="#F472B6" />
      </g>

      <g className="animate-float-delayed">
        <path d="M56 150 q10 -22 26 0 q-12 14 -26 0 z" fill="#F472B6" />
        <path d="M74 150 q8 -16 20 0 q-10 10 -20 0 z" fill="#EC4899" />
      </g>

      <g fill="#F9A8D4" className="animate-float">
        <path d="M50 40 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4 z" />
        <path d="M282 60 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" />
      </g>
    </svg>
  );
}
