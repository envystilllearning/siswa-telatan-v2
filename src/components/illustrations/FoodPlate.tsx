export function FoodPlate({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="plate-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
      </defs>

      <circle cx="160" cy="120" r="88" fill="#FEF9C3" opacity="0.6" />
      <circle cx="160" cy="120" r="70" fill="url(#plate-rim)" />
      <circle cx="160" cy="120" r="54" fill="#FFFFFF" />

      <circle cx="140" cy="108" r="18" fill="#F97316" />
      <path d="M132 104 Q140 96 148 104 Q144 112 132 104 Z" fill="#FED7AA" />
      <circle cx="186" cy="104" r="14" fill="#16A34A" />
      <path d="M186 90 Q192 96 186 104 Q180 96 186 90 Z" fill="#4ADE80" />
      <circle cx="158" cy="142" r="15" fill="#EF4444" />
      <circle cx="154" cy="138" r="4" fill="#FCA5A5" />
      <rect x="190" y="128" width="26" height="16" rx="8" fill="#A16207" />
      <rect x="196" y="124" width="14" height="8" rx="4" fill="#D97706" />

      <g stroke="#A8A29E" strokeWidth="5" strokeLinecap="round">
        <line x1="38" y1="70" x2="38" y2="150" />
        <line x1="30" y1="70" x2="30" y2="92" />
        <line x1="46" y1="70" x2="46" y2="92" />
        <line x1="282" y1="66" x2="282" y2="150" />
        <ellipse cx="282" cy="66" rx="9" ry="14" fill="#A8A29E" stroke="none" />
      </g>

      <g stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" className="animate-steam">
        <path d="M120 52 Q124 44 120 36" />
      </g>
      <g stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" className="animate-steam" style={{ animationDelay: "0.8s" }}>
        <path d="M160 46 Q164 38 160 30" />
      </g>
      <g stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" className="animate-steam" style={{ animationDelay: "1.6s" }}>
        <path d="M200 52 Q204 44 200 36" />
      </g>

      <g fill="#FDE047" className="animate-float">
        <path d="M250 38 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4 z" />
      </g>
    </svg>
  );
}
