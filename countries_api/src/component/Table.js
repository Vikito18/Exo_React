import React from "react";

const Table = () => {
  return (
    <ul className="text-white text-xs sm:text-base flex flex-row text-center justify-around w-[95%] bg-gray-800 rounded-full p-2">
      <li className="hover:bg-gray-500 w-[100%] rounded-full">Europe</li>
      <li className="hover:bg-gray-500 w-[100%] rounded-full ">Afrique</li>
      <li className="hover:bg-gray-500 w-[100%] rounded-full ">Amérique</li>
      <li className="hover:bg-gray-500 w-[100%] rounded-full ">Asie</li>
      <li className="hover:bg-gray-500 w-[100%] rounded-full ">Océanie</li>
    </ul>
  );
};

export default Table;
