import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Toast from "./components/Toast";
import { Link } from "react-router";

function App() {
  return (
    <div className="bg-page min-h-screen text-ink">
      {/* <div className="fixed right-4 top-4 z-50 grid max-w-[calc(100vw-2rem)] gap-2">
        <Toast
          action={
            <Link to="/cart" className="underline">
              View
            </Link>
          }
        >
          ✓ Added to cart
        </Toast>
        <Toast
          action={
            <button type="button" className="underline">
              Undo
            </button>
          }
        >
          <span className="text-marigold">♥</span> Saved to wishlist
        </Toast>
      </div> */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
