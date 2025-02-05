import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainContent from "./pages/MainContent";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Project from "./pages/Project";

function App() {
  return (
      <Layout>
        <Routes>
        <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Layout>
  );
}

export default App;