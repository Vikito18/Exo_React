import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import axios from "axios";
import No_Picture from "../images/No_Picture.jpg";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5b8d228ebdcaadeb58487e4a56841eaf&query=a&language=fr-FR`
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
              className="bg-gray-800 rounded-xl  flex flex-col items-center w-80"
            >
              <h2 className="text-2xl front-bold text-center">{movie.title}</h2>
              <img
                className="w-80 h-72 p-2 rounded-2xl"
                src={
                  movie.backdrop_path
                    ? "https://image.tmdb.org/t/p/original/" +
                      movie.backdrop_path
                    : No_Picture
                }
                alt={"image de " + movie.title}
              />
              <p className="m-5 p-2 bg-gray-900 rounded-xl">{movie.overview}</p>
              <span>
                Date de sortie :<strong> {movie.release_date} </strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Home;
