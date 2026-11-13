import Badge from "../Badge";
import Button from "../Button";
import Container from "../Container";
import { formatINR } from "../../lib/format";

const DealOfTheDay = ({ product }) => {
  if (!product) return null; // still loading: render nothing

  return (
    <Container className="mt-14">
      <div className="grid overflow-hidden rounded-xl border border-line bg-marigold-soft shadow-card md:grid-cols-2">
        <div className="p-8 md:p-10">
          <Badge tone="ink">Deal of the day · ends in 06:42:15</Badge>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-[40px]">
            {product.title}
          </h2>
          <p className="mt-2 text-3xl font-bold tabular-nums">
            {formatINR(product.price)}{" "}
            <span className="text-[13px] font-normal text-muted line-through">
              {formatINR(product.mrp)}
            </span>
          </p>
          <p className="mt-2 line-clamp-2 text-muted">{product.description}</p>
          <Button className="mt-5">Grab the deal</Button>
        </div>
        <div className="p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="aspect-square w-full rounded-lg bg-panel object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default DealOfTheDay;