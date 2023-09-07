// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { TeamTuple, TeamTupleState } from "/src/components/teams/index.js";

function TeamInfo({ className, style }) {
  return (
    <StyledTeamInfo className={className} style={style}>
      <StyledTeamTuple>
        <TeamTuple nok name="name" />
      </StyledTeamTuple>
      <StyledTeamTupleState>
        <TeamTupleState nok />
      </StyledTeamTupleState>
    </StyledTeamInfo>
  );
}

const StyledTeamInfo = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: end;
  gap: 20px;
`;
const StyledTeamTuple = styled("li")`
  color: black;
  box-sizing: border-box;
  letter-spacing: 1px;
  font-weight: 550;
  font-size: var(--tx-xxh);
  font-family: Saira;
  word-break: break-all;
  overflow-wrap: anywhere;
`;
const StyledTeamTupleState = styled("li")`
  color: var(--info-base);
  box-sizing: border-box;
  letter-spacing: 1px;
  font-weight: 550;
  font-size: var(--tx-hg);
  font-family: Saira;
  word-break: break-all;
  overflow-wrap: anywhere;

  &::before {
    content: "(";
    font-weight: 700;
  }

  &::after {
    content: ")";
    font-weight: 700;
  }
`;

export { TeamInfo };
