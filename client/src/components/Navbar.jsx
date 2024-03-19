/* eslint-disable no-unused-vars */
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-blue-400 p-3 shadow-md">
      <div className="flex flex-row justify-between items-center mx-auto max-w-6xl">
        <h1 className="font-bold text-lg sm:text-xl flex flex-wrap text-white">
          <span className="text-blue-100">REAL</span>
          <span>Estate</span>
        </h1>
        <form className="flex-row items-center flex rounded-lg bg-blue-200">
          <input
            type="text"
            className="px-2 outline-none text py-1 text-slate-900 placeholder:text-blue-900 bg-transparent"
            placeholder="Search..."
          />
          <FaSearch className="mr-3 w-8 sm:w-8" />
        </form>
        <ul className="flex mr-5 gap-4 text-white">
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
