function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <div className="flex justify-center items-center h-16">

          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex space-x-4">
              <li>
                <a
                  href="#about"
                  className="px-4 py-2 bg-[#333333] text-white rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="px-4 py-2 bg-[#333333] text-white rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="px-4 py-2 bg-[#333333] text-white rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="px-4 py-2 bg-[#333333] text-white rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#certification"
                  className="px-4 py-2 bg-[#333333] text-white rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
                >
                  Certification
                </a>
              </li>
              <li>
                <a
                  href="#achievement"
                  className="px-4 py-2 bg-[#333333] text-white rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
                >
                  Achievement
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="px-4 py-2 bg-[#333333] text-white rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
