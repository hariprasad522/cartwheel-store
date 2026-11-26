import { Link } from "react-router";

const VARIANTS = {
  primary: "bg-ink text-panel hover:opacity-90",
  accent: "bg-marigold text-ink hover:brightness-95",
  outline: "border border-ink bg-panel text-ink hover:bg-page",
};

const Button = ({ variant = "primary", className = "", to, ...props }) => {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-lg px-4.5 text-sm font-semibold transition disabled:opacity-40 ${VARIANTS[variant]} ${className}`;

  if (to) return <Link to={to} className={classes} {...props} />;

  return <button type="button" className={classes} {...props} />;
};

export default Button;