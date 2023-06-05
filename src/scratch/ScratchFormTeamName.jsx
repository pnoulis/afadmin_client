import * as React from "react";
import styled from "styled-components";
import {
  StyleFormTeamName,
  StyleForm,
  StyleInputName,
} from "/src/components/teams/index.js";

// const DefaultStyleForm = styled(FormTeamName.Form)`
//   background-color: green;
// `;

// const ExtraDefaultStyleForm = styled(DefaultStyleForm)`
// background-color: red;
// margin-top: 25px;
//   padding: 25px;
// `;

function GroupPartyForm() {
  return (
    <>
      <StyleFormTeamName />
      {/* <DefaultStyleForm> */}
      {/*   <FormTeamName.InputName /> */}
      {/*   <FormTeamName.ButtonSubmit /> */}
      {/* </DefaultStyleForm> */}
      {/* <ExtraDefaultStyleForm> */}
      {/*   <FormTeamName.InputName /> */}
      {/*   <FormTeamName.ButtonSubmit /> */}
      {/* </ExtraDefaultStyleForm> */}
    </>
  );
}
export default function ScratchFormTeamName() {
  return (
    <div>
      <h1>Scratch form team name</h1>
      <div>
        <GroupPartyForm />
      </div>
    </div>
  );
}
