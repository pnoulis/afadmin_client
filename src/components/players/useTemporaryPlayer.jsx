// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { useVerifiableWristband } from "/src/components/wristbands/index.js";

function temporaryPlayer(source, options) {
  return afmachine.createTemporaryPlayer(source, options);
}

function useTemporaryPlayer(source, { fill = false, depth = 0 } = {}) {
  const { entity: player, state } = useAfmachineEntity(
    source,
    temporaryPlayer,
    { fill, depth },
  );
  const ctxWristband = useVerifiableWristband(player);

  return {
    state,
    player,
    ctxWristband,
  };
}

export { useTemporaryPlayer };
