// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  StylePanel,
  PanelMain,
  StylePanelHeader,
  PanelHeaderNavbar,
  StyleNavbarLink,
  StyleItemText,
  StyleItemIcon,
} from "/src/components/panels/index.js";
import { administratorCashout } from "/src/links.jsx";
import { ReactComponent as LiveTeamsIcon } from "agent_factory.shared/ui/new-icons/live-teams-icon.svg";

function PanelAdministrator({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderNavbar>
          <StyleNavbarLink end to={administratorCashout.path}>
            <StyleItemIcon>
              <LiveTeamsIcon />
            </StyleItemIcon>
            <StyleItemText>{administratorCashout.label}</StyleItemText>
          </StyleNavbarLink>
        </PanelHeaderNavbar>
      </StylePanelHeader>
      <PanelMain id="panel-administrator-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelAdministrator };
