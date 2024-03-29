import React from "react";

const SideBar = () => {
  return (
    <div className="w-64 h-[calc(100vh-64px)] bg-white p-4 flex flex-col justify-between shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="text-2xl font-bold">
          <a href="/community" className="text-lg font-semibold">
            Community
          </a>
        </div>
        <div>
          <a href="/location" className="text-lg font-semibold">
            Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
