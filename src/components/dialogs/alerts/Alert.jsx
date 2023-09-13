import * as React from "react";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
} from "/src/components/dialogs/index.js";

function Alert({ title, msg, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>{title}</AlertDialogHeading>
      <AlertDialogDescription>{msg}</AlertDialogDescription>
    </AlertDialog>
  );
}

export { Alert };
