import { useProducts } from "../lib/useProducts";
import Container from "../components/Container";
import Hero from "../components/Home/Hero";
import ShopByBudget from "../components/Home/ShopByBudget";
import ShopByCategory from "../components/Home/ShopByCategory";
import DealOfTheDay from "../components/Home/DealOfTheDay";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import CompareBanner from "../components/Home/CompareBanner";
import TrustStrip from "../components/Home/TrustStrip";
import ErrorState from "../components/ErrorState";

const Home = () => {
  const { products, error } = useProducts();

  

if (error) {
  return (
    <Container className="py-12">
      <ErrorState />
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