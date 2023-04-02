import React from "react";
import Nav from "./Nav";

const Page = ({ children }) => {
  return (
    <div className="bg-black min-h-screen text-white">
      <ul className="flex flex-row gap-5 absolute left-5 top-5 text-xl">
        <Nav path="/" pathName="Home" />
        <Nav path="/Favorite" pathName="Favoris" />
      </ul>
      <h1 className="flex justify-center font-mono text-3xl font-extrabold pt-20 mb-10">
        AppsMovies
      </h1>
      {children}
    </div>
  );
};

export default Page;
