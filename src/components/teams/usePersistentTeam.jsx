// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity, useAfmachineAction } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { displaypoperr } from "/src/utils/index.js";
import {
  ConfirmMergeTeam,
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
  } = useAfmachineEntity(source, persistentTeam, {
    fill,
    depth,
  });
  const { action: sMergeTeam } = useAfmachineAction(team.mergeTeam);
  const rosterRef = React.useRef([]);
  rosterRef.current = React.useMemo(
    () => team.roster.get(),
    [team.roster.size],
  );

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
    team.name = name;
  }
  function merge() {
    renderDialog(null, ConfirmMergeTeam, { teamName: team.name }, (yes) => {
      if (!yes) return;
      sMergeTeam.run(() => team.mergeTeam()).catch(displaypoperr);
    });
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
    changeTeamName,
  };
}

export { usePersistentTeam };
