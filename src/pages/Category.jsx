import { useParams } from "react-router";

const Category = () => {
  const { slug } = useParams();
  return <h1 className="font-display text-3xl font-bold">Category: {slug}</h1>;
};

export default Category;
