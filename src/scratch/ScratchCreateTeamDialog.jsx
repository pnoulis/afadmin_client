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

import { useForm, FormProvider, SimpleInput } from "react_utils";
import { generateRandomName } from "js_utils";

const StyledDialogHeading = styled(InputDialogHeading)`
  margin-top: 15px;
`;

const StyledForm = styled.form`
  grid-area: description;
  box-sizing: content-box;
  padding: 0 10px;
  width: 400px;
  height: 150px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledSimpleInput = styled(SimpleInput)`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 90%;
  min-height: 60px;
  height: max-content;
  pointer-events: none;
  position: relative;
  text-align: center;
  font-family: Roboto-Bold;
  text-transform: uppercase;
  color: var(--info-medium);

  .input {
    pointer-events: auto;
    width: 100%;
    height: 55px;
    padding: 0 6px;
    border-radius: var(--br-nl);
    border: 2px solid var(--black-base);
    font-size: var(--tx-sm);
    text-align: center;
    letter-spacing: 1.5px;
    outline: none;
    color: black;
  }

  .input::placeholder {
    color: var(--info-medium);
    opacity: 1;
  }
`;

function FormCreateTeam({ app, afterSubmit, className }) {
  const [form, setForm] = useForm({
    submitting: false,
    fields: {
      teamName: "",
    },
  });

  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyledForm
        id="createTeamForm"
        className={className}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting");
          console.log(app);
          setForm("setSubmit", true);
        }}
      >
        <StyledSimpleInput name="teamName" placeholder={generateRandomName()} />
      </StyledForm>
    </FormProvider>
  );
}

function DialogCreateTeam({ app, handleClose }) {
  return (
    <InputDialog
      initialOpen
      onClose={(confirmed) => !confirmed && handleClose()}
    >
      <StyledDialogHeading>team name</StyledDialogHeading>
      <FormCreateTeam app={app} afterSubmit={handleClose} />
      <InputDialogClose>cancel</InputDialogClose>
      <InputDialogConfirm form="createTeamForm" style={{ width: "150px" }}>
        create team
      </InputDialogConfirm>
    </InputDialog>
  );
}

export default function ScratchCreateTeamDialog() {
  return (
    <div>
      <h1>Scratch create team dialog</h1>
      <div id="here">
        <button
          onClick={() => {
            renderDialog("here", DialogCreateTeam, { app: "yolo" });
            /* renderDialog(DialogCreateTeam, (create) => { */
            /*   if (!create) { */
            /*     return console.log("do not create team"); */
            /*   } */

            /*   console.log("create team"); */
            /* }); */
          }}
        >
          {" "}
          merge team
        </button>
      </div>
    </div>
  );
}
