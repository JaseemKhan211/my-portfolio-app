import React from "react";
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="min-h-screen p-8 font-serif">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-5xl font-extrabold mt-14 text-[#F8F1F1]">
            Hi, I'm Jaseem Khan
          </h2>
          <p className="text-center text-lg mt-6 leading-relaxed text-[#F8F1F1]">
            A Software Developer specializing in Full Stack development. With expertise in crafting efficient, scalable, and user-friendly applications, I enjoy turning complex problems into simple, innovative solutions. My skill set spans front-end technologies, back-end frameworks, and database management, ensuring seamless end-to-end development. Dedicated to continuous learning and staying updated with industry trends, I strive to deliver impactful digital experiences that meet user and business needs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
