import * as React from "react";
import styled from "styled-components";
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/success_icon_filled.svg";
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";
import { Svg } from "react_utils/svgs";
import { MoonLoader } from "react-spinners";
import {
  AsyncCombobox,
  useRemoteData,
  RemoteDataProvider,
  RemoteDataStates,
} from "react_utils";
import { useAppCtx } from "/src/app/index.js";
import { SearchPlayerCard } from "./SearchPlayerCard.jsx";
import { useCtxRegistration } from "/src/stores/index.js";

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

const StyleMoonLoader = () => (
  <MoonLoader loading color="var(--info-strong)" size={40} />
);

const Combobox = AsyncCombobox.Provider;

const StyleTrigger = styled(AsyncCombobox.Trigger)`
  background-color: white;
  border-radius: var(--br-lg);
  height: 50px;

  pointer-events: auto;
  text-transform: uppercase;
  width: 100%;
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

const StyleListbox = styled(AsyncCombobox.Listbox)`
  margin-top: 10px;
  width: 700px;
  margin-left: 138px;
  border-top-left-radius: var(--br-lg);
  border-top-right-radius: var(--br-lg);
  background-color: var(--grey-light);
  height: 450px;
  padding: 20px 15px;
  outline: none;
  overflow-y: scroll;
  overflow-x: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
`;

const StyleOption = styled(AsyncCombobox.Option)`
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

const StyleSearchPlayerCombobox = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  width: 100%;
  #search-player-combobox {
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

    .combobox-states {
      flex: 1 0 30%;
    }
  }
`;

function SearchPlayerCombobox() {
  const [isComboboxOpen, setIsComboboxOpen] = React.useState(true);
  const { players, setModelRegistration } = useCtxRegistration();
  const { searchPlayer, addPlayerWristbandRegistrationQueue } = useAppCtx();
  const remoteData = useRemoteData({
    getRemoteData: searchPlayer,
    fetchDelay: 500,
    successDelay: 100,
  });

  return (
    <RemoteDataProvider key={players} value={remoteData}>
      <StyleSearchPlayerCombobox>
        <h1 id="search-player-combobox">search player</h1>
        <div className="combobox-wrapper">
          <Combobox
            initialOpen
            name="players"
            open={isComboboxOpen}
            setIsComboboxOpen={setIsComboboxOpen}
            labelledBy="search-player-combobox"
            options={remoteData.startFetching}
            parseOptions={(options) => {
              const labels = options.map((opt) => opt.username);
              return {
                labels,
                options,
              };
            }}
            onSelect={(player) =>
              addPlayerWristbandRegistrationQueue(players, player).then(
                (queue) => setModelRegistration({ players: queue })
              )
            }
          >
            <StyleTrigger placeholder="username or email" />
            <StyleListbox
              renderOption={(props) => (
                <StyleOption {...props}>
                  <SearchPlayerCard
                    player={props.option}
                    active={props.active}
                    selected={props.selected}
                  />
                </StyleOption>
              )}
            />
          </Combobox>
          <div className="combobox-states">
            <RemoteDataStates
              RenderPending={<StyleMoonLoader />}
              RenderSuccess={
                <StyleSuccessIcon>
                  <SuccessIcon />
                </StyleSuccessIcon>
              }
              RenderFailure={
                <StyleFailIcon>
                  <FailIcon />
                </StyleFailIcon>
              }
            />
          </div>
        </div>
      </StyleSearchPlayerCombobox>
    </RemoteDataProvider>
  );
}

export { SearchPlayerCombobox };
