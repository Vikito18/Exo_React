import React, { useState } from "react";
import Page from "../components/Page";

import FetchMovies from "../components/FetchMovies";

const Home = () => {
  const [inputValue, setInputValue] = useState("code");
  const [selectTri, setSelectTri] = useState([]);
  const tri = ["top", "flop"];

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelecTri = (e) => {
    setSelectTri(e.target.id);
  };

  return (
    <Page>
      <div className="flex flex-col items-center">
        <input
          onChange={handleInput}
          className="rounded-lg p-2 w-52 text-black mb-5"
          type="text"
          placeholder="Nom d'un film"
        />
        <div className="flex flex-row mb-16 gap-5">
          {tri.map((sort) => (
            <button
              key={sort}
              id={sort}
              className="rounded-lg bg-cyan-400 w-24 text-black"
              onClick={handleSelecTri}
            >
              {sort}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <FetchMovies value={inputValue} select={selectTri} />
        </div>
      </div>
    </Page>
  );
};

export default Home;
