import React from "react";
import ClampLines from "react-clamp-lines";

const Card = ({ props }) => {
  return (
    <div className="w-72 m-5 flex flex-col items-center  bg-white  shadow-xl rounded-2xl">
      <img
        className="rounded-t-2xl"
        src={props.strMealThumb}
        alt={"photo : " + props.strMealThumb}
      />
      <h2 className="font-extrabold text-2xl text-center">{props.strMeal}</h2>
      <ClampLines
        line={10}
        text={props.strInstructions}
        className="text-center p-3 line-clamp-4"
        ellipsis="..."
        moreText={
          <p className="font-extrabold border border-black">lire plus ...</p>
        }
        lessText={
          <p className="font-extrabold border border-black">lire moins ...</p>
        }
        innerElement="p"
      />
    </div>
  );
};

export default Card;
