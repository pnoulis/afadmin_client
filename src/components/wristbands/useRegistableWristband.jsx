// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { displayfmerr } from "/src/utils/index.js";
import {
  ConfirmUnpairPlayerWristband,
  renderDialog,
} from "../dialogs/index.js";

function registableWristband(player, wristband, options) {
  return afmachine.createRegistableWristband(wristband, player, options);
}

function useRegistableWristband(player, { fill = false } = {}) {
  const { entity: wristband, state } = useAfmachineEntity(
    player.wristband,
    registableWristband.bind(null, player),
    { fill },
  );

  React.useEffect(() => {
    player.wristband = wristband;
  }, [wristband]);

  function handleWristbandToggle(e) {
    if (
      player.wristband.compareStates(
        (states, current) => current >= states.paired,
      )
    ) {
      renderDialog(null, ConfirmUnpairPlayerWristband, { player }, (yes) => {
        if (!yes) return;
        player.wristband.toggle((err) => displayfmerr(err, "warn"));
      });
    } else {
      player.wristband.toggle((err) => displayfmerr(err, "warn"));
    }
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
