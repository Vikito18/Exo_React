import React from "react";
import ArrowNavigation from "../components/ArrowNavigation";
import Page from "../components/Page";

const Projects = () => {
  return (
    <Page title="Liste des projets">
      <ArrowNavigation left={"/Contact"} />
    </Page>
  );
};

export default Projects;
