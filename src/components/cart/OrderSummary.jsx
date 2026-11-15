import Button from "../Button";
import BudgetStatusBox from "./BudgetStatusBox";
import { formatINR } from "../../lib/format";
import { BUDGET } from "../../data/mock";

const OrderSummary = ({ subtotal }) => {
  
  return (
    <aside
      aria-label="Order summary"
      className="self-start rounded-xl border border-line bg-panel p-6 shadow-card"
    >
      <h2 className="font-display text-2xl font-bold">Summary</h2>

      <p className="my-4 flex items-center justify-between">
        <span>Subtotal</span>
        <b className="text-lg tabular-nums">{formatINR(subtotal)}</b>
      </p>

      <BudgetStatusBox subtotal={subtotal} limit={BUDGET.limit} />

      <Button variant="accent" className="mt-4 w-full">
        Checkout
      </Button>
    </aside>
  );
};

export default OrderSummary;
