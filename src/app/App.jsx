import * as React from "react";
import { Outlet } from "react-router-dom";
import { Site } from "./Site.jsx";
import { ProvideAfmachine } from "/src/afmachine_interface/index.js";

function App() {
  return (
    <ProvideAfmachine>
      <Site>
        <Outlet />
      </Site>
    </ProvideAfmachine>
  );
}

export { App };
