import * as React from "react";
import {
  InputDialog,
  InputDialogHeading,
  InputDialogClose,
  InputDialogConfirm,
} from "/src/components/dialogs/index.js";
import { FormNewTeamName } from "./FormNewTeamName.jsx";

function DialogInputNewTeamName({ onSubmit, handleClose }) {
  return (
    <InputDialog initialOpen onClose={handleClose}>
      <InputDialogHeading style={{ marginTop: "15px" }}>
        team name
      </InputDialogHeading>
      <FormNewTeamName
        onSubmit={(teamName, cb) => {
          onSubmit(teamName, (isTeamCreated) => {
            cb(isTeamCreated);
            isTeamCreated && handleClose();
          });
        }}
      />
      <InputDialogClose>cancel</InputDialogClose>
      <InputDialogConfirm form="form-new-team-name" style={{ width: "150px" }}>
        merge team
      </InputDialogConfirm>
    </InputDialog>
  );
}

export { DialogInputNewTeamName };
