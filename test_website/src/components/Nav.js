import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex-col pb-20 items-center items-around  sm:flex-row flex justify-around sm:w-[100%] mt-10  w-[80%]">
      <NavLink
        className="bg-gray-800 flex items-center justify-center p-10 rounded-xl border-gray-500 border-solid border-2 h-[100%] w-[100%] hover:bg-gray-400 hover:text-black"
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className="bg-gray-800 flex items-center justify-center p-10 rounded-xl border-gray-500 border-solid border-2 h-[100%] w-[100%] hover:bg-gray-400 hover:text-black"
        to="/cv"
      >
        <li>Mon CV</li>
      </NavLink>
      <NavLink
        className="bg-gray-800 flex items-center justify-center p-10 rounded-xl border-gray-500 border-solid border-2 h-[100%] w-[100%] hover:bg-gray-400 hover:text-black"
        to="/"
      >
        <li>Profile</li>
      </NavLink>
    </ul>
  );
};

export default Nav;
