import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./app/App.jsx";
import { Site } from "./site/Site.jsx";
import * as links from "./links.jsx";
import { CatchReactRouterErr } from "./err_handling/CatchReactRouterErr.jsx";

/* ------------------------------ SCRATCH ------------------------------ */
import { Scratch } from "./scratch/Scratch.jsx";

/* ------------------------------ ROUTES ------------------------------ */
import { RouteHome } from "./site/route_home/RouteHome.jsx";
import { RouteLogin } from "./site/route_login/RouteLogin.jsx";
import { RouteRegistration } from "./site/route_registration/RouteRegistration.jsx";
import { RouteRegistrationPlayer } from "./site/route_registration/route_register_player/RouteRegistrationPlayer.jsx";
import { RouteMerge } from "./site/route_merge/RouteMerge.jsx";
import { RouteGroupParty } from "./site/route_group_party/RouteGroupParty.jsx";
import { RouteLiveView } from "./site/route_live_view/RouteLiveView.jsx";

/* ------------------------------ ERROR ROUTES ------------------------------ */
import * as RouteErrs from "./site/route_errors/index.js";

function Routes(props) {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <App />,
          errorElement: <CatchReactRouterErr />,
          children: [
            {
              path: "/",
              element: <Site />,
              children: [
                {
                  index: true,
                  element: <RouteHome />,
                },
                /* --------------- REGISTRATION --------------- */
                {
                  path: links.registration.path,
                  element: <RouteRegistration />,
                  children: [
                    {
                      index: true,
                      element: <RouteRegistrationPlayer />,
                    },
                  ],
                },
                /* --------------- MERGE --------------- */
                {
                  path: links.merge.path,
                  element: <RouteMerge />,
                },
                /* --------------- GROUP PARTY --------------- */
                {
                  path: links.groupParty.path,
                  element: <RouteGroupParty />,
                },
                /* --------------- LIVE VIEW --------------- */
                {
                  path: links.liveView.path,
                  element: <RouteLiveView />,
                },
              ],
            },

            /* ----------------- LOGIN ------------------- */
            {
              path: links.login.path,
              element: <RouteLogin />,
            },

            /* --------------- ERRORS --------------- */
            {
              path: "/401",
              element: <RouteErrs.Route401 />,
            },
            {
              path: "/404",
              element: <RouteErrs.Route404 />,
            },
            {
              path: "/408",
              element: <RouteErrs.Route408 />,
            },
            {
              path: "/500",
              element: <RouteErrs.Route500 />,
            },
          ],
        },
        {
          path: "/scratch",
          element: <Scratch />,
        },
        {
          path: "*",
          element: <RouteErrs.Route404 />,
        },
      ])}
      {...props}
    />
  );
}

export { Routes };
