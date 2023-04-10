import FormContact from "@/components/FormContact";
import Meta from "@/components/Meta";
import Title from "@/components/Title";
import React from "react";

const contact = () => {
  return (
    <div>
      <Meta title="Contact" description="Contactez moi par mail" />
      <Title title="Contact" />
      <div className="flex flex-col items-center ">
        <h1 className="font-extrabold text-xl">Me contacter</h1>
        <FormContact />
      </div>
    </div>
  );
};

export default contact;
