import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getData = (v) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + v)
      .then((res) => setRecipes(res.data.meals));
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getData(inputValue);
  };

  useEffect(() => getData(""));

  return (
    <div className="flex flex-col items-center bg-blue-100">
      <h1 className="font-extrabold text-4xl p-10">Cooking App</h1>

      <form className="flex flex-row gap-5">
        <input
          onChange={handleInput}
          type="text"
          placeholder="ex : beef"
          className="rounded-xl p-2"
        />
        <input
          onClick={handleClick}
          type="submit"
          className="bg-cyan-400 rounded-xl p-2"
        />
      </form>
      <div className="flex flex-wrap justify-around ">
        {recipes.map((recipe) => (
          <Card key={recipe.idMeal} props={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
