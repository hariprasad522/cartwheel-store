import { Link } from "react-router";
import { CATEGORIES } from "../../lib/categories";
import { formatINR } from "../../lib/format";

// Design phase: the middle product wins. The logic phase will calculate this.
const BEST_VALUE_INDEX = 1;

const categoryLabel = (slug) => CATEGORIES.find((c) => c.slug === slug)?.label ?? "";
const stockText = (p) => (!p.inStock ? "Out of stock" : p.lowStock ? "Low stock" : "In stock");

const CompareTable = ({ products }) => {
  const lowestPrice = Math.min(...products.map((p) => p.price));
  const topRating = Math.max(...products.map((p) => p.rating));

  // Each row: a label, and a function that turns one product into the cell content.
  const rows = [
    {
      label: "Price",
      value: (p) => (
        <>
          {formatINR(p.price)}
          {p.price === lowestPrice && <b> (lowest price)</b>}
        </>
      ),
    },
    {
      label: "Rating",
      value: (p) =>
        p.rating === topRating ? (
          <b>{p.rating} / 5 (best rating)</b>
        ) : (
          `${p.rating} / 5`
        ),
    },
    { label: "Stock", value: stockText },
    { label: "Category", value: (p) => categoryLabel(p.category) },
  ];

  const tint = (i) => (i === BEST_VALUE_INDEX ? "bg-marigold-soft" : "");

  return (
    <table className="w-full min-w-[640px] border-collapse text-left">
      <caption className="sr-only">Comparison of {products.length} products</caption>

      <thead>
        <tr>
          <td className="w-36 sm:w-44">
            <span className="sr-only">Feature</span>
          </td>
          {products.map((p, i) => (
            <th key={p.id} scope="col" className={`p-4 text-left align-top font-normal ${tint(i)}`}>
              <img src={p.thumbnail} alt="" className="mb-2 size-24 rounded-lg bg-line object-cover" />
              <Link to={`/product/${p.id}`} className="font-bold hover:underline">
                {p.title}
              </Link>
              {i === BEST_VALUE_INDEX && (
                <p className="mt-1 font-bold text-marigold-ink">✓ Best value</p>
              )}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th
              scope="row"
              className="sticky left-0 border-t border-line bg-panel px-4 py-3.5 text-left font-normal text-muted"
            >
              {row.label}
            </th>
            {products.map((p, i) => (
              <td key={p.id} className={`border-t border-line px-4 py-3.5 ${tint(i)}`}>
                {row.value(p)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompareTable;