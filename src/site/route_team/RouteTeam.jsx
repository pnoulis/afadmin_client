import * as React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function RouteTeam({ children }) {
  const { state: team } = useLocation();
  return <>{children || <Outlet />}</>;
}

export { RouteTeam };
