import * as React from "react";
import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";

function AlertPlayerPartOfTeam({ player, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Add player to team</AlertDialogHeading>
      <AlertDialogDescription>
        Player {player.username} is currently part of another team.
        <br />
        Either disband the team or remove the player from the roster.
      </AlertDialogDescription>
    </AlertDialog>
  );
}

function AlertPlayerInRoster({ player, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Add player to team</AlertDialogHeading>
      <AlertDialogDescription>
        Player {player.username} is already part of the roster.
      </AlertDialogDescription>
    </AlertDialog>
  );
}

function AlertRosterFull({ handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Add player to team</AlertDialogHeading>
      <AlertDialogDescription>Roster is full!</AlertDialogDescription>
    </AlertDialog>
  );
}

function ConfirmUnregisterWristbandUniqueColors({ player, handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>Add player to team</ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        Duplicate wristband colors in a team are not allowed.
        <br />
        Unregister player's {player.username} wristband?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>unregister</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

function handleError(err) {
  if (err instanceof Errors.ValidationError) {
    throw {
      validationErrors: err.cause.validationErrors,
    };
  } else if (err instanceof Errors.ModelError) {
    fmAgent.warn({ message: err.message });
    throw {
      modelError: err.message,
    };
  } else if (err instanceof Errors.TimeoutError) {
    console.log(err);
    throw err;
    //window.location.assign("/408.html");
  } else {
    console.log(err);
    throw err;
    //window.location.assign("/500.html");
  }
}

export default (appRef) => ({
  addPlayerTeamRoster: async (roster, player) =>
    new Promise((resolve, reject) => {
      const { unregisterWristband } = appRef.current.controllers;
      const vacantSeat = roster.findIndex((seat) => seat == null);
      const add = (p) =>
        resolve([
          ...roster.slice(0, vacantSeat),
          p,
          ...roster.slice(vacantSeat + 1),
        ]);

      if (vacantSeat < 0) {
        // roster is full.
        renderDialog(null, AlertRosterFull);
      } else if (player.wristbandMerged) {
        // player is a member of another team.
        renderDialog(null, AlertPlayerPartOfTeam, { player });
      } else if (roster.find((seat) => seat?.username === player.username)) {
        // player is already a member of the roster.
        renderDialog(null, AlertPlayerInRoster, { player });
      } else if (
        // a member of the roster is paired with a wristband of the
        // same color as the player that is to be added.
        roster.find(
          (seat) =>
            seat?.wristband?.wristbandColor === player.wristband.wristbandColor
        )
      ) {
        // If player chooses to unpair the wristband the player may be
        // added to the roster.
        renderDialog(
          null,
          ConfirmUnregisterWristbandUniqueColors,
          { player },
          (yes) => {
            if (yes) {
              unregisterWristband(player, false)
                .then(add)
                .catch(handleError)
                .catch(reject);
            }
          }
        );
      } else {
        add(player);
      }
    }),
});
