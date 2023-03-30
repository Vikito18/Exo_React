import React from "react";
import DisplayProject from "../components/DisplayProject";
import Page from "../components/Page";
import SocialNetwork from "../components/SocialNetwork";
import MovingComponent from "react-moving-text";

const Projects = () => {
  return (
    <Page title="Liste des projets" left="/Contact">
      <MovingComponent
        type="fadeInFromLeft"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="flex flex-wrap gap-16 mt-10 mb-10 justify-center">
          <DisplayProject />
        </div>
        <SocialNetwork />
      </MovingComponent>
    </Page>
  );
};

export default Projects;
