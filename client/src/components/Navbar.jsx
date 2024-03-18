/* eslint-disable no-unused-vars */
import React from "react";
import {FaSearch} from "react-icons/fa"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <header className="bg-[#222831] p-3 shadow-md">
      <div className="flex flex-row justify-between items-center mx-auto max-w-6xl">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-[#F1F6F9]">REAL</span>
          <span className="text-[#9BA4B5]">Estate</span>
        </h1>
        <form className="flex-row items-center flex rounded-lg bg-slate-700 ">
          <input
            type="text"
            className="px-2  outline-none  text py-1  text-white  bg-transparent"
            placeholder="Search..."
          />
          <FaSearch className="mr-3 w-8 sm:w-8"/>
        </form>
        <ul className="flex mr-5 gap-4 text-slate-300">
          <li className="hidden sm:inline">
           <Link to="/"> Home</Link>
          </li>
          <li className="hidden sm:inline">
          <Link to="/about">About</Link>
          </li>
          <li>
           <Link to="sign-in">Sign In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
