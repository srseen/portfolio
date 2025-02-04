import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`${
        theme === "light"
          ? "bg-primary-light text-black"
          : "bg-primary-dark text-white"
      } py-4`}
    >
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
