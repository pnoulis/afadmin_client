import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./app/App.jsx";
import { Site } from "./site/Site.jsx";
import * as links from "./links.jsx";

/* ------------------------------ CSS ------------------------------ */
import "agent_factory.shared/ui/reset.css";
import "agent_factory.shared/ui/design_system.css";
import "agent_factory.shared/ui/fonts.css";
import "agent_factory.shared/ui/wristband.css";
import "/assets/app.css";

/* ------------------------------ SCRATCH ------------------------------ */
import { Scratch } from "./scratch/Scratch.jsx";

/* ------------------------------ ROUTES ------------------------------ */
import { RouteHome } from "./site/route_home/RouteHome.jsx";
import { RouteLogin } from "./site/route_login/RouteLogin.jsx";

function Routes(props) {
  return (
    <RouterProvider
      router={createBrowserRouter([
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
              ],
            },
            {
              path: links.login.path,
              element: <RouteLogin />,
            },
          ],
        },
        {
          path: "/scratch",
          element: <Scratch />,
        },
      ])}
      {...props}
    />
  );
}

export { Routes };
