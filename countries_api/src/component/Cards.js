import React from "react";

const Cards = ({ country, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <h2 className="font-extrabold text-center text-2xl ">
        {country.translations.fra.common}{" "}
      </h2>
      <div className="flex flex-col  items-center">
        <p>
          Capitale : <span className="font-extrabold">{country.capital}</span>
        </p>
        <p>
          Region : <span className="font-extrabold">{country.region}</span>
        </p>
        <p>
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
