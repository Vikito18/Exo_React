import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="bg-gray-900 text-white flex-col divide-y items-center items-around h-screen sm:flex-row flex justify-around w-[90%] mt-10 sm:h-auto">
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/">
        <li>Mon CV</li>
      </NavLink>
      <NavLink to="/">
        <li>Profile</li>
      </NavLink>
    </ul>
  );
};

export default Nav;
