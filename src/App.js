import React from "react";
import Layout from "./components/Layout";
// import Resume from "../public/pdf/Resume.pdf";

function App() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold mt-14 text-[#F8F1F1]">
          Hi, I'm Jaseem Khan
        </h2>
        <p className="text-center text-lg mt-6 leading-relaxed text-[#F8F1F1]">
          A Software Developer specializing in Full Stack development. With expertise in crafting efficient, scalable, and user-friendly applications, I enjoy turning complex problems into simple, innovative solutions. My skill set spans front-end technologies, back-end frameworks, and database management, ensuring seamless end-to-end development. Dedicated to continuous learning and staying updated with industry trends, I strive to deliver impactful digital experiences that meet user and business needs.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="/pdf/Resume.pdf"
            download
            className="bg-[#333333] text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Download Resume
          </a>
          <a
            href="mailto:jaseemkhandev@gmail.com"
            className="bg-[#333333] text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Send Email
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default App;
