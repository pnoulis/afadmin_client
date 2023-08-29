// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";
import { displaypoperr } from "/src/utils/index.js";

function groupParty(gp, options) {
  return afmachine.createGroupParty(gp, options);
}

function useGroupParty(source, { fill = false, size, depth = 0 } = {}) {
  const { entity: gp, state } = useAfmachineEntity(source, groupParty, {
    fill,
    size,
    depth,
  });

  return {
    state,
    gp,
  };
}

export { useGroupParty };
