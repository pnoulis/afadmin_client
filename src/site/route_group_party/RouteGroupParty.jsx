import * as React from "react";
import { Outlet } from "react-router-dom";
import { PanelGroupParty } from "./PanelGroupParty.jsx";

function RouteGroupParty() {
  return (
    <PanelGroupParty>
      <Outlet />
    </PanelGroupParty>
  );
}

export { RouteGroupParty };
