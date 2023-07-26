import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPlayer } from "/src/contexts/index.js";

function PlayerTuple({ name = "", label = "", value = "", nok = false }) {
  const { player } = useContextPlayer();
  return (
    <>
      {!nok && <span className="key">{label || name}</span>}
      <span className="value">{value || player[name] || "-"}</span>
    </>
  );
}

const CssPlayerTuple = css`
  color: black;
  box-sizing: border-box;
  padding: 0 5px;
  font-family: NoirPro-Light;
  letter-spacing: 1px;
  font-size: var(--tx-sm);

  .key {
    font-family: NoirPro-Regular;
  }

  .key::after {
    content: ":";
    margin: 0 5px 0 2px;
  }

  .value {
    display: inline-block;
    font-size: var(--tx-xs);
    word-break: break-all;
    overflow-wrap: anywhere;
  }
`;

const StylePlayerTuple = styled.div`
  ${CssPlayerTuple}
`;

function StyledPlayerTuple({ name, label, value, nok, className, ...props }) {
  return (
    <StylePlayerTuple className={className || ""} {...props}>
      <PlayerTuple
        nok={nok}
        name={name}
        label={label}
        value={value}
        className={className || ""}
        {...props}
      />
    </StylePlayerTuple>
  );
}

export { PlayerTuple, CssPlayerTuple, StylePlayerTuple, StyledPlayerTuple };
