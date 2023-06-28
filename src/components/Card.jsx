import { Add } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import { Link } from "react-router-dom";

const Card = ({ productName, imgUrl, category, price, id }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="flex-1 max-w-xs m-2 rounded-lg p-1 min-w-[200px] "
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <motion.div className="" whileHover={{ scale: 1.08 }}>
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
      <div className="flex justify-between">
        <span className="font-extrabold">${price}</span>
        <button
          className="bg-blue-950 h-8 w-8 flex items-center justify-center rounded-full p-1"
          onClick={() => {
            dispatch(addToCart(id));
          }}
        >
          <Add className="text-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
