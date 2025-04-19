import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center h-12 bg-white rounded-lg border-[2px] mx-2 mt-2">
      <div className="flex items-center justify-center w-full h-10 px-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full px-4 rounded-lg focus:outline-none"
        />
        <Search size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
