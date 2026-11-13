import { formatINR } from "../lib/format";
import Badge from "./Badge";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { title, thumbnail, price, mrp, discount, rating } = product;
  console.log({ product, price, mrp });

  return (

    <article className="flex flex-col rounded-xl border border-line bg-panel p-3 shadow-card transition hover:-translate-y-0.5 hover:shadow-pop">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="aspect-square w-full rounded-lg bg-line object-cover"
        />
        {discount > 0 && (
          <Badge className="absolute left-2 top-2">-{discount}%</Badge>
        )}
        <button
          type="button"
          aria-label="Save to wishlist"
          className="absolute right-2 top-2 grid size-9 place-items-center rounded-full bg-panel text-ink shadow-card"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
          </svg>
        </button>
      </div>

      <h3 className="mt-3 line-clamp-1 font-semibold">{title}</h3>
      <p className="text-sm text-muted">★ {rating}</p>
      <p className="mt-1 text-lg font-bold tabular-nums">
        {formatINR(price)}{" "}
        <span className="text-[13px] font-normal text-muted line-through">
          {formatINR(mrp)}
        </span>
      </p>

      <div className="mt-auto pt-3">
        <Button className="w-full">Add to cart</Button>
      </div>
    </article>
  );
};

export default ProductCard;