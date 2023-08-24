// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";

function baseWristband(source) {
  return afmachine.createWristband(source);
}

function scannableWristband(source) {
  return afmachine.createScanableWristband(source);
}

function useWristband(source, { fill, depth, create = baseWristband } = {}) {
  const { entity: wristband, state } = useAfmachineEntity(source, create, {
    fill,
    depth,
  });

  return {
    state,
    wristband,
  };
}

export { useWristband };
