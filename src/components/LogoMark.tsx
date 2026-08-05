export default function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* globe dome */}
      <path
        d="M10 46 C10 24 28 8 50 8 C72 8 90 24 90 46"
        stroke="#22c55e"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* meridians */}
      <path d="M50 8 L50 22" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 12 C34 20 34 28 32 34" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 12 C66 20 66 28 68 34" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
      <path d="M14 30 C24 24 76 24 86 30" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
      {/* two people */}
      <circle cx="32" cy="42" r="6" fill="#22c55e" />
      <circle cx="68" cy="42" r="6" fill="#2563eb" />
      {/* house outline */}
      <path
        d="M50 44 C38 52 26 58 22 68 C20 73 24 78 30 78"
        stroke="#22c55e"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 44 C62 52 74 58 78 68 C80 73 76 78 70 78"
        stroke="#2563eb"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="44" r="4.5" fill="#f97316" />
      {/* window */}
      <rect x="43" y="58" width="6" height="6" rx="1.5" fill="#f97316" />
      <rect x="51" y="58" width="6" height="6" rx="1.5" fill="#f97316" />
      <rect x="43" y="66" width="6" height="6" rx="1.5" fill="#f97316" />
      <rect x="51" y="66" width="6" height="6" rx="1.5" fill="#f97316" />
      {/* supporting hand */}
      <path
        d="M18 76 C18 90 33 96 50 96 C67 96 82 90 82 76 C82 70 76 68 71 71 C76 66 76 58 69 56 C64 59 63 66 67 71 C58 76 42 76 33 71 C37 66 36 59 31 56 C24 58 24 66 29 71 C24 68 18 70 18 76 Z"
        fill="#2563eb"
      />
    </svg>
  );
}
