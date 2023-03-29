import React from "react";
import { ProjectData } from "../data/projectData";

const DisplayProject = () => {
  console.log(ProjectData);

  return ProjectData.map((project) => (
    <div key={project.id} className="flex flex-col items-center">
      <h2 className="text-lg font-extrabold">{project.title}</h2>
      <img
        src={project.img}
        alt={`image de ` + project.title}
        className="w-94 h-64"
      />
      <span>
        Langage : <strong>{project.language}</strong>
      </span>
    </div>
  ));
};

export default DisplayProject;
