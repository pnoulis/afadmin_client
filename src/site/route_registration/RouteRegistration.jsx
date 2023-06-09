import * as React from "react";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/site/site_wide/index.js";
import { RegistrationPanelHeader } from "./RegistrationPanelHeader.jsx";
import { ProvideStoreRegistration } from "/src/stores/index.js";
import { Outlet } from "react-router-dom";

function RouteRegistration() {
  return (
    <PanelLayout>
      <PanelLayoutHeader>
        <RegistrationPanelHeader />
      </PanelLayoutHeader>
      <PanelLayoutMain>
        <ProvideStoreRegistration>
          <Outlet />
        </ProvideStoreRegistration>
      </PanelLayoutMain>
    </PanelLayout>
  );
}

export { RouteRegistration };
