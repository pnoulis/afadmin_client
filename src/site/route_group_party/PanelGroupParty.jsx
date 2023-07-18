import * as React from "react";
import {
  StylePanel,
  StylePanelHeader,
  PanelMain,
  PanelHeaderToolbar,
  StyleToolbarItem,
  StyleItemText,
  StyleItemIcon,
} from "/src/components/panels/index.js";
import { ReactComponent as AddTeamIcon } from "agent_factory.shared/ui/icons/group_add_filled.svg";
import { ReactComponent as MergeTeamIcon } from "agent_factory.shared/ui/icons/merge_team.svg";
import { ReactComponent as GroupPartyIcon } from "agent_factory.shared/ui/icons/group_filled.svg";

function PanelGroupParty({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderToolbar>
          <StyleToolbarItem>
            <StyleItemIcon>
              <GroupPartyIcon />
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
              <MergeTeamIcon />
            </StyleItemIcon>
            <StyleItemText>merge group party</StyleItemText>
          </StyleToolbarItem>
        </PanelHeaderToolbar>
      </StylePanelHeader>
      <PanelMain id="panel-groupParty-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelGroupParty };
