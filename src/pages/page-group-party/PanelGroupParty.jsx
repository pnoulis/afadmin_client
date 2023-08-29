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

function PanelGroupParty({
  onTeamAdd,
  onDistribute,
  onNewGP,
  onMergeGP,
  children,
}) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderToolbar>
          <StyleToolbarItem onClick={onNewGP}>
            <StyleItemIcon>
              <GroupPartyTeamIcon />
            </StyleItemIcon>
            <StyleItemText>new group party</StyleItemText>
          </StyleToolbarItem>
          <StyleToolbarItem onClick={onTeamAdd}>
            <StyleItemIcon>
              <AddTeamIcon />
            </StyleItemIcon>
            <StyleItemText>add team</StyleItemText>
          </StyleToolbarItem>
          <StyleToolbarItem onClick={onMergeGP}>
            <StyleItemIcon>
              <MergeIcon />
            </StyleItemIcon>
            <StyleItemText>merge group party</StyleItemText>
          </StyleToolbarItem>
          <StyleToolbarItem onClick={onDistribute}>
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
