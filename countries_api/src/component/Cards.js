import React from "react";

const Cards = ({ country, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <h2 className="font-extrabold text-center text-lg ">
        {country.translations.fra.common}{" "}
      </h2>
      <div className="flex flex-col  items-center">
        <p className="text-sm">
          Capitale : <span className="font-extrabold ">{country.capital}</span>
        </p>
        <p className="text-sm">
          Region : <span className="font-extrabold">{country.region}</span>
        </p>
        <p className="text-sm">
          Population :{" "}
          <span className="font-extrabold">
            {new Intl.NumberFormat(["ban", "id"]).format(country.population)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cards;
