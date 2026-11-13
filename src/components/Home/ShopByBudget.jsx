import { Link } from "react-router";
import Section from "../Section";
import { formatINR } from "../../lib/format";

const TIERS = [999, 2500, 5000];

const base =
  "block rounded-xl border p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-pop";

const ShopByBudget = () => (
  <Section id="by-budget" title="Shop by budget">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {TIERS.map((amount) => {
        const dark = amount === 5000;
        return (
          <Link
            key={amount}
            to="/products"
            className={`${base} ${dark ? "border-ink bg-ink text-panel" : "border-line bg-panel"}`}
          >
            <p className={dark ? "opacity-70" : "text-muted"}>Under</p>
            <p className="font-display text-3xl font-bold md:text-4xl">{formatINR(amount)}</p>
          </Link>
        );
      })}

      <Link to="/products" className={`${base} border-dashed border-ink/40 bg-panel`}>
        <p className="text-muted">Your own</p>
        <p className="font-display text-3xl font-bold md:text-4xl">Custom →</p>
      </Link>
    </div>
  </Section>
);

export default ShopByBudget;