import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + inputValue)
      .then((res) => setRecipes(res.data.meals));
  }, [inputValue]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return inputValue == null ? (
    <span> Aucun resultat</span>
  ) : (
    <div className="flex flex-col items-center bg-blue-100">
      <h1 className="font-extrabold text-4xl p-10">Cooking App</h1>
      <input
        onChange={handleInput}
        type="text"
        placeholder="ex : beef"
        className="rounded-xl p-2 shadow-md "
      />
      <div className="flex flex-wrap justify-around ">
        {recipes.map((recipe) => (
          <Card key={recipe.idMeal} props={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
