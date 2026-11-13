import { categoryOf } from "./categories";
import { formatINR } from "./format";

const USD_TO_INR = 85;

export const normalizeProduct = (p) => {
  const category = categoryOf(p.category);
  if (!category) return null;
  const price = Math.round(p.price * USD_TO_INR);
  const mrp = Math.round(price / (1 - p.discountPercentage / 100));
  const rating = Number(p.rating).toFixed(1);
  const thumbnail = p.thumbnail;
  const discount = Math.round((1 - price / mrp) * 100);
  return { id: p.id, title: p.title, price, mrp, rating, thumbnail, discount };
};
