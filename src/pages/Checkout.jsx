import CheckoutContainer from "../components/checkout/CheckoutContainer";
import CheckoutForm from "../components/checkout/CheckoutForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Checkout = () => {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center items-center flex-wrap p-2">
        <CheckoutForm />
        <CheckoutContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
