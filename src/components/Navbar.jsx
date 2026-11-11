import { useState } from "react";
import { Link } from "react-router";

const categories = [
  "Electronics",
  "Fashion",
  "Home",
  "Fitness",
  "Beauty",
  "Deals",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b border-line bg-panel">
        <div className="mx-auto px-4 py-3 max-w-6xl flex flex-wrap items-center gap-3 md:gap-5 md:px-6">
          {/* logo */}
          <Link
            to="/"
            className="font-display flex items-center gap-2 text-xl font-bold text-brand md:text-2xl"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="2" className="fill-marigold stroke-marigold" />
              <path d="M12 3v7M12 14v7M3 12h7M14 12h7" />
            </svg>
            CartWheel
          </Link>

          {/* Search */}
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="order-last flex w-full md:flex-1 md:order-0"
          >
            <label htmlFor="search" className="sr-only">
              Search Products
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search..."
              className="min-w-0 flex-1 text-muted rounded-l-lg border border-r-0 px-3 py-2 border-line focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            />
            <button
              type="button"
              className="rounded-r-lg bg-brand text-white px-4 py-2 font-bold"
            >
              Search
            </button>
          </form>

          {/* Links, cart, menu button */}
          <div className="ml-auto flex items-center gap-3 md:gap-5">
            <nav
              aria-label="Main"
              className="hidden items-center gap-5 font-medium md:flex"
            >
              <Link to="/wishlist">Wishlist</Link>
              <Link to="/compare">Compare</Link>
            </nav>

            <Link
              to="/cart"
              className="rounded-lg bg-brand px-4 py-2 font-bold text-white"
            >
              Cart (0)
            </Link>

            <button
              onClick={() => {
                setOpen(!open);
                console.log("button clicked");
              }}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Menu"
              className="flex items-center justify-center h-11 w-11 rounded-lg border border-line md:hidden"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Phone Menu  */}
        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="flex flex-col border-t border-line px-4 py-2 md:hidden"
          >
            <Link to="/wishlist" className="font-medium py-3">
              Wishlist
            </Link>
            <Link to="/compare" className="font-medium py-3">
              Compare
            </Link>
          </nav>
        )}

        {/* Category row */}
        <nav className="mx-auto max-w-6xl overflow-x-auto px-4 pb-3 text-sm flex gap-6 font-medium whitespace-nowrap md:px-6">
          {categories.map((category) => (
            <Link
              to={`/category/${category.toLowerCase()}`}
              key={category}
              className={category === "Deals" ? "text-deal" : ""}
            >
              {category}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
