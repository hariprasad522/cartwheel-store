import { useProducts } from "../lib/useProducts";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import { COUNTS } from "../data/mock";

const Wishlist = () => {
  const { products, loading, error } = useProducts();

  if (error) {
    return (
      <Container className="py-16">
        <p role="alert" className="font-semibold text-over">
          We could not load your wishlist. Please try again.
        </p>
      </Container>
    );
  }

  // Design phase: pretend the first few products are saved.
  const saved = products.slice(0, COUNTS.wishlist);

  return (
    <Container className="pt-7">
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-[44px]">
        Wishlist
        <span className="ml-3 text-xl font-normal text-muted">{COUNTS.wishlist} saved</span>
      </h1>

      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="h-80 animate-pulse rounded-xl bg-line" />
            ))
          : saved.map((p) => <ProductCard key={p.id} product={p} saved />)}
      </div>
    </Container>
  );
};

export default Wishlist;