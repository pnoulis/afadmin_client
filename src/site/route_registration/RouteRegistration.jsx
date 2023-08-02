import * as React from "react";
import { Outlet } from "react-router-dom";
import { StoreProvideRegistration } from "/src/stores/index.js";
import { PanelRegistration } from "./PanelRegistration.jsx";
import { useContextApp } from "/src/contexts/index.js";

function RouteRegistration() {
  const { flushRegistrationQueue } = useContextApp();

  React.useEffect(() => {
    return () => {
      flushRegistrationQueue();
    };
  }, []);

  return (
    <StoreProvideRegistration>
      <PanelRegistration>
        <Outlet />
      </PanelRegistration>
    </StoreProvideRegistration>
  );
}

export { RouteRegistration };
