// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Outlet,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { loadPackages } from "/src/loaders/index.js";
import { Pending } from "/src/components/async/index.js";
import { AwaitPackages } from "/src/components/async/AwaitPackages.jsx";

function PageMerge() {
  return <div></div>;
}

function PageTeam() {
  return (
    <div>
      <h1>page team</h1>
      <React.Suspense fallback={<Pending />}>
        <AwaitPackages />
      </React.Suspense>
    </div>
  );
}

function PageTeamPkgs() {
  return (
    <div>
      <h1>page team pkgs</h1>
    </div>
  );
}

function PageTeamRoster() {
  return (
    <div>
      <h1>page team roster</h1>
    </div>
  );
}

const router = createBrowserRouter([
  {
    loader: loadPackages,
    path: "*",
    element: <PageTeam />,
  },
]);

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
