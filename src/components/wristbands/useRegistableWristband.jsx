// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useContextPlayer } from "/src/contexts/index.js";
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";

function useRegistableWristband(source, { fill = false } = {}) {
  const { player } = useContextPlayer();
  const { entity: wristband, state } = useAfmachineEntity(
    source,
    function registableWristband(source) {
      return afmachine.createRegistableWristband(source, player);
    },
    { fill },
  );

  function handleWristbandToggle(e) {
    wristband.toggle((err) => console.log(err));
  }

  return {
    state,
    wristband,
    handleWristbandToggle,
  };
}

export { useRegistableWristband };
