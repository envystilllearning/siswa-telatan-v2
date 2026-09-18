export function AthleteRunner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="run-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
        <linearGradient id="run-track" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
      </defs>

      <circle cx="258" cy="52" r="34" fill="url(#run-sky)" className="animate-pulse-soft" />
      <circle cx="258" cy="52" r="24" fill="#FFF7ED" opacity="0.55" />

      <rect x="16" y="150" width="288" height="54" rx="10" fill="url(#run-track)" />
      <g stroke="#FFF7ED" strokeWidth="4" strokeLinecap="round" opacity="0.9">
        <line x1="34" y1="168" x2="286" y2="168" className="animate-dash" />
      </g>
      <g stroke="#FFF7ED" strokeWidth="3" strokeLinecap="round" opacity="0.55">
        <line x1="34" y1="186" x2="286" y2="186" className="animate-dash" />
      </g>

      <g className="animate-float">
        <circle cx="150" cy="70" r="15" fill="#7C2D12" />
        <path
          d="M150 88 L150 122"
          stroke="#7C2D12"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M150 96 L176 108"
          stroke="#7C2D12"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M150 96 L124 104"
          stroke="#9A3412"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M150 122 L176 148"
          stroke="#7C2D12"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M150 122 L128 150"
          stroke="#9A3412"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle cx="180" cy="110" r="7" fill="#FED7AA" />
      </g>

      <g stroke="#F97316" strokeWidth="5" strokeLinecap="round" opacity="0.85">
        <line x1="92" y1="84" x2="72" y2="84" className="animate-dash" />
        <line x1="98" y1="102" x2="70" y2="102" className="animate-dash" />
        <line x1="92" y1="120" x2="76" y2="120" className="animate-dash" />
      </g>

      <g fill="#FED7AA" className="animate-float-delayed">
        <path d="M46 44 l4.5 9 9 4.5 -9 4.5 -4.5 9 -4.5 -9 -9 -4.5 9 -4.5 z" />
        <path d="M52 130 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" opacity="0.8" />
      </g>
    </svg>
  );
}
