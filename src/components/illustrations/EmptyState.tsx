export function EmptyState({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 160"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="110" cy="76" r="54" fill="#EEF2FF" className="animate-pulse-soft" />
      <g className="animate-float">
        <circle cx="98" cy="68" r="26" stroke="#6366F1" strokeWidth="7" fill="#FFFFFF" />
        <line
          x1="117"
          y1="88"
          x2="140"
          y2="112"
          stroke="#6366F1"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <text x="92" y="76" fontSize="18" fontWeight="700" fill="#6366F1" fontFamily="monospace">
          ?
        </text>
      </g>
      <g fill="#C7D2FE" className="animate-float-delayed">
        <path d="M52 42 l3.5 7 7 3.5 -7 3.5 -3.5 7 -3.5 -7 -7 -3.5 7 -3.5 z" />
        <path d="M172 96 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" />
        <path d="M158 30 l2.5 5 5 2.5 -5 2.5 -2.5 5 -2.5 -5 -5 -2.5 5 -2.5 z" />
      </g>
    </svg>
  );
}
