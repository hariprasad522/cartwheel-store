import { getBudgetStatus } from "../lib/budget";

// Full class names so Tailwind can see them (same trick as Button).
const STROKE = {
  safe: "stroke-safe",
  warn: "stroke-warn",
  over: "stroke-over",
};

const BudgetRing = ({ used, limit, size = 72 }) => {
  const percent = limit > 0 ? Math.round((used / limit) * 100) : 0;
  const status = getBudgetStatus(used, limit);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      role="img"
      aria-label={`${percent} percent of budget used`}
    >
      <circle
        cx="36"
        cy="36"
        r="30"
        fill="none"
        strokeWidth="8"
        className="stroke-line"
      />
      <circle
        cx="36"
        cy="36"
        r="30"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray={`${Math.min(percent, 100)} 100`}
        transform="rotate(-90 36 36)"
        className={STROKE[status]}
      />
      <text
        x="36"
        y="41"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        className="fill-ink"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default BudgetRing;
