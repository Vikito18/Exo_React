import React from "react";
import Nav from "../components/Nav";
import Page from "../components/Page";
import profile from "../img/profile.png";

const Home = () => {
  return (
    <Page>
      <div className="flex-col flex items-center sm:items-center">
        <h1 className="flex text-xxl font-extrabold">Welcome</h1>
        <Nav />
      </div>
      <div className="flex flex-row justify-around items-center w-[100%]">
        <img
          src={profile}
          alt="potho_profile"
          className="w-[30%] rounded-full"
        />
        <h2 className="flex flex-col text-lg sm:text-xl lg:text-xxl font-extrabold ">
          <span className="flex self-center">Victor</span>{" "}
          <span className="flex self-center">DOS MARTIRES</span>
        </h2>
      </div>
    </Page>
  );
};

export default Home;
