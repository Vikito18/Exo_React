import Navigation from "@/components/Navigation";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
