// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import { useContextTeamInfoActionRouter } from "../TeamInfoActionRouter.jsx";
import { TeamPlayers } from "../TeamPlayers.jsx";

function TeamInfoOutletIndexRoute({ className, style }) {
  return (
    <StyledTeamInfoOutletIndexRoute>
      <TeamPlayers />
    </StyledTeamInfoOutletIndexRoute>
  );
}

const StyledTeamInfoOutletIndexRoute = styled("div")`
display: flex;
justify-content: end;
`;

export { TeamInfoOutletIndexRoute };
