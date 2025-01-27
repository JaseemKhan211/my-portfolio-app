import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-center gap-6">
        <a
          href="https://github.com/JaseemKhan211"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/22384529/jaseem-khan?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <i className="fab fa-stack-overflow fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jaseem-khan-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
