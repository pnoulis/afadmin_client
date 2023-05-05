import * as React from "react";
import { Outlet } from "react-router-dom";
import { Site } from "./Site.jsx";

function App() {
  return (
    <Site>
      <Outlet />
    </Site>
  );
}

export { App };
