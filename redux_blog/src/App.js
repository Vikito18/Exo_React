import React from "react";
import FormPost from "./components/FormPost";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl font-extrabold">Blog</h1>
      <FormPost />
    </div>
  );
};

export default App;
