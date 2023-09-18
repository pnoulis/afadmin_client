// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import {
  SearchableCombobox as Combobox,
  AncestorDimensions,
} from "react_utils";
// ------------------------------ project  ------------------------------- //

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
      <h1 id="combobox-select-player-label">add players</h1>
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
            <StyleTrigger autoFocus placeholder="username" />
          </section>
          <section
            id="select-player-scrollarea"
            className="combobox-select-player-listbox-wrapper"
          >
            <AncestorDimensions ancestor="#select-player-scrollarea">
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
  background-color: var(--grey-light);
  border-radius: var(--br-lg);
  pointer-events: auto;
  text-transform: uppercase;
  width: 100%;
  max-width: 465px;
  height: 55px;
  padding: 0 15px;
  border-radius: var(--br-nl);
  text-align: center;
  font-size: var(--tx-sm);
  font-weight: 550;
  letter-spacing: 1.5px;
  outline: none;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

const StyleListbox = styled(Combobox.Listbox)`
  margin-top: 35px;
  border-radius: var(--br-lg);
  outline: none;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  &:not(:empty) {
    padding: 0 20px 0 0;
  }
  max-height: ${({ $height }) => `${$height ? $height - 35 : 0}px`};
  width: 620px;
`;

const StyleOption = styled(Combobox.Option)`
  border: 4px solid var(--grey-light);
  border-radius: var(--br-lg);
  background-color: var(--grey-light);

  &:hover {
    cursor: pointer;
    border-color: var(--primary-light);
  }

  ${({ active }) => {
    if (active) {
      return `
border-color: var(--primary-light);
cursor: pointer;
`;
    }
  }}
`;

function OnEmpty(props) {
  return <StyleOnEmpty>No available players found!</StyleOnEmpty>;
}

const StyleOnEmpty = styled.li`
  border-radius: var(--br-lg);
  background-color: var(--grey-light);
  font-size: var(--tx-lg);
  padding: 10px 10px 10px 20px;
`;

const StyleComboboxSelectPlayer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
  gap: 10px;

  #combobox-select-player-label {
    color: var(--primary-base);
    font-size: var(--tx-xxh);
    font-weight: 550;
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  .combobox-select-player-wrapper {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;

    .combobox-select-player-trigger-wrapper {
      display: flex;
      flex-flow: row nowrap;
      gap: 10px;

      ${StyleTrigger} {
        flex: 0 1 80%;
      }

      .combobox-select-player-select-state {
        flex: 0 0 20%;
      }
    }

    .combobox-select-player-listbox-wrapper {
      box-sizing: border-box;
      flex: 1;
    }
  }
`;

export { ComboboxSelectPlayer };
