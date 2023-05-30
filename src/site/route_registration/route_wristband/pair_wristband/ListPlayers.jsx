import * as React from "react";
import styled from "styled-components";
import { WidgetPlayer } from "./WidgetPlayer.jsx";
import { AncestorDimensions } from "react_utils";

function ListPlayers({ players = [], onToggleWristbandPairing }) {
  return (
    <AncestorDimensions ancestor="#ancestor-pair-wristband">
      <StyleListPlayers>
        {players.map((player, i) => (
          <WidgetPlayer
            key={player?.username || i}
            player={player}
            onToggleWristbandPairing={onToggleWristbandPairing}
          />
        ))}
      </StyleListPlayers>
    </AncestorDimensions>
  );
}

const StyleListPlayers = styled.ul`
  overflow-y: auto;
  overflow-x: none;
  width: 100%;
  height: 100%;
  max-height: ${({ $height }) => `${$height ? $height - 10 : 0}px`};
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  padding-right: 15px;
`;

export { ListPlayers };
