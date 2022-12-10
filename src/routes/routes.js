import { createBrowserRouter } from "react-router-dom";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFoud/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
