// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { displaypoperr } from "/src/utils/index.js";

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
  const rosterRef = React.useRef([]);

  function addPlayer(player) {
    try {
      team.addPlayer(player);
    } catch (err) {
      displaypoperr(err);
    }
    rosterRef.current = team.roster.get();
  }
  function rmPlayer(player) {
    try {
      team.removePlayer(player);
    } catch (err) {
      displaypoperr(err);
    }
    rosterRef.current = team.roster.get();
  }
  function merge() {}
  function changeTeamName() {}

  return {
    state,
    team,
    roster: rosterRef.current,
    addPlayer,
    rmPlayer,
    merge,
    changeTeamName,
  };
}

export { usePersistentTeam };
