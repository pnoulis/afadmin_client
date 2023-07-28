import * as React from "react";
import styled from "styled-components";
import {
  SearchableCombobox as Combobox,
  AncestorDimensions,
} from "react_utils";

const getLabels = function (players = []) {
  const __labels = [];
  const lnPlayers = players.length;
  for (let i = 0; i < lnPlayers; i++) {
    __labels.push(players[i].username);
  }
  return __labels;
};

function ComboboxSelectPlayer({ players, onSelect, Option }) {
  return (
    <StyleComboboxSelectPlayer>
      <h1 id="combobox-select-player-label">select player</h1>
      <div className="combobox-select-player-wrapper">
        <Combobox.Provider
          initialOpen
          asTable
          onSelect={onSelect}
          name="select-player"
          labelledBy="combobox-select-player-label"
          options={players || []}
          getLabels={getLabels}
        >
          <section className="combobox-select-player-trigger-wrapper">
            <StyleTrigger placeholder="username" />
          </section>
          <section
            id="ancestor-scrollarea"
            className="combobox-select-player-listbox-wrapper"
          >
            <AncestorDimensions ancestor="#ancestor-scrollarea">
              <StyleListbox
                renderOnEmpty={OnEmpty}
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
                      <p>{props.option.username}</p>
                      <p>{props.option.wristband.id}</p>
                    </StyleOption>
                  )
                }
              />
            </AncestorDimensions>
          </section>
        </Combobox.Provider>
      </div>
    </StyleComboboxSelectPlayer>
  );
}

/* --------------- COMBOBOX --------------- */

const StyleTrigger = styled(Combobox.Trigger)`
  background-color: white;
  border-radius: var(--br-lg);
  pointer-events: auto;
  text-transform: uppercase;
  width: 100%;
  height: 55px;
  padding: 0 15px;
  border-radius: var(--br-lg);
  border: 2px solid var(--black-base);
  font-size: var(--tx-nl);
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
  margin-top: 40px;
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
  max-height: ${({ $height }) => `${$height ? $height - 40 : 0}px`};
max-width: 680px;
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
    }
    if (selected) {
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
      width: 100%;
      box-sizing: border-box;
      flex: 1;
    }
  }
`;

export { ComboboxSelectPlayer };
