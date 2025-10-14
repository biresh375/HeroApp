import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Roots from "../Components/Roots/Roots";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/Errorpage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",

    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("HomeData.json"),

        Component: Home,
      },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
    ],
  },
  {},
]);

export default Router;
