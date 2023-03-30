import React from "react";
import FormContact from "../components/FormContact";
import Page from "../components/Page";
import MovingComponent from "react-moving-text";

const Contact = () => {
  return (
    <Page title="" left="/Cv" right="/Projects">
      <MovingComponent
        type="fadeInFromLeft"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="flex flex-col items-center ">
          <h1 className="font-extrabold text-xl">Me contacter</h1>
          <FormContact />
        </div>
      </MovingComponent>
    </Page>
  );
};

export default Contact;
