import { useProducts } from "../lib/useProducts";
import Container from "../components/Container";
import CompareTable from "../components/compare/CompareTable";

const Compare = () => {
  const { products, loading, error } = useProducts();

  if (error) {
    return (
      <Container className="py-16">
        <p role="alert" className="font-semibold text-over">
          We could not load products to compare. Please try again.
        </p>
      </Container>
    );
  }

  return (
    <Container className="pt-7">
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-[44px]">
        Compare products
      </h1>
      <p className="mt-2 text-muted">
        Up to 3 products. Best value is marked with text, not colour alone.
      </p>

      <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-panel shadow-card">
        {loading ? (
          <div className="h-72 animate-pulse bg-line" />
        ) : (
          <CompareTable products={products.slice(0, 3)} />
        )}
      </div>
    </Container>
  );
};

export default Compare;