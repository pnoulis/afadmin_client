import * as React from "react";
import {
  InputDialog,
  InputDialogHeading,
  InputDialogClose,
  InputDialogConfirm,
} from "/src/components/dialogs/index.js";
import { FormNewGroupTeam } from "./FormNewGroupTeam.jsx";

function InputDialogNewGroupParty({ handleClose }) {
  return (
    <InputDialog initialOpen onClose={handleClose}>
      <InputDialogHeading style={{ marginTop: "15px" }}>
        new group party
      </InputDialogHeading>
      <FormNewGroupTeam done={handleClose} />
      <InputDialogClose>cancel</InputDialogClose>
      <InputDialogConfirm
        form="form-new-group-team"
        styled={{ width: "180px" }}
      >
        create
      </InputDialogConfirm>
    </InputDialog>
  );
}

export { InputDialogNewGroupParty };
