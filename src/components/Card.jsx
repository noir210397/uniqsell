import { Add } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ productName, imgUrl, category, price, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <motion.div
      className="   rounded-lg p-1  "
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      onClick={() => {
        navigate(`/shop/${productName.replaceAll(" ", "-")}-${id}`);
      }}
    >
      <motion.div
        onClick={() => {
          navigate(`/shop/${productName.replaceAll(" ", "-")}-${id}`);
        }}
        className=""
        whileHover={{ scale: 1.08 }}
      >
        <img src={imgUrl} alt="" className="w-full object-cover" />
      </motion.div>
      <p className="text-blue-950 font-bold py-2">
        <Link
          to={`/shop/${productName.replaceAll(" ", "-")}-${id}`}
          className="hover:underline decoration-blue-950 decoration-2"
        >
          {productName}
        </Link>
      </p>
      <p>{category}</p>
      {/* <div className="flex justify-between"> */}
      <span className="font-extrabold">${price}</span>
      <button
        className="bg-blue-950 block w-full my-1 text-white mx-auto items-center justify-center rounded p-1"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addToCart(id));
        }}
      >
        Add To Cart
        {/* <Add className="text-white" /> */}
      </button>
      {/* </div> */}
    </motion.div>
  );
};

export default Card;
