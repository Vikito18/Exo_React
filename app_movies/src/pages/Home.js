import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5b8d228ebdcaadeb58487e4a56841eaf&query=ALL`
      )
      .then((res) => setMovies(res.data.results));
  });

  return (
    <Page>
      <div className="flex flex-col items-center">
        <input
          className="rounded-lg p-2 w-52"
          type="text"
          placeholder="Nom d'un film"
        />
      </div>
    </Page>
  );
};

export default Home;
