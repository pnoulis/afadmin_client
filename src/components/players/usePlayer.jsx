import { logPlayer } from "/src/services/afmachine.js";
import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function usePlayer(player, options) {
  const [state, id] = useAfmachineEntity(player);

  return {
    state,
    id,
    player: player,
  };
}

function useLivePlayer(player, options) {
  const playerRef = React.useRef(player);

  return {
    player,
  };
}

export { usePlayer, useLivePlayer };
