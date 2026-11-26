import { Link, useParams } from "react-router";
import { useProducts } from "../lib/useProducts";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Container from "../components/Container";
import QuantityStepper from "../components/QuantityStepper";
import Stars from "../components/Stars";
import BudgetCheck from "../components/detail/BudgetCheck";
import Gallery from "../components/detail/Gallery";
import MobileBuyBar from "../components/detail/MobileBuyBar";
import { CATEGORIES } from "../lib/categories";
import { formatINR } from "../lib/format";
import ErrorState from "../components/ErrorState";
import StateMessage from "../components/StateMessage";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();


if (error) {
  return (
    <Container className="py-12">
      <ErrorState />
    </Container>
  );
}

  if (loading) {
    return (
      <Container className="grid gap-8 py-10 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-square animate-pulse rounded-xl bg-line" />
        <div className="h-96 animate-pulse rounded-xl bg-line" />
      </Container>
    );
  }

  // useParams gives a STRING ("7"); product ids are NUMBERS (7). Convert first.
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
  return (
    <Container className="py-12">
      <StateMessage
        title="Product not found"
        text="It may have been removed or the link is wrong."
        action={{ label: "Browse products", to: "/products" }}
      />
    </Container>
  );
}

  const categoryLabel = CATEGORIES.find((c) => c.slug === product.category)?.label;
  const stock = !product.inStock
    ? { text: "Out of stock", className: "text-over" }
    : product.lowStock
      ? { text: "Only a few left", className: "text-warn" }
      : { text: "✓ In stock", className: "text-safe" };

  const specs = [
    { label: "Brand", value: product.brand },
    { label: "Warranty", value: product.warranty },
    { label: "Shipping", value: product.shipping },
    { label: "Returns", value: product.returnPolicy },
  ].filter((row) => row.value);

  return (
    <Container className="pt-7">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link to="/" className="hover:text-ink">Home</Link> /{" "}
        <Link to="/products" className="hover:text-ink">Products</Link> /{" "}
        <span aria-current="page">{product.title}</span>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
        <Gallery
          images={product.images.length ? product.images : [product.thumbnail]}
          title={product.title}
        />

        <div>
          {categoryLabel && <Badge>{categoryLabel}</Badge>}
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-5xl">
            {product.title}
          </h1>

          <p className="mt-3 flex flex-wrap items-center gap-x-2 text-muted">
            <Stars rating={product.rating} />
            {product.rating} · {product.reviewCount} reviews ·
            <b className={stock.className}>{stock.text}</b>
          </p>

          <p className="my-4 flex flex-wrap items-baseline gap-3 text-4xl font-bold tabular-nums lg:text-[40px]">
            {formatINR(product.price)}
            <span className="text-lg font-normal text-muted line-through">
              {formatINR(product.mrp)}
            </span>
            {product.discount > 0 && <Badge>Save {product.discount}%</Badge>}
          </p>

          <p className="text-muted">{product.description}</p>

          {specs.length > 0 && (
            <dl className="my-4 rounded-xl border border-line bg-panel px-5 shadow-card">
              {specs.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between gap-4 border-b border-line py-2.5 last:border-b-0"
                >
                  <dt className="text-muted">{row.label}</dt>
                  <dd className="text-right font-semibold">{row.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="flex items-center gap-3">
            <QuantityStepper />
            <div className="hidden flex-1 lg:block">
              <Button variant="accent" className="w-full" disabled={!product.inStock}>
                Add to cart
              </Button>
            </div>
            <Button variant="outline">Compare</Button>
          </div>

          <BudgetCheck price={product.price} />
        </div>
      </div>

      <MobileBuyBar price={product.price} disabled={!product.inStock} />
    </Container>
  );
};

export default ProductDetail;