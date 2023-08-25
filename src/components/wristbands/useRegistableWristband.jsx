// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { displayfmerr } from "/src/utils/index.js";

function registableWristband(player, wristband, options) {
  return afmachine.createRegistableWristband(wristband, player, options);
}

function useRegistableWristband(player, { fill = false } = {}) {
  const {
    entity: wristband,
    state,
    id,
  } = useAfmachineEntity(
    player.wristband,
    registableWristband.bind(null, player),
    { fill },
  );
  player.wristband = wristband;

  function handleWristbandToggle(e) {
    player.wristband.toggle((err) => displayfmerr(err, "warn"));
  }

  React.useEffect(() => {
    return () => {
      if (player.wristband.inState("pairing")) player.wristband.toggle();
    };
  }, [player]);

  return {
    state,
    wristband,
    handleWristbandToggle,
  };
}

export { useRegistableWristband };
