import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [rangeValue, setRangeValue] = useState(250);
  const [selectRegion, setSelectRegion] = useState("all");
  const [selectTri, setSelectTri] = useState("");
  const regions = ["all", "Europe", "Africa", "America", "Asia", "Oceania"];
  const tri = ["default", "A-Z", "population"];

  const onChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleRegion = (e) => {
    setSelectRegion(e.target.id);
  };

  const handleTri = (e) => {
    setSelectTri(e.target.id);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div className="w-[100%] flex flex-col items-center gap-5">
      <ul className="text-white text-xs sm:text-base flex flex-row text-center justify-around w-[95%] bg-gray-800 rounded-full p-2">
        {regions.map((region) => (
          <li className="flex flex-col sm:flex-row sm:gap-5">
            <input
              type="radio"
              className="hover:bg-gray-500 w-[100%] rounded-full"
              id={region}
              onChange={handleRegion}
              name="regionRadio"
            />
            <label htmlFor={region}>{region}</label>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center sm:flex-row sm:justify-around p-5 w-[90%] bg-gray-800 rounded-full text-white ">
        <input
          className="w-[50%] flex"
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={onChange}
        ></input>

        <div className="flex flex-row w-[100%] justify-around text-xs sm:text-base">
          {tri.map((sort) => (
            <li className="flex justify-around flex-row gap-2">
              <input
                type="radio"
                id={sort}
                onChange={handleTri}
                name="triRadio"
              />
              <label
                className="lex flex-row self-center text-center w-[100%]"
                htmlFor={sort}
              >
                {sort}
              </label>
            </li>
          ))}
        </div>
      </div>
      <ul className="flex flex-wrap justify-around items-center">
        {countries
          .filter((country) =>
            selectRegion === "all"
              ? country.region
              : country.region.includes(selectRegion)
          )
          .sort((a, b) => {
            if (selectTri === "A-Z") {
              return a.translations.fra.common.localeCompare(
                b.translations.fra.common
              );
            } else if (selectTri === "population") {
              return b.population - a.population;
            } else {
              return null;
            }
          })
          .slice(0, rangeValue)
          .map((country, index) => (
            <div
              className="m-5 flex justify-center items-center text-white text-center  rounded-3xl  "
              key={index}
            >
              <img
                className="rounded-3xl h-20"
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
