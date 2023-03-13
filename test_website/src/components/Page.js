import React from "react";

const Page = (props) => {
  const { children } = props;
  return <div className="bg-gray-900 text-white">{children}</div>;
};

export default Page;
