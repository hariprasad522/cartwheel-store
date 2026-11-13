import { useState } from "react";
import { Link, NavLink } from "react-router";
import BudgetRing from "./BudgetRing";
import Container from "./Container";
import { CATEGORIES } from "../lib/categories";
import { formatINR } from "../lib/format";
import { BUDGET, COUNTS } from "../data/mock";

const topLink = ({ isActive }) =>
  isActive
    ? "font-bold underline decoration-marigold decoration-2 underline-offset-8"
    : "hover:text-muted";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const left = BUDGET.limit - BUDGET.used;

  return (
    <>
      {/* announcement bar */}
      <div className="bg-ink px-4 py-2 text-center text-[13px] text-panel">
        Free delivery above ₹999 ·{" "}
        <b className="text-marigold">New:</b> set a budget and watch it as you shop
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-panel">
        <Container className="flex flex-wrap items-center gap-3 py-3 md:flex-nowrap md:gap-5">
          {/* logo */}
          <Link to="/" className="flex shrink-0 items-center gap-2 font-display text-xl font-bold text-ink md:text-2xl">
            <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
              <circle cx="15" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="15" cy="15" r="4" className="fill-marigold" />
              <path d="M15 3v8M15 19v8M3 15h8M19 15h8" stroke="currentColor" strokeWidth="2" />
            </svg>
            CartWheel
          </Link>

          {/* search */}
          <form role="search" onSubmit={(e) => e.preventDefault()} className="order-last flex w-full md:order-none md:flex-1">
            <label htmlFor="search" className="sr-only">Search products</label>
            <input
              id="search"
              type="search"
              placeholder="Search kurtas, headphones, yoga mats…"
              className="min-h-11 min-w-0 flex-1 rounded-full border border-line bg-panel px-4 text-sm placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            />
          </form>

          {/* right side */}
          <div className="ml-auto flex items-center gap-3 md:gap-5">
            <nav aria-label="Main" className="hidden items-center gap-5 text-[15px] font-medium md:flex">
              <NavLink to="/wishlist" className={topLink}>Wishlist ({COUNTS.wishlist})</NavLink>
              <NavLink to="/compare" className={topLink}>Compare</NavLink>
            </nav>

            {/* budget chip */}
            <div className="hidden shrink-0 items-center gap-2 rounded-full bg-marigold-soft py-1 pr-3.5 pl-1 sm:flex">
              <BudgetRing used={BUDGET.used} limit={BUDGET.limit} size={36} />
              <span className="whitespace-nowrap text-[13px] font-semibold">{formatINR(left)} left</span>
            </div>

            <Link to="/cart" className="inline-flex min-h-11 items-center rounded-lg bg-ink px-4 text-sm font-semibold text-panel">
              Cart ({COUNTS.cart})
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Menu"
              className="grid size-11 place-items-center rounded-lg border border-line md:hidden"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </Container>

        {/* mobile menu */}
        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line md:hidden">
            <Container className="py-2">
              <div className="my-2 flex items-center gap-3 rounded-xl bg-marigold-soft p-3">
                <BudgetRing used={BUDGET.used} limit={BUDGET.limit} size={44} />
                <div>
                  <p className="font-semibold">{formatINR(left)} left</p>
                  <p className="text-[13px] text-muted">of {formatINR(BUDGET.limit)} budget</p>
                </div>
              </div>
              <Link to="/wishlist" className="block py-3 font-medium">Wishlist ({COUNTS.wishlist})</Link>
              <Link to="/compare" className="block border-t border-line py-3 font-medium">Compare</Link>
            </Container>
          </nav>
        )}

        {/* category row */}
        <Container>
          <nav aria-label="Categories" className="flex gap-7 overflow-x-auto whitespace-nowrap pb-3 text-sm font-medium">
            {CATEGORIES.map((c) => (
              <NavLink key={c.slug} to={`/category/${c.slug}`} className={topLink}>
                {c.label}
              </NavLink>
            ))}
            <NavLink to="/category/deals" className="font-bold text-deal">Deals</NavLink>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navbar;