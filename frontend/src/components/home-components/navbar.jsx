import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow-md top-0 w-full z-2 fixed">
      <div className="flex justify-between items-center h-full px-8">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex space-x-8">
          <a href="/" className="text-lg font-semibold">
            Home
          </a>
          <a href="/attendance" className="text-lg font-semibold">
            Security
          </a>

          <a href="/payment" className="text-lg font-semibold">
            Payments
          </a>
          <a href="/community" className="text-lg font-semibold">
            Community
          </a>
          <a href="/location" className="text-lg font-semibold">
            Location
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
