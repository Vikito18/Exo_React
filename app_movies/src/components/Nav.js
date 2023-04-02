import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const { path, pathName } = props;
  return (
    <NavLink to={path}>
      <li>{pathName}</li>
    </NavLink>
  );
};

export default Nav;
