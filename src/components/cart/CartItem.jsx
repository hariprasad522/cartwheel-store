import { Link } from "react-router";
import QuantityStepper from "../QuantityStepper";
import { formatINR } from "../../lib/format";

const CartItem = ({ product, qty }) => {
  const { id, title, thumbnail, price } = product;

  return (
    <li className="flex flex-wrap gap-4 rounded-xl border border-line bg-panel p-4 shadow-card sm:flex-nowrap sm:items-center">
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="size-20 shrink-0 rounded-lg bg-line object-cover sm:size-24"
      />

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 font-semibold">
          <Link to={`/product/${id}`} className="hover:underline">{title}</Link>
        </h3>
        <p className="text-sm text-muted">{formatINR(price)} each</p>
        <button
          type="button"
          aria-label={`Remove ${title} from cart`}
          className="mt-1 py-1.5 text-sm text-over underline"
        >
          Remove
        </button>
      </div>

      <div className="flex w-full items-center justify-between sm:w-auto sm:gap-6">
        <QuantityStepper value={qty} name={title} />
        <p className="min-w-20 text-right text-lg font-bold tabular-nums">
          {formatINR(price * qty)}
        </p>
      </div>
    </li>
  );
};

export default CartItem;