import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";

function __createGroupParty(source) {
  return afmachine.createTeam(source);
}

function useGroupParty(
  source,
  { fill = false, depth = 0, createGroupParty = __createGroupParty },
) {
  const {
    entity: groupParty,
    state,
    id,
    create,
  } = useAfmachineEntity(source, createGroupParty, {
    fill,
    depth,
  });

  return {
    state,
    groupParty,
  };
}

export { useGroupParty };
