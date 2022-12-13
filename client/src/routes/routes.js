import { createBrowserRouter } from "react-router-dom";
import AddContent from "../pages/Dashboard/AddContent";
import ListContent from "../pages/Dashboard/ListContent";
import Dashboard from "../pages/layout/Dashboard";
import Main from "../pages/layout/Main";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import SingleContent from "../pages/Main/SingleContent";
import TopRate from "../pages/Main/TopRate";
import NotFound from "../pages/NotFoud/NotFound";

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
        path: "content/:id",
        element: <SingleContent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRate />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AddContent />,
      },
      {
        path: "list-content",
        element: <ListContent />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
