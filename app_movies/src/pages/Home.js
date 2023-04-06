import React, { useState } from "react";
import Page from "../components/Page";

import FetchMovies from "../components/FetchMovies";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [top, setTop] = useState([]);
  const [flop, setFlop] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleTop = (e) => {
    setTop(e.target.id);
  };

  const handleFlop = (e) => {
    setFlop(e.target.id);
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
          <input
            id="top"
            className="rounded-lg bg-cyan-400 w-24 text-black"
            type="button"
            value="Top"
            onChange={handleTop}
          />
          <input
            id="flop"
            className="rounded-lg bg-cyan-400  w-24 text-black "
            type="button"
            value="Flop"
            onChange={handleFlop}
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
