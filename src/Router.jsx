// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import * as links from "./links.jsx";

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
                element: <Site />,
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
