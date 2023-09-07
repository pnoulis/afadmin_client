// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

function LayoutTeamInfo() {
  return (
    <div>
      <h1>layout team info</h1>
      <Outlet />
    </div>
  );
}

export { LayoutTeamInfo };
