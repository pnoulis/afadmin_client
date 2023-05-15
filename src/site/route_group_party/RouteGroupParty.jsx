import * as React from "react";
import { Outlet } from "react-router-dom";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/site/site_wide/index.js";
import { PanelHeaderGroupParty } from "./PanelHeaderGroupParty.jsx";
import { ProvideStoreGroupParty } from "/src/stores/index.js";

function RouteGroupParty() {
  return (
    <ProvideStoreGroupParty>
      <PanelLayout>
        <PanelLayoutHeader>
          <PanelHeaderGroupParty />
        </PanelLayoutHeader>
        <PanelLayoutMain>
          <Outlet />
        </PanelLayoutMain>
      </PanelLayout>
    </ProvideStoreGroupParty>
  );
}

export { RouteGroupParty };
