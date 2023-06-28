import Bestsale from "../components/Bestsale";
import Header from "../components/Header";
import Homecontainer from "../components/Homecontainer";
import Newarrivals from "../components/Newarrivals";
import Popular from "../components/Popular";
import Trending from "../components/Trending";
import Homeservices from "../components/home/Homeservices";
import Promo from "../components/home/Promo";
import Footer from "../components/Footer";

const Home = () => {
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
