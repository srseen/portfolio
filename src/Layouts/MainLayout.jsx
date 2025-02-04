import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
