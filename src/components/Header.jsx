import React from "react";
import logo from "../assets/logo.png";
import { BsGoogle, BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";

const Header = () => {


  return (
    <div>
      {/* top nav  */}
      <div className="flex items-center p-1 flex-grow bg-slate-900 text-white">
        <div>
          <img
            src={logo}
            className=" h-14 w-34 cursor-pointer"
          ></img>
        </div>
        <div>
          <div></div>
          <div className="flex items-center cursor-pointer mx-2">
            <div>
              <GoLocation className="hidden lg:block w-4 h-6" />
            </div>
            <div className="m-2 hidden lg:block">
              <div className="text-sm">Hello</div>
              <div className="text-sm font-bold cursor-pointer hover:underline">
                Select your address
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <input
            className=" w-full appearance-none leading-tight p-3 outline-none text-gray-700 bg-gray-200 focus:bg-gray-600 focus:text-white rounded-sm"
            type="text"
            placeholder="Enter something..."
          />
        </div>
        <div className="">
          <BsSearch className="cursor-pointer w-6 h-6 mx-4  text-red-500" />
        </div>
        <div className="hidden lg:block ml-8 hover:underline">
          <div className="text-sm cursor-pointer">Hello, sign in</div>
          <div>
            <div className="text-sm font-bold cursor-pointer">
              Accounts & lists
            </div>
            <div></div>
          </div>
        </div>
        <div className="hidden lg:block mx-8 hover:underline">
          <div className="text-sm">Returns</div>
          <div>
            <div className="text-sm font-bold cursor-pointer">& Orders</div>
            <div></div>
          </div>
        </div>

        <div className="relative cursor-pointer items-center flex hover:underline">
          <span className=" hidden sm:block absolute bottom-5 right-6 bg-red-500 rounded-full h-4 w-4 text-center text-xs text-black">0</span>
          <div>
            <BsCart3 className="hidden sm:block mx-1 w-6 h-6 sm:ml-6" />
          </div>
          <div className="hidden lg:block font-bold mt-3">Cart</div>
        </div>
      </div>
      {/* bottom nav  */}

      <div className="flex space-x-10 cursor-pointer text-sm text-white bg-slate-800  items-center p-2">
        <p className="flex items-center font-bold"><GiHamburgerMenu className="w-4  h-4 mr-2 text-red-500"/>All</p>
        <p className="hover:underline">Gadwal</p>
        <p className="hover:underline">Mangalgiri</p>
        <p className="hover:underline">Narayanpet</p>
        <p className="hover:underline">Silk</p>
        <p className="hidden hover:underline sm:inline-flex">Cotton</p>
        <p className="hidden hover:underline sm:inline-flex">Pattu</p>
        <p className="hidden hover:underline sm:inline-flex">Nylon</p>
        <p className="hidden hover:underline lg:inline-flex">Big Border</p>
        <p className="hidden hover:underline lg:inline-flex">Rayon</p>
        <p className="hidden hover:underline lg:inline-flex">Best Sellers</p>
        <p className="hidden hover:underline lg:inline-flex">Big Border</p>
        <p className="hidden hover:underline lg:inline-flex">Big Border</p>
        <p className="hidden hover:underline lg:inline-flex">Rayon</p>
        <p className="hidden hover:underline lg:inline-flex">Best Sellers</p>
        <p className="hidden hover:underline lg:inline-flex">Big Border</p>
        <p className="hidden hover:underline lg:inline-flex">Big Border</p>
        <p className="hidden hover:underline lg:inline-flex">Rayon</p>
        <p className="hidden hover:underline lg:inline-flex">Best Sellers</p>
        <p className="hidden hover:underline lg:inline-flex">Big Border</p>
      </div>

    </div>
  );
};

export default Header;
