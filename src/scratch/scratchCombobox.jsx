import styled from "styled-components";
import { SearchableCombobox as Combobox } from "react_utils";

export default function ScratchCombobox() {
  return (
    <div>
      <h1>Scratch combobox</h1>
      <div />
    </div>
  );
}

/* --------------- COMBOBOX --------------- */

const StyleTrigger = styled(Combobox.Trigger)`
  background-color: white;
  border-radius: var(--br-lg);
  pointer-events: auto;
  text-transform: uppercase;
  width: 100%;
  max-width: 465px;
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

const StyleListbox = styled(Combobox.Listbox)`
  margin-top: 10px;
  border-radius: var(--br-lg);
  background-color: var(--grey-light);
  outline: none;
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  &:not(:empty) {
    padding: 20px 15px;
  }
  max-height: ${({ $height }) => `${$height ? $height - 10 : 0}px`};
  width: 560px;
`;

const StyleOption = styled(Combobox.Option)`
  border: 4px solid transparent;
  border-radius: var(--br-md);
  background-color: white;

  ${({ selected, active }) => {
    if (active) {
      return `
border-color: var(--primary-light);
cursor: pointer;
`;
    } if (selected) {
      return `
border-color: var(--success-base);
`;
    } 
      return `
  &:hover {
    cursor: pointer;
    border-color: var(--primary-light);
  }
`;
    
  }}
`;

function OnEmpty(props) {
  return <StyleOnEmpty>No available players found!</StyleOnEmpty>;
}

const StyleOnEmpty = styled.li`
  font-family: NoirPro-Regular;
  font-size: var(--tx-lg);
`;

/* --------------- SELECT PLAYER CONTAINER --------------- */
const StyleComboboxSelectPlayer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  #combobox-select-player-label {
    font-size: 1.5em;
    font-family: NoirPro-Regular;
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  .combobox-select-player-wrapper {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    width: 100%;
    flex-flow: column nowrap;

    .combobox-select-player-trigger-wrapper {
      display: flex;
      flex-flow: row nowrap;
      gap: 10px;

      ${StyleTrigger} {
        flex: 0 1 80%;
      }
    }

    .combobox-select-player-listbox-wrapper {
      box-sizing: border-box;
      flex: 1;
    }
  }
`;
