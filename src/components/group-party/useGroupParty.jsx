// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import * as aferrs from "agent_factory.shared/errors.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";
import { displaypoperr } from "/src/utils/index.js";
import {
  InputDialogDistributionRatio,
  renderDialog,
} from "/src/components/dialogs/index.js";

function groupParty(gp, options) {
  return afmachine.createGroupParty(gp, options);
}

function useGroupParty(source, { fill = false, size, depth = 0 } = {}) {
  const {
    entity: gp,
    state,
    changeSource,
  } = useAfmachineEntity(source, groupParty, {
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

  function newGP() {
    changeSource();
  }

  function setGPSize(size) {
    gp.fill(null, { size });
  }

  function distributePlayers() {
    renderDialog(null, InputDialogDistributionRatio, (ratio) => {
      if (!ratio) return;
      try {
        gp.distribute(ratio);
      } catch (err) {
        displaypoperr(err);
      }
    });
  }

  function merge() {
    gp.register().catch(
      (err) => err instanceof aferrs.ERR_GP_EMPTY && displaypoperr(err),
    );
  }

  return {
    state,
    gp,
    rmTeam,
    addTeam,
    newGP,
    setGPSize,
    distributePlayers,
    merge,
  };
}

export { useGroupParty };
