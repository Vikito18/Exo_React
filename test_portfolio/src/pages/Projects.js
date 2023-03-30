import React from "react";
import DisplayProject from "../components/DisplayProject";
import Page from "../components/Page";
import SocialNetwork from "../components/SocialNetwork";

const Projects = () => {
  return (
    <Page title="Liste des projets" left="/Contact">
      <div className="flex flex-wrap gap-16 mt-10 mb-10 justify-center">
        <DisplayProject />
      </div>
      <SocialNetwork />
    </Page>
  );
};

export default Projects;
