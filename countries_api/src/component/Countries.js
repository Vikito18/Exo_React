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
    <ul className="flex flex-wrap">
      {countries.map((country, index) => (
        <li className="m-5 bg-gray-900 text-white rounded-xl" key={index}>
          {country.translations.fra.common}
        </li>
      ))}
    </ul>
  );
};

export default Countries;
