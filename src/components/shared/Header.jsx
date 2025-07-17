import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* Logo Section */}
      <div className="flex items-center text-[#f5f5f5] text-2xl font-bold">
        <span className="text-[#ff6347]">Dine</span>Flow
      </div>
      {/* Search Bar */}
      <div className="flex items-center bg-[#1f1f1f] rounded-[20px] gap-4 px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] text-[#f5f5f5] outline-none w-full"
        />
      </div>
      {/* Logged User */}
      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">Mateus Arga</h1>
            <p className="text-xs text-[#ababab] font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
