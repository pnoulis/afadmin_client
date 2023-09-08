// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  StylePanelHeader,
  PanelHeaderNavbar,
  StyleNavbarLink,
  StyleItemText,
  StyleItemIcon,
} from "/src/components/panels/index.js";
import { liveView } from "/src/links.jsx";
import { ReactComponent as LiveTeamsIcon } from "agent_factory.shared/ui/new-icons/live-teams-icon.svg";

function PanelLiveViewHeader() {
  return (
    <StylePanelHeader>
      <PanelHeaderNavbar>
        <StyleNavbarLink end to={liveView.path}>
          <StyleItemIcon>
            <LiveTeamsIcon />
          </StyleItemIcon>
          <StyleItemText>{liveView.label}</StyleItemText>
        </StyleNavbarLink>
      </PanelHeaderNavbar>
    </StylePanelHeader>
  );
}

export { PanelLiveViewHeader };
