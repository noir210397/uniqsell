import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white">
      <footer className="flex flex-wrap justify-start lg:justify-evenly p-2">
        <div className=" max-w-xs mx-2">
          <p className="text-xl font-extrabold py-3 text-center">Multimart</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deserunt placeat consequatur officiis dolores deleniti consectetur
            impedit iusto minus aspernatur.
          </p>
        </div>
        <div className=" max-w-[200px] mx-2">
          <p className="text-xl font-extrabold py-3 text-center">
            Top Categories
          </p>
          <ul>
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
        <div className=" max-w-[200px] mx-2">
          <p className="text-xl font-extrabold py-3 text-center">
            Useful Links
          </p>
          <ul>
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
        <div className=" max-w-[200px] mx-2">
          <p className="text-xl font-extrabold py-3 text-center">Contact</p>
          <ul>
            <li className="hover:underline decoration-2 decoration-white">
              {/* <Link>Shop</Link> */}
              <LocationOnOutlined />
              123 john stone
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              {/* <Link>Cart</Link> */}
              <MailOutlined />
              tom@uniqsell.com
            </li>
            <li className="hover:underline decoration-2 decoration-white">
              {/* <Link>Login</Link> */}
              <LocalPhoneOutlined />
              0908978372828
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
