import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainContent from "./pages/MainContent";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Certification from "./pages/Certification";
import Blog from "./pages/Blog";

function App() {
  return (
      <Layout>
        <Routes>
        <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
  );
}

export default App;