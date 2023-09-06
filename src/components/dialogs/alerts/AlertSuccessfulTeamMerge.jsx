import * as React from "react";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
} from "/src/components/dialogs/index.js";

function AlertSuccessfulTeamMerge({ teamName, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Merge team</AlertDialogHeading>
      <AlertDialogDescription>
        {teamName} successfully merged!
      </AlertDialogDescription>
    </AlertDialog>
  );
}

export { AlertSuccessfulTeamMerge };
