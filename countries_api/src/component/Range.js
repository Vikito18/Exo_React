import React, { useState } from "react";

const Range = () => {
  const [rangeValue, setRangeValue] = useState(100);
  const onChange = (e) => {
    setRangeValue(e.target.value);
  };
  return (
    <div className="flex justify-center pt-5">
      <input
        className="w-[50%] flex"
        type="range"
        min="1"
        max="250"
        defaultValue={rangeValue}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Range;
