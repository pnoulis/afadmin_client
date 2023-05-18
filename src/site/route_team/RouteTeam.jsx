import * as React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ProvideStoreTeam } from "/src/stores/index.js";

function RouteTeam({ children }) {
  const { state: team } = useLocation();
  return (
    <ProvideStoreTeam team={team}>{children || <Outlet />}</ProvideStoreTeam>
  );
}

export { RouteTeam };
