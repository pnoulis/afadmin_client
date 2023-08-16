// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Site } from "/src/site/Site.jsx";

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <Site />,
          path: "/",
        },
      ])}
    />
  </React.StrictMode>,
);
