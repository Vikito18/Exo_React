import React from "react";
import Page from "../components/Page";
import SocialNetwork from "../components/SocialNetwork";
import profile from "../img/profile.png";
import MovingComponent from "react-moving-text";
import DynamicText from "../components/DynamicText";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <Page title="Welcome" right="/Cv">
      <Menu right="/Cv" />

      <MovingComponent
        type="fadeInFromLeft"
        duration="1200ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="flex flex-col sm:flex-row mt-10 justify-around items-center w-[100%]">
          <img
            src={profile}
            alt="potho_profile"
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full"
          />
          <DynamicText />
        </div>
      </MovingComponent>
      <div className="mt-20">
        <SocialNetwork />
      </div>
    </Page>
  );
};

export default Home;
