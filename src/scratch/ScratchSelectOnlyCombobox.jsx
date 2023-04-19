import * as React from "react";
import { SelectOnlyCombobox } from "react_utils";
import styled, { css } from "styled-components";

const indicators = css`
  ${({ selected, active }) => {
    if (selected) {
      return `
        background-color: pink;
      `;
    } else if (active) {
      return `
        background-color: green;
      `;
    } else {
      return `
        &:hover {
          background-color: yellow;
        }
        &:focus {
          background-color: red;
        }
      `;
    }
  }}

  &:active {
    background-color: blue;
  }
`;

const Combobox = SelectOnlyCombobox.Provider;

const StyleTrigger = styled(SelectOnlyCombobox.Trigger)`
  ${indicators}
  border: 2px solid black;
`;

const StyleListbox = styled(SelectOnlyCombobox.Listbox)`
  ${indicators}
  border: 2px solid black;
  margin-top: 5px;
`;

const StyleOption = styled(SelectOnlyCombobox.Option)`
  ${indicators}
`;

const options = ["one", "two", "three"];

export default function ScratchSelectOnlyCombobox() {
  return (
    <div>
      <h1 id="countries-label">Select only Combobox</h1>
      <div>
        <Combobox
          name="countries"
          labelledBy="countries-label"
          options={options}
          onSelect={(label) => alert(label)}
        >
          <StyleTrigger placeholder="select country" />
          <StyleListbox renderOption={(props) => <StyleOption {...props} />} />
        </Combobox>
      </div>
    </div>
  );
}
