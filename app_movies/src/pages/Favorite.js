import React from "react";
import Page from "../components/Page";
import No_Picture from "../images/No_Picture.jpg";
import ClampLines from "react-clamp-lines";

const Favorite = () => {
  let key = [];
  let movies = [];

  const getLocalStorage = () => {
    const getKey = Object.entries(localStorage);

    const get = () => {
      for (let i = 0; i < getKey.length; i++) {
        key.push(getKey[i][0]);
      }
      return key;
    };
    get();

    const getMovie = () => {
      for (let i = 0; i < key.length; i++) {
        movies.push(JSON.parse(localStorage.getItem(key[i])));
      }
      return movies;
    };
    getMovie();
  };
  getLocalStorage();

  return (
    <Page>
      <h1 className="text-center text-xl font-bold mb-20">Liste des favoris</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 mb-5 rounded-xl shadow-lg shadow-gray-500 flex flex-col items-center w-80"
          >
            <h2 className="text-2xl front-bold text-center h-16">
              {movie.title}
            </h2>
            <img
              className="w-[95%] h-72  rounded-2xl shadow-lg shadow-black "
              src={
                movie.backdrop_path
                  ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
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
            <button
              onClick={() => {
                localStorage.removeItem(movie.title);
                getLocalStorage();
              }}
              className="bg-red-400 text-black rounded-lg p-2 m-5"
            >
              Retirer des favoris
            </button>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Favorite;
