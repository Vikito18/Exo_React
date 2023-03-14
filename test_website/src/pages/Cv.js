import React from "react";
import Page from "../components/Page";

const Cv = () => {
  return (
    <Page title="Mon CV">
      <div className=" flex flex-col self-center items-center border-2 rounded-lg border-white w-[90%] font-extrabold">
        <h1>Victor DOS MARTIRES</h1>
        <div className="flex flex-row w-[98%]">
          <section className="flex flex-col items-center border-2 w-[50%]">
            <h1>Mon Parcours</h1>
          </section>
          <section className="flex flex-col items-center border-2 w-[50%]">
            <h1>Mes compétences</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
            </ul>
          </section>
        </div>
      </div>
    </Page>
  );
};

export default Cv;
