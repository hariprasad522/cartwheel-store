import { Link } from "react-router";
import Section from "../Section";
import { CATEGORIES } from "../../lib/categories";

const ShopByCategory = ({ products }) => (
  <Section id="by-category" title="Shop by category">
    <div className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
      {CATEGORIES.map((c) => {
        const sample = products.find((p) => p.category === c.slug);
        return (
          <Link
            key={c.slug}
            to={`/category/${c.slug}`}
            className="rounded-xl border border-line bg-panel p-2.5 text-center shadow-card transition hover:-translate-y-0.5 hover:shadow-pop"
          >
            {sample ? (
              <img src={sample.thumbnail} alt="" loading="lazy" className="aspect-square w-full rounded-lg bg-line object-cover" />
            ) : (
              <div className="aspect-square w-full rounded-lg bg-line" />
            )}
            <p className="mt-2 text-sm font-semibold md:text-base">{c.label}</p>
          </Link>
        );
      })}
    </div>
  </Section>
);

export default ShopByCategory;