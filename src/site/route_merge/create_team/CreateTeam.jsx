import * as React from "react";
import styled from "styled-components";
import {
  InputDialog,
  InputDialogHeading,
  InputDialogDescription,
  InputDialogClose,
  InputDialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";
import { FormNewTeam } from "./FormNewTeam.jsx";

function CreateTeam({ ctxApp, ctxMerge, handleClose, className, ...props }) {
  const { setModelMerge, modelMergeRef } = ctxMerge;
  return (
    <InputDialog
      initialOpen
      onClose={(confirmed) => !confirmed && handleClose()}
    >
      <InputDialogHeading style={{ marginTop: "15px" }}>
        team name
      </InputDialogHeading>
      <FormNewTeam
        ctxApp={ctxApp}
        ctxMerge={ctxMerge}
        done={(teamCreate) => {
          handleClose();
          setModelMerge({
            ...modelMergeRef.current,
            teams: [...modelMergeRef.current.teams, teamCreate],
            stagingArea: modelMergeRef.current.stagingArea.map(
              (position) => null
            ),
          });
        }}
      />
      <InputDialogClose>cancel</InputDialogClose>
      <InputDialogConfirm form="createTeamForm" style={{ width: "150px" }}>
        create team
      </InputDialogConfirm>
    </InputDialog>
  );
}

export { CreateTeam };
