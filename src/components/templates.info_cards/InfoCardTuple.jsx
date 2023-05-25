import * as React from "react";
import styled from "styled-components";
import { useContextPlayer } from "/src/stores/player/ContextPlayer.jsx";

function InfoCardTuple({ name = "", className, ...props }) {
  const player = useContextPlayer() || {};

  React.useEffect(() => {
    if (name && !Object.hasOwn(player, name)) {
      throw new Error(`Player property:'${name}' missing`);
    }
  }, [name]);

  return (
    <StyleInfoCardTuple className={className || ""} {...props}>
      <span className="key">{name}</span>
      <span className="value">{player[name]}</span>
    </StyleInfoCardTuple>
  );
}

const StyleInfoCardTuple = styled.div`
  box-sizing: border-box;
  width: max-content;
  height: max-content;
  padding: 0 5px;
  font-family: NoirPro-Light;
  letter-spacing: 1px;
  font-size: var(--tx-nl);

  .key {
    font-family: NoirPro-Regular;
  }

  .key::after {
    content: ":";
    margin: 0 4px 0 2px;
  }

  .value {
    font-size: var(--tx-xs);
    text-transform: uppercase;
  }
`;

export { InfoCardTuple };
