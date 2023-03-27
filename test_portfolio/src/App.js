import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
