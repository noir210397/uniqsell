import Limitedoffer from "../Limitedoffer";
import image from "../../assets/images/counter-timer-img.png";

const Promo = () => {
  return (
    <div className="text-white bg-blue-950 flex flex-col md:flex-row justify-around items-center">
      <Limitedoffer />
      <div className="max-w-sm">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Promo;
