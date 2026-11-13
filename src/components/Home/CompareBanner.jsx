import Badge from "../Badge";
import Button from "../Button";
import Container from "../Container";
import { formatINR } from "../../lib/format";

const CompareBanner = ({ products }) => (
  <Container className="mt-14">
    <div className="grid items-center gap-8 rounded-xl border border-line bg-panel p-6 shadow-card md:p-10 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Can’t decide? Compare three.
        </h2>
        <p className="mt-3 text-muted">
          Price, rating, stock and more side by side, with the best value marked in words.
        </p>
        <Button variant="accent" className="mt-5">Start comparing</Button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {products.map((p, i) => (
          <div
            key={p.id}
            className={`rounded-xl border bg-panel p-2.5 ${i === 1 ? "border-2 border-marigold" : "border-line"}`}
          >
            <img src={p.thumbnail} alt={p.title} loading="lazy" className="aspect-square w-full rounded-lg bg-line object-cover" />
            <p className="mt-2 font-bold tabular-nums">{formatINR(p.price)}</p>
            {i === 1 && <Badge>Best value</Badge>}
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default CompareBanner;