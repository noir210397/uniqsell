import {
  Delete,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { decreaseByOne, increaseByOne, removeFromCart } from "../cartSlice";
import { useDispatch } from "react-redux";

const TableRow = ({ imgUrl, productName, price, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td className="h-24 border-b border-blue-950 ">
          <div className="h-full w-full p-1">
            <img
              src={imgUrl}
              alt=""
              className="h-full w-full object-contain "
            />
          </div>
        </td>
        <td className=" border-b border-blue-950">
          <span className="">{productName}</span>
        </td>
        <td className=" border-b border-blue-950">
          <span className="text-blue-950 font-extrabold">${price}</span>
        </td>
        <td className=" border-b border-blue-950 text-center">
          <div className="">
            <button
              onClick={() => {
                dispatch(increaseByOne(id));
              }}
            >
              <KeyboardArrowUp fontSize="medium" />
            </button>
            <span className="">{quantity}Pcs</span>
            <button
              onClick={() => {
                dispatch(decreaseByOne(id));
              }}
            >
              <KeyboardArrowDown fontSize="medium" />
            </button>
          </div>
        </td>
        <td className=" border-b border-blue-950 text-center">
          <button
            onClick={() => {
              dispatch(removeFromCart(id));
            }}
          >
            <span className="text-red-600">
              <Delete />
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
