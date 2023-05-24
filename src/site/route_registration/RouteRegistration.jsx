import * as React from "react";
import { Outlet } from "react-router-dom";
import { PanelRegistration } from "./PanelRegistration.jsx";
import { StoreProvideRegistration } from "/src/stores/registration/index.js";

function RouteRegistration() {
  return (
    <StoreProvideRegistration>
      <PanelRegistration>
        <Outlet />
      </PanelRegistration>
    </StoreProvideRegistration>
  );
}

export { RouteRegistration };
