import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        Navigate("/");
      })
      .catch((error) => {
        // An error happened.
        Navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-28 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-48"
      />

      {user && (
        <div className="flex p-2">
          <img className="w-11 h-11" src={user?.photoURL} alt="userIcon" />
          <button
            onClick={handleSignOut}
            className=" px-3 -translate-y-3 font-bold text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
