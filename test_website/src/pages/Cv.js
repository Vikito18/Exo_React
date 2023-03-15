import React from "react";
import Page from "../components/Page";
import logo from "../img/logo.png";
import react from "../img/react.png";
import node from "../img/node.png";
import knex from "../img/knex.png";
import bootstrap from "../img/bootstrap.png";
import tailwind from "../img/tailwind.png";
import psql from "../img/psql.png";
import profile from "../img/profile.png";

const Cv = () => {
  return (
    <Page title="Mon CV">
      <div className=" flex flex-col self-center justify-center w-[100%] text-lg sm:text-xl lg:text-xxl font-extrabold  ">
        <div className="flex flex-row items-center pb-5 justify-around sm:justify-around w-[100%]">
          <img
            src={profile}
            alt="potho_profile"
            className="w-[15%] rounded-full"
          />
          <h1 className="flex self-center justify-self-center">
            Victor DOS MARTIRES
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center  w-[100%]">
          <section className="flex flex-col items-center rounded-full bg-gray-600 p-5 w-[90%] md:w-[50%]">
            <h1>Skills</h1>
            <img className="w-[40%] pt-10" src={logo} alt="logo_html_css_js" />
            <div className="flex flex-row justify-around">
              <img className="w-[20%] pt-10" src={react} alt="logo_react" />
              <img className="w-[15%] pt-10" src={node} alt="logo_nodeJs" />
              <img className="w-[15%] pt-10" src={knex} alt="logo_knexJs" />
            </div>
            <div className="flex flex-row justify-around">
              <img
                className="w-[20%] pt-10"
                src={bootstrap}
                alt="logo_bootstrap"
              />
              <img
                className="w-[30%] pt-10"
                src={tailwind}
                alt="logo_tailwind"
              />
            </div>
            <img className="w-[20%] pt-10" src={psql} alt="logo_psql" />
          </section>
          <section className="flex flex-col mt-20 pt-200 justify-center items-center rounded-full bg-gray-600  items-center sm:h-[80%] w-[80%] sm:w-[45%]">
            <h1>Parcours</h1>
            <ul className="lg:text-lg text-base flex flex-col text-center items-center sm:w-[75%]">
              <li className="flex pt-10 pb-8 w-[100%]">
                Certificat professionnel Développeur et Concepteur d'application
                mobile
              </li>
              <li className=" pb-8">
                Cértificat Développeur d'application web /web mobile
              </li>
              <li className=" pb-20">
                Bachelor en Management Marketing événementiel
              </li>
              <li></li>
            </ul>
          </section>
        </div>
      </div>
    </Page>
  );
};

export default Cv;
