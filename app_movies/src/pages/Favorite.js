import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import axios from "axios";
import Cards from "../components/Cards";

const Favorite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let moviesList = [];
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=5b8d228ebdcaadeb58487e4a56841eaf`
        )
        .then((res) => moviesList.push(res.data))
        .then(() => setData(moviesList));
    }
  }, []);
  return (
    <Page>
      <h1 className="text-center text-xl font-bold mb-20">Liste des favoris</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {data.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
    </Page>
  );
};

export default Favorite;
