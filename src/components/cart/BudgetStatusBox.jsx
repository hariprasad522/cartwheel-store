import BudgetRing from "../BudgetRing";
import { getBudgetStatus } from "../../lib/budget";
import { formatINR } from "../../lib/format";

const TONES = {
  safe: { box: "bg-safe-soft", text: "text-safe" },
  warn: { box: "bg-marigold-soft", text: "text-warn" },
  over: { box: "bg-over/10", text: "text-over" },
};

const BudgetStatusBox = ({ subtotal, limit, size = 48 }) => {
  const status = getBudgetStatus(subtotal, limit);
  const percent = limit > 0 ? Math.round((subtotal / limit) * 100) : 0;
  const left = limit - subtotal;

  // Look up the heading by status. (-left is only used when status is "over".)
  const heading = {
    safe: "✓ Within budget",
    warn: "⚠ Close to your limit",
    over: `⚠ Over budget by ${formatINR(-left)}`,
  }[status];

  const detail =
    status === "over"
      ? "Remove an item or raise your budget."
      : `${percent}% of ${formatINR(limit)} used. ${formatINR(left)} left.`;

  return (
    <div role="status" className={`flex items-center gap-3 rounded-xl p-3.5 ${TONES[status].box}`}>
      <BudgetRing used={subtotal} limit={limit} size={size} />
      <div>
        <p className={`font-bold ${TONES[status].text}`}>{heading}</p>
        <p className="text-[13px] text-muted">{detail}</p>
      </div>
    </div>
  );
};

export default BudgetStatusBox;