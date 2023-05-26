import * as React from "react";
import styled from "styled-components";
import { WidgetPlayer } from "./WidgetPlayer.jsx";
import { useContextRegistration } from "/src/stores/registration/index.js";

function ListPlayers() {
  const { players = [] } = useContextRegistration();

  return (
    <StyleListPlayers>
      {players.map((player, i) => (
        <WidgetPlayer key={player?.username || i} as="li" player={player} />
      ))}
    </StyleListPlayers>
  );
}

const StyleListPlayers = styled.ul``;

export { ListPlayers };
