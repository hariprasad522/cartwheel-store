const VARIANTS = {
  primary: "bg-ink text-panel hover:opacity-90",
  accent: "bg-marigold text-ink hover:brightness-95",
  outline: "border border-ink bg-panel text-ink hover:bg-page",
};

const Button = ({ variant = "primary", className = "", ...props }) => (
  <button
    type="button"
    className={`inline-flex min-h-11 items-center justify-center rounded-lg px-4.5 text-sm font-semibold transition disabled:opacity-40 ${VARIANTS[variant]} ${className}`}
    {...props}
  />
);

export default Button;