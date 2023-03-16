import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <ul className="flex flex-wrap justify-around items-center">
      {countries.map((country, index) => (
        <div
          className="m-5 flex justify-center items-center text-white text-center h-min rounded-3xl  w-[60%]  sm:w-[40%] md:w-[25%]"
          key={index}
        >
          <img
            className="rounded-3xl h-40 w-[100%]"
            src={country.flags.png}
            alt={" drapeau : " + country.translations.fra.common}
          />
          <Cards
            className="absolute opacity-0 hover:opacity-80 rounded-3xl p-5 hover:bg-gray-900  "
            key={index}
            country={country}
          />
        </div>
      ))}
    </ul>
  );
};

export default Countries;
