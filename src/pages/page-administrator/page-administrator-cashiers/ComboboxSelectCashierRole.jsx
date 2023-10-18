// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { SelectOnlyCombobox as Combobox } from "react_utils/comboboxes";
import { TextInput_0 } from "react_utils";
// ------------------------------ project  ------------------------------- //
import { CASHIER_ROLES } from "agent_factory.shared/constants.js";

function getLabels(roles) {
  return [...roles];
}

function ComboboxSelectCashierRole({ onSelect, defaultLabel, Option }) {
  return (
    <StyledSelectOnlyCombobox>
      <Combobox.Provider
        name="cashier role"
        onSelect={onSelect}
        defaultLabel={defaultLabel}
        options={CASHIER_ROLES}
        getLabels={getLabels}
      >
        <StyleTrigger>
          {(props) => {
            return <TextInput {...props} />;
          }}
        </StyleTrigger>
        <StyleListbox
          renderOption={(props) =>
            Option ? (
              <StyleOption {...props}>
                <Option
                  option={props.option}
                  active={props.active}
                  selected={props.selected}
                />
              </StyleOption>
            ) : (
              <StyleOption {...props}>
                <p>{props.option}</p>
              </StyleOption>
            )
          }
        />
      </Combobox.Provider>
    </StyledSelectOnlyCombobox>
  );
}

/* --------------- COMBOBOX --------------- */

const StyleTrigger = styled(Combobox.Trigger)`
  background-color: var(--grey-light);
  pointer-events: auto;
  text-transform: uppercase;
  width: 100%;
  max-width: 100%;
  height: 55px;
  padding: 0 15px;
  text-align: center;
  font-size: var(--tx-sm);
  font-weight: 550;
  letter-spacing: 1.5px;
  outline: none;
  color: black;
  border-radius: var(--br-nl);

  &:hover {
    cursor: pointer;
  }
  &::placeholder {
    opacity: 1;
  }

  &:not(:placeholder-shown) {
    border: 2px solid var(--primary-base);
  }
`;

const StyleListbox = styled(Combobox.Listbox)`
  margin-top: 10px;
  border-top-left-radius: var(--br-lg);
  border-top-right-radius: var(--br-lg);
  background-color: var(--grey-light);
  height: 250px;
  padding: 20px 15px;
  outline: none;
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  font-weight: 550;
`;
const StyleOption = styled(Combobox.Option)`
  border: 2px solid transparent;
  padding: 10px 10px;
  border-radius: var(--br-md);
  background-color: white;

  ${({ selected, active }) => {
    if (selected) {
      return `
border-color: var(--primary-base);
`;
    } else if (active) {
      return `
border-color: var(--primary-base);
cursor: pointer;
`;
    } else {
      return `
&: hover {
cursor: pointer;
border-color: var(--primary-base);
}
`;
    }
  }}
`;

const StyledSelectOnlyCombobox = styled("div")`
  width: 100%;
`;

const TextInput = styled(TextInput_0)`
  text-transform: uppercase !important;
  & > * {
    font-size: var(--tx-sm) !important;
  }

  & .label {
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & input {
    background-color: var(--grey-light);
    border-color: white !important;
    border-radius: var(--br-nl);
  }

  .input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    background-color: var(--grey-light);
    left: 0;
    transform: translate(1px, -50%);
  }

  .input:focus ~ .optional,
  input:not(:placeholder-shown) ~ .optional {
    right: 1px;
    background-color: var(--grey-light);
  }
`;

export { ComboboxSelectCashierRole };
