import * as React from "react";
import styled from "styled-components";
import { OptionsEditableListCombobox } from "react_utils/comboboxes";

function SelectPlayerCombobox({ players = [], className, ...props }) {
  const [isComboboxOpen, setIsComboboxOpen] = React.useState(true);
  return (
    <article className={className} {...props}>
      <h1 id="select-player-combobox">select player</h1>
      <div className="combobox-wrapper">
        <Combobox
          initialOpen
          open={isComboboxOpen}
          setIsComboboxOpen={setIsComboboxOpen}
          name="players"
          labelledBy="select-player-combobox"
          options={players}
          getLabels={(players) => players.map((player) => player?.username)}
        >
          <StyleTrigger placeholder="username" />
          <StyleListbox renderOption={(props) => <StyleOption {...props} />} />
        </Combobox>
      </div>
    </article>
  );
}

const StyleSelectPlayerCombobox = styled(SelectPlayerCombobox)`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  width: 100%;
  #select-player-combobox {
    font-size: 1.5em;
    font-family: NoirPro-Regular;
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  .combobox-wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;

    #players-trigger {
      flex: 0 0 70;
    }
  }
`;
const Combobox = OptionsEditableListCombobox.Provider;
const StyleTrigger = styled(OptionsEditableListCombobox.Trigger)`
  background-color: white;
  border-radius: var(--br-lg);
  height: 50px;
  pointer-events: auto;
  text-transform: uppercase;
  width: 400px;
  height: 55px;
  padding: 0 15px;
  border-radius: var(--br-lg);
  border: 2px solid var(--black-base);
  font-size: var(--tx-sm);
  letter-spacing: 1.5px;
  outline: none;
  color: black;

  &::placeholder {
    color: black;
    opacity: 1;
  }

  &:hover {
    cursor: pointer;
  }
`;
const StyleListbox = styled(OptionsEditableListCombobox.Listbox)`
  margin-top: 10px;
  width: 700px;
  margin-left: 150px;
  border-radius: var(--br-lg);
  background-color: var(--grey-light);
  height: 510px;
  padding: 20px 15px;
  outline: none;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
`;
const StyleOption = styled(OptionsEditableListCombobox.Option)`
  border: 4px solid transparent;
  padding: 10px 10px;
  border-radius: var(--br-md);
  background-color: white;

  ${({ selected, active }) => {
    if (active) {
      return `
border-color: var(--primary-medium);
cursor: pointer;
`;
    } else if (selected) {
      return `
border-color: var(--success-base);
`;
    } else {
      return `
  &:hover {
    cursor: pointer;
    border-color: var(--primary-medium);
  }
`;
    }
  }}
`;

export { StyleSelectPlayerCombobox as SelectPlayerCombobox };
