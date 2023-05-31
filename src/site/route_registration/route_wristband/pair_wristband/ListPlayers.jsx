import * as React from "react";
import styled from "styled-components";
import { WidgetPlayer } from "./WidgetPlayer.jsx";
import { AncestorDimensions } from "react_utils";

function ListPlayers({ players = [], onWristbandPairToggle, onPlayerRemove }) {
  return (
    <AncestorDimensions ancestor="#ancestor-pair-wristband">
      <StyleListPlayers>
        {players.map((player, i) => (
          <WidgetPlayer
            key={player?.username || i}
            player={player}
            onWristbandPairToggle={onWristbandPairToggle}
            onPlayerRemove={onPlayerRemove}
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
  padding-top: 15px;
  padding-right: 25px;
`;

export { ListPlayers };
