import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <nav className="flex justify-between">
          <Link to="/about" className="text-xl">About</Link>
          <Link to="/skills" className="text-xl">Skills</Link>
      </nav> */}

      <main className="flex-grow p-8 font-serif">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;