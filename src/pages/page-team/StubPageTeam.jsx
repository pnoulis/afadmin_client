// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useTeam } from "/src/components/teams/index.js";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { PanelTeam } from "./PanelTeam.jsx";
import { Pending } from "/src/components/async/index.js";

function StubPageTeam({ teamName } = {}) {
  const ctxTeam = useTeam({ name: teamName });
  return (
    <ContextProvideTeam ctx={ctxTeam}>
      <PanelTeam />
      <StyledStubPageTeam>
        <Pending />
      </StyledStubPageTeam>
    </ContextProvideTeam>
  );
}

const StyledStubPageTeam = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { StubPageTeam };
