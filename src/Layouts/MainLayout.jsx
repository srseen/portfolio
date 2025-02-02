import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
