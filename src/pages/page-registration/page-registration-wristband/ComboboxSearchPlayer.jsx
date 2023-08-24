// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { MoonLoader } from "react-spinners";
// ------------------------------ own libs ------------------------------- //
import {
  AsyncSearchableCombobox as Combobox,
  useRemoteData,
  RemoteDataProvider,
  RemoteDataStates,
  AncestorDimensions,
  Svg,
} from "react_utils";
// ------------------------------ project  ------------------------------- //
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/success_icon_filled.svg";
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";

function ComboboxSearchPlayer({
  searchPlayer,
  onSelect,
  Option,
  style,
  className,
}) {
  const remoteData = useRemoteData({
    getRemoteData: searchPlayer,
    parseRes(players) {
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
    <StyleComboboxSearchPlayer className={className} style={style}>
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
  return <MoonLoader loading color="var(--info-strong)" size={40} />;
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

  &::placeholder {
    color: black;
    opacity: 1;
  }

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

function OnEmpty({ inputValue }) {
  return inputValue ? (
    <StyleOnEmpty>
      No player found with the name: <span>{inputValue}</span>
    </StyleOnEmpty>
  ) : null;
}

const StyleOnEmpty = styled.li`
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
  gap: 10px;

  #combobox-search-player-label {
    color: var(--primary-base);
    font-size: 1.8rem;
    font-weight: 550;
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
