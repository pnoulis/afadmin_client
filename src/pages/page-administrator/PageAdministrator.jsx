// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PanelAdministrator } from "./PanelAdministrator.jsx";

function PageAdministrator() {
  return (
    <PanelAdministrator>
      <Outlet />
    </PanelAdministrator>
  );
}

export { PageAdministrator };
