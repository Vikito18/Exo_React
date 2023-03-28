import React from "react";
import Page from "../components/Page";
import logo from "../img/logo.png";
import react from "../img/react.png";
import node from "../img/node.png";
import knex from "../img/knex.png";
import bootstrap from "../img/bootstrap.png";
import tailwind from "../img/tailwind.png";
import psql from "../img/psql.png";
import MovingComponent from "react-moving-text";
import SocialNetwork from "../components/SocialNetwork";
import ArrowNavigation from "../components/ArrowNavigation";

const Cv = () => {
  return (
    <Page title="Mon CV">
      <div className="flex flex-col gap-5 md:flex-row justify-around items-center w-[100%] font-extrabold">
        <MovingComponent
          className="flex flex-col items-center rounded-3xl bg-gray-200 border-4 border-cyan-500  w-auto "
          type="fadeInFromLeft"
          duration="1500ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <img className="w-64 h-32" src={logo} alt="logo_html_css_js" />
          <div className="flex flex-row justify-center sm:gap-20 w-[100%]">
            <img className="w-28 h-32 pt-10" src={react} alt="logo_react" />
            <img className="w-28 h-32 pt-10" src={node} alt="logo_nodeJs" />
            <img className="w-28 h-32 pt-10" src={knex} alt="logo_knexJs" />
          </div>
          <div className="flex flex-row justify-center pb-5 sm:gap-20 w-[100%]">
            <img
              className="w-28 h-32 pt-10"
              src={bootstrap}
              alt="logo_bootstrap"
            />
            <img
              className="w-28 h-32 pt-10"
              src={tailwind}
              alt="logo_tailwind"
            />
            <img className="w-28 h-32 pt-10" src={psql} alt="logo_psql" />
          </div>
        </MovingComponent>

        <MovingComponent
          className="flex flex-col sm:mt-0 justify-center items-center rounded-2xl border-4 border-cyan-500 bg-gray-200  items-center h-full w-72 sm:w-96 "
          type="fadeInFromLeft"
          duration="800ms"
          delay="s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <ul className=" text-lg flex flex-col text-center items-center w-[95%]">
            <li className="flex pb-8 w-[90%]">
              Titre professionnel de Développeur et Concepteur d'application
              mobile
            </li>
            <li className="w-[90%]">
              Titre professionnel de Développeur d'application web /web mobile
            </li>
            <li>Bachelor en Management Marketing événementiel</li>
          </ul>
        </MovingComponent>
      </div>
      <SocialNetwork />
      <ArrowNavigation right={"/Contact"} />
      <ArrowNavigation left={"/"} />
    </Page>
  );
};

export default Cv;
