import React from "react";
import { NavLink } from "react-router-dom";

const ArrowNavigation = (page) => {
  return (
    <div>
      {page.right && (
        <NavLink to={page.right}>
          <span className="bg-gray-500  flex justify-center items-center rounded-full w-10 h-10  text-xl">
            &#10093;
          </span>
        </NavLink>
      )}
      {page.left && (
        <NavLink to={page.left}>
          <span className=" bg-gray-500 flex justify-center items-center w-10 h-10 rounded-full  text-xl">
            &#10092;
          </span>
        </NavLink>
      )}
    </div>
  );
};

export default ArrowNavigation;
