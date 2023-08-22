// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";

function basePlayer(source) {
  return afmachine.createPlayer(source);
}

function usePlayer(
  source,
  { fill = false, depth = 0, create = basePlayer } = {},
) {
  const { entity: player, state } = useAfmachineEntity(source, create, {
    fill,
    depth,
  });

  return {
    state,
    player,
  };
}

export { usePlayer };
