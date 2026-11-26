import { useProducts } from "../lib/useProducts";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import { COUNTS } from "../data/mock";
import ErrorState from "../components/ErrorState";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import StateMessage from "../components/StateMessage";

const Wishlist = () => {
  const { products, loading, error } = useProducts();

  if (error) {
    return (
      <Container className="py-12">
        <ErrorState />
      </Container>
    );
  }

  // Design phase: pretend the first few products are saved.
  const saved = products.slice(0, COUNTS.wishlist);
  if (!loading && saved.length === 0) {
    return (
      <Container className="py-12">
        <StateMessage
          title="Nothing saved yet"
          text="Tap the heart on any product to keep it here."
          action={{ label: "Browse products", to: "/products" }}
        />
      </Container>
    );
  }

  return (
    <Container className="pt-7">
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-[44px]">
        Wishlist
        <span className="ml-3 font-sans text-xl font-normal tracking-normal text-muted">
          {COUNTS.wishlist} saved
        </span>
      </h1>

      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }, (_, i) => <ProductCardSkeleton key={i} />)
          : saved.map((p) => <ProductCard key={p.id} product={p} saved />)}
      </div>
    </Container>
  );
};

export default Wishlist;
