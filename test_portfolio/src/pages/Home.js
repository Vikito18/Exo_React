import React from "react";
import Page from "../components/Page";
import SocialNetwork from "../components/SocialNetwork";
import profile from "../img/profile.png";

const Home = () => {
  return (
    <Page title="Welcome">
      <div className="flex flex-col sm:flex-row  justify-around items-center w-[100%]">
        <img
          src={profile}
          alt="potho_profile"
          className="w-[30%] rounded-full"
        />
        <h2 className="flex flex-col text-xl lg:text-xxl font-extrabold ">
          <span className="flex self-center">Victor</span>{" "}
          <span className="flex self-center">DOS MARTIRES</span>
          <p className="lg:pt-10  pt-5 flex flex-col lg:flex-row self-center">
            Développeur{" "}
            <span className="flex lg:self-center justify-self-center self-center text-yellow-600">
              JavaScript
            </span>
          </p>
        </h2>
      </div>
      <SocialNetwork />
    </Page>
  );
};

export default Home;
