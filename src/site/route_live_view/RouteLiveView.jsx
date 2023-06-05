import * as React from "react";
import { Outlet } from "react-router-dom";
import { StoreProvideLiveView } from "/src/stores/live_view/index.js";
import { PanelLiveView } from "./PanelLiveView.jsx";

function RouteLiveView() {
  return (
    <StoreProvideLiveView>
      <PanelLiveView>
        <Outlet />
      </PanelLiveView>
    </StoreProvideLiveView>
  );
}

export { RouteLiveView };
