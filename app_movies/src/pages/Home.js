import React from "react";
import Page from "../components/Page";

const Home = () => {
  return (
    <Page>
      <div className="flex flex-col items-center">
        <input
          className="rounded-lg p-2 w-52"
          type="text"
          placeholder="Nom d'un film"
        />
      </div>
    </Page>
  );
};

export default Home;
