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
      <WidgetArrow
        tooltipContent="liveview"
        onClick={navigate.bind(null, -1)}
      />
      <TeamHeader />
    </StylePanelTeam>
  );
}

const StylePanelTeam = styled(StylePanelHeader)`
  padding: 0;
  height: max-content;
  padding: 25px 25px 0 25px;
  gap: 50px;
`;

export { PanelTeam };
