import * as React from "react";
import styled from "styled-components";
import {
  AsyncSearchableCombobox as Combobox,
  useRemoteData,
  RemoteDataProvider,
  RemoteDataStates,
  AncestorDimensions,
  Svg,
} from "react_utils";
import { MoonLoader } from "react-spinners";
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/success_icon_filled.svg";
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";

function ComboboxSearchPlayer({ searchPlayer, onSelect, Option }) {
  const remoteData = useRemoteData({
    getRemoteData: searchPlayer,
    parseRes (players) {
      const options = new Map();
      const lnPlayers = players.length;
      for (let i = 0; i < lnPlayers; i++) {
        options.set(players[i].username, players[i]);
      }
      return options;
    },
    fetchDelay: 500,
    successDelay: 100,
  });

  return (
    <StyleComboboxSearchPlayer>
      <h1 id="combobox-search-player-label">search player</h1>
      <div className="combobox-search-player-wrapper">
        <RemoteDataProvider value={remoteData}>
          <Combobox.Provider
            initialOpen
            asTable
            onSelect={onSelect}
            name="search-player"
            labelledBy="combobox-search-player-label"
            options={remoteData.startFetching}
          >
            <section className="combobox-search-player-trigger-wrapper">
              <StyleTrigger placeholder="username or email" />
              <div className="combobox-search-player-search-state">
                <RemoteDataStates
                  RenderPending={<StyleMoonLoader />}
                  RenderSuccess={
                    <StyleSuccessIcon>
                      <SuccessIcon />
                    </StyleSuccessIcon>
                  }
                  RenderError={
                    <StyleFailIcon>
                      <FailIcon />
                    </StyleFailIcon>
                  }
                />
              </div>
            </section>
            <section
              className="combobox-search-player-listbox-wrapper"
              id="ancestor-scrollarea"
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
        </RemoteDataProvider>
      </div>
    </StyleComboboxSearchPlayer>
  );
}

/* --------------- REMOTE DATA STATES --------------- */
const StyleSuccessIcon = styled(Svg)`
  fill: var(--success-medium);
  pointer-events: none;
  height: 40px;
  width: 40px;
`;

const StyleFailIcon = styled(Svg)`
  fill: var(--error-base);
  pointer-events: none;
  height: 40px;
  width: 40px;
`;

function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={40} />
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
  overflow-x: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  &:not(:empty) {
    padding: 20px 15px;
  }
  max-height: ${({ $height }) => `${$height ? $height - 10 : 0}px`};
  // width: 560px;
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

function OnEmpty({ inputValue }) {
  return inputValue ? (
    <StyleOnEmpty>
      No player found with the name: <span>{inputValue}</span>
    </StyleOnEmpty>
  ) : null;
}

const StyleOnEmpty = styled.li`
  font-family: NoirPro-Regular;
  font-size: var(--tx-lg);
  span {
    margin-left: 8px;
    color: var(--primary-medium);
  }
`;

/* --------------- SEARCH PLAYER CONTAINER --------------- */
const StyleComboboxSearchPlayer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  gap: 20px;

  #combobox-search-player-label {
    font-size: 1.5em;
    font-family: NoirPro-Regular;
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  .combobox-search-player-wrapper {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;

    .combobox-search-player-trigger-wrapper {
      display: flex;
      flex-flow: row nowrap;
      gap: 10px;

      ${StyleTrigger} {
        flex: 0 1 80%;
      }

      .combobox-search-player-search-state {
        flex: 0 0 20%;
      }
    }

    .combobox-search-player-listbox-wrapper {
      box-sizing: border-box;
      flex: 1;
    }
  }
`;

export { ComboboxSearchPlayer };
