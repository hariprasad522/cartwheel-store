const ProductCardSkeleton = () => (
  <div aria-hidden="true" className="rounded-xl border border-line bg-panel p-3 shadow-card">
    <div className="aspect-square animate-pulse rounded-lg bg-line" />
    <div className="mt-3 h-4 w-3/4 animate-pulse rounded bg-line" />
    <div className="mt-2 h-4 w-2/5 animate-pulse rounded bg-line" />
    <div className="mt-3 h-11 animate-pulse rounded-lg bg-line" />
  </div>
);

export default ProductCardSkeleton;