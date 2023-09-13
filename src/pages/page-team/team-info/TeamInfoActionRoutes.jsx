// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { useLocation } from "react-router-dom";
// ------------------------------ project  ------------------------------- //
import { TeamInfoActionRoute } from "./TeamInfoActionRouter.jsx";

function RouteTeamInfoIndex({ children, target }) {
  const { pathname } = useLocation();
  return (
    <TeamInfoActionRoute name="index" path={pathname} target={target}>
      {children}
    </TeamInfoActionRoute>
  );
}

export { RouteTeamInfoIndex };
