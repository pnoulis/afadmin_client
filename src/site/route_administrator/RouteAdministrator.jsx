import * as React from "react";
import { Outlet } from "react-router-dom";
import { PanelAdministrator } from "./PanelAdministrator.jsx";

function RouteAdministrator() {
  return (
    <PanelAdministrator>
      <Outlet />
    </PanelAdministrator>
  );
}

export { RouteAdministrator };
