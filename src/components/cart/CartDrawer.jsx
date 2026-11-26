import { Link } from "react-router";
import { useProducts } from "../../lib/useProducts";
import BudgetStatusBox from "./BudgetStatusBox";
import { formatINR } from "../../lib/format";
import { BUDGET } from "../../data/mock";
import Button from "../Button";

const CartDrawer = ({ onClose }) => {
  const { products } = useProducts();
  const items = products.slice(0, 2).map((product) => ({ product, qty: 1 }));
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-md animate-[slide-in_0.25s_ease-out] flex-col bg-panel p-6 shadow-pop motion-reduce:animate-none"
      >
        <div className="flex items-center justify-between">
          <h2 id="cart-drawer-title" className="font-display text-[28px] font-bold">
            Your cart ({items.length})
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="grid size-11 place-items-center rounded-lg border border-ink text-xl"
          >
            ×
          </button>
        </div>

        <ul className="mt-5 flex-1 space-y-3 overflow-y-auto">
          {items.map(({ product, qty }) => (
            <li key={product.id} className="flex items-center gap-3 rounded-xl border border-line bg-panel p-3">
              <img src={product.thumbnail} alt="" className="size-18 shrink-0 rounded-lg bg-line object-cover" />
              <div className="min-w-0">
                <p className="line-clamp-2 font-semibold">{product.title}</p>
                <p className="text-[13px] text-muted">{formatINR(product.price)} · Qty {qty}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-4 flex justify-between">
          <span>Subtotal</span>
          <b className="tabular-nums">{formatINR(subtotal)}</b>
        </p>

        <div className="my-3">
          <BudgetStatusBox subtotal={subtotal} limit={BUDGET.limit} size={44} />
        </div>

        <Button to="/cart" onClick={onClose} className="w-full">Review cart</Button>
      </div>
    </div>
  );
};

export default CartDrawer;