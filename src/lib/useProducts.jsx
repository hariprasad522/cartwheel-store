import { useEffect, useState } from "react";
import { normalizeProduct } from "./products";

export const useProducts = () => {
  const [state, setState] = useState({
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://dummyjson.com/products?limit=0", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Error");
        return res.json();
      })
      .then((data) => {
        console.log([...new Set(data.products.map((p) => p.category))]);
        setState({
          products: data.products.map(normalizeProduct).filter(Boolean),
          loading: false,
          error: null,
        });
      })
      .catch((err) => {
        if (err.name !== "AbortError")
          setState({
            products: [],
            loading: false,
            error: err.message,
          });
      });

    return () => controller.abort();
  }, []);
  return state;
};
