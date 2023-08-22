// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";

function persistentPlayer(source, options) {
  return afmachine.createPersistentPlayer(source, options);
}

function usePersistentPlayer(source, { fill = false, depth = 0 } = {}) {
  const { entity: player, state } = useAfmachineEntity(
    source,
    persistentPlayer,
    { fill, depth },
  );

  return {
    state,
    player,
  };
}

export { usePersistentPlayer };
