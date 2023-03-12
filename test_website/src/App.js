import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Cv from "./pages/Cv";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
