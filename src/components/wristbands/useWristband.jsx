// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { displayfmerr } from "/src/utils/index.js";

function baseWristband(source) {
  return afmachine.createWristband(source);
}

function scannableWristband(source) {
  return afmachine.createScanableWristband(source);
}

function useWristband(
  source,
  { fill, depth, create = scannableWristband } = {},
) {
  const { entity: wristband, state } = useAfmachineEntity(source, create, {
    fill,
    depth,
  });

  function handleWristbandToggle(e) {
    wristband.toggle((err) => displayfmerr(err, "warn"));
  }

  return {
    state,
    wristband,
    handleWristbandToggle,
  };
}

export { useWristband };
