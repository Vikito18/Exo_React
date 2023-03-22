import React from "react";

const Card = ({ props }) => {
  return (
    <div className="w-80 m-5 flex flex-col items-center bg-white rounded-2xl">
      <img
        className="rounded-t-2xl"
        src={props.strMealThumb}
        alt={"photo : " + props.strMealThumb}
      />
      <h2 className="font-extrabold text-2xl">{props.strMeal}</h2>
      <p className="text-center p-3">{props.strInstructions}</p>
    </div>
  );
};

export default Card;
