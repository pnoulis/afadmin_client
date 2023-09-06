// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity, useAfmachineAction } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { displaypoperr } from "/src/utils/index.js";

function temporaryTeam(team) {
  return afmachine.createTemporaryTeam(team);
}

function useGroupPartyTeam(
  source,
  { onRemoveGPTeam, fill = false, depth = 0 } = {},
) {
  const {
    entity: team,
    state,
    id,
  } = useAfmachineEntity(source, temporaryTeam, {
    fill,
    depth,
  });
  const { action: sMergeTeam } = useAfmachineAction(team.mergeTeam);
  const rosterRef = React.useRef([]);
  rosterRef.current = React.useMemo(
    () => team.roster.get(),
    [team.roster, team.roster.size],
  );
  function addPlayer() {
    try {
      team.addPlayer(team.roster.createPlayer().fill());
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
  function rmGPTeam() {
    isFunction(onRemoveGPTeam) && onRemoveGPTeam(team);
  }

  return {
    state,
    id,
    team,
    roster: rosterRef.current,
    addPlayer,
    rmPlayer,
    sMergeTeam,
    changeTeamName,
    rmGPTeam,
  };
}

export { useGroupPartyTeam };
