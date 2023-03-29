import React from "react";
import DisplayProject from "../components/DisplayProject";
import Page from "../components/Page";

const Projects = () => {
  return (
    <Page title="Liste des projets" left="/Contact">
      <DisplayProject />
    </Page>
  );
};

export default Projects;
