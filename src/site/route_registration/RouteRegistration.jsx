import * as React from "react";
import { Outlet } from "react-router-dom";
import { StoreProvideRegistration } from "/src/stores/index.js";
import { PanelRegistration } from './PanelRegistration.jsx';

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
