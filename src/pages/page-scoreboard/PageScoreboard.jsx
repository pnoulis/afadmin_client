// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PanelScoreboard } from "./PanelScoreboard.jsx";

function PageScoreboard() {
  return (
    <PanelScoreboard>
      <Outlet />
    </PanelScoreboard>
  );
}

export { PageScoreboard };
