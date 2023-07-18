import * as React from "react";
import { Outlet } from "react-router-dom";
import { PanelGroupParty } from "./PanelGroupParty.jsx";
import { StoreProvideGroupParty } from "/src/stores/index.js";

function RouteGroupParty() {
  return (
    <StoreProvideGroupParty>
      <PanelGroupParty>
        <Outlet />
      </PanelGroupParty>
    </StoreProvideGroupParty>
  );
}

export { RouteGroupParty };
