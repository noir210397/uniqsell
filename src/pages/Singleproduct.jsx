import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import products from "../assets/data/products";
import Titlecontainer from "../components/Titlecontainer";
import Footer from "../components/Footer";
import { Star, StarHalf } from "@mui/icons-material";
import { addToCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import Card from "../components/Card";

const Singleproduct = () => {
  const [tab, setTab] = useState("description");
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ProductId = Number(id.slice(length - 2));
    let product = products.find((item) => {
      return item.id - ProductId === 0;
    });
    const getId = () => {
      const length = id.length;
      const realID = Number(id.slice(length - 2));
      const singleProduct = products.find((item) => item.id == realID);
      const category = singleProduct.category;
      if (category === "sofa" || category === "chair") {
        const like = products.filter((item) => {
          return item.category === "sofa" || item.category === "chair";
        });
        setLikes(like);
      } else {
        const like = products.filter((item) => {
          return (
            item.category === "mobile" ||
            item.category === "wireless" ||
            item.category === "watch"
          );
        });
        setLikes(like);
      }
      setItem(singleProduct);
      setReviews(singleProduct.reviews);
    };
    if (product) {
      getId();
      setIsLoaded(true);
    } else {
      navigate(`/product-not-found`);
    }
  }, [id]);
  if (!isLoaded) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Header />
      <Titlecontainer value={item.productName} />
      <div className="flex justify-center items-center min-h-[40vh] mb-3 flex-wrap">
        <div className="flex-1 max-w-lg h-full min-w-[250px]">
          <img
            src={item.imgUrl}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 max-w-lg px-2 min-w-[270px]">
          <p className="text-blue-950 font-extrabold text-lg">
            {item.productName}
          </p>
          <div className="max-w-xs flex justify-between items-center">
            <p className="text-yellow-600">
              <span>
                <Star fontSize="small" />
              </span>
              <span>
                <Star fontSize="small" />
              </span>
              <span>
                <Star fontSize="small" />
              </span>
              <span>
                <Star fontSize="small" />
              </span>
              <span>
                <StarHalf fontSize="small" />
              </span>
            </p>
            <p>
              (<span className="text-yellow-600">{item.avgRating}</span>{" "}
              ratings)
            </p>
          </div>
          <p className="flex max-w-xs justify-between items-center py-2">
            <span className="py-2 text-lg font-extrabold text-blue-950">
              ${item.price}
            </span>
            <span className="text-gray-400">Category:{item.category}</span>
          </p>
          <p className="text-gray-500 ">{item.shortDesc}</p>
          <button
            className="p-2 bg-blue-950 text-white text-lg rounded  capitalize my-4"
            onClick={() => {
              dispatch(addToCart(item.id));
            }}
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto pb-4 px-1">
        <div className="p-1">
          <button
            className={`font-bold  bg-white text-blue-950 px-2 ${
              tab === "description" ? "border-b-2 border-blue-950" : ""
            } `}
            onClick={() => {
              setTab("description");
            }}
          >
            Description
          </button>
          <button
            className={`font-bold  bg-white text-blue-950 px-2 ${
              tab === "review" ? "border-b-2 border-blue-950" : ""
            } `}
            onClick={() => {
              setTab("review");
            }}
          >
            Reviews
          </button>
        </div>
        <div>
          <div className={`p-1 ${tab === "description" ? "block" : "hidden"}`}>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className={`p-1 ${tab === "review" ? "block" : "hidden"}`}>
            {reviews.map((review, index) => {
              return (
                <div key={review.rating + `${index}x${index}`} className="px-2">
                  <p className="py-2 font-bold">
                    {review.name === undefined ? "John Doe" : `${review.name}`}
                  </p>
                  <p className="py-2 text-yellow-600">{`${review.rating} (rating)`}</p>
                  <p className="py-2">{review.text}</p>
                </div>
              );
            })}
            <div className="max-w-2xl mx-auto p-1">
              <form action="">
                <h2 className="font-extrabold text-xl capitalize py-2">
                  leave your experience
                </h2>
                <div className="border border-black my-1 rounded-md">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="p-1 w-full  rounded-md "
                  />
                </div>
                <div>
                  <p className="flex max-w-xs justify-between items-center">
                    <span className=" flex items-center p-2 text-yellow-600">
                      <span>1</span>
                      <Star fontSize="small" />
                    </span>
                    <span className=" flex items-center p-2 text-yellow-600">
                      <span>2</span>
                      <Star fontSize="small" />
                    </span>
                    <span className=" flex items-center p-2 text-yellow-600">
                      <span>3</span>
                      <Star fontSize="small" />
                    </span>
                    <span className=" flex items-center p-2 text-yellow-600">
                      <span>4</span>
                      <Star fontSize="small" />
                    </span>
                    <span className=" flex items-center p-2 text-yellow-600">
                      <span>5</span>
                      <Star fontSize="small" />
                    </span>
                  </p>
                </div>
                <div className="border border-black my-1 rounded-md">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Review Message..."
                    className="p-1 w-full rounded-md "
                  ></textarea>
                </div>
                <button className="px-4 py-2 bg-blue-950 text-white text-lg rounded my-4 capitalize">
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto pb-4 px-1 my-2">
        <h2 className="font-extrabold text-xl capitalize py-2 text-blue-950 ">
          you may also like
        </h2>
        <div className=" max-w-5xl mx-auto  mygrid  py-2 lg:px-2 px-5 ">
          {likes.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Singleproduct;
