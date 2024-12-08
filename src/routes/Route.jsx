import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Featured from "../pages/Featured";
import Events from "../pages/Events";
import PopularDestination from "../pages/PopularDestination";
import Testimonial from "../pages/Testimonial";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/featured",
        element: <Featured />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/popular-destination",
        element: <PopularDestination />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
