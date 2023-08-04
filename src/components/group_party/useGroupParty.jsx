import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineEventful } from "/src/hooks/index.js";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs/index.js";

function __createGroupParty(source, options) {
  return afmachine.createGroupParty(source, options);
}

function AlertMerge({ message, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>merge team</AlertDialogHeading>
      <AlertDialogDescription>{message}</AlertDialogDescription>
    </AlertDialog>
  );
}

function useGroupParty(
  source,
  {
    fill = false,
    depth = 0,
    createGroupParty = __createGroupParty,
    size = 2,
    ...options
  } = {},
) {
  const {
    entity: groupParty,
    state,
    id,
    create,
  } = useAfmachineEventful(source, createGroupParty, {
    fill,
    depth,
    size,
    ...options,
  });

  function removeTeam(team) {
    groupParty.removeTeam(team);
  }

  function addTeam(team) {
    groupParty.addTeam(team);
  }

  function distributeTeam() {
    groupParty.distribute();
    groupParty.emit('change');
  }

  function getTeamSize(size) {
    groupParty.fill(null, { size });
  }

  function newGroupParty() {
    create();
  }

  function mergeGroupParty() {
    groupParty
      .register()
      .then(() => {
        create();
      })
      .catch((err) => {
        renderDialog(null, AlertMerge, { message: err.message });
      });
  }

  return {
    groupParty,
    teams: groupParty.teams,
    removeTeam,
    addTeam,
    distributeTeam,
    getTeamSize,
    newGroupParty,
    mergeGroupParty,
  };
}

export { useGroupParty };
