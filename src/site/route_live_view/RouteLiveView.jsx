import * as React from "react";
import { Outlet } from "react-router-dom";
import { PanelLiveView } from "./PanelLiveView.jsx";

function RouteLiveView() {
  return (
    <PanelLiveView>
      <Outlet />
    </PanelLiveView>
  );
}

export { RouteLiveView };
