import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  Close,
  FavoriteBorderOutlined,
  Menu,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import image from "../assets/images/user-icon.png";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartQuantity, saved } = useSelector((state) => state.cart);
  const [drawer, setDrawer] = useState(false);
  // const [hover, setHover] = useState(false);
  useEffect(() => {
    const bodyFunction = () => {
      if (isOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "none";
      }
    };
    bodyFunction();
  }, [isOpen]);
  useEffect(() => {
    const drawerFunction = () => {
      if (drawer) {
        setDrawer(!drawer);
      } else {
        return;
      }
    };
    const interval = setInterval(drawerFunction, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [drawer]);

  return (
    <div className="">
      <nav className="flex justify-between px-4 py-2  items-center  ">
        <Logo />
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`${
            isOpen ? "transform-none" : "-translate-x-full"
          } absolute inset-0 md:translate-x-0 bg-black z-30 bg-opacity-20 md:bg-transparent md:bg-opacity-0 md:relative transition-transform  `}
        >
          <ul className="capitalize absolute md:relative inset-0 start-1/2 md:inset-auto  pt-[10vh] px-10 md:p-0 items-start  md:items-center flex flex-col md:flex-row bg-white ">
            <li className="px-2 hover:decoration-2 hover:decoration-blue-950 hover:underline md:py-0 py-4">
              <Link to={"/"}>home</Link>
            </li>
            <li className="px-2 hover:decoration-2 hover:decoration-blue-950 hover:underline md:py-0 py-4">
              <Link to={"/shop"}>shop</Link>
            </li>
            <li className="px-2 hover:decoration-2 hover:decoration-blue-950 hover:underline md:py-0 py-4">
              <Link to={"/cart"}>cart</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="relative px-2">
            <FavoriteBorderOutlined />
            <div className="w-4 h-4 rounded-full right-0 -top-1 absolute bg-blue-950 text-white flex justify-center items-center text-sm">
              {saved.length}
            </div>
          </div>
          <div className="relative px-2">
            <Link to={"/cart"}>
              <ShoppingBagOutlined />
              <div className="w-4 h-4 rounded-full right-0 -top-1 bg-blue-950 absolute text-white flex justify-center items-center text-sm">
                {cartQuantity}
              </div>
            </Link>
          </div>
          <motion.div
            className="h-8 w-8 rounded-full bg-blue-950 mx-2 border border-blue-950 relative"
            onClick={() => {
              setDrawer(!drawer);
            }}
            // whileHover={() => {
            //   if (drawer) {
            //     return;
            //   } else {
            //     setDrawer(!drawer);
            //     setHover(!hover);
            //   }
            // }}
            // onMouseLeave={() => {
            //   setHover(!hover);
            //   setDrawer(!drawer);
            // }}
          >
            <img src={image} alt="" className="w-full object-cover" />
            <div
              className={`absolute  end-0 top-full z-20 px-1 flex flex-col bg-white text-blue-950 font-bold ${
                drawer ? "block" : "hidden"
              } transition-transform`}
              onClick={() => {
                setDrawer(!drawer);
              }}
            >
              <Link
                to={"/sign-up"}
                className="hover:underline decoration-blue-950 decoration-2"
              >
                Signup
              </Link>
              <Link
                to={"/sign-in"}
                className="hover:underline decoration-blue-950 decoration-2"
              >
                Login
              </Link>
            </div>
          </motion.div>
          <button
            className="text-lg p-1 block md:hidden z-50"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <Close fontSize="medium" /> : <Menu fontSize="medium" />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
