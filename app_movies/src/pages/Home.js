import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5b8d228ebdcaadeb58487e4a56841eaf&query=a`
      )
      .then((res) => setMovies(res.data.results));
  }, [inputValue]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Page>
      <div className="flex flex-col items-center">
        <input
          onChange={handleInput}
          className="rounded-lg p-2 w-52 text-black mb-20"
          type="text"
          placeholder="Nom d'un film"
        />
        <div className="flex flex-wrap justify-center gap-5">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-xl text-center w-80"
            >
              <h2>{movie.title}</h2>
              <img
                className="w-80 h-72 p-2 rounded-2xl"
                src={
                  "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
                }
                alt={"image de " + movie.title}
              />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Home;
