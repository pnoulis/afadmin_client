import * as React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesApp } from "./routes.jsx";
import { routesScratch } from "./scratch/routes.jsx";

const BrowserRouter = createBrowserRouter([...routesApp, ...routesScratch]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
