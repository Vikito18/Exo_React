import React from "react";
import Nav from "../components/Nav";
import Page from "../components/Page";

const Home = () => {
  return (
    <Page>
      <div className="flex-col flex items-center">
        <h1 className="flex text-xxl">Welcome</h1>
        <Nav />
      </div>
    </Page>
  );
};

export default Home;
