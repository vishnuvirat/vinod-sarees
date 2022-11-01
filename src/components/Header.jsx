import React from "react";
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      {/* top nav  */}
      <div className="flex items-center p-1 flex-grow bg-slate-900 text-white">
        <div>
          <img src={logo} className="hidden sm:block h-14 w-34 cursor-pointer"></img>
        </div>
        <div>
          <div></div>
          <div className="flex items-center cursor-pointer mx-1">
            <div>
              <GoLocation className="hidden lg:block w-4 h-6" />
            </div>
            <div className="m-2 hidden lg:block">
              <div className="text-sm">Hello</div>
              <div className="text-sm font-bold cursor-pointer">
                Select your address
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <input
            className=" w-full appearance-none leading-tight p-3 outline-none text-gray-700 bg-gray-200 focus:bg-gray-600 focus:text-white"
            type="text"
            placeholder="Enter something..."
          />
        </div>
        <div className="">
          <BsSearch className="cursor-pointer w-6 h-6 ml-2  text-red-500" />
        </div>
        <div className="hidden lg:block ml-8">
          <div className="text-sm">Hello, sign in</div>
          <div>
            <div className="text-sm font-bold cursor-pointer">
              Accounts & lists
            </div>
            <div></div>
          </div>
        </div>
        <div className="hidden lg:block text-sm mx-4 cursor-pointer font-bold">
          Returns and Orders
        </div>
        <div className="cursor-pointer items-center flex">
          <div>
            <BsCart3 className="hidden sm:block mx-2 w-6 h-6" />
          </div>
          <div className="hidden lg:block font-bold ">Cart</div>
        </div>
      </div>
      {/* bottom nav  */}
      <div></div>
    </div>
  );
};

export default Header;
