import * as React from "react";
import styled from "styled-components";
import { WidgetPlayer } from "./WidgetPlayer.jsx";

function ListPlayers({ roster = [], onWristbandPairToggle, onPlayerRemove }) {
  return (
    <StyleListPlayers>
      {roster.map((player, i) => (
        <WidgetPlayer
          key={player?.username || i}
          player={player}
          index={i + 1}
          onWristbandPairToggle={onWristbandPairToggle}
          onPlayerRemove={onPlayerRemove}
        />
      ))}
    </StyleListPlayers>
  );
}

const StyleListPlayers = styled.ul`
  overflow-x: auto;
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
`;

export { ListPlayers };
