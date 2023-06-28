import image from "../assets/images/pexels-maël-balland-3457292.jpg";

const Titlecontainer = ({ value }) => {
  return (
    <div>
      <div className="relative h-[20vh]">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 z-10 bg-black opacity-75 flex justify-center items-center">
          <p className="font-extrabold text-3xl text-white capitalize">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Titlecontainer;
