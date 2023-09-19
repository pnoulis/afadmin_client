// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as RosterIcon } from "agent_factory.shared/ui/new-icons/live-view-players-icon.svg";
import { WidgetRoster } from "/src/components/widgets/index.js";

function TeamInfoToolbarIndexRoute({ className, style }) {
  return (
    <StyledTeamInfoToolbarIndexRoute>
      <StyledWidgetRoster forwardedAs="li" tooltipContent="team roster" />
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

const StyledWidgetRoster = styled(WidgetRoster)`
  background-color: var(--primary-base);
  width: 50px;
  height: 50px;
  svg {
    fill: white;
  }
`;

export { TeamInfoToolbarIndexRoute };
