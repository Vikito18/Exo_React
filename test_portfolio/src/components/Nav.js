import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ path, title, children, ...otherProps }) => {
  return (
    <NavLink
      to={path}
      className="bg-gray-800 flex items-center justify-center  rounded-xl border-cyan-500 border-solid border-2 h-24 w-56 hover:bg-cyan-500 hover:text-black"
      {...otherProps}
    >
      <li>{title}</li>
      {children}
    </NavLink>
  );
};

export default Nav;
