import { formatINR } from "./format";

export const getBudgetStatus = (used, limit) => {
  if (!limit) return "safe";
  const ratio = used / limit;
  if (ratio > 1) return "over";
  if (ratio > 0.8) return "warn";
  return "safe";
};

const TITLES = {
  safe: "✓ Budget check: within limit",
  warn: "⚠ Budget check: above 80% used",
  over: "⚠ Budget check: over budget",
};

// "What happens to my budget if I buy this?"
export const purchaseSummary = (price, used, limit) => {
  const after = used + price;
  const status = getBudgetStatus(after, limit);
  const left = limit - after;

  const short =
    status === "over"
      ? `Over budget by ${formatINR(-left)}`
      : `${status === "warn" ? "Close to your limit" : "Within budget"}. ${formatINR(left)} left.`;

  return { status, after, left, title: TITLES[status], short };
};
