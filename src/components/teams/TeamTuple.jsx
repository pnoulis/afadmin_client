import * as React from "react";
import styled, { css } from "styled-components";
import { useContextTeam } from "/src/contexts/index.js";

function TeamTuple({ name = "", label = "", value = "", nok = false }) {
  const { team } = useContextTeam();
  return (
    <>
      {!nok && <span className="key">{label || name}</span>}
      <span className="value">{value || team[name] || "-"}</span>
    </>
  );
}

const CssTeamTuple = css`
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

const StyleTeamTuple = styled.div`
  ${CssTeamTuple}
`;

function StyledTeamTuple({ name, label, value, nok, className, ...props }) {
  return (
    <StyleTeamTuple className={className || ""} {...props}>
      <TeamTuple
        nok={nok}
        name={name}
        label={label}
        value={value}
        className={className || ""}
        {...props}
      />
    </StyleTeamTuple>
  );
}

export { TeamTuple, CssTeamTuple, StyleTeamTuple, StyledTeamTuple };
