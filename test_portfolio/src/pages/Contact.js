import React from "react";
import ArrowNavigation from "../components/ArrowNavigation";
import FormContact from "../components/FormContact";
import Page from "../components/Page";

const Contact = () => {
  return (
    <Page title="Contact">
      <div className="flex flex-col items-center ">
        <h1 className="font-extrabold text-xl">Me contacter</h1>
        <FormContact />
      </div>
      <ArrowNavigation right={"/Projects"} />
      <ArrowNavigation left={"/Cv"} />
    </Page>
  );
};

export default Contact;
