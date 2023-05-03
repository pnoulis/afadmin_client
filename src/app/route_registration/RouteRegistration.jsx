import * as React from "react";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/app/site_wide/index.js";
import { RegistrationPanelHeader } from "./RegistrationPanelHeader.jsx";
import { Outlet } from "react-router-dom";

function RouteRegistration() {
  return (
    <PanelLayout>
      <PanelLayoutHeader>
        <RegistrationPanelHeader />
      </PanelLayoutHeader>
      <PanelLayoutMain>
        <Outlet />
      </PanelLayoutMain>
    </PanelLayout>
  );
}

export { RouteRegistration };
