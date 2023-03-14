import React from "react";
import Page from "../components/Page";
import logo from "../img/logo.png";

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
            <img className="w-[80%]" src={logo} />
          </section>
        </div>
      </div>
    </Page>
  );
};

export default Cv;
