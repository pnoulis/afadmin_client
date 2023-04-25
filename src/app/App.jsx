import * as React from "react";
import { Outlet } from "react-router-dom";
import { Site } from "./Site.jsx";
import { Afmachine } from "afmachine";

Afmachine.init();

function App() {
  return (
    <Site>
      <Outlet />
    </Site>
  );
}

export { App };
