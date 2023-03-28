import React from "react";
import { NavLink } from "react-router-dom";

const ArrowNavigation = (page) => {
  return (
    <div>
      {page.right && (
        <NavLink to={page.right}>
          <span className="bg-gray-500 rounded-full w-20 h-20  text-center absolute bottom-[50%] left-[94%] text-xxl">
            &#10093;
          </span>
        </NavLink>
      )}
      {page.left && (
        <NavLink to={page.left}>
          <span className="bg-gray-500 rounded-full w-20 h-20  text-center absolute bottom-[50%] left-[0%] text-xxl">
            &#10092;
          </span>
        </NavLink>
      )}
    </div>
  );
};

export default ArrowNavigation;
