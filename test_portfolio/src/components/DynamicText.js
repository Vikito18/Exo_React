import React from "react";
import MovingComponent from "react-moving-text";

const DynamicText = () => {
  return (
    <h2 className="flex flex-col text-xl lg:text-xxl font-extrabold ">
      <span className="flex self-center">Victor</span>{" "}
      <span className="flex self-center">DOS MARTIRES</span>
      <p className="lg:pt-10  pt-5 flex flex-col lg:flex-row self-center">
        Développeur Web
      </p>
      <span className="flex lg:self-center text-center justify-self-center self-center text-yellow-600">
        <MovingComponent
          type="typewriter"
          duration="700ms"
          dataText={["JavaScript", "React.js"]}
        />
      </span>
    </h2>
  );
};

export default DynamicText;
