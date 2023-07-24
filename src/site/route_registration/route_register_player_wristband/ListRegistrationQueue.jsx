import * as React from "react";
import styled from "styled-components";
import { AncestorDimensions } from "react_utils";
import { ComboboxOptionPlayer } from "./ComboboxOptionPlayer.jsx";

function ListRegistrationQueue({
  players = [],
  onWristbandPairToggle,
  onPlayerRemove,
}) {
  return (
    <AncestorDimensions ancestor="#ancestor-pair-wristband">
      <StyleListPlayers>
        {players.map((player, i) => (
          <ComboboxOptionPlayer
            key={player?.username || i}
            option={player || {}}
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
  max-width: 650px;
  margin: auto;
  max-height: ${({ $height }) => `${$height ? $height - 10 : 0}px`};
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  padding-top: 15px;
  padding-right: 25px;
`;

export { ListRegistrationQueue };
