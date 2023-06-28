const CheckoutInput = ({ placeholder }) => {
  return (
    <div className="my-3">
      <div className="border border-black  rounded-sm text-black font-semibold">
        <input
          type="text"
          className="w-full p-2 rounded-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CheckoutInput;
