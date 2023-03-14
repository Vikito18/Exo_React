import React from "react";
import Nav from "./Nav";

export const PageHeader = (props) => {
  const { title } = props;
  return (
    <div className="flex-col flex items-center sm:items-center">
      <h1 className="flex text-xxl font-extrabold"> {title}</h1>
      <Nav />
    </div>
  );
};

const Page = (props) => {
  const { children, title } = props;
  return (
    <div className="h-screen overflow-auto bg-gray-900 text-gray-400">
      <PageHeader title={title} />
      {children}
    </div>
  );
};

export default Page;
