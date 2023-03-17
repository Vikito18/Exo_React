import React from "react";

const Range = () => {
  return (
    <div className="flex justify-center pt-5">
      <input className="w-[50%] flex" type="range" min="1" max="250"></input>
    </div>
  );
};

export default Range;
