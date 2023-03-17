import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [rangeValue, setRangeValue] = useState(250);
  const onChange = (e) => {
    setRangeValue(e.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="flex justify-center pt-5 w-[80%]">
        <input
          className="w-[50%] flex"
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={onChange}
        ></input>
      </div>
      <ul className="flex flex-wrap justify-around items-center">
        {countries.slice(0, rangeValue).map((country, index) => (
          <div
            className="m-5 flex justify-center items-center text-white text-center  rounded-3xl  "
            key={index}
          >
            <img
              className="rounded-3xl h-40"
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
    </div>
  );
};

export default Countries;
