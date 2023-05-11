import * as React from "react";
import {
  InputDialog as Dialog,
  InputDialogHeading as DialogHeading,
  InputDialogDescription as DialogDescription,
  InputDialogClose as DialogClose,
  InputDialogConfirm as DialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";

function TestDialog({ handleClose }) {
  const [state, setState] = React.useState(false);
  return (
    <Dialog initialOpen onClose={handleClose}>
      <DialogHeading>my dialog</DialogHeading>
      <DialogDescription>my description</DialogDescription>
      <DialogClose>cancel</DialogClose>
      <DialogConfirm>confirm</DialogConfirm>
    </Dialog>
  );
}

export default function ScratchDefaultDialog() {
  return (
    <div>
      <h3>Scratch default dialog</h3>
      <div
        onClick={() => {
          renderDialog(TestDialog, () => {});
        }}
      >
        render dialog
      </div>
    </div>
  );
}
