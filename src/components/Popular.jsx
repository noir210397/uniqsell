import { useEffect, useState } from "react";
import products from "../assets/data/products";
import Card from "./Card";

const Popular = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      const list = products.filter((item) => {
        return item.category === "watch";
      });
      setProduct(list);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1 className=" text-center font-extrabold text-2xl text-blue-950 p-2 ">
        Popular in Category
      </h1>
      <div className=" max-w-5xl mx-auto   py-2 lg:px-2 px-5  mygrid">
        {product.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
