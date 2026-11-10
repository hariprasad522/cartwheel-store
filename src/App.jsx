import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Wishlist from "./pages/Wishlist"
import Compare from "./pages/Compare";
import Cart from "./pages/Cart"
import Category from "./pages/Category"
import NotFound from "./pages/NotFound"
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="bg-page min-h-screen text-ink">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/compare" element={<Compare/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/category/:slug" element={<Category/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
