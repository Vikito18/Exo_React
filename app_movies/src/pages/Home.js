import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import axios from "axios";
import No_Picture from "../images/No_Picture.jpg";
import ClampLines from "react-clamp-lines";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
          {movies === null ? (
            <span className="text-white font-extrabold mt-10 ">
              Aucun resultat
            </span>
          ) : (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-xl shadow-lg shadow-gray-500 flex flex-col items-center w-80"
              >
                <h2 className="text-2xl front-bold text-center h-16">
                  {movie.title}
                </h2>
                <img
                  className="w-[95%] h-72  rounded-2xl shadow-lg shadow-black "
                  src={
                    movie.backdrop_path
                      ? "https://image.tmdb.org/t/p/original/" +
                        movie.backdrop_path
                      : No_Picture
                  }
                  alt={"image de " + movie.title}
                />
                <ClampLines
                  id="synopsis"
                  line={10}
                  text={`SYNOPSIS : \n ${movie.overview}`}
                  className=" m-5 text-center line-clamp-3  rounded-lg shadow-lg shadow-black"
                  ellipsis="..."
                  moreText={
                    <p className="font-extrabold border border-black">
                      lire plus ...
                    </p>
                  }
                  lessText={
                    <p className="font-extrabold border border-black">
                      lire moins ...
                    </p>
                  }
                  innerElement="p"
                />
                <span>
                  Date de sortie :<strong> {movie.release_date} </strong>
                </span>
                <span>
                  Note : <strong>{movie.vote_average}</strong>
                </span>
                <input
                  type="button"
                  value="Ajouter aux favoris"
                  className="bg-cyan-400 text-black rounded-lg p-2 m-5"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </Page>
  );
};

export default Home;
