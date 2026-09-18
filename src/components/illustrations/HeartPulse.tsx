export function HeartPulse({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="heart-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
      </defs>

      <circle cx="160" cy="104" r="86" fill="#DCFCE7" className="animate-pulse-soft" />
      <circle cx="160" cy="104" r="66" fill="#BBF7D0" opacity="0.7" className="animate-pulse-soft" />

      <path
        d="M160 148 C120 116 108 92 122 76 C134 62 154 66 160 82 C166 66 186 62 198 76 C212 92 200 116 160 148 Z"
        fill="url(#heart-grad)"
        className="animate-pulse-soft"
        style={{ transformOrigin: "160px 110px" }}
      />

      <path
        d="M40 104 L86 104 L98 78 L116 130 L132 62 L148 122 L160 104 L280 104"
        stroke="#15803D"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-ecg"
      />

      <g transform="translate(244 44) rotate(35)" className="animate-float">
        <rect x="-7" y="-26" width="14" height="52" rx="6" fill="#166534" />
        <rect x="-16" y="-34" width="32" height="10" rx="4" fill="#15803D" />
        <rect x="-16" y="24" width="32" height="10" rx="4" fill="#15803D" />
      </g>

      <g fill="#86EFAC" className="animate-float-delayed">
        <path d="M58 44 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4 z" />
        <path d="M262 160 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" opacity="0.85" />
      </g>
    </svg>
  );
}
