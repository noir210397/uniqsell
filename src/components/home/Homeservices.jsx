import {
  CachedOutlined,
  CurrencyExchangeOutlined,
  LocalShippingOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Services from "../Services";

const data = [
  {
    head: "free shipping",
    color: "pink",
    icon: <LocalShippingOutlined />,
  },
  {
    head: "easy returns",
    color: "blue",
    icon: <CachedOutlined />,
  },
  {
    head: "secure payment",
    color: "green",
    icon: <SecurityOutlined />,
  },
  {
    head: "back guarantee",
    color: "blue",
    icon: <CurrencyExchangeOutlined />,
  },
];
const Homeservices = () => {
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-5 px-3">
      {data.map((item) => (
        <Services key={item.head} {...item} />
      ))}
    </div>
  );
};

export default Homeservices;
