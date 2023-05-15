import * as React from "react";
import { Outlet } from "react-router-dom";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/site/site_wide/index.js";
import { PanelHeaderLiveView } from "./PanelHeaderLiveView.jsx";

function RouteLiveView() {
  return (
    <PanelLayout>
      <PanelLayoutHeader>
        <PanelHeaderLiveView />
      </PanelLayoutHeader>
      <PanelLayoutMain>
        <Outlet />
      </PanelLayoutMain>
    </PanelLayout>
  );
}

export { RouteLiveView };
