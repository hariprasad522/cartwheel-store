import BudgetRing from "../BudgetRing";
import { CATEGORIES } from "../../lib/categories";
import { formatINR } from "../../lib/format";
import { BUDGET } from "../../data/mock";

const FilterPanel = () => (
  <div className="space-y-6">
    {/* categories */}
    <fieldset>
      <legend className="mb-1 font-semibold">Category</legend>
      {CATEGORIES.map((c) => (
        <label key={c.slug} className="flex min-h-10 cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={c.slug === "electronics"}
            className="size-5 accent-ink"
          />
          {c.label}
        </label>
      ))}
    </fieldset>

    {/* price */}
    <label className="block">
      <span className="font-semibold">Max price: {formatINR(5000)}</span>
      <input
        type="range"
        min="0"
        max="10000"
        step="100"
        defaultValue="5000"
        className="mt-3 w-full accent-marigold"
      />
    </label>

    {/* budget fit */}
    <div className="flex items-center gap-3 rounded-lg bg-marigold-soft p-3">
      <BudgetRing used={BUDGET.used} limit={BUDGET.limit} size={56} />
      <label className="flex cursor-pointer items-start gap-2 text-[13px] text-muted">
        <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-ink" />
        Only show items that fit my budget
      </label>
    </div>
  </div>
);

export default FilterPanel;