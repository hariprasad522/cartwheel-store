import { useProducts } from "../lib/useProducts";
import Container from "../components/Container";
import Hero from "../components/Home/Hero";
import ShopByBudget from "../components/Home/ShopByBudget";
import ShopByCategory from "../components/Home/ShopByCategory";
import DealOfTheDay from "../components/Home/DealOfTheDay";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import CompareBanner from "../components/Home/CompareBanner";
import TrustStrip from "../components/Home/TrustStrip";

const Home = () => {
  const { products, error } = useProducts();

  if (error) {
    return (
      <Container className="py-16">
        <p role="alert" className="font-semibold text-over">
          We could not load products. Please try again.
        </p>
      </Container>
    );
  }

  return (
    <>
      <Hero products={products.slice(0, 4)} />
      <ShopByBudget />
      <ShopByCategory products={products} />
      <DealOfTheDay product={products[1]} />
      <FeaturedProducts products={products.slice(4, 8)} />
      <CompareBanner products={products.slice(8, 11)} />
      <TrustStrip />
    </>
  );
};

export default Home;