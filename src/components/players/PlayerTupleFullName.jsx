import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPlayer } from "/src/contexts/index.js";

function PlayerTupleFullName({ label }) {
  const { player } = useContextPlayer();
  return (
    <>
      <span className="key">{label || "name"}</span>
      <span className="value firstname">{player.name}</span>
      <span className="value lastname">{player.surname}</span>
    </>
  );
}

const CssPlayerTupleFullName = css`
  color: black;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 5px;
  font-family: NoirPro-Light;
  letter-spacing: 1px;
  font-size: var(--tx-sm);
  align-items: center;

  .key {
    font-family: NoirPro-Regular;
  }

  .key::after {
    content: ":";
    margin: 0 5px 0 2px;
  }

  .value {
    font-size: var(--tx-xs);
  }

  .firstname {
    margin-right: 5px;
  }
`;

const StylePlayerTupleFullName = styled.div`
  ${CssPlayerTupleFullName}
`;

function StyledPlayerTupleFullName({ label, className, ...props }) {
  return (
    <StylePlayerTupleFullName className={className || ""} {...props}>
      <PlayerTupleFullName label={label} />
    </StylePlayerTupleFullName>
  );
}

export {
  PlayerTupleFullName,
  CssPlayerTupleFullName,
  StylePlayerTupleFullName,
  StyledPlayerTupleFullName,
};
