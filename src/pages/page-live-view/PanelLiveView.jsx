// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  StylePanel,
  StylePanelHeader,
  PanelMain,
  PanelHeaderNavbar,
  StyleNavbarLink,
  StyleItemText,
  StyleItemIcon,
} from "/src/components/panels/index.js";
import { liveView } from "/src/links.jsx";
import { ReactComponent as LiveTeamsIcon } from "agent_factory.shared/ui/new-icons/live-teams-icon.svg";

function PanelLiveView({ children }) {
  return (
    <StylePanel>
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
      <PanelMain id="panel-live-view-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelLiveView };
