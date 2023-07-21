import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPlayer } from "/src/contexts/index.js";

function PlayerTuple({ name = "", label = "", value = "" }) {
  const { player } = useContextPlayer();
  return (
    <>
      <span className="key">{label || name}</span>
      <span className="value">{value || player[name]}</span>
    </>
  );
}

const CssPlayerTuple = css`
  color: black;
  box-sizing: border-box;
  width: max-content;
  height: max-content;
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
    font-size: var(--tx-xs);
  }
`;

const StylePlayerTuple = styled.div`
  ${CssPlayerTuple}
`;

function StyledPlayerTuple({ name, label, value, className, ...props }) {
  return (
    <StylePlayerTuple className={className || ""} {...props}>
      <PlayerTuple
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
