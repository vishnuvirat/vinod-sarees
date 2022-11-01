import React from "react";
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      {/* top nav  */}
      <div className="flex items-center p-3 flex-grow border-2 border-red-300">
        <div>
          <img src={logo} className="h-14 w-24 cursor-pointer"></img>
        </div>
        <div>
          <div></div>
          <div className="mx-5 flex items-center cursor-pointer">
            <div><GoLocation className="w-4 h-6"/></div>
            <div className="m-2">
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
          <BsSearch className="cursor-pointer w-6 h-6 ml-2" />
        </div>
        <div className="ml-8">
          <div className="text-sm">Hello, sign in</div>
          <div>
            <div className="text-sm font-bold cursor-pointer">
              Accounts & lists
            </div>
            <div></div>
          </div>
        </div>
        <div className="text-sm mx-4 cursor-pointer">Returns and Orders</div>
        <div className="flex cursor-pointer items-center">
          <div><BsCart3 className="w-8 h-8"/></div>
          <div>Cart</div>
        </div>
      </div>
      {/* bottom nav  */}
      <div></div>
    </div>
  );
};

export default Header;
