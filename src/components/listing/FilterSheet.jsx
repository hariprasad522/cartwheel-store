import Button from "../Button";
import FilterPanel from "./FilterPanel";

const FilterSheet = ({ open, onClose, count }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* dark backdrop, click to close */}
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="filters-title"
        className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-panel p-5 shadow-pop"
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 id="filters-title" className="font-display text-xl font-bold">Filters</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="grid size-11 place-items-center rounded-lg"
          >
            ✕
          </button>
        </div>

        <FilterPanel />

        <div className="sticky bottom-0 -mx-5 -mb-5 mt-6 flex gap-3 border-t border-line bg-panel p-4">
          <Button variant="outline" className="flex-1">Clear</Button>
          <Button className="flex-1" onClick={onClose}>Show {count} products</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSheet;