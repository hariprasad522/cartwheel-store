import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((obj) => setProducts(obj.products));
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl font-display">Home</h1>
      {/* card */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {products.map((product) => (
          <article key={product.id}  className="border rounded-xl border-ink p-2.5 mt-0 mx-2.5 mb-2.5 bg-panel">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="hover:shadow rounded-2xl bg-line"
              loading="lazy"
            ></img>
            <h2>{product.title}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default Home;
