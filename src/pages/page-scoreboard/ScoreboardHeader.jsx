// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  StylePanelHeader,
  PanelHeaderNavbar,
  StyleNavbarLink,
  StyleItemText,
  StyleItemIcon,
} from "/src/components/panels/index.js";
import { scoreboard, scoreboardTop10 } from "/src/links.jsx";
import { ReactComponent as ScoreboardIcon } from "agent_factory.shared/ui/new-icons/scoreboard-icon.svg";
import { ReactComponent as ScoreboardTop10Icon } from "agent_factory.shared/ui/new-icons/scoreboard-top-10.svg";

function ScoreboardHeader() {
  return (
    <StylePanelHeader>
      <PanelHeaderNavbar>
        <StyleNavbarLink end to={scoreboard.path}>
          <StyleItemIcon>
            <ScoreboardIcon />
          </StyleItemIcon>
          <StyleItemText>{scoreboard.label}</StyleItemText>
        </StyleNavbarLink>
        <StyleNavbarLink end to={scoreboardTop10.path}>
          <StyleItemIcon>
            <ScoreboardTop10Icon />
          </StyleItemIcon>
          <StyleItemText>{scoreboardTop10.label}</StyleItemText>
        </StyleNavbarLink>
      </PanelHeaderNavbar>
    </StylePanelHeader>
  );
}

export { ScoreboardHeader };
