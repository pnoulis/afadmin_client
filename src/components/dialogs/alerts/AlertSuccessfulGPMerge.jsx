import * as React from "react";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
} from "/src/components/dialogs/index.js";

function AlertSuccessfulGPMerge({ teamNames, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Merge group party</AlertDialogHeading>
      <AlertDialogDescription>
        {teamNames.map((name, i) => (
          <p key={i}>{name} merged!</p>
        ))}
      </AlertDialogDescription>
    </AlertDialog>
  );
}

export { AlertSuccessfulGPMerge };
