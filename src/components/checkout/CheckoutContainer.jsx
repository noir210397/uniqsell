import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../cartSlice";

const CheckoutContainer = () => {
  const { cartQuantity, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="md:min-w-[300px] min-w-[250px] flex-1 md:flex-none  mx-1">
      <div className=" p-1 bg-blue-950 rounded text-white ">
        <div className=" flex justify-between items-center">
          <span className="font-bold">Total Qty:</span>
          <span>{cartQuantity}</span>
        </div>
        <div className=" flex justify-between items-center">
          <span className="font-bold">Subtotal:</span>
          <span>${total}</span>
        </div>
        <div className=" flex justify-between items-center">
          <span className="font-bold">Shipping:</span>
          <span>3%</span>
        </div>
        <div className=" flex justify-between items-center">
          <span className="font-bold">Free Shipping:</span>
          <span>0</span>
        </div>
        <div className="h-[2px] bg-gray-600"></div>
        <div className=" flex justify-between items-center">
          <span className="font-bold">Total:</span>
          <span>${Math.round(total + total * 0.03)}</span>
        </div>
        <button
          onClick={() => {
            navigate(`/order-placed`);
            dispatch(clearCart());
          }}
          className="block w-full p-2 bg-white text-blue-950 font-extrabold rounded mt-4"
        >
          Place Order Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutContainer;
