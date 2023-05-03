import * as React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesApp } from "./app/index.js";
import { routesScratch } from "./scratch/routes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: routesApp,
  },
  ...routesScratch,
]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    errorElement: <ErrorPage />,
  </React.StrictMode>
);
