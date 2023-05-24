import * as React from "react";
import { Outlet } from "react-router-dom";

import { StoreProvideGroupParty } from "/src/stores/groupParty/index.js";
import { PanelGroupParty } from "./PanelGroupParty.jsx";

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
