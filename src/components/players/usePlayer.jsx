import { logPlayer } from "afmachine/src/misc/log.js";
import * as React from "react";
import { Afmachine } from "/src/app/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function usePlayer(player, options) {
  const [state, id] = useAfmachineEntity(player);

  return {
    state,
    id,
    player: player
  };
}

function useLivePlayer(player, options) {
  const playerRef = React.useRef(player);

  return {
    player: playerRef.current,
  };
}

export { usePlayer, useLivePlayer };
