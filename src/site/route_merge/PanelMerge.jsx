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
import { ReactComponent as GroupPartyIcon } from "agent_factory.shared/ui/icons/group_add_filled.svg";

function PanelMerge({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>
        <PanelHeaderToolbar>
          <StyleToolbarItem>
            <StyleItemIcon>
              <GroupPartyIcon />
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
