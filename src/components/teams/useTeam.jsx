// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineEntity } from "/src/hooks/index.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";

function __team(team) {
  return afmachine.createTeam(team);
}

function useTeam(source, { fill = false, depth = 0 } = {}) {
  const {
    entity: team,
    state,
    id,
    changeSource,
  } = useAfmachineEntity(source, __team, {
    fill,
    depth,
  });

  return {
    state,
    id,
    team,
    changeSource,
  };
}

export { useTeam };
