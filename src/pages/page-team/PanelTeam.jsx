// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { StylePanelHeader } from "/src/components/panels/index.js";
import { TeamHeader } from "./TeamHeader.jsx";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { HistoryToolbarPopper } from "/src/components/history-toolbar/index.js";

function PanelTeam({ ctxTeam }) {
  const navigate = useNavigate();
  return (
    <ContextProvideTeam ctx={ctxTeam}>
      <StylePanelHeader>
        <TeamHeader />
        <HistoryToolbarPopper onBack={() => navigate(-1)} />
      </StylePanelHeader>
    </ContextProvideTeam>
  );
}

export { PanelTeam };
