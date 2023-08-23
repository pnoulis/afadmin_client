import * as React from "react";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
} from "/src/components/dialogs/index.js";

function AlertPlayerPartOfTeamRegistrationQueue({ player, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Register wristband</AlertDialogHeading>
      <AlertDialogDescription>
        {player} is part of a team and can only have a new wristband registered
        from the team registration page.
      </AlertDialogDescription>
    </AlertDialog>
  );
}

export { AlertPlayerPartOfTeamRegistrationQueue };
