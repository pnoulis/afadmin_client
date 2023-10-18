// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import * as links from "./links.jsx";
import { Authorize } from "/src/components/auth/index.js";
import { App } from "/src/app/index.js";
import { Site } from "/src/site/Site.jsx";
import {
  Page401,
  Page404,
  Page408,
  Page500,
  PageLogin,
  PageRegistration,
  PageRegistrationPlayer,
  PageRegistrationWristband,
  PageRegistrationHistory,
  PageMerge,
  PageGroupParty,
  PageLiveView,
  PageLiveViewIndex,
  PageAdministrator,
  PageAdministratorCashout,
  PageAdministratorStatistics,
  PageAdministratorHistory,
  PageAdministratorScoreboards,
  PageAdministratorDevices,
  PageAdministratorCashiers,
  PageTeam,
  PageScoreboard,
  PageScoreboardLive,
  PageScoreboardTop10,
} from "/src/pages/index.js";
import { ENVIRONMENT } from "agent_factory.shared/config.js";
import {
  loadRegisteredWristbandPlayers,
  loadPackages,
  loadTeams,
  loadTeam,
  loadScoreboardTeams,
  loadAllPlayers,
  loadScoreboardDevices,
  loadDevices,
} from "/src/loaders/index.js";

/**
 * component
 * @example
 *
 */

const router = createBrowserRouter(
  [
    {
      element: <App />,
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
              element: <Navigate to="/registration/player" />,
            },
            {
              path: links.registration.path,
              element: <PageRegistration />,
              children: [
                {
                  index: true,
                  element: <PageRegistrationPlayer />,
                },
                {
                  path: links.registrationWristband.path,
                  element: <PageRegistrationWristband />,
                },
                {
                  path: links.registrationHistory.path,
                  loader: loadAllPlayers,
                  element: <PageRegistrationHistory />,
                },
              ],
            },
            {
              path: links.merge.path,
              element: <PageMerge />,
              loader: loadRegisteredWristbandPlayers,
            },
            {
              path: links.groupParty.path,
              element: <PageGroupParty />,
            },
            {
              path: links.liveView.path,
              element: <PageLiveView />,
              children: [
                {
                  index: true,
                  loader: loadTeams,
                  element: <PageLiveViewIndex />,
                },
                {
                  path: `${links.liveView.path + links.team().path}`,
                  loader: loadTeam,
                  element: <PageTeam />,
                },
              ],
            },
            {
              path: links.administrator.path,
              element: <PageAdministrator />,
              children: [
                {
                  index: true,
                  element: <PageAdministratorCashout />,
                },
                // {
                //   path: links.administratorHistory.path,
                //   element: <PageAdministratorHistory />,
                // },
                // {
                //   path: links.administratorStatistics.path,
                //   element: <PageAdministratorStatistics />,
                // },
                {
                  path: links.administratorScoreboardDevices.path,
                  loader: loadScoreboardDevices,
                  element: <PageAdministratorScoreboards />,
                },
                {
                  loader: loadDevices,
                  path: links.administratorDevices.path,
                  element: <PageAdministratorDevices />,
                },
                {
                  path: links.administratorCashiers.path,
                  element: <PageAdministratorCashiers />,
                },
              ],
            },
            {
              path: links.scoreboard.path,
              element: <PageScoreboard />,
              loader: loadScoreboardTeams,
              id: "scoreboard-root",
              children: [
                {
                  index: true,
                  element: <PageScoreboardLive />,
                },
                {
                  path: links.scoreboardTop10.path,
                  element: <PageScoreboardTop10 />,
                },
              ],
            },
          ],
        },
        {
          path: links.login.path,
          element: <PageLogin />,
        },
        {
          path: "/401",
          element: <Page401 />,
        },
        {
          path: "/404",
          element: <Page404 />,
        },
        ,
        {
          path: "/408",
          element: <Page408 />,
        },
        {
          path: "/500",
          element: <Page500 />,
        },
      ],
    },
  ],
  { basename: ENVIRONMENT.BASENAME },
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
