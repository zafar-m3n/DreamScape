import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 cursor-pointer"
            onClick={() => navigate(+1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">
            Install App
          </p>
          <p className="bg-purple-500 text-white w-10 h-10 text-[15px] flex items-center justify-center rounded-full">
            Ru
          </p>
          <Link to="/login" className="text-green-500">
            Login
          </Link>
          <Link to="/register" className="text-green-500">
            Register
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Songs
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Artists
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Genres
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Years
        </p>
      </div>
    </>
  );
};

export default Navbar;
