import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const { path, pathName } = props;
  return (
    <NavLink to={path}>
      <li className="list-non bg-cyan-400 rounded-xl p-1 text-black font-bold">
        {pathName}
      </li>
    </NavLink>
  );
};

export default Nav;
