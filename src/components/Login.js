import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const nameValue = isSignInForm ? null : name.current?.value;
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;

    const message = checkValidData(emailValue, passwordValue, nameValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          return updateProfile(auth.currentUser, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          });
        })
        .then(() => {
          dispatch(
            addUser({
              uid: auth.currentUser.uid,
              email: auth.currentUser.email,
              displayName: auth.currentUser.displayName,
              photoURL: auth.currentUser.photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(() => {
          dispatch(
            addUser({
              uid: auth.currentUser.uid,
              email: auth.currentUser.email,
              displayName: auth.currentUser.displayName,
              photoURL: auth.currentUser.photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
