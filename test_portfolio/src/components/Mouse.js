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
      className="border border-cyan-400 absolute translate-y-[-50%] translate-x-[-50%] rounded-full w-14 h-14"
    ></span>
  );
};
export default Mouse;
