import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Roots from "../Components/Roots/Roots";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import AppDetails from "../Pages/AppDetails/AppDetails";
import AppNotFound from "../Pages/AppNotFound/AppNotFound";

const Router = createBrowserRouter([
  {
    path: "/",

    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => await fetch("/HomeData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/AllApps.json"),
        Component: Apps,
      },
      {
        path: "/app_details/:id",
        loader: () => fetch("/AllApps.json"),
        Component: AppDetails,
        errorElement:<AppNotFound></AppNotFound>
      },
      {
        path: "/installation",
        loader: () => fetch("/AllApps.json"),
        Component: Installation,
      },
    ],
  },
  {},
]);

export default Router;
