import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [recipes, setRecipes] = useState([]);

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setRecipes(res.data.meals));
  };

  useEffect(() => getData());
  return (
    <div className="flex flex-wrap justify-around ">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="w-80 p-5 flex flex-col items-center"
        >
          <img
            src={recipe.strMealThumb}
            alt={"photo : " + recipe.strMealThumb}
          />
          <h2 className="font-extrabold text-2xl">{recipe.strMeal}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
