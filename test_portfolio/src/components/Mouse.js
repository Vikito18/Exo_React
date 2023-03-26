import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
    });
  }, []);
  return (
    <span
      id="cursor"
      className="z-auto mix-blend-difference border-8 border-orange-400 absolute translate-y-[-50%] translate-x-[-50%] rounded-full w-16 h-16"
    ></span>
  );
};
export default Mouse;
