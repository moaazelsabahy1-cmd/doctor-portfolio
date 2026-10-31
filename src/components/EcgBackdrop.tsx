export function EcgBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-40 ${className}`}
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        className="ecg-path"
        d="M0 220 H140 L170 220 L190 80 L230 320 L260 220 H360 L390 220 L410 120 L450 300 L480 220 H1200"
        fill="none"
        stroke="#2A9D8F"
        strokeWidth="1.6"
      />
      <path
        d="M0 220 H1200"
        fill="none"
        stroke="#C4A35A"
        strokeWidth="0.4"
        opacity="0.35"
      />
    </svg>
  );
}
