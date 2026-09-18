export function StoryBook({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="book-cover" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      <circle cx="160" cy="112" r="88" fill="#EDE9FE" className="animate-pulse-soft" />

      <g className="animate-float">
        <path d="M70 150 Q70 90 118 84 L118 156 Q84 162 70 150 Z" fill="url(#book-cover)" />
        <path d="M250 150 Q250 90 202 84 L202 156 Q236 162 250 150 Z" fill="url(#book-cover)" />
        <path
          d="M118 84 Q160 96 202 84 L202 156 Q160 166 118 156 Z"
          fill="#F5F3FF"
        />
        <g stroke="#DDD6FE" strokeWidth="3" strokeLinecap="round">
          <line x1="130" y1="104" x2="190" y2="98" />
          <line x1="130" y1="118" x2="190" y2="112" />
          <line x1="130" y1="132" x2="190" y2="126" />
        </g>

        <g className="animate-page-flip">
          <path
            d="M160 92 Q118 84 118 84 L118 156 Q160 164 160 156 Z"
            fill="#FFFFFF"
            opacity="0.92"
          />
        </g>
      </g>

      <path
        d="M282 62 Q266 84 282 106"
        stroke="#7C3AED"
        strokeWidth="4"
        strokeLinecap="round"
        className="animate-float"
      />

      <g fill="#C4B5FD" className="animate-float-delayed">
        <path d="M64 44 l4.5 9 9 4.5 -9 4.5 -4.5 9 -4.5 -9 -9 -4.5 9 -4.5 z" />
        <path d="M258 158 l3.5 7 7 3.5 -7 3.5 -3.5 7 -3.5 -7 -7 -3.5 7 -3.5 z" />
        <path d="M104 48 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" opacity="0.85" />
      </g>

      <g fill="#FDE68A" className="animate-pulse-soft">
        <path d="M228 46 l5 10 10 5 -10 5 -5 10 -5 -10 -10 -5 10 -5 z" />
      </g>
    </svg>
  );
}
