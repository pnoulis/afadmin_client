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
import {
  administratorCashout,
  administratorHistory,
  administratorStatistics,
  administratorScoreboardDevices,
  administratorDevices,
  administratorCashiers,
} from "/src/links.jsx";
import { ReactComponent as CashoutIcon } from "agent_factory.shared/ui/new-icons/cash-out-icon.svg";
import { ReactComponent as HistoryIcon } from "agent_factory.shared/ui/new-icons/history-icon.svg";
import { ReactComponent as StatisticsIcon } from "agent_factory.shared/ui/new-icons/stats-icon.svg";
import { ReactComponent as DevicesIcon } from 'agent_factory.shared/ui/icons/devices-icon.svg';

function PanelAdministrator({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderNavbar>
          <StyleNavbarLink end to={administratorCashout.path}>
            <StyleItemIcon>
              <CashoutIcon />
            </StyleItemIcon>
            <StyleItemText>{administratorCashout.label}</StyleItemText>
          </StyleNavbarLink>
          {/* <StyleNavbarLink end to={administratorStatistics.path}> */}
          {/*   <StyleItemIcon> */}
          {/*     <StatisticsIcon /> */}
          {/*   </StyleItemIcon> */}
          {/*   <StyleItemText>{administratorStatistics.label}</StyleItemText> */}
          {/* </StyleNavbarLink> */}
          {/* <StyleNavbarLink end to={administratorHistory.path}> */}
          {/*   <StyleItemIcon> */}
          {/*     <HistoryIcon /> */}
          {/*   </StyleItemIcon> */}
          {/*   <StyleItemText>{administratorHistory.label}</StyleItemText> */}
          {/* </StyleNavbarLink> */}
          <StyleNavbarLink end to={administratorScoreboardDevices.path}>
            <StyleItemIcon>
              <DevicesIcon />
            </StyleItemIcon>
            <StyleItemText>
              {administratorScoreboardDevices.label}
            </StyleItemText>
          </StyleNavbarLink>
          <StyleNavbarLink end to={administratorDevices.path}>
            <StyleItemIcon>
              <DevicesIcon />
            </StyleItemIcon>
            <StyleItemText>{administratorDevices.label}</StyleItemText>
          </StyleNavbarLink>

          <StyleNavbarLink end to={administratorCashiers.path}>
            <StyleItemIcon>
              <DevicesIcon />
            </StyleItemIcon>
            <StyleItemText>{administratorCashiers.label}</StyleItemText>
          </StyleNavbarLink>

        </PanelHeaderNavbar>
      </StylePanelHeader>
      <PanelMain id="panel-administrator-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelAdministrator };
