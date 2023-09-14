// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isObject } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity, useAfmachineAction } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { displaypoperr } from "/src/utils/index.js";
import {
  ConfirmMergeTeam,
  ConfirmActivatePkg,
  renderDialog,
} from "/src/components/dialogs/index.js";

function persistentTeam(team, options) {
  return afmachine.createPersistentTeam(team);
}

function usePersistentTeam(source, { fill = false, depth = 0 } = {}) {
  const {
    entity: team,
    state,
    id,
    changeSource,
  } = useAfmachineEntity(source, persistentTeam, {
    fill,
    depth,
  });
  const { action: sMergeTeam } = useAfmachineAction(team.mergeTeam);
  const { action: sRegisterPackage } = useAfmachineAction(team.registerPackage);
  const { action: sRemovePackage } = useAfmachineAction(team.removePackage);
  const { action: sActivatePackage } = useAfmachineAction(team.activate);
  const rosterRef = React.useRef([]);
  rosterRef.current = React.useMemo(
    () => team.roster.get(),
    [team.roster, team.roster.size],
  );
  const randomNameRef = React.useRef("");

  function addPlayer(player) {
    try {
      team.addPlayer(player);
    } catch (err) {
      displaypoperr(err);
    }
  }
  function rmPlayer(player) {
    try {
      team.removePlayer(player);
    } catch (err) {
      displaypoperr(err);
    }
  }
  function changeTeamName(name) {
    if (isObject(name)) {
      randomNameRef.current = name.placeholder;
    } else {
      team.name = name;
    }
  }
  function merge() {
    team.name ||= randomNameRef.current;
    renderDialog(null, ConfirmMergeTeam, { teamName: team.name }, (yes) => {
      if (!yes) return;
      sMergeTeam.run(() => team.mergeTeam());
    });
  }

  function registerPackage(pkg) {
    return sRegisterPackage.run(() => team.registerPackage(pkg));
  }

  function removePackage(pkg) {
    return sRemovePackage.run(() => team.removePackage(pkg));
  }

  function activatePackage(pkg, cb) {
    renderDialog(
      null,
      ConfirmActivatePkg,
      { pkgType: pkg.type, pkgName: pkg.name },
      (yes) => {
        if (!yes) return;
        sActivatePackage
          .run(() => team.activate(pkg))
          .then(cb.bind(null, null))
          .catch(cb.bind(null));
      },
    );
  }

  return {
    state,
    id,
    team,
    roster: rosterRef.current,
    addPlayer,
    rmPlayer,
    merge,
    sMergeTeam,
    sRegisterPackage,
    sRemovePackage,
    sActivatePackage,
    activatePackage,
    registerPackage,
    removePackage,
    changeTeamName,
    changeSource,
  };
}

export { usePersistentTeam };
