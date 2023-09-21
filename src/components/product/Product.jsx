import { useLoaderData } from "react-router-dom";
import Pro from "../Pro/Pro";

const Product = () => {
  const pro = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
      {pro.map((p) => (
        <Pro key={p.id} p={p}></Pro>
      ))}
      </div>
    </div>
  );
};

export default Product;
