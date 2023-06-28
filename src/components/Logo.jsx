import { LocalMallOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="  flex items-center p-1">
        <span>
          <LocalMallOutlined />
        </span>
        <span className="uppercase text-blue-950 font-extrabold text-lg ">
          uniqsell
        </span>
      </div>
    </Link>
  );
};

export default Logo;
