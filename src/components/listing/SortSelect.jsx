const OPTIONS = [
  { value: "value", label: "Best value" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

const SortSelect = ({ className = "" }) => (
  <select
    aria-label="Sort by"
    defaultValue="value"
    className={`min-h-11 rounded-lg border border-line bg-panel px-3 text-sm font-medium ${className}`}
  >
    {OPTIONS.map((o) => (
      <option key={o.value} value={o.value}>{o.label}</option>
    ))}
  </select>
);

export default SortSelect;