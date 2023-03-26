import React from "react";
import FormContact from "../components/FormContact";
import Mouse from "../components/Mouse";
import Page from "../components/Page";

const Contact = () => {
  return (
    <Page title="Contact">
      <Mouse />
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-extrabold text-xl">Me contacter</h1>
        <FormContact />
      </div>
    </Page>
  );
};

export default Contact;
