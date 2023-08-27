import CheckoutInput from "./CheckoutInput";

const CheckoutForm = () => {
  return (
    <div className="flex-1 max-w-xl md:min-w-[320px] min-w-[250px] mx-1">
      <h1 className="text-blue-950 font-bold ">Billing Address</h1>
      <CheckoutInput placeholder="Enter Your Name" />
      <CheckoutInput placeholder="Enter Your Email" />
      <CheckoutInput placeholder="Phone Number" />
      <CheckoutInput placeholder="street Address" />
      <CheckoutInput placeholder="City" />
      <CheckoutInput placeholder="Postal Code" />
      <CheckoutInput placeholder="Country" />
    </div>
  );
};

export default CheckoutForm;
