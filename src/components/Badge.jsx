const TONES = {
  marigold: "bg-marigold-soft text-marigold-ink",
  ink: "bg-ink text-panel",
  safe: "bg-safe-soft text-safe",
};

const Badge = ({ tone = "marigold", className = "", children }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${TONES[tone]} ${className}`}
  >
    {children}
  </span>
);

export default Badge;