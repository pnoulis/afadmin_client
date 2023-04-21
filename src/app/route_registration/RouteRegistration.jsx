import * as React from "react";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/app/site_wide/index.js";
import { RegistrationPanelHeader } from "./RegistrationPanelHeader.jsx";

function RouteRegistration() {
  return (
    <PanelLayout>
      <PanelLayoutHeader>
        <RegistrationPanelHeader />
      </PanelLayoutHeader>
      <PanelLayoutMain>
        <div>route registration</div>
      </PanelLayoutMain>
    </PanelLayout>
  );
}

export { RouteRegistration };
