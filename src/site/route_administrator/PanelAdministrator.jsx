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
import {
  administrator,
  administratorCashout,
  administratorHistory,
  administratorMissions,
  administratorRooms,
} from "/src/links.jsx";

function PanelAdministrator({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderNavbar>
          <StyleNavbarLink end to={administrator.path}>
            <StyleItemIcon size="70px">
              <TeamsIcon />
            </StyleItemIcon>
            <StyleItemText>{"stats"}</StyleItemText>
          </StyleNavbarLink>
          <StyleNavbarLink end to={administratorCashout.path}>
            <StyleItemIcon size="70px">
              <TeamsIcon />
            </StyleItemIcon>
            <StyleItemText>{administratorCashout.label}</StyleItemText>
          </StyleNavbarLink>
          {/* <StyleNavbarLink end to={administratorRooms.path}> */}
          {/*   <StyleItemIcon size="70px"> */}
          {/*     <TeamsIcon /> */}
          {/*   </StyleItemIcon> */}
          {/*   <StyleItemText>{administratorRooms.label}</StyleItemText> */}
          {/* </StyleNavbarLink> */}
          {/* <StyleNavbarLink end to={administratorMissions.path}> */}
          {/*   <StyleItemIcon size="70px"> */}
          {/*     <TeamsIcon /> */}
          {/*   </StyleItemIcon> */}
          {/*   <StyleItemText>{administratorMissions.label}</StyleItemText> */}
          {/* </StyleNavbarLink> */}
          <StyleNavbarLink end to={administratorHistory.path}>
            <StyleItemIcon size="70px">
              <TeamsIcon />
            </StyleItemIcon>
            <StyleItemText>{administratorHistory.label}</StyleItemText>
          </StyleNavbarLink>
        </PanelHeaderNavbar>
      </StylePanelHeader>
      <PanelMain id="panel-administrator-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelAdministrator };
