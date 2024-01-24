import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);

    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [window.location]);

  return (
    <header className="bg-green-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"./"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">BMK</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          className="bg-slate-500 p-3 rounded-lg flex items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <FaSearch
            className="text-slate-600 cursor-pointer"
            onClick={handleSubmit}
          />
        </form>
        <ul className="flex gap-4">
          <Link to={"./"}>
            <li className="hidden sm:inline text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer p-2 rounded-md">
              Home
            </li>
          </Link>
          <Link to={"./about"}>
            <li className="hidden sm:inline text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer p-2 rounded-md">
              About
            </li>
          </Link>
          <Link to={"./profile"}>
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="sm:inline text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer p-2 rounded-md">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
