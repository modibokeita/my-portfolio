
import App from "./App";
import NotFound from "./NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "about",
          element : <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "project",
          element: <Projects />
        },
        {
          path: "home",
          element: <Home />
        }
      ]
    },


]


export default routes

