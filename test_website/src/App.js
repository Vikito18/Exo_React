import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cv from "./pages/Cv";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cv" element={<Cv />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
