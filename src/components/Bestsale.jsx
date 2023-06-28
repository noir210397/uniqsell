import { useEffect, useState } from "react";
import products from "../assets/data/products";
import Card from "./Card";

const Bestsale = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      const list = products.filter((item) => {
        return item.category === "sofa";
      });
      setProduct(list);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1 className=" text-center font-extrabold text-2xl text-blue-950 p-2 ">
        Best Sales
      </h1>
      <div className="flex max-w-5xl mx-auto  flex-wrap p-2 justify-center">
        {product.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Bestsale;
