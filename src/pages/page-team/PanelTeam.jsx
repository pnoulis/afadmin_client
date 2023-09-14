// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { StylePanelHeader } from "/src/components/panels/index.js";
import { TeamHeader } from "./TeamHeader.jsx";
import {
  StyleNavbarLink,
  StyleItemText,
  StyleItemIcon,
} from "/src/components/panels/index.js";
import { ReactComponent as LiveTeamsIcon } from "agent_factory.shared/ui/new-icons/live-teams-icon.svg";
import { liveView } from "/src/links.jsx";

function PanelTeam() {
  return (
    <StylePanelTeam>
      <StyleNavbarLink end to={liveView.path}>
        <StyleItemIcon>
          <LiveTeamsIcon/>
        </StyleItemIcon>
        <StyleItemText>{liveView.label}</StyleItemText>
      </StyleNavbarLink>
      <TeamHeader />
    </StylePanelTeam>
  );
}

const StylePanelTeam = styled(StylePanelHeader)`
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
`;

export { PanelTeam };
