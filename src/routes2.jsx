import * as React from "react";
import { App } from "./app/App.jsx";
import { Site } from "./site/Site.jsx";
import * as links from "./links.jsx";
import {
  CatchReactRouterErr,
  HandleUnmatchedRoute,
} from "./err_handling/index.js";

/* ------------------------------ SCRATCH ------------------------------ */
import { Scratch } from "./scratch/Scratch.jsx";

import {
  loadRegisteredWristbandPlayers,
  loadPackages,
  loadTeams,
} from "/src/loaders/index.js";

/* ------------------------------ ROUTES ------------------------------ */
import { RouteHome } from "./site/route_home/RouteHome.jsx";
import { RouteLogin } from "./site/route_login/RouteLogin.jsx";
import { RouteRegistration } from "./site/route_registration/RouteRegistration.jsx";
import { RouteRegistrationPlayer } from "./site/route_registration/route_register_player/RouteRegistrationPlayer.jsx";
import { RouteRegistrationPlayerWristband } from "./site/route_registration/route_register_player_wristband/RouteRegistrationPlayerWristband.jsx";
import { RouteMerge } from "./site/route_merge/RouteMerge.jsx";
import { RouteMergeTeam } from "./site/route_merge/route_merge_team/RouteMergeTeam.jsx";
import { RouteGroupParty } from "./site/route_group_party/RouteGroupParty.jsx";
import { RouteLiveView } from "./site/route_live_view/RouteLiveView.jsx";
import { RouteLiveViewTeams } from "./site/route_live_view/route_live_view_teams/RouteLiveViewTeams.jsx";
import { RouteTeam } from "/src/site/route_team/RouteTeam.jsx";
import { RouteAdministrator } from "/src/site/route_administrator/RouteAdministrator.jsx";
import { RouteCashOut } from "/src/site/route_administrator/route_cash_out/RouteCashOut.jsx";
import { RouteAdministratorStats } from "/src/site/route_administrator/route_stats/RouteAdministratorStats.jsx";

/* ------------------------------ VARIOUS ------------------------------ */
import { Authorize } from "/src/components/auth/index.js";
import { Navigate } from "react-router-dom";

export default [
  [
    {
      element: <App />,
      errorElement: <CatchReactRouterErr />,
      children: [
        {
          path: "/",
          element: (
            <Authorize>
              {(loggedIn) => (loggedIn ? <Site /> : <Navigate to="/login" />)}
            </Authorize>
          ),
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
                {
                  path: links.registrationWristband.path,
                  element: <RouteRegistrationPlayerWristband />,
                },
              ],
            },
            /* --------------- MERGE --------------- */
            {
              path: links.merge.path,
              element: <RouteMerge />,
              children: [
                {
                  index: true,
                  loader: loadRegisteredWristbandPlayers,
                  element: <RouteMergeTeam />,
                },
              ],
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
              children: [
                {
                  index: true,
                  loader: loadTeams,
                  element: <RouteLiveViewTeams />,
                },
                {
                  path: links.liveView.path + "/:teamId",
                  loader: loadPackages,
                  element: <RouteTeam />,
                },
              ],
            },
            /* ------------------------------ ADMINISTRATOR ------------------------------ */
            {
              path: links.administrator.path,
              element: <RouteAdministrator />,
              children: [
                {
                  index: true,
                  element: <RouteAdministratorStats />,
                },
                {
                  path: links.administratorCashout.path,
                  element: <RouteCashOut />,
                },
              ],
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
      loader: loadPackages,
      element: <Scratch />,
    },
    {
      path: "*",
      element: <HandleUnmatchedRoute />,
    },
  ],
];
