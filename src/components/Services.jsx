import { motion } from "framer-motion";
const Services = ({ head, icon, color }) => {
  return (
    <motion.div
      className={`flex min-h-[80px] items-center justify-center rounded-md p-2     ${
        color === "blue"
          ? "bg-blue-400"
          : color === "green"
          ? "bg-green-300"
          : "bg-pink-200"
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="h-10 w-10 p-4 mx-2  rounded-full bg-blue-950 text-white text-2xl flex justify-center items-center">
        {icon}
      </div>
      <div>
        <h2 className="capitalize text-blue-950 font-semibold">{head}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </motion.div>
  );
};

export default Services;
