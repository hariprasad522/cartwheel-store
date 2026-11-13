import ProductCard from "../ProductCard";
import Section from "../Section";

const FeaturedProducts = ({ products }) => (
  <Section id="featured" title="Featured products">
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {products.length
        ? products.map((p) => <ProductCard key={p.id} product={p} />)
        : Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="h-72 animate-pulse rounded-xl bg-line" />
          ))}
    </div>
  </Section>
);

export default FeaturedProducts;