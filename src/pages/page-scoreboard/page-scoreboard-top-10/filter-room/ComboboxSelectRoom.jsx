// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { SearchableCombobox as Combobox } from "react_utils/comboboxes";
// ------------------------------ project  ------------------------------- //

function isActive(filters, filter) {
  for (let i = 0; i < filters.length; i++) {
    if (filters[i] === filter) return true;
  }
  return false;
}
function getLabels(rooms = []) {
  return [...rooms];
}

function ComboboxSelectRoom({ filters, rooms, onSelect, Option }) {
  rooms ||= [];
  return (
    <StyleComboboxSelectRoom>
      <div className="combobox-select-room-wrapper">
        <Combobox.Provider
          initialOpen
          asTable
          onSelect={onSelect}
          name="select-room"
          options={rooms}
          getLabels={getLabels}
        >
          <section className="combobox-select-room-trigger-wrapper">
            <StyleTrigger autoFocus placeholder="room name" />
          </section>
          <section>
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
                  <StyleOption
                    $filtered={isActive(filters, props.option)}
                    {...props}
                  >
                    <p>{props.option}</p>
                  </StyleOption>
                )
              }
            />
          </section>
        </Combobox.Provider>
      </div>
    </StyleComboboxSelectRoom>
  );
}

/* --------------- COMBOBOX --------------- */

const StyleTrigger = styled(Combobox.Trigger)`
  background-color: var(--grey-base);
  border-radius: var(--br-lg);
  pointer-events: auto;
  text-transform: uppercase;
  width: 100%;
  max-width: 100%;
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
  &::placeholder {
    opacity: 1;
  }
`;

function OnEmpty(props) {
  return <StyleOnEmpty>No such room!</StyleOnEmpty>;
}

const StyleOnEmpty = styled.li`
  border-radius: var(--br-lg);
  background-color: var(--grey-light);
  font-size: var(--tx-lg);
  padding: 10px 10px 10px 20px;
`;

const StyleComboboxSelectRoom = styled.div`
  z-index: 1000;
  position: absolute;
  background-color: white;
  top: 135px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 350px;

  #combobox-select-room-label {
    color: var(--primary-base);
    font-size: var(--tx-xxh);
    font-weight: 550;
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  .combobox-select-room-wrapper {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;

    .combobox-select-room-trigger-wrapper {
      display: flex;
      flex-flow: row nowrap;
      gap: 10px;

      ${StyleTrigger} {
        flex: 0 1 100%;
      }

      .combobox-select-room-select-state {
        flex: 0 0 20%;
      }
    }

    .combobox-select-room-listbox-wrapper {
      box-sizing: border-box;
      flex: 1;
    }
  }
`;

const StyleListbox = styled(Combobox.Listbox)`
  margin-top: 15px;
  background-color: var(--grey-subtler);
  border-radius: var(--br-lg);
  outline: none;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-flow: column nowrap;
  box-shadow: var(--sd-9);
  height: max-content;
  max-height: 300px;
  gap: 15px;
  &:not(:empty) {
    padding: 25px;
  }
  width: 350px;
  scrollbar-color: black var(--primary-base);
  scrollbar-gutter: stable both-edges;
`;

const StyleOption = styled(Combobox.Option)`
  border: 4px solid var(--grey-base);
  border-radius: var(--br-lg);
  background-color: var(--grey-base);
  padding: 4px 10px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 550;
  cursor: pointer;

  ${({ $filtered }) =>
    $filtered
      ? css`
          border-color: var(--primary-base);
          background-color: var(--primary-base);
          color: white;
        `
      : css`
          &:hover {
            border-color: var(--primary-base);
          }
        `}
`;

export { ComboboxSelectRoom };
