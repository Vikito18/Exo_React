import React from "react";
import { NavLink } from "react-router-dom";

const ArrowNavigation = (page) => {
  return (
    <div>
      {page.right && (
        <NavLink to={page.right}>
          <span className="bg-gray-500 flex justify-center w-20 mt-5 h-20 rounded-full mr-5 text-xxl">
            &#10093;
          </span>
        </NavLink>
      )}
      {page.left && (
        <NavLink to={page.left}>
          <span className="bg-gray-500 flex justify-center w-20 mt-5 h-20 rounded-full ml-5 text-xxl">
            &#10092;
          </span>
        </NavLink>
      )}
    </div>
  );
};

export default ArrowNavigation;
