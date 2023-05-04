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
import { useAfmachineCtx } from "/src/afmachine_interface/index.js";
import { SearchPlayerCard } from "./SearchPlayerCard.jsx";
import { useRegistrationCtx } from "/src/stores/index.js";
import {
  Dialog,
  DialogHeading,
  DialogDescription,
  DialogClose,
  DialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

function DialogUnpairWristband() {
  return (
    <Dialog initialOpen>
      <DialogHeading>Unpair Wristband?</DialogHeading>
      <DialogDescription>
        It seems the player has already registered a wristband.
      </DialogDescription>
      <DialogClose tabIndex={0}>cancel</DialogClose>
      <DialogConfirm>unpair</DialogConfirm>
    </Dialog>
  );
}

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
  const { players, setPlayers } = useRegistrationCtx();
  const { searchPlayer } = useAfmachineCtx();
  const remoteData = useRemoteData({ getRemoteData: searchPlayer });

  return (
    <RemoteDataProvider value={remoteData}>
      <StyleSearchPlayerCombobox>
        <h1 id="search-player-combobox">search player</h1>
        <div className="combobox-wrapper">
          <Combobox
            name="players"
            labelledBy="search-player-combobox"
            options={remoteData.startFetching}
            parseOptions={(options) => {
              const labels = options.map((opt) => opt.username);
              return {
                labels,
                options,
              };
            }}
            onSelect={(player) => {
              // The administrator has selected a player for wristband registration.

              // The wristband registration process is different for the following 3 cases:

              // 1. The selected player is already registered to a wristband AND is not currently part of a team.

              // The selected player is allowed to have his wristband swapped in the following manner:
              // 1. Administrator is asked for confirmation.
              // 2. The old wristband is unregistered.
              // 3. The selected player is transferred to the wristband registration queue.

              // 2. The selected player is currently part of a team. (playing or not).

              // The selected player is not allowed to have his wristband swapped
              // because he may be currently playing.

              // The only way to have the player register a new wristband, is by disbanding the team he is part of, or
              // removing himself from the team

              // 3. The selected player is NOT already registered to a wristband.

              // The selected player is immediattely transferred to the wristband registration queue.

              if (player?.wristbandMerged) {
                // case 2
                fmAgent.warn({
                  message: `Player ${player.username} is part of a team. The team must be disbanded or the player removed to register a new wristband`,
                });
              } else {
                if (player.wristband?.active) {
                  // case 1
                  renderDialog(DialogUnpairWristband, (unpair) => {
                    if (!unpair) return;
                  });
                } else {
                  // case 3
                  setPlayers([
                    ...players,
                    {
                      ...player,
                      wristband: {
                        status: 0,
                        pairing: false,
                        active: false,
                      },
                    },
                  ]);
                }
              }
            }}
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
