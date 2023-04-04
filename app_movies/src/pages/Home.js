import React, { useState } from "react";
import Page from "../components/Page";

import FetchMovies from "../components/FetchMovies";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
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
        <div className="flex flex-row mb-16">
          <input
            className="rounded-lg bg-cyan-400 p-2 w-52 text-black mb-20"
            type="button"
            value="Top"
          />
          <input
            className="rounded-lg bg-cyan-400 p-2 w-52 text-black mb-20"
            type="button"
            value="Flop"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <FetchMovies value={inputValue} />
        </div>
      </div>
    </Page>
  );
};

export default Home;
