// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  StylePanel,
  StylePanelHeader,
  PanelMain,
  PanelHeaderToolbar,
  StyleToolbarItem,
  StyleItemText,
  StyleItemIcon,
} from "/src/components/panels/index.js";
import { ReactComponent as GroupPartyTeamIcon } from "agent_factory.shared/ui/new-icons/players-icon.svg";
import { ReactComponent as AddTeamIcon } from "agent_factory.shared/ui/new-icons/add-team-2.svg";
import { ReactComponent as MergeIcon } from "agent_factory.shared/ui/new-icons/merge-icon.svg";
import { ReactComponent as DistributeIcon } from "agent_factory.shared/ui/new-icons/merge-icon.svg";

function PanelGroupParty({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderToolbar>
          <StyleToolbarItem>
            <StyleItemIcon>
              <GroupPartyTeamIcon />
            </StyleItemIcon>
            <StyleItemText>new group party</StyleItemText>
          </StyleToolbarItem>
          <StyleToolbarItem>
            <StyleItemIcon>
              <AddTeamIcon />
            </StyleItemIcon>
            <StyleItemText>add team</StyleItemText>
          </StyleToolbarItem>
          <StyleToolbarItem>
            <StyleItemIcon>
              <MergeIcon />
            </StyleItemIcon>
            <StyleItemText>merge group party</StyleItemText>
          </StyleToolbarItem>
          <StyleToolbarItem>
            <StyleItemIcon>
              <DistributeIcon />
            </StyleItemIcon>
            <StyleItemText>distribute</StyleItemText>
          </StyleToolbarItem>
        </PanelHeaderToolbar>
      </StylePanelHeader>
      <PanelMain id="panel-groupParty-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelGroupParty };
