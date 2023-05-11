import * as React from "react";
import {
  Site
} from "/src/app/index.js";
import {
  RouteHome
} from "./route_home/index.js";
import {
  RouteRegistration,
  RoutePlayer,
  RouteWristband,
  RouteHistory,
} from "./route_registration/index.js";
import {
  RouteMerge
} from "./route_merge/index.js";
import {
  RouteLiveView,
  RouteLiveViewIndex
} from './route_live_view/index.js';
import {
  useAfmachine
} from "/src/afmachine_interface/index.js";
import {
  getControllers
} from "/src/app/index.js";
import mockTeams from 'agent_factory.shared/mocks/teams.json' assert { type: "json" }

const app = {
  current: {
    Afmachine: useAfmachine()
      .Afmachine
  }
};
const {
  listRegisteredPlayers,
  listAvailablePlayers,
  listTeams
} = getControllers(app);

const routesApp = [{
  path: "/",
  element: <Site />,
  children: [{
      path: "/",
      element: <RouteHome />,
    },
    {
      path: "/registration/player",
      element: <RouteRegistration />,
      children: [{
          path: "/registration/player",
          element: <RoutePlayer />,
        },
        {
          path: "/registration/player/wristband",
          element: <RouteWristband />,
        },
        {
          path: "/registration/player/history",
          element: <RouteHistory />,
          loader: async () => listRegisteredPlayers(),
        },
      ],
    },
    {
      path: "/merge",
      element: <RouteMerge />,
      loader: async () => listAvailablePlayers()
    },
    {
      path: "/liveView",
      element: <RouteLiveView/>,
      children: [{
        path: "/liveView",
        loader: async () => listTeams()
          .then((teams) => [...teams, ...mockTeams]),
        element: <RouteLiveViewIndex />,
      }]
    }
  ],
}, ];

export {
  routesApp
};
