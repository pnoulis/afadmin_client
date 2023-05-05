import * as React from "react";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/site/site_wide/index.js";
import { RegistrationPanelHeader } from "./RegistrationPanelHeader.jsx";
import { ProvideRegistrationCtx } from "/src/stores/index.js";
import { Outlet } from "react-router-dom";

function RouteRegistration() {
  const [players, setPlayers] = React.useState([]);
  return (
    <PanelLayout>
      <PanelLayoutHeader>
        <RegistrationPanelHeader />
      </PanelLayoutHeader>
      <PanelLayoutMain>
        <ProvideRegistrationCtx value={{ players, setPlayers }}>
          <Outlet />
        </ProvideRegistrationCtx>
      </PanelLayoutMain>
    </PanelLayout>
  );
}

export { RouteRegistration };
