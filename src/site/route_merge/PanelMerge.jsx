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
import { ReactComponent as MergeTeamIcon } from "agent_factory.shared/ui/icons/merge_team.svg";

function PanelMerge({ onMergeTeam, children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderToolbar>
          <StyleToolbarItem onClick={onMergeTeam}>
            <StyleItemIcon>
              <MergeTeamIcon />
            </StyleItemIcon>
            <StyleItemText>merge team</StyleItemText>
          </StyleToolbarItem>
        </PanelHeaderToolbar>
      </StylePanelHeader>
      <PanelMain id="panel-merge-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelMerge };
