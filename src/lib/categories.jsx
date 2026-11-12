export const CATEGORIES = [
  {
    slug: "electronics",
    label: "Electronics",
    source: ["laptops", "smartphones", "tablets", "mobile-accessories"],
  },
  {
    slug: "beauty",
    label: "Beauty",
    source: ["beauty", "fragrances", "skin-care"],
  },
];

export const categoryOf = (apiCategory) => {
  CATEGORIES.find((c) => c.source.includes(apiCategory)) ?? null;
};
