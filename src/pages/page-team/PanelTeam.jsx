// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { StylePanelHeader } from "/src/components/panels/index.js";
import { TeamHeader } from "./TeamHeader.jsx";
import { WidgetArrow } from "/src/components/widgets/index.js";

function PanelTeam() {
  const navigate = useNavigate();
  return (
    <StylePanelTeam>
      <TeamHeader />
      <WidgetArrow
        tooltipContent="liveview"
        onClick={navigate.bind(null, -1)}
      />
    </StylePanelTeam>
  );
}

const StylePanelTeam = styled(StylePanelHeader)`
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export { PanelTeam };
