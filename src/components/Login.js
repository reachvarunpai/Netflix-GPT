import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
        <Header />
        <div className="absolute">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="logo"
      />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-33 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input 
        type="text" 
        placeholder="Full Name" 
        className="p-4 my-4 w-full bg-gray-700"
         />}
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
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
            </p>
      </form>
    </div>
  );
}
export default Login;