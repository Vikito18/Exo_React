import React from "react";
import { ProjectData } from "../data/projectData";

const DisplayProject = () => {
  console.log(ProjectData);

  return ProjectData.map((project) => (
    <div>
      <h2>{project.title}</h2>
    </div>
  ));
};

export default DisplayProject;
