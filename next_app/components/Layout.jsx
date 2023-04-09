import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
