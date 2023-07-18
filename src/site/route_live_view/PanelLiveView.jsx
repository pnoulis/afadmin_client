import * as React from "react";
import {
  StylePanel,
  StylePanelHeader,
  PanelMain,
  PanelHeaderNavbar,
  StyleNavbarLink,
  StyleItemText,
  StyleItemIcon,
} from "/src/components/panels/index.js";
import { ReactComponent as TeamsIcon } from "agent_factory.shared/ui/icons/team_icon_fill.svg";
import { liveViewTeams } from "/src/links.jsx";

function PanelLiveView({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderNavbar>
          <StyleNavbarLink end to={liveViewTeams.path}>
            <StyleItemIcon size="70px">
              <TeamsIcon />
            </StyleItemIcon>
            <StyleItemText>{liveViewTeams.label}</StyleItemText>
          </StyleNavbarLink>
        </PanelHeaderNavbar>
      </StylePanelHeader>
      <PanelMain id="panel-liveView-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelLiveView };
