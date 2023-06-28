import { Link } from "react-router-dom";
import image from "../assets/images/hero-img.png";

const Homecontainer = () => {
  return (
    <div className="md:min-h-[70vh] min-h-[50vh] lg:h-[70vh] bg-blue-200 flex justify-center items-center  flex-col lg:flex-row lg:p-2 p-5 md:p-5">
      <div className="flex-1 max-w-lg min-w-[300px] mb-4">
        <p className="capitalize ">trending product in 2023</p>
        <h1 className="uppercase font-extrabold text-blue-950 text-xl my-4">
          make your interior more minimalistic and modern
        </h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero
          modi maiores quam quidem itaque.
        </p>
        <Link className="p-2 bg-blue-950 text-white text-lg rounded my-4 capitalize">
          shop now
        </Link>
      </div>
      <div className="flex-1 max-w-lg min-w-[300px]">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Homecontainer;
