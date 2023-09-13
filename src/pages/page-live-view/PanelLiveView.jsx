// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { StylePanel, PanelMain } from "/src/components/panels/index.js";
import { PanelLiveViewHeader } from "./PanelLiveViewHeader.jsx";
import {
  PanelActionRouterMountPoint,
  PanelActionRoute,
} from "/src/components/panels/index.js";
import { liveView } from "/src/links.jsx";

function PanelLiveView({ children }) {
  return (
    <StylePanel>
      <PanelActionRouterMountPoint id="panel-liveview-header-mount-point">
        <PanelActionRoute path={liveView.path}>
          <PanelLiveViewHeader />
        </PanelActionRoute>
      </PanelActionRouterMountPoint>
      <PanelMain id="panel-live-view-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelLiveView };
