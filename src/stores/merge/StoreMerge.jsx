import * as React from "react";
import { ContextProvideMerge } from "./ContextMerge";
import { useContextApp } from "/src/app/index.js";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs/index.js";
import { mapWristbandColor } from "agent_factory.shared/utils/index.js";

function AlertDuplicateWristbandColors({ wristbandColor, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Add player to team</AlertDialogHeading>
      <AlertDialogDescription>
        The scanned wristband color {wristbandColor} is
        <br />
        taken by another player in team.
      </AlertDialogDescription>
    </AlertDialog>
  );
}

function StoreProvideMerge({ children }) {
  const store = useStoreMerge();
  return <ContextProvideMerge value={store}>{children}</ContextProvideMerge>;
}

function useStoreMerge() {
  const {
    addPlayerTeamRoster,
    removePlayerTeamRoster,
    toggleWristbandPairing,
    registerWristband,
    flush,
  } = useContextApp();
  const [store, setStore] = React.useState({
    roster: new Array(MAX_TEAM_SIZE).fill(null),
  });
  const storeRef = React.useRef(null);
  storeRef.current = store;

  React.useEffect(() => {
    return () => flush("wristbandScan");
  }, []);

  const handlePlayerSelection = (player) => {
    addPlayerTeamRoster(store.roster, player)
      .then((newRoster) => {
        setStore({
          roster: newRoster,
        });
      })
      .catch((err) => console.log(err));
  };
  const handlePlayerRemoval = (player) => {
    removePlayerTeamRoster(store.roster, player)
      .then((newRoster) => {
        setStore({
          roster: newRoster,
        });
      })
      .catch((err) => console.log(err));
  };
  const handleWristbandPairToggle = (player) => {
    toggleWristbandPairing(player, (err, scannedWristband, cb) => {
      if (err) return;
      if (
        storeRef.current.roster.find(
          (seat) =>
            seat?.wristband?.wristbandColor === scannedWristband.wristbandColor
        )
      ) {
        renderDialog(null, AlertDuplicateWristbandColors, {
          wristbandColor: mapWristbandColor(
            "colorCode",
            scannedWristband.wristbandColor
          ),
        });
      } else {
        const playerWhileScan = storeRef.current.roster.find(
          (seat) => seat?.username === player.username
        );

        if (playerWhileScan) {
          // if player was not removed while waiting for a wristband scan
          registerWristband(playerWhileScan, scannedWristband)
            .then((pairedPlayer) => {
              cb();
              setStore({
                roster: storeRef.current.roster.map((seat) =>
                  seat?.username === pairedPlayer.username ? pairedPlayer : seat
                ),
              });
            })
            .catch((err) => console.log(err));
        }
      }
    }).then(
      (toggledPlayer) =>
        toggledPlayer &&
        setStore({
          roster: storeRef.current.roster.map((seat) =>
            seat == null
              ? null
              : seat.username === toggledPlayer.username
              ? toggledPlayer
              : {
                  ...seat,
                  wristband: {
                    ...seat.wristband,
                    pairing: false,
                  },
                }
          ),
        })
    );
  };

  return {
    ...store,
    setStoreMerge: setStore,
    storeMergeRef: storeRef,
    handlePlayerSelection,
    handlePlayerRemoval,
    handleWristbandPairToggle,
  };
}

export { StoreProvideMerge, useStoreMerge };
