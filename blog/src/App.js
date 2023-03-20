import React from "react";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen">
      <h1 className="text-5xl font-extrabold p-5">Blog</h1>
      <Form />
    </div>
  );
};

export default App;
