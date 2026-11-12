import { categoryOf } from "./categories";

const USD_TO_INR = 85

export const normalizeProduct = (p) => {
  const category = categoryOf(p.category);
  if (!category) return null;
  const price = Math.round(p.price * USD_TO_INR);
  const mrp = Math.round(p.price/1-(p.discountPercentage/100));

  return {id: p.id, title: p.title, price, mrp}
};
