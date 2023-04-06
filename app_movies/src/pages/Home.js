import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "../components/Page";

import Cards from "../components/Cards";

const Home = () => {
  const [inputValue, setInputValue] = useState("code");
  const [selectTri, setSelectTri] = useState([]);

  const [movies, setMovies] = useState([]);

  const tri = ["top", "flop"];
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5b8d228ebdcaadeb58487e4a56841eaf&query=${inputValue}&language=fr-FR`
      )
      .then((res) => setMovies(res.data.results));
  }, [inputValue]);

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
          {movies === null ? (
            <span className="text-white font-extrabold mt-10 ">
              Aucun resultat
            </span>
          ) : (
            movies
              .sort((a, b) => {
                if (selectTri === "top") {
                  return b.vote_average - a.vote_average;
                } else if (selectTri === "flop") {
                  return a.vote_average - b.vote_average;
                } else return null;
              })
              .map((movie) => <Cards movie={movie} key={movie.id} />)
          )}
        </div>
      </div>
    </Page>
  );
};

export default Home;
