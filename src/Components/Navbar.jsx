import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Logo from "../assets/logo.svg";
import sun from "../assets/Theme/sun.svg";
import moon from "../assets/Theme/moon.svg";
import ThemeContext from "../Contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between p-4 ${
        theme === "light" ? "bg-sky-200 text-black" : "bg-sky-950 text-white"
      }`}
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="bg-white rounded-full h-8 w-8 mr-2"
          />
          <span className="font-semibold text-xl">My Portfolio</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto space-y-2 md:space-y-0 md:space-x-4`}
        >
          <Link to="/" className="block md:inline-block hover:text-gray-400">
            Home
          </Link>
          <Link
            to="/projects"
            className="block md:inline-block hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="block md:inline-block hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block md:inline-block hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
        <button onClick={toggleTheme} className="hover:text-gray-400">
          <img
            src={theme === "light" ? sun : moon}
            alt="Toggle Theme"
            className="rounded-full h-8 w-8 mr-2"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
