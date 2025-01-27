import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jaseem Khan</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-blue-400">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-blue-400">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
