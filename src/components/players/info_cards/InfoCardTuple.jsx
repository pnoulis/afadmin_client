import * as React from "react";
import styled from "styled-components";
import { useContextPlayer } from "/src/stores/player/ContextPlayer.jsx";

function InfoCardTuple({ name = "", value = "", className, ...props }) {
  const player = useContextPlayer() || {};
  return (
    <StyleInfoCardTuple className={className || ""} {...props}>
      <span className="key">{name}</span>
      <span className="value">{value || player[name] || "-"}</span>
    </StyleInfoCardTuple>
  );
}

const StyleInfoCardTuple = styled.div`
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

export { InfoCardTuple };
