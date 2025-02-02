import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
  );
}

export default App;