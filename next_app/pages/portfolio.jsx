import Meta from "@/components/Meta";
import Title from "@/components/Title";
import { ProjectData } from "@/projectData";
import React from "react";

const portfolio = () => {
  return (
    <div>
      <Meta
        title="Portfolio"
        description="liste des projets realisés avec les differents langages appris : html, css, JavaScript, React, Next, Tailwindcss ..."
      />
      <Title title="Portfolio" />

      <div className="flex flex-wrap justify-center gap-5 mx-auto">
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col w-72 h-full gap-5 mx-auto bg-gray-200 shadow-lg shadow-black border-2 border-pink-600 rounded-lg p-2"
          >
            {/* <img
              src={project.img}
              alt={"image du projet " + project.title}
              className=" w-72 h-72"
            /> */}
            <h2 className="text-center font-extrabold">{project.title} ➡️</h2>
            <p>
              Langage : <strong>{project.language}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default portfolio;
