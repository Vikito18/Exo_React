import React from "react";
import Page from "../components/Page";
import SocialNetwork from "../components/SocialNetwork";
import profile from "../img/profile.png";
import MovingComponent from "react-moving-text";
import DynamicText from "../components/DynamicText";

const Home = () => {
  return (
    <Page title="Welcome">
      <MovingComponent
        type="fadeInFromLeft"
        duration="1200ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="flex flex-col sm:flex-row  justify-around items-center w-[100%]">
          <img
            src={profile}
            alt="potho_profile"
            className="w-[30%] rounded-full"
          />
          <DynamicText />
        </div>
      </MovingComponent>
      <SocialNetwork />
    </Page>
  );
};

export default Home;
