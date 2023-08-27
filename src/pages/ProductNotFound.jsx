import ErrorContainer from "../components/ErrorContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductNotFound = () => {
  return (
    <div>
      <Header />
      <ErrorContainer value="Product Not Found" />
      <Footer />
    </div>
  );
};

export default ProductNotFound;
