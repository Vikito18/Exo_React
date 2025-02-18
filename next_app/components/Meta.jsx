import Head from "next/head";
import React from "react";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Site web de Victor Dos Martires",
  description:
    "Bienvenue sur le site web de Victor Dos Martires, développeur JavaScript, React.js, Next.js ...",
};

export default Meta;
