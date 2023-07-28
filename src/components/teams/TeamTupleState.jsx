import * as React from "react";
import { useContextTeam } from "/src/contexts/index.js";
import styled, { css } from "styled-components";
import { CssTeamTuple } from "./TeamTuple.jsx";

function TeamTupleState({ label, value, nok = false }) {
  const { team } = useContextTeam();
  return (
    <>
      {!nok && <span className="key">{label || "status"}</span>}
      <span className="value">{team.getState().name}</span>
    </>
  );
}

const CssTeamTupleState = css`
  ${CssTeamTuple}
  .value {
    font-size: var(--tx-lg);
    font-family: NoirPro-Medium;
    text-transform: initial;
    color: var(--info-base);
    word-break: keep-all;
    overflow-wrap: normal;
  }
`;

const StyleTeamTupleState = styled.div`
  ${CssTeamTupleState}
`;

function StyledTeamTupleState({ label, nok, className, ...props }) {
  return (
    <StyleTeamTupleState className={className || ""} {...props}>
      <TeamTupleState nok={nok} label={label} {...props} />
    </StyleTeamTupleState>
  );
}

export {
  TeamTupleState,
  CssTeamTupleState,
  StyleTeamTupleState,
  StyledTeamTupleState,
};
