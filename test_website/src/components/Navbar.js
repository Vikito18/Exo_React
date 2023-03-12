import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Cv">
          <li>Mon CV</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
