const Stars = ({ rating }) => {
  const full = Math.round(rating); // 4.5 -> 5, 4.4 -> 4

  return (
    <span role="img" aria-label={`Rated ${rating} out of 5`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
};

export default Stars;