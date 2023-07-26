import * as React from "react";
import styled from "styled-components";
import { AncestorDimensions } from "react_utils";
import { RegistrationQueuePlayer } from "./RegistrationQueuePlayer";

function ListRegistrationQueue({ players = [], onPlayerRemove }) {
  return (
    <AncestorDimensions ancestor="#ancestor-pair-wristband">
      <StyleListPlayers>
        {players.map((player, i) => (
          <RegistrationQueuePlayer
            key={player?.username || i}
            player={player}
          />
        ))}
      </StyleListPlayers>
    </AncestorDimensions>
  );
}

const StyleListPlayers = styled.ul`
  overflow-y: auto;
  overflow-x: none;
  height: 100%;
  max-height: ${({ $height }) => `${$height ? $height - 10 : 0}px`};
  display: grid;
  grid-template-columns: repeat(3, 210px);
  grid-auto-rows: max-content;
  justify-content: center;
  gap: 15px;
  padding-top: 15px;
  padding-right: 15px;
`;

export { ListRegistrationQueue };
