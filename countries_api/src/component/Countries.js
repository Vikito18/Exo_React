import axios from "axios";
import React, { useEffect, useState } from "react";

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
        <li
          className="m-5 pb-5 bg-gray-900 text-white h-min rounded-3xl flex-flex-col w-[80%] sm:w-[30%] md:w-[25%]"
          key={index}
        >
          <img
            className="rounded-t-3xl w-[100%]"
            src={country.flags.png}
            alt={country.translations.fra.common}
          />
          <h2 className="font-extrabold text-center text-2xl mb-5">
            {country.translations.fra.common}{" "}
          </h2>
          <div className="flex flex-col items-center">
            <p>
              Capitale :{" "}
              <span className="font-extrabold">{country.capital}</span>
            </p>
            <p>
              Region : <span className="font-extrabold">{country.region}</span>
            </p>
            <p>
              Population :{" "}
              <span className="font-extrabold">
                {new Intl.NumberFormat(["ban", "id"]).format(
                  country.population
                )}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
