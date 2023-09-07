// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { WidgetPlus } from "/src/components/widgets/index.js";

function TeamToolbar({ className, style }) {
  return (
    <StyledTeamToolbar className={className} style={style}>
      <StyledWidgetPlus forwardedAs="li" tooltipContent="team stats" />
      <StyledWidgetPlus forwardedAs="li" tooltipContent="team roster" />
    </StyledTeamToolbar>
  );
}

const StyledTeamToolbar = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  align-items: center;
`;

const StyledWidgetPlus = styled(WidgetPlus)`
  background-color: var(--primary-base);
  svg {
    fill: white;
  }
`;

export { TeamToolbar };
