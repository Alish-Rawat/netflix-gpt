import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingnInForm, setIsSignInForm] = useState(true);

  const toggeleSignInForm = () => {
    setIsSignInForm(!isSingnInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg"
          alt="logo"
          className=""
        ></img>
      </div>
      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSingnInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingnInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSingnInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggeleSignInForm}>
          {isSingnInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
