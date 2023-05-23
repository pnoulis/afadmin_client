import * as React from "react";
import { PanelRegistration } from "./PanelRegistration.jsx";
import { Outlet } from "react-router-dom";

function RouteRegistration() {
  return (
    <PanelRegistration>
      <Outlet />
    </PanelRegistration>
  );
}

export { RouteRegistration };
