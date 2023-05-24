import * as React from "react";
import { Outlet } from "react-router-dom";
import { StoreProvideMerge } from "/src/stores/merge/index.js";
import { PanelMerge } from "./PanelMerge.jsx";

function RouteMerge() {
  return (
    <StoreProvideMerge>
      <PanelMerge>
        <Outlet />
      </PanelMerge>
    </StoreProvideMerge>
  );
}

export { RouteMerge };
