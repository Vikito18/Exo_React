import React from "react";
import No_Picture from "../images/No_Picture.jpg";
import ClampLines from "react-clamp-lines";

const Cards = ({ movie }) => {
  const dateFormat = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("-");
  };

  const handleGenre = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Aventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comédie");
          break;
        case 88:
          genreArray.push("Policier");
          break;
        case 99:
          genreArray.push("Documentaire");
          break;
        case 18:
          genreArray.push("Drame");
          break;
        case 10751:
          genreArray.push("Famille");
          break;
        case 14:
          genreArray.push("Fantaisie");
          break;
        case 36:
          genreArray.push("Histoire");
          break;
        case 27:
          genreArray.push("Horreur");
          break;
        case 10402:
          genreArray.push("Musicale");
          break;
        case 9648:
          genreArray.push("mystère");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science-Fiction");
          break;
        case 10770:
          genreArray.push("Téléfilm");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("Guerre");
          break;
        case 37:
          genreArray.push("Western");
          break;
        default:
      }
    }
    return genreArray.map((genre) => (
      <li key={genre} className="bg-gray-900 rounded-xl p-1 h-min">
        {genre}
      </li>
    ));
  };

  return (
    <div className="bg-gray-800 mb-5 rounded-xl shadow-lg shadow-gray-500 flex flex-col items-center  w-80">
      <img
        className="w-[95%] h-64  m-5 rounded-2xl shadow-lg shadow-black "
        src={
          movie.backdrop_path
            ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            : No_Picture
        }
        alt={"image de " + movie.title}
      />
      <h2 className="text-2xl font-bold text-center h-12 mb-8">
        {movie.title}
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 h-20 ">
        {movie.genre_ids ? handleGenre() : null}
      </ul>
      <span>
        Date de sortie :<strong> {dateFormat(movie.release_date)} </strong>
      </span>
      <span>
        Note :{" "}
        <strong>
          {movie.vote_average} / 10 <span>⭐</span>
        </strong>
      </span>
      <h2 className="font-extrabold pl-5 mt-5 flex self-start">Synopsis :</h2>
      <ClampLines
        id="synopsis"
        line={10}
        text={movie.overview}
        className=" mb-5 pl-5  line-clamp-3 text-gray-400 rounded-lg shadow-lg shadow-black"
        ellipsis="..."
        moreText={
          <p className="font-extrabold border border-black">lire plus ...</p>
        }
        lessText={
          <p className="font-extrabold border border-black">lire moins ...</p>
        }
        innerElement="p"
      />
      <button
        onClick={() => {
          localStorage.setItem(movie.title, JSON.stringify(movie));
        }}
        className="bg-cyan-400 text-black rounded-lg p-2 m-5"
      >
        Ajouter aux favoris
      </button>
    </div>
  );
};

export default Cards;
