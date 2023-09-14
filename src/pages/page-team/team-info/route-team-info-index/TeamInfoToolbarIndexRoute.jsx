// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import { WidgetTrash } from "/src/components/widgets/index.js";

function TeamInfoToolbarIndexRoute({ className, style }) {
  return (
    <StyledTeamInfoToolbarIndexRoute>
      <StyledWidgetTrash forwardedAs="li" tooltipContent="team roster" />
    </StyledTeamInfoToolbarIndexRoute>
  );
}

const StyledTeamInfoToolbarIndexRoute = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
  height: 70px;
  justify-content: end;
`;

const StyledWidgetTrash = styled(WidgetTrash)`
  background-color: var(--primary-base);
  width: 40px;
  height: 40px;
  svg {
    fill: white;
  }
`;

export { TeamInfoToolbarIndexRoute };
