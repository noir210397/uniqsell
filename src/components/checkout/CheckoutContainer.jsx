const CheckoutContainer = () => {
  return (
    <div className="md:min-w-[300px] min-w-[250px] flex-1 md:flex-none border border-black p-1 bg-blue-950 rounded text-white mx-1">
      <div className=" flex justify-between items-center">
        <span className="font-bold">Total Qty:</span>
        <span>3</span>
      </div>
      <div className=" flex justify-between items-center">
        <span className="font-bold">Subtotal:</span>
        <span>3</span>
      </div>
      <div className=" flex justify-between items-center">
        <span className="font-bold">Shipping:</span>
        <span>3</span>
      </div>
      <div className=" flex justify-between items-center">
        <span className="font-bold">Free Shipping:</span>
        <span>0</span>
      </div>
      <div className="h-[2px] bg-gray-600"></div>
      <div className=" flex justify-between items-center">
        <span className="font-bold">Total:</span>
        <span>$987</span>
      </div>
      <button className="block w-full p-2 bg-white text-blue-950 font-extrabold rounded mt-4">
        Place Order Now
      </button>
    </div>
  );
};

export default CheckoutContainer;
