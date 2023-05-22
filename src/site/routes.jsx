import * as React from "react";
import { App } from "../app/App.jsx";
import { Site } from "./Site.jsx";
import { RouteLogin } from "./route_login/RouteLogin.jsx";
import { RouteHome } from "./route_home/RouteHome.jsx";
import { RouteRegistration } from "./route_registration/RouteRegistration.jsx";

const routesSite = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Site />,
        children: [
          {
            index: true,
            element: <RouteHome />,
          },
          {
            path: "registration",
            element: <RouteRegistration />,
          },
        ],
      },
      {
        path: "login",
        element: <RouteLogin />,
      },
    ],
  },
];

export { routesSite };
