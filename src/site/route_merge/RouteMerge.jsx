import * as React from "react";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/site/site_wide/index.js";
import { ProvideStoreMerge } from "/src/stores/index.js";
import { Outlet } from "react-router-dom";
import { MergePanelHeader } from "./MergePanelHeader.jsx";

function RouteMerge() {
  return (
    <PanelLayout>
      <PanelLayoutHeader>
        <MergePanelHeader />
      </PanelLayoutHeader>
      <PanelLayoutMain>
        <ProvideStoreMerge>
          <Outlet />
        </ProvideStoreMerge>
      </PanelLayoutMain>
    </PanelLayout>
  );
}

export { RouteMerge };
