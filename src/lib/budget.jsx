export const getBudgetStatus = (used, limit) => {
  if (!limit) return "safe";
  const ratio = used / limit;
  if (ratio > 1) return "over";
  if (ratio > 0.8) return "warn";
  return "safe";
};
