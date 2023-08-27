import Footer from "../components/Footer";
import Header from "../components/Header";
import Titlecontainer from "../components/Titlecontainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
import { clearCart } from "../cartSlice";
import { toast } from "react-toastify";

// import products from "../assets/data/products";
// import { Delete } from "@mui/icons-material";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const checkCart = () => {
    if (cart.length > 0) {
      setModalOpen(!modalOpen);
    } else {
      toast.error("cart is empty");
    }
  };
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalOpen]);

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 p-3 bg-black bg-opacity-25 z-[1000] flex justify-center items-center ${
          modalOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white flex-1 max-w-lg rounded  capitalize flex justify-center items-center p-2  flex-col">
          <div className="my-2 text-center  font-extrabold text-blue-950">
            are you sure you want to clear cart?
          </div>
          <div className="grid grid-cols-2 w-full gap-2 my-2">
            <button
              onClick={() => {
                setModalOpen(false);
                dispatch(clearCart());
              }}
              className=" bg-green-600 text-white p-2 rounded text-lg"
            >
              Yes
            </button>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              className=" bg-red-700 text-white p-2 rounded text-lg"
            >
              No
            </button>
          </div>
        </div>
      </div>
      <Header />
      <Titlecontainer value="shopping cart" />
      <div>
        <div
          className={`min-h-[50vh] flex items-center justify-center flex-col ${
            cart.length === 0 ? "" : "hidden"
          }`}
        >
          <h1 className="text-blue-950 font-extrabold text-lg">
            No Cart Items
          </h1>
          <Link
            to={"/shop"}
            className="block bg-blue-950 text-white rounded-md p-2 my-4"
          >
            Back to Shop
          </Link>
        </div>
      </div>
      <div
        className={`flex  justify-center flex-wrap  ${
          cart.length === 0 ? "hidden" : ""
        } min-h-[50vh]`}
      >
        <div className={` max-w-lg min-w-[300px]  my-2 p-2 flex-1  `}>
          <table className="w-full">
            <tbody>
              <tr className="">
                <th className="text-left font-extrabold text-blue-950 border-b border-blue-950 w-1/5 ">
                  Image
                </th>
                <th className="text-left font-extrabold text-blue-950 border-b border-blue-950 w-2/4 ">
                  Title
                </th>
                <th className="text-left font-extrabold text-blue-950 border-b border-blue-950 ">
                  Price
                </th>
                <th className="text-center font-extrabold text-blue-950 border-b border-blue-950  ">
                  Qty
                </th>
                <th className="text-center font-extrabold text-blue-950 border-b border-blue-950 ">
                  Delete
                </th>
              </tr>
              {cart.map((item) => (
                <TableRow {...item} key={item.id} />
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className=""> */}
        <div className="min-w-[300px] flex-1 md:flex-none py-4 px-2 max-w-lg md:px-4  ">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-extrabold text-blue-950 px-1">${total}</span>
          </div>
          <p className="text-gray-400 mb-8">
            taxes and shipping will calculate in checkout
          </p>
          <Link
            to={"/checkout"}
            className="block w-full p-2 bg-blue-950 text-white rounded-md my-2 text-center"
          >
            Checkout
          </Link>
          <Link
            className="block w-full p-2 bg-blue-950 text-white rounded-md my-2 text-center"
            to={"/shop"}
          >
            Continue Shopping
          </Link>
          <button
            onClick={checkCart}
            className="block w-full p-2 bg-blue-950 text-white rounded-md my-2 text-center"
          >
            Clear Cart
          </button>
        </div>
        {/* </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
