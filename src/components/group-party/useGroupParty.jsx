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

function useGroupParty(source, { fill = true, size = 2, depth = 0 } = {}) {
  const { entity: gp, state } = useAfmachineEntity(source, groupParty, {
    fill,
    size,
    depth,
  });

  function rmTeam(team) {
    try {
      gp.removeTeam(team);
    } catch (err) {
      displaypoperr(err);
    }
  }

  function addTeam() {
    try {
      gp.addTeam();
    } catch (err) {
      displaypoperr(err);
    }
  }

  return {
    state,
    gp,
    rmTeam,
    addTeam,
  };
}

export { useGroupParty };
