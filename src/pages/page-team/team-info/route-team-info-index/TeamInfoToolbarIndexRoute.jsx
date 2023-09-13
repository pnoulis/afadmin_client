// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import { useContextTeamInfoActionRouter } from "../TeamInfoActionRouter.jsx";

function TeamInfoToolbarIndexRoute({ className, style }) {
  return (
    <StyledTeamInfoToolbarIndexRoute>
      team info toolbar index route
    </StyledTeamInfoToolbarIndexRoute>
  );
}

const StyledTeamInfoToolbarIndexRoute = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
  height: 70px;
`;

export { TeamInfoToolbarIndexRoute };
