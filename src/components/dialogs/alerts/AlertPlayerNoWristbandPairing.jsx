import * as React from "react";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
} from "/src/components/dialogs/index.js";

function AlertPlayerNoWristbandPairing({ player, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Register wristband</AlertDialogHeading>
      <AlertDialogDescription>
        {player?.getState().name} player {player?.username} cannot pair a new
        wristband.
      </AlertDialogDescription>
    </AlertDialog>
  );
}

export { AlertPlayerNoWristbandPairing };
