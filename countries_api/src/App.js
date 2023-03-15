import React from "react";
import Countries from "./component/Countries";

const App = () => {
  return (
    <div className="flex flex-col items-center bg-gray-300 h-screen">
      <h1 className="text-3xl font-extrabold p-20">Country Single Page</h1>
      <ul className="text-white flex flex-row text-center justify-around w-[80%] bg-gray-800 rounded-full p-2">
        <li className="hover:bg-gray-500 w-[100%] rounded-full">Europe</li>
        <li className="hover:bg-gray-500 w-[100%] rounded-full ">Afrique</li>
        <li className="hover:bg-gray-500 w-[100%] rounded-full ">Amérique</li>
        <li className="hover:bg-gray-500 w-[100%] rounded-full ">Asie</li>
        <li className="hover:bg-gray-500 w-[100%] rounded-full ">Océanie</li>
      </ul>
      <Countries />
    </div>
  );
};

export default App;
