import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPlayer } from "/src/contexts/index.js";
import { CssPlayerTuple } from "./PlayerTuple.jsx";

function PlayerTupleState({ label, nok = false }) {
  const { player } = useContextPlayer();
  return (
    <>
      {!nok && <span className="key">{label || "status"}</span>}
      <span className="value">{player.getState().name}</span>
    </>
  );
}

const CssPlayerTupleState = css`
  ${CssPlayerTuple}
  width: 185px;
  .value {
    font-size: var(--tx-nl);
    font-family: NoirPro-Medium;
    text-transform: initial;
    color: var(--info-base);
    word-break: keep-all;
    overflow-wrap: normal;
  }
`;

const StylePlayerTupleState = styled.div`
  ${CssPlayerTupleState}
`;

function StyledPlayerTupleState({ label, nok, className, ...props }) {
  return (
    <StylePlayerTupleState className={className || ""} {...props}>
      <PlayerTupleState nok={nok} label={label} {...props} />
    </StylePlayerTupleState>
  );
}

export {
  PlayerTupleState,
  CssPlayerTupleState,
  StylePlayerTupleState,
  StyledPlayerTupleState,
};
