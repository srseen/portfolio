import { createContext, useState } from "react";
import PropTypes from "prop-types";

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState("/");

  const navigate = (path) => {
    setRoute(path);
    window.history.pushState({}, "", path);
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterContext;
