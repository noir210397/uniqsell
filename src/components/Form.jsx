import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createAccount } from "../authSlice";

const Form = ({ value }) => {
  const dispatch = useDispatch();
  const [emailadd, setEmailAdd] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmpass] = useState("");
  const signup = () => {
    dispatch(createAccount({ emailAddress: emailadd, password: pass }));
    setEmailAdd("");
    setConfirmpass("");
    setPass("");
  };
  return (
    <div className="min-h-[50vh] md:min-h-[70vh] flex justify-center items-center py-5 px-1">
      <div className="max-w-lg flex-1  p-1">
        <h1 className="text-center font-extrabold text-blue-950 text-xl p-2 capitalize">
          {value}
        </h1>
        <form
          action=""
          className="p-2 bg-blue-950 text-white rounded"
          onSubmit={signup}
        >
          <div className="my-3">
            <div className="border border-black  rounded-sm">
              <input
                type="text"
                className="w-full p-2 rounded-sm text-black font-semibold"
                placeholder="Email Address"
                value={emailadd}
                onChange={(e) => {
                  setEmailAdd(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="my-3">
            <div className="border border-black  rounded-sm text-black font-semibold">
              <input
                type="password"
                className="w-full p-2 rounded-sm"
                placeholder="Password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={`my-3 ${value === "login" ? "hidden" : ""}`}>
            <div className="border border-black  rounded-sm text-black font-semibold">
              <input
                type="password"
                className="w-full p-2 rounded-sm"
                placeholder="ConFirm Password"
                value={confirmPass}
                onChange={(e) => {
                  setConfirmpass(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <button className="mx-auto bg-white capitalize text-blue-950 block py-2 px-4 font-extrabold rounded mt-10">
              {value}
            </button>
          </div>
          <p
            className={`capitalize font-extrabold text-center py-2 ${
              value === "login" ? "hidden" : ""
            }`}
          >
            already have an account?{" "}
            <Link
              className="underline decoration-white decoration-2"
              to={"/sign-in"}
            >
              sign in
            </Link>
          </p>
          <p
            className={`capitalize font-extrabold text-center py-2 ${
              value === "login" ? "" : "hidden"
            }`}
          >
            don't have an account?{" "}
            <Link
              className="underline decoration-white decoration-2"
              to={"/sign-up"}
            >
              sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
