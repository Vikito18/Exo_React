import React from "react";

const Table = () => {
  return (
    <ul className="text-white text-xs sm:text-base flex flex-col  items-around w-[95%] bg-gray-800 rounded-full p-2">
      <div className="text-center flex flex-row">
        <li className="hover:bg-gray-500 w-[100%] rounded-full">Europe</li>
        <li className="hover:bg-gray-500 w-[100%] rounded-full ">Afrique</li>
        <li className="hover:bg-gray-500 w-[100%] rounded-full ">Amérique</li>
        <li className="hover:bg-gray-500 w-[100%] rounded-full ">Asie</li>
        <li className="hover:bg-gray-500 w-[100%] rounded-full ">Océanie</li>
      </div>
    </ul>
  );
};

export default Table;
