import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold text-4xl p-10">Cooking App</h1>
      <Card />
    </div>
  );
};

export default App;
