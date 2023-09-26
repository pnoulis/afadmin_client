// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { SelectOnlyCombobox as Combobox } from "react_utils/comboboxes";
// ------------------------------ project  ------------------------------- //

function getLabels(views = []) {
  return [...views];
}

function ComboboxSelectScoreboardView({
  views,
  onSelect,
  defaultLabel,
  Option,
}) {
  views ??= [];
  return (
    <StyledSelectOnlyCombobox>
      <Combobox.Provider
        onSelect={onSelect}
        defaultLabel={defaultLabel}
        name="select-scoreboard-view"
        options={views}
        getLabels={getLabels}
      >
        <StyleTrigger />
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
  background-color: var(--grey-subtle);
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

  &:hover {
    cursor: pointer;
  }
  &::placeholder {
    opacity: 1;
  }
`;

const StyleListbox = styled(Combobox.Listbox)`
  margin-top: 10px;
  border-top-left-radius: var(--br-lg);
  border-top-right-radius: var(--br-lg);
  background-color: var(--grey-light);
  max-height: 300px;
  padding: 20px 15px;
  outline: none;
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  font-weight: 550;
`;
const StyleOption = styled(Combobox.Option)`
  border: 4px solid transparent;
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

const StyledSelectOnlyCombobox = styled("div")``;

export { ComboboxSelectScoreboardView };
