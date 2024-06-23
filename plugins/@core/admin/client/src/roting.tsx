import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages";
import PluginsPage from "./pages/plugins";
import UsersPage from "./pages/users";

const routing = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/plugins",
      element: <PluginsPage />,
    },
    {
      path: "/users",
      element: <UsersPage />,
    },
  ],
  {
    basename: "/core/admin",
  }
);

export default routing;
