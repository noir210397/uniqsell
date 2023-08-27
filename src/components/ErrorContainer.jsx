import { Link } from "react-router-dom";

const ErrorContainer = ({ value }) => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <div className=" text-xl p-2 text-center font-extrabold">
        {value}{" "}
        <Link className="underline decoration-2 decoration-blue-950">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorContainer;
