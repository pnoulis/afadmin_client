import * as React from "react";
import { FormTeamName } from "./FormTeamName.jsx";
import styled from "styled-components";

function StyledFormTeamName({ onChange, onSubmit, className, ...props }) {
  return (
    <StyleForm
      className={className}
      onChange={onChange}
      onSubmit={onSubmit}
      {...props}
    >
      <h1 id="form-teamName-label">team name</h1>
      <StyleInputName />
    </StyleForm>
  );
}

const StyleForm = styled(FormTeamName.Form)`
  // padding: 15px 0 0 15px;
  box-sizing: border-box;
  width: 100%;
  max-width: 506px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  #form-teamName-label {
    margin-bottom: 8px;
    margin-left: auto;
    font-size: 1.5em;
    letter-spacing: 1.5px;
    font-family: NoirPro-Regular;
    text-transform: capitalize;
    letter-spacing: 2px;
  }
`;

const StyleInputName = styled(FormTeamName.InputName)`
  all: unset;
  display: block;
  box-sizing: border-box;
  min-height: 60px;
  width: 100%;
  position: relative;
  text-align: center;
  font-family: NoirPro-Regular;
  text-transform: uppercase;
  color: var(--info-medium);

  .input {
    width: 100%;
    height: 100%;
    padding: 0 6px;
    border-radius: var(--br-lg);
    border: 2px solid var(--black-base);
    font-size: var(--tx-sm);
    text-align: center;
    letter-spacing: 1.5px;
    outline: none;
    color: black;
  }

  .input::placeholder {
    font-size: var(--tx-nl);
    color: black;
    opacity: 1;
  }
`;

export { StyledFormTeamName, StyleForm, StyleInputName };
