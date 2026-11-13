import Badge from "../Badge";
import BudgetRing from "../BudgetRing";
import Button from "../Button";
import Container from "../Container";
import { formatINR } from "../../lib/format";

const POPULAR = [999, 2500, 5000, 10000];

const Hero = ({ products }) => (
  <Container className="grid items-center gap-10 py-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:py-14">
    {/* left column */}
    <div>
      <Badge>Budget-aware shopping</Badge>

      <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight lg:text-[68px]">
        Shop smarter.
        <br />
        Spend on <span className="rounded-lg bg-marigold px-2.5">purpose.</span>
      </h1>

      <p className="mt-4 max-w-md text-lg text-muted">
        Set a budget, compare up to three products and see every rupee before you
        check out.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-6 flex w-full max-w-lg items-center gap-2 rounded-xl border border-line bg-panel py-2 pr-2 pl-5 shadow-card focus-within:ring-2 focus-within:ring-ink"
      >
        <span aria-hidden="true" className="text-2xl font-bold">₹</span>
        <label htmlFor="budget-input" className="sr-only">Your budget in rupees</label>
        <input
          id="budget-input"
          inputMode="numeric"
          defaultValue="5000"
          className="min-w-0 flex-1 bg-transparent text-xl outline-none"
        />
        <Button variant="accent">Set my budget</Button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] text-muted">
        Popular:
        {POPULAR.map((amount) => (
          <button
            key={amount}
            type="button"
            className="min-h-9 rounded-full border border-line bg-panel px-3 font-medium text-ink hover:border-ink"
          >
            {formatINR(amount)}
          </button>
        ))}
      </div>
    </div>

    {/* right column */}
    <div className="relative grid grid-cols-2 gap-3 rounded-xl border border-line bg-panel p-4 shadow-card">
      {products.length
        ? products.map((p) => (
            <img
              key={p.id}
              src={p.thumbnail}
              alt={p.title}
              className="aspect-square w-full rounded-lg bg-line object-cover"
            />
          ))
        : Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="aspect-square animate-pulse rounded-lg bg-line" />
          ))}

      <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 shadow-pop lg:-left-7 lg:bottom-9">
        <BudgetRing used={3798} limit={5000} size={64} />
        <div>
          <p className="font-bold">{formatINR(3798)} of {formatINR(5000)}</p>
          <p className="text-[13px] text-muted">{formatINR(1202)} left</p>
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;