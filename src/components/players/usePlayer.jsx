import * as React from "react";
import { Afmachine } from "/src/app/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function usePlayer(player, options) {
  const playerRef = React.useRef(player);
  if (playerRef.current == null) {
    playerRef.current = Afmachine.createPlayer();
  }
  const [state, id] = useAfmachineEntity(playerRef.current);

  return {
    state,
    id,
    player: playerRef.current,
  };
}

function useLivePlayer(player, options) {
  const playerRef = React.useRef(player);

  return {
    player: playerRef.current,
  };
}

export { usePlayer, useLivePlayer };
