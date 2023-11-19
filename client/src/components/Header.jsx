import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"./"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">BMK</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-500 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600 cursor-pointer" />
        </form>
        <ul className="flex gap-4">
          <Link to={"./"}>
            <li className="hidden sm:inline text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer p-2 rounded-md">
              Home
            </li>
          </Link>
          <Link to={"./About"}>
            <li className="hidden sm:inline text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer p-2 rounded-md">
              About
            </li>
          </Link>
          <Link to={"./sign-in"}>
            <li className="sm:inline text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer p-2 rounded-md">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
