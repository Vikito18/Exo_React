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
    <ul className="flex flex-wrap justify-around">
      {countries.map((country, index) => (
        <li
          className="m-5 bg-gray-900 text-white rounded-xl flex-flex-col"
          key={index}
        >
          <img src={country.flags.png} />
          <h2 className="font-extrabold text-center text-lg">
            {country.translations.fra.common}{" "}
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
