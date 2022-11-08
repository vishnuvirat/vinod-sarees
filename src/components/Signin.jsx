import React from "react";
import logo from "../assets/logo.png";
// import GoogleButton from 'react-google-button'

const Signin = () => {
  return (
    <div className="bg-slate-900">
      <div className="grid grid-flow-col-dense grid-cols-2 ">
        <div className=" flex items-center justify-center h-screen ">
          <img src={logo}></img>
        </div>
        <div className="flex items-center justify-center  ">
          <div className="text-white border-2 p-20 rounded-lg">
            <div className="flex text-5xl">
              <div className="flex items-center justify-center text-5xl">
                Hello Again
              </div>
              <div className="text-red-500 ml-2">!</div>
            </div>
            <div className="mt-28 flex items-center justify-center">
              <input
                placeholder="Email"
                className="outline-none bg-sky-900 p-4"
              ></input>
            </div>
            <div className="mt-16 flex items-center justify-center">
              <input
                placeholder="Password"
                className="outline-none bg-sky-900 p-4"
              ></input>
            </div>
            <div className=" flex items-center justify-center">
              <button className="border border-red-500 mt-16 cursor-pointer font-bold p-4 w-52 rounded-sm hover:bg-red-500 hover:text-black hover:border-black">
                Login
              </button>
            </div>
            <div className="flex mt-8">
              <div className="">Don't have an account yet?</div>
              <div className="ml-3 font-bold text-red-500 cursor-pointer hover:underline">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
