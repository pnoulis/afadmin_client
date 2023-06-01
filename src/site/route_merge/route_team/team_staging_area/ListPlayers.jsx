import * as React from "react";
import styled from "styled-components";
import { WidgetPlayer } from "./WidgetPlayer.jsx";
import { AncestorDimensions } from "react_utils";

function ListPlayers({ roster = [], onWristbandPairToggle, onPlayerRemove }) {
  return (
    <AncestorDimensions ancestor="#ancestor-team-staging-area">
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
  gap: 20px;
  padding-top: 15px;
  padding-right: 15px;
`;

export { ListPlayers };
