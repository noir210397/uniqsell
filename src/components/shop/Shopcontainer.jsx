import { Search } from "@mui/icons-material";
// import image from "../../assets/images/pexels-maël-balland-3457292.jpg";
import { useEffect, useState } from "react";
import products from "../../assets/data/products";
import Card from "../Card";
import { AnimatePresence } from "framer-motion";
import Titlecontainer from "../Titlecontainer";
const Shopcontainer = () => {
  const [filterValue, setFilterValue] = useState("filter");
  const [searchValue, setsearchValue] = useState("");
  const [productsValue, setProductsValue] = useState([]);
  useEffect(() => {
    if (filterValue === "filter") {
      setProductsValue(products);
    } else {
      if (filterValue === "sofa") {
        let product = products.filter((item) => item.category === "sofa");
        setProductsValue(product);
      } else if (filterValue === "chair") {
        let product = products.filter((item) => item.category === "chair");
        setProductsValue(product);
      } else if (filterValue === "mobile") {
        let product = products.filter((item) => item.category === "mobile");
        setProductsValue(product);
      } else if (filterValue === "wireless") {
        let product = products.filter((item) => item.category === "wireless");
        setProductsValue(product);
      } else if (filterValue === "watch") {
        let product = products.filter((item) => item.category === "watch");
        setProductsValue(product);
      }
    }
  }, [filterValue]);
  const selectFilter = (e) => {
    setFilterValue(e.target.value);
  };
  const searchFunction = (e) => {
    setsearchValue(e.target.value.trim());
    let regex = new RegExp(searchValue, "gi");
    let product = products.filter((item) => {
      return regex.test(item.category) === true;
    });
    setProductsValue(product);
  };
  const formFunction = (e) => {
    e.preventDefault();
    // setsearchValue(e.target.value);
    // let regex = new RegExp(searchValue, "gi");
    let name = searchValue.toLowerCase();
    let product = products.filter((item) => {
      return item.productName.toLowerCase().includes(name);
    });
    setProductsValue(product);
    setsearchValue("");
  };

  return (
    <div>
      <Titlecontainer value="products" />
      <div className="flex justify-center items-center p-2 flex-wrap ">
        <select
          name=""
          id=""
          className="p-2 bg-blue-950 rounded-md mx-2 capitalize text-white"
          onChange={selectFilter}
        >
          <option
            value="filter"
            className="capitalize p-1 text-lg font-bold text-white"
          >
            filter by category
          </option>
          <option
            value="sofa"
            className="capitalize p-1 text-lg font-bold text-white"
          >
            sofa
          </option>
          <option
            value="chair"
            className="capitalize p-1 text-lg font-bold text-white"
          >
            chair
          </option>
          <option
            value="mobile"
            className="capitalize p-1 text-lg font-bold text-white"
          >
            mobile
          </option>
          <option
            value="wireless"
            className="capitalize p-1 text-lg font-bold text-white"
          >
            wireless
          </option>
          <option
            value="watch"
            className="capitalize p-1 text-lg font-bold text-white"
          >
            watches
          </option>
        </select>
        <form onSubmit={formFunction}>
          <div className="border border-black  relative rounded-md my-2 min-w-[250px]">
            <input
              type="text"
              className="w-full h-full p-1 rounded-md"
              placeholder="Search by Product Name..."
              onChange={searchFunction}
              value={searchValue}
            />
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2"
              type="submit"
            >
              <Search fontSize="medium" />
            </button>
          </div>
        </form>
      </div>
      <div>
        <div
          className={`flex max-w-5xl mx-auto  flex-wrap p-2 justify-center font-extrabold text-2xl min-h-[20vh] ${
            productsValue.length === 0 ? "" : "hidden"
          }`}
        >
          No items Found
        </div>
        <div className="flex max-w-5xl mx-auto  flex-wrap p-2 justify-center md:justify-start mb-2">
          <AnimatePresence>
            {productsValue.map((item) => (
              <Card {...item} key={item.id} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Shopcontainer;
