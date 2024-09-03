import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/contants";

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        Navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        Navigate("/");
      }
    });
    // unsubscibe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-28 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-48" />

      {user && (
        <div className="flex p-2">
          <img className="w-11 h-11" src={user?.photoURL} alt="userIcon" />
          <button
            onClick={handleSignOut}
            className=" px-3 -translate-y-2 font-bold text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
