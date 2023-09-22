// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { StylePanel, PanelMain } from "/src/components/panels/index.js";
import { ScoreboardHeader } from './ScoreboardHeader.jsx';

function PanelScoreboard({ children }) {
  return (
    <StylePanel>
      <ScoreboardHeader/>
      <PanelMain id="panel-scoreboard-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelScoreboard };
