import * as React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesSite } from "./site/routes.jsx";
import { routesScratch } from "./scratch/routes.jsx";

const router = createBrowserRouter([...routesSite, ...routesScratch]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
