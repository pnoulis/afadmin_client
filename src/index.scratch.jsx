// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PageLogin } from "/src/pages/index.js";
import ScratchAfmachine from "/src/scratch/ScratchAfmachine.jsx";
import ScratchAsync from "/src/scratch/ScratchAsync.jsx";
import { Authorize } from "/src/components/auth/index.js";
import { Page401, Page404, Page408, Page500 } from "/src/pages/index.js";

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          element: (
            <Authorize>
              {(loggedIn) => (loggedIn ? <Page401 /> : <PageLogin />)}
            </Authorize>
          ),
          path: "/",
          children: [
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
      ])}
    />
  </React.StrictMode>,
);
