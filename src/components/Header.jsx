import React from "react";

const Header = () => {
  return (
    <div>
      {/* top nav  */}
      <div className="flex items-center">
        <div>
          <img></img>
        </div>
        <div>
          <div></div>
          <div>
            <div className="text-sm">Hello</div>
            <div className="text-sm font-bold">Select your address</div>
          </div>
        </div>
        <div className="w-full appearance-none leading-tight p-3 border-2 border-black"> 
          <input type="text" placeholder="Enter something..." />
        </div>
        <div></div>
        <div>
          <div className="text-sm">Hello, sign in</div>
          <div>
            <div className="text-sm font-bold">Accounts & lists</div>
            <div></div>
          </div>
        </div>
        <div className="text-sm">Returns and Orders</div>
        <div>
          <div></div>
          <div>Cart</div>
        </div>
      </div>
      {/* bottom nav  */}
      <div></div>
    </div>
  );
};

export default Header;
