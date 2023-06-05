import { FormTeamName } from "./FormTeamName.jsx";
import styled from "styled-components";

function StyleFormTeamName({ onChange, onSubmit, className, ...props }) {
  return (
    <StyleForm
      className={className}
      onChange={onChange}
      onSubmit={onSubmit}
      {...props}
    >
      <StyleInputName />
    </StyleForm>
  );
}

const StyleForm = styled(FormTeamName.Form)`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyleInputName = styled(FormTeamName.InputName)`
  all: unset;
  display: block;
  box-sizing: border-box;
  min-height: 60px;
  width: 100%;
  position: relative;
  text-align: center;
  font-family: Roboto-Bold;
  text-transform: uppercase;
  color: var(--info-medium);

  .input {
    width: 100%;
    height: 100%;
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

export { StyleFormTeamName, StyleForm, StyleInputName };
