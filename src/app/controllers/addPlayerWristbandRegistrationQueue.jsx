import * as React from "react";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs/index.js";

function AlertPlayerInQueue({ player, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Register wristband</AlertDialogHeading>
      <AlertDialogDescription>
        Player {player} has already been selected for wristband registration
      </AlertDialogDescription>
    </AlertDialog>
  );
}

function AlertPlayerPartOfTeam({ player, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Register wristband</AlertDialogHeading>
      <AlertDialogDescription>
        Player {player} is currently part of a team.
        <br />
        Either disband the team or remove the player from the roster.
      </AlertDialogDescription>
    </AlertDialog>
  );
}

export default (appRef) => ({
  addPlayerWristbandRegistrationQueue: async (queue, player) =>
    new Promise((resolve, reject) => {
      if (queue.find((inQueue) => inQueue.username === player.username)) {
        renderDialog(null, AlertPlayerInQueue, { player: player.username });
      } else if (player.wristbandMerged) {
        renderDialog(null, AlertPlayerPartOfTeam, { player: player.username });
      } else if (!player?.wristband.active) {
        resolve([...queue, player]);
      } else {
        const { unregisterWristband } = appRef.current.controllers;
        unregisterWristband(player)
          .then((unregisteredPlayer) => resolve([...queue, unregisteredPlayer]))
          .catch(reject);
      }
    }),
});
