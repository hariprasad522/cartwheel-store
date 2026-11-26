import { useState } from "react";
import { Link } from "react-router";
import { useProducts } from "../lib/useProducts";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/listing/FilterPanel";
import FilterSheet from "../components/listing/FilterSheet";
import SortSelect from "../components/listing/SortSelect";
import ErrorState from "../components/ErrorState";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import StateMessage from "../components/StateMessage";

const Products = () => {
  const { products, loading, error } = useProducts();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const shown = products.slice(0, 12); // design phase: no real filtering yet

  if (error) {
    return (
      <Container className="py-12">
        <ErrorState />
      </Container>
    );
  }

  return (
    <Container className="pt-7">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>{" "}
        / <span aria-current="page">Products</span>
      </nav>
      <h1 className="mb-6 mt-2 font-display text-4xl font-bold tracking-tight md:text-[44px]">
        All products
      </h1>

      <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-8">
        {/* desktop sidebar */}
        <aside
          aria-label="Filters"
          className="hidden self-start rounded-xl border border-line bg-panel p-5 shadow-card lg:block"
        >
          <FilterPanel />
          <p className="mb-2 mt-6 font-semibold">Sort by</p>
          <SortSelect className="w-full" />
        </aside>

        {/* results */}
        <section aria-label="Results">
          {/* mobile toolbar */}
          <div className="mb-4 flex items-center gap-3 lg:hidden">
            <Button variant="outline" onClick={() => setFiltersOpen(true)}>
              Filters (1)
            </Button>
            <SortSelect className="ml-auto" />
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-muted" aria-live="polite">
              Showing {shown.length} of {products.length} products
            </p>
            <Badge className="gap-1.5">
              Electronics
              <button type="button" aria-label="Remove Electronics filter">
                ×
              </button>
            </Badge>
          </div>

          {!loading && shown.length === 0 ? (
            <StateMessage
              as="h2"
              title="No results for “kurtaa”"
              text="Check the spelling or clear your filters."
              action={{ label: "Clear filters" }}
            />
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {loading
                ? Array.from({ length: 6 }, (_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))
                : shown.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}

          {/* <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {loading
              ? Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="h-80 animate-pulse rounded-xl bg-line" />
                ))
              : shown.map((p) => <ProductCard key={p.id} product={p} />)}
          </div> */}
        </section>
      </div>

      <FilterSheet
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        count={shown.length}
      />
    </Container>
  );
};

export default Products;
