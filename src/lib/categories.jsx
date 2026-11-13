// Our 6 storefront categories -> the DummyJSON categories that belong in each.
export const CATEGORIES = [
  {
    slug: "electronics",
    label: "Electronics",
    source: ["laptops", "smartphones", "tablets", "mobile-accessories"],
  },
  {
    slug: "fashion",
    label: "Fashion",
    source: [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
      "sunglasses",
      "tops",
    ],
  },
  {
    slug: "home",
    label: "Home & Living",
    source: ["furniture", "home-decoration", "kitchen-accessories"],
  },
  {
    slug: "beauty",
    label: "Beauty",
    source: ["beauty", "fragrances", "skin-care"],
  },
  { slug: "sports", label: "Sports", source: ["sports-accessories"] }, // DECISION: see note below
  // { slug: "sports", label: "Sports", source: ["sports-accessories"] },
];

// .find() returns the first match, or undefined. "?? null" turns undefined into null.
export const categoryOf = (apiCategory) =>
  CATEGORIES.find((c) => c.source.includes(apiCategory)) ?? null;
