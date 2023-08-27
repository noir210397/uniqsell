import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ThankYou = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[70vh] flex justify-center items-center ">
        <div className="text-center text-xl">
          <div className="font-extrabold text-blue-950">
            Thanks for Placing Your Order
          </div>
          <Link className="underline decoration-2 decoration-blue-950" to={`/`}>
            Back To Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
