const QuantityStepper = ({ value = 1, name = "" }) => {
  const suffix = name ? ` of ${name}` : "";

  return (
    <div className="flex items-center rounded-lg border border-line bg-panel">
      <button
        type="button"
        aria-label={`Decrease quantity${suffix}`}
        className="size-11 text-xl"
      >
        -
      </button>
      <output className="w-8 text-center font-bold">{value}</output>
      <button
        type="button"
        aria-label={`Increase quantity${suffix}`}
        className="size-11 text-xl"
      >
        +
      </button>
    </div>
  );
};

export default QuantityStepper;
