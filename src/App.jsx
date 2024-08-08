import ImageGrid from "./common/ImageGrid";
import { About } from "./UI/Pages/About";
import { Contact } from "./UI/Pages/Contact";
import Footer from "./UI/Pages/Footer";
import Home from "./UI/Pages/Home";
import Menu from "./UI/Pages/Menu";
import { Projects } from "./UI/Pages/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/image",
    element: <ImageGrid />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
