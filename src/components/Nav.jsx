import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between rounded-lg mb-2  p-4 max-w-large m-auto">
        <div className="flex gap-1 items-center">
          <div className="block md:hidden">
            <button
              onClick={togglemenu}
              className="relative flex flex-col items-center justify-center w-10 h-10"
            >
              <span className="block w-8 h-1 bg-black mb-1 transform transition duration-300"></span>
              <span className="block w-8 h-1 bg-black mb-1 transform transition duration-300"></span>
              <span className="block w-8 h-1 bg-black transform transition duration-300"></span>
            </button>
          </div>
          <h2 className="text-xl font-bold font-serif">Brian Michael</h2>
        </div>
        <div className="gap-7 hidden md:flex cursor-pointer font-serif">
          <Link to="about" smooth={true} className="text-lg font-semibold">
            About
          </Link>
          <Link to="projects" smooth={true} className="text-lg font-semibold">
            Projects
          </Link>

          <Link to="contact" smooth={true} className="text-lg font-semibold">
            Contact
          </Link>
        </div>
        <div className="relative inline-block bg-blue-500 rounded-lg">
          <a href="mailto:brianmichaeladero@gmail.com">
            <button className="relative border bg-gray-600 border-blue-400 px-2 py-1 text-white rounded-lg font-semibold   transition-transform duration-200 transform hover:-translate-y-1 hover:-translate-x-1">
              Email me
            </button>
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed cursor-pointer inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button
            onClick={togglemenu}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          <Link
            onClick={togglemenu}
            to="about"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            About
          </Link>
          <Link
            onClick={togglemenu}
            to="projects"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            Projects
          </Link>
          <Link
            onClick={togglemenu}
            to="contact"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
