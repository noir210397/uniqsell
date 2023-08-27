import Bestsale from "../components/Bestsale";
import Header from "../components/Header";
import Homecontainer from "../components/Homecontainer";
import Newarrivals from "../components/Newarrivals";
import Popular from "../components/Popular";
import Trending from "../components/Trending";
import Homeservices from "../components/home/Homeservices";
import Promo from "../components/home/Promo";
import Footer from "../components/Footer";
// import { useSelector } from "react-redux";

const Home = () => {
  // const { isLoading } = useSelector((state) => state.auth);
  // if (isLoading) {
  //   return <div className="bg-green-700">loading....</div>;
  // }
  return (
    <div className="">
      <Header />
      <Homecontainer />
      <Homeservices />
      <Trending />
      <Bestsale />
      <Promo />
      <Newarrivals />
      <Popular />
      <Footer />
    </div>
  );
};

export default Home;
