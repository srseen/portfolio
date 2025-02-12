import { ThemeProvider } from "./Contexts/ThemeContext";
import { RouterProvider } from "./Contexts/RouterContext";
import RouterContext from "./Contexts/RouterContext";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useContext } from "react";

const App = () => {
  const { route } = useContext(RouterContext);

  const renderPage = () => {
    switch (route) {
      case "/skills":
        return <Skills />;
      case "/projects":
        return <Projects />;
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <ThemeProvider>
      <RouterProvider>
        <MainLayout>{renderPage()}</MainLayout>
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
