/* ------------------------------ 3RD PARTY LIBS ------------------------------ */
import * as React from "react";
import { Navigate } from "react-router-dom";

/* ------------------------------ COMPONENTS ------------------------------ */
import { Authorize } from "./components/auth/index.js";

/* ------------------------------ CONTROLLERS ------------------------------ */
import { App } from "./app/App.jsx";

/* ------------------------------ VIEW ------------------------------ */
import { Site } from "./site/Site.jsx";
import { RouteLogin } from "./site/route_login/RouteLogin.jsx";
import { RouteHome } from "./site/route_home/RouteHome.jsx";
import { RouteRegistration } from "./site/route_registration/RouteRegistration.jsx";

const routesApp = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Authorize
            renderProps={(isAuthorized) =>
              isAuthorized ? <Site /> : <Navigate to="/login" />
            }
          />
        ),
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

export { routesApp };
