import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function __createPlayer(source) {
  return afmachine.createPersistentPlayer(source);
}

function usePlayer(
  source,
  { fill = false, depth = 0, createPlayer = __createPlayer } = {},
) {
  const {
    entity: player,
    state,
    id,
    create,
  } = useAfmachineEntity(source, createPlayer, {
    fill,
    depth,
  });

  return {
    state,
    player,
    id,
  };
}

export { usePlayer };
