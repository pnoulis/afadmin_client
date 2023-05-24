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
import { ReactComponent as PlayerIcon } from "agent_factory.shared/ui/icons/add_player.svg";
import { ReactComponent as WristbandIcon } from "agent_factory.shared/ui/icons/wristband.svg";
import { ReactComponent as SummaryIcon } from "agent_factory.shared/ui/icons/summary.svg";
import {
  registrationPlayer,
  registrationWristband,
  registrationHistory,
} from "/src/links.jsx";

function PanelRegistration({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderNavbar>
          <StyleNavbarLink end to={registrationPlayer.path}>
            <StyleItemIcon>
              <PlayerIcon />
            </StyleItemIcon>
            <StyleItemText>{registrationPlayer.label}</StyleItemText>
          </StyleNavbarLink>
          <StyleNavbarLink end to={registrationWristband.path}>
            <StyleItemIcon>
              <WristbandIcon />
            </StyleItemIcon>
            <StyleItemText>{registrationWristband.label}</StyleItemText>
          </StyleNavbarLink>
          <StyleNavbarLink end to={registrationHistory.path}>
            <StyleItemIcon>
              <SummaryIcon />
            </StyleItemIcon>
            <StyleItemText>{registrationHistory.label}</StyleItemText>
          </StyleNavbarLink>
        </PanelHeaderNavbar>
      </StylePanelHeader>
      <PanelMain id="panel-registration-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelRegistration };
