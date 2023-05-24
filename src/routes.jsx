/* ------------------------------ 3RD PARTY LIBS ------------------------------ */
import * as React from "react";
import { Navigate } from "react-router-dom";

/* ------------------------------ LINKS ------------------------------ */
import * as LINKS from "/src/links.jsx";

/* ------------------------------ COMPONENTS ------------------------------ */
import { Authorize } from "./components/auth/index.js";

/* ------------------------------ CONTROLLERS ------------------------------ */
import { App } from "./app/App.jsx";

/* ------------------------------ VIEW ------------------------------ */
import { Site } from "./site/Site.jsx";
import { RouteLogin } from "./site/route_login/RouteLogin.jsx";
import { RouteHome } from "./site/route_home/RouteHome.jsx";
import { RouteRegistration } from "./site/route_registration/RouteRegistration.jsx";
import { RouteRegistrationPlayer } from "./site/route_registration/route_player/RouteRegistrationPlayer.jsx";
import { RouteRegistrationWristband } from "./site/route_registration/route_wristband/RouteRegistrationWristband.jsx";
import { RouteRegistrationHistory } from "./site/route_registration/route_history/RouteRegistrationHistory.jsx";
import { RouteMerge } from "./site/route_merge/RouteMerge.jsx";
import { RouteMergeTeam } from "./site/route_merge/route_team/RouteMergeTeam.jsx";
import { RouteGroupParty } from "./site/route_group_party/RouteGroupParty.jsx";
import { RouteLiveView } from "./site/route_live_view/RouteLiveView.jsx";
import { RouteLiveViewTeams } from "./site/route_live_view/route_teams/RouteLiveViewTeams.jsx";

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
          /* --------------- REGISTRATION --------------- */
          {
            path: LINKS.registration.path,
            element: <RouteRegistration />,
            children: [
              {
                index: true,
                element: <RouteRegistrationPlayer />,
              },
              {
                path: LINKS.registrationWristband.path,
                element: <RouteRegistrationWristband />,
              },
              {
                path: LINKS.registrationHistory.path,
                element: <RouteRegistrationHistory />,
              },
            ],
          },
          /* --------------- MERGE --------------- */
          {
            path: LINKS.merge.path,
            element: <RouteMerge />,
            children: [
              {
                index: true,
                element: <RouteMergeTeam />,
              },
            ],
          },
          /* --------------- GROUP PARTY --------------- */
          {
            path: LINKS.groupParty.path,
            element: <RouteGroupParty />,
          },
          /* --------------- LIVE VIEW --------------- */
          {
            path: LINKS.liveView.path,
            element: <RouteLiveView />,
            children: [
              {
                index: true,
                element: <RouteLiveViewTeams />,
              },
            ],
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
