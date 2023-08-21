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
  PageHome,
  PageRegistration,
  PageMerge,
  PageGroupParty,
  PageLiveView,
  PageAdministrator,
} from "/src/pages/index.js";

/**
 * component
 * @example
 *
 */

function Router({ basename }) {
  return (
    <RouterProvider
      router={createBrowserRouter(
        [
          {
            element: <App />,
            children: [
              {
                path: "/",
                element: (
                  <Authorize>
                    {(loggedIn) =>
                      loggedIn ? <Site /> : <Navigate to="/login" />
                    }
                  </Authorize>
                ),
                children: [
                  {
                    index: true,
                    element: <PageHome />,
                  },
                  {
                    path: links.registration.path,
                    element: <PageRegistration />,
                  },
                  {
                    path: links.merge.path,
                    element: <PageMerge />,
                  },
                  {
                    path: links.groupParty.path,
                    element: <PageGroupParty />,
                  },
                  {
                    path: links.liveView.path,
                    element: <PageLiveView />,
                  },
                  {
                    path: links.administrator.path,
                    element: <PageAdministrator />,
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
        { basename },
      )}
    />
  );
}

export { Router };
