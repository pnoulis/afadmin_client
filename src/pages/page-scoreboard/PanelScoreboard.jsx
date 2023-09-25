// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import { StylePanel, PanelMain } from "/src/components/panels/index.js";
import { ScoreboardHeader } from "./ScoreboardHeader.jsx";

function PanelScoreboard({ children }) {
  return (
    <StylePanel>
      <ScoreboardHeader />
      <StyledPanelMain id="panel-scoreboard-main">{children}</StyledPanelMain>
    </StylePanel>
  );
}

const StyledPanelMain = styled(PanelMain)`
`;

export { PanelScoreboard };
