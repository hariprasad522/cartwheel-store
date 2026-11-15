import BudgetRing from "../BudgetRing";
import { formatINR } from "../../lib/format";
import { purchaseSummary } from "../../lib/budget";
import { BUDGET } from "../../data/mock";

const BudgetCheck = ({ price }) => {
  const { status, after, left, title } = purchaseSummary(price, BUDGET.used, BUDGET.limit);

  const detail =
    status === "over"
      ? `This is ${formatINR(-left)} more than your ${formatINR(BUDGET.limit)} budget.`
      : `Uses ${formatINR(price)} of your ${formatINR(BUDGET.limit)} budget. ${formatINR(left)} would be left.`;

  return (
    <div
      className={`mt-5 flex items-center gap-4 rounded-xl border border-line p-4 shadow-card ${
        status === "over" ? "bg-over/10" : "bg-marigold-soft"
      }`}
    >
      <BudgetRing used={after} limit={BUDGET.limit} size={56} />
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-muted">{detail}</p>
      </div>
    </div>
  );
};

export default BudgetCheck;