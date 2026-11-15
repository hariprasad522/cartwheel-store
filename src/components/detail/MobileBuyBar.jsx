import Button from "../Button";
import { formatINR } from "../../lib/format";
import { purchaseSummary } from "../../lib/budget";
import { BUDGET } from "../../data/mock";

const MobileBuyBar = ({ price, disabled }) => {
  const { short } = purchaseSummary(price, BUDGET.used, BUDGET.limit);

  return (
    <div className="sticky bottom-0 z-30 -mx-4 mt-8 flex items-center gap-3 border-t border-line bg-panel px-4 py-3 shadow-pop md:-mx-12 md:px-12 lg:hidden">
      <p className="flex-1 text-[13px] font-semibold">{short}</p>
      <Button variant="accent" disabled={disabled}>
        Add to cart · {formatINR(price)}
      </Button>
    </div>
  );
};

export default MobileBuyBar;