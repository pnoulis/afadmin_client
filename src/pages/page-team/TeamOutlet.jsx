// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { TeamPlayers } from "./TeamPlayers.jsx";

function TeamOutlet({ state, outlet, style, className }) {
  switch (outlet) {
    case "roster":
      return (
        <StyledTeamOutlet outlet="roster" className={className} style={style}>
          <TeamPlayers />
        </StyledTeamOutlet>
      );
    default:
      throw new Error(`Unmatched team outlet: ${outlet}`);
  }
}

const StyledTeamOutlet = styled("section")`
  display: flex;
  justify-content: ${({ outlet }) => (outlet === "roster" ? "end" : "center")};
  align-items: start;
`;

export { TeamOutlet };
