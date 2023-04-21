import * as React from "react";
import {
  Dialog,
  DialogHeading,
  DialogDescription,
  DialogClose,
  DialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";

function TestDialog() {
  return (
    <Dialog
      initialOpen
      onClose={(confirmed) => {
        alert(confirmed);
      }}
    >
      <DialogHeading>my dialog</DialogHeading>
      <DialogDescription>my description</DialogDescription>
      <DialogClose>cancel</DialogClose>
      <DialogConfirm>confirm</DialogConfirm>
    </Dialog>
  );
}

export default function ScratchDefaultDialog() {
  renderDialog(TestDialog);
  return (
    <div>
      <h3>Scratch default dialog</h3>
    </div>
  );
}
