import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="left-0 right-0 flex justify-center text-1xl items-center text-white py-5 px-9 bottom-0">
      <div className="container mx-auto flex flex-col items-center gap-1">
        {/* Social Icons */}
        <div className="flex justify-center gap-6">
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

        {/* Built By Text */}
      <div className="text-sm text-black-500">
        Build by:{" "}
        <a
          href="https://linktr.ee/jaseemkhandev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline" > @jaseem-khan</a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
