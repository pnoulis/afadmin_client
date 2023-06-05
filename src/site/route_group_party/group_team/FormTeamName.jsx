import * as React from "react";
import styled from "styled-components";
import { StyleForm, StyleInputName } from "/src/components/teams/index.js";

function FormTeamName({ onChange, onSubmit, className, ...props }) {
  return (
    <StyleGroupPartyForm className={className} {...props}>
      <StyleGroupPartyInputName />
    </StyleGroupPartyForm>
  );
}

const StyleGroupPartyForm = styled(StyleForm)`
  min-width: 300px;
`;

const StyleGroupPartyInputName = styled(StyleInputName)`
  .input {
    background-color: white;
    border-radius: var(--br-lg);
    border: none;
  }
`;

export { FormTeamName };
