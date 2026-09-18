export function StadiumEvent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="stad-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="stad-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="320" height="220" rx="14" fill="url(#stad-sky)" />

      <g fill="#1E3A8A" opacity="0.18">
        <circle cx="40" cy="40" r="6" className="animate-pulse-soft" />
        <circle cx="290" cy="34" r="5" className="animate-pulse-soft" />
        <circle cx="270" cy="120" r="4" className="animate-pulse-soft" />
        <circle cx="30" cy="120" r="5" className="animate-pulse-soft" />
        <circle cx="160" cy="24" r="4" className="animate-pulse-soft" />
      </g>

      <path
        d="M40 170 Q40 96 160 96 Q280 96 280 170 Z"
        fill="url(#stad-body)"
      />
      <g fill="#DBEAFE">
        <path d="M62 170 Q62 116 160 116 Q258 116 258 170 Z" opacity="0.9" />
      </g>
      <g fill="#2563EB" opacity="0.55">
        <rect x="86" y="140" width="10" height="8" rx="2" />
        <rect x="108" y="132" width="10" height="8" rx="2" />
        <rect x="132" y="128" width="10" height="8" rx="2" />
        <rect x="156" y="126" width="10" height="8" rx="2" />
        <rect x="180" y="128" width="10" height="8" rx="2" />
        <rect x="204" y="132" width="10" height="8" rx="2" />
        <rect x="226" y="140" width="10" height="8" rx="2" />
      </g>

      <rect x="0" y="170" width="320" height="34" fill="#166534" rx="0" />
      <g stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
        <line x1="40" y1="196" x2="286" y2="196" className="animate-dash" />
      </g>

      <g>
        <line x1="52" y1="170" x2="52" y2="106" stroke="#94A3B8" strokeWidth="4" />
        <path d="M54 108 L96 118 L54 128 Z" fill="#F97316" className="animate-flag" />
      </g>

      <g transform="translate(196 26)">
        <rect x="0" y="0" width="86" height="46" rx="8" fill="#0F172A" />
        <text
          x="43"
          y="30"
          textAnchor="middle"
          fill="#4ADE80"
          fontSize="20"
          fontWeight="700"
          fontFamily="monospace"
          className="animate-pulse-soft"
        >
          2-1
        </text>
        <circle cx="86" cy="10" r="4" fill="#F87171" className="animate-pulse-soft" />
      </g>

      <g fill="#FDE68A" className="animate-float">
        <path d="M120 54 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4 z" />
      </g>
      <g fill="#FCA5A5" className="animate-float-delayed">
        <path d="M232 78 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" />
      </g>
    </svg>
  );
}
