import * as React from "react";
import styled, { css } from "styled-components";
import { SelectOnlyCombobox } from "react_utils";

const Combobox = SelectOnlyCombobox.Provider;
const StyleTrigger = styled(SelectOnlyCombobox.Trigger)`
  border-radius: var(--br-lg);
  height: 50px;
  width: 100%;
  height: 55px;
  padding: 0 15px;
  border-radius: var(--br-lg);
  font-size: var(--tx-md);
  letter-spacing: 1.5px;
  outline: none;
  &:hover {
    cursor: pointer;
  }

  ${({ selected }) =>
    selected
      ? `
color: white;
background-color: var(--primary-medium);
`
      : `
background-color: var(--grey-light);
`}
`;
const StyleListbox = styled(SelectOnlyCombobox.Listbox)`
  margin-top: 10px;
  border-top-left-radius: var(--br-lg);
  border-top-right-radius: var(--br-lg);
  background-color: var(--grey-light);
  padding: 20px 15px;
  outline: none;
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
`;
const StyleOption = styled(SelectOnlyCombobox.Option)`
  border: 4px solid transparent;
  padding: 10px 10px;
  border-radius: var(--br-md);
  background-color: white;

  ${({ selected, active }) => {
    if (selected) {
      return `
border-color: var(--primary-medium);
`;
    } else if (active) {
      return `
border-color: var(--primary-medium);
cursor: pointer;
`;
    } else {
      return `
&: hover {
cursor: pointer;
border-color: var(--primary-medium);
}
`;
    }
  }}
`;

function ComboboxSelectPackage({
  type,
  value,
  options,
  onSelect,
  labelledBy,
  selected,
  className,
  ...props
}) {
  return (
    <Combobox
      name="package-catalogue"
      value={value}
      options={options}
      labelledBy={labelledBy}
      onSelect={onSelect}
      {...props}
    >
      <StyleTrigger selected={selected} placeholder={`select ${type}`} />
      <StyleListbox renderOption={(props) => <StyleOption {...props} />} />
    </Combobox>
  );
}
export { ComboboxSelectPackage };
