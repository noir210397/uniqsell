import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white mt-4">
      <footer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  p-2">
        <div className="col-span-2  mx-2">
          <p className="text-base md:text-lg font-extrabold py-3 text-center">
            Multimart
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            necessitatibus? Non blanditiis sunt dicta, nostrum qui quo minima
            est laudantium! Adipisci eveniet aspernatur ipsum porro minus omnis
            doloribus hic veritatis?
          </p>
        </div>
        <div className="  mx-2">
          <p className="text-base md:text-lg font-extrabold py-3 ">
            Top Categories
          </p>
          <ul className="">
            <li className="hover:underline decoration-2 decoration-white">
              <Link>Mobile Phones</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              <Link>Modern Sofa</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              <Link>Arm Chair</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              <Link>Smart Watches</Link>
            </li>
          </ul>
        </div>
        <div className="  mx-2">
          <p className="text-base md:text-lg font-extrabold py-3 ">
            Useful Links
          </p>
          <ul className="">
            <li className="hover:underline decoration-2 decoration-white">
              <Link>Shop</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              <Link>Cart</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              <Link>Login</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              <Link>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="  mx-2">
          <p className="text-base md:text-lg font-extrabold py-3 ">Contact</p>
          <ul className="">
            <li className="hover:underline decoration-2 decoration-white">
              {/* <Link>Shop</Link> */}
              {/* <LocationOnOutlined /> */}
              123 john stone
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              {/* <Link>Cart</Link> */}
              {/* <MailOutlined /> */}
              tom@uniqsell.com
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              {/* <Link>Login</Link> */}
              {/* <LocalPhoneOutlined /> */}
              0908978372828
            </li>
          </ul>
        </div>
        {/* </div> */}
      </footer>
    </div>
  );
};

export default Footer;
