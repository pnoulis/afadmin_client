// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs/index.js";

function GenericAlert({ message, title, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>{title}</AlertDialogHeading>
      <AlertDialogDescription>{message}</AlertDialogDescription>
    </AlertDialog>
  );
}

function displaypoperr(err, options = {}) {
  if (!err) return;
  renderDialog(null, GenericAlert, {
    message: err.message || options.message,
    title: err.action || options.title,
  });
}

export { displaypoperr };
