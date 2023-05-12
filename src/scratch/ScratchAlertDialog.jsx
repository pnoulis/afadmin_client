import * as React from "react";
import styled from "styled-components";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs";

function MyAlertDialog({ handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>alert dialog heading</AlertDialogHeading>
      <AlertDialogDescription>alert dialog description</AlertDialogDescription>
    </AlertDialog>
  );
}

export default function ScratchAlertDialog() {
  return (
    <div>
      <h1>scratch alert dialog</h1>
      <div>
        <button onClick={() => renderDialog(null, MyAlertDialog)}>
          render dialog
        </button>
      </div>
    </div>
  );
}
