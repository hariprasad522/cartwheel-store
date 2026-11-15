import { useProducts } from "../lib/useProducts";
import Container from "../components/Container";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";

const Cart = () => {
  const { products, loading, error } = useProducts();

  if (error) {
    return (
      <Container className="py-16">
        <p role="alert" className="font-semibold text-over">
          We could not load your cart. Please try again.
        </p>
      </Container>
    );
  }

  // Design phase: pretend the first 3 products are in the cart, 1 of each.
  const items = products.slice(0, 3).map((product) => ({ product, qty: 1 }));

  // Add up price × quantity for every item.
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <Container className="pt-7">
      <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-[44px]">
        Your cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <ul className="grid gap-4">
          {loading
            ? Array.from({ length: 3 }, (_, i) => (
                <li key={i} className="h-32 animate-pulse rounded-xl bg-line" />
              ))
            : items.map((item) => <CartItem key={item.product.id} {...item} />)}
        </ul>

        <OrderSummary subtotal={subtotal} />
      </div>
    </Container>
  );
};

export default Cart;