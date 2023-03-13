import React from "react";

const Page = (props) => {
  const { children } = props;
  return (
    <div className="h-screen overflow-auto bg-gray-900 text-gray-400">
      {children}
    </div>
  );
};

export default Page;
