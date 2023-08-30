// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  InputDialog,
  InputDialogHeading,
  InputDialogClose,
  InputDialogConfirm,
} from "/src/components/dialogs/InputDialog.jsx";
import { FormDistributionRatio } from "/src/components/group-party/index.js";

function InputDialogDistributionRatio({ handleClose }) {
  return (
    <InputDialog initialOpen onClose={handleClose}>
      <InputDialogHeading>distribute players</InputDialogHeading>
      <FormDistributionRatio
        onSubmit={handleClose}
        style={{ gridArea: "content" }}
      />
      <InputDialogClose>cancel</InputDialogClose>
      <InputDialogConfirm type="submit" form="form-distribution-ratio">
        set
      </InputDialogConfirm>
    </InputDialog>
  );
}

export { InputDialogDistributionRatio };
