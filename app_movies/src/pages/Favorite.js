import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import axios from "axios";
import Cards from "../components/Cards";

const Favorite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=5b8d228ebdcaadeb58487e4a56841eaf`
        )
        .then((res) => setData((dataMovie) => [...dataMovie, res.data]));
    }
  }, []);
  return (
    <Page>
      <h1 className="text-center text-xl font-bold mb-20">Liste des favoris</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {data.length > 0 ? (
          data.map((movie) => <Cards movie={movie} key={movie.id} />)
        ) : (
          <h2 className="text-cyan-400 text-xl font-extrabold">
            Aucun film ajouté aux favoris
          </h2>
        )}
      </div>
    </Page>
  );
};

export default Favorite;
