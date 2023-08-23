import * as React from "react";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
} from "/src/components/dialogs/index.js";

function AlertDuplicatePlayerRegistrationQueue({ player, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Register wristband</AlertDialogHeading>
      <AlertDialogDescription>
        {player || "player"} has already been selected for wristband
        registration.
      </AlertDialogDescription>
    </AlertDialog>
  );
}

export { AlertDuplicatePlayerRegistrationQueue };
