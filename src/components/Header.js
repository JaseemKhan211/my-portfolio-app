function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold tracking-tight">Jaseem Khan</h1>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex space-x-8">
              <li>
                <a
                  href="#about"
                  className="text-base font-medium hover:text-gray-300 transition duration-200"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-base font-medium hover:text-gray-300 transition duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-base font-medium hover:text-gray-300 transition duration-200"
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-base font-medium hover:text-gray-300 transition duration-200"
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
              className="text-gray-300 hover:text-white focus:outline-none"
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
