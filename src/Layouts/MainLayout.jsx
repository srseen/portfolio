import { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropTypes from "prop-types";
import ThemeContext from "../Contexts/ThemeContext";

const MainLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main
          className={`${
            theme === "light" ? "bg-secondary-light" : "bg-secondary-dark"
          } flex-grow flex items-center justify-center`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
