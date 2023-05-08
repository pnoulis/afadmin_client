import * as React from "react";
import { fmAgent } from "/src/components/flash_messages/index.js";
import {
  Dialog,
  DialogHeading,
  DialogDescription,
  DialogClose,
  DialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";

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

const getControllers = (app) => ({
  selectPlayerForWristbandRegistration: (
    player,
    onPlayerSelection = () => {}
  ) => {
    if (!player) {
      throw new Error("Missing player");
    }
    const { wristbandMerged, wristband } = player;

    if (wristbandMerged) {
      fmAgent.warn({
        message: `Player ${player.username} is part of a team.
The team must be disbanded or the player removed from the team to register
a new wristband`,
      });
    } else if (!(wristband && wristband.active)) {
      onPlayerSelection(player);
    } else {
      renderDialog(DialogUnpairWristband, (unpair) => {
        console.log("RENDER DIALOG RETURN");
        if (!unpair) return;
        const { unregisterWristband } = getControllers(app);
        unregisterWristband(player, (unregistered) => {
          onPlayerSelection(unregistered);
        });
        // onPlayerSelection(player);
      });
    }
  },
  togglePlayerWristbandPairing: (
    players,
    pairPlayer,
    onPlayersChange = () => {}
  ) => {
    const { username, wristband } = pairPlayer;
    let _player;

    if (!wristband) {
      throw new Error("Player missing wristband");
    }

    // Remove all wristband scan subscriptions
    app.listenersRef.current = app.listenersRef.current.filter(
      (l) => l.type !== "wristbandScan"
    );

    if (wristband.pairing) {
      _player = {
        ...pairPlayer,
        wristband: {
          ...pairPlayer.wristband,
          pairing: false,
        },
      };
    } else {
      _player = {
        ...pairPlayer,
        wristband: {
          ...pairPlayer.wristband,
          pairing: true,
        },
      };
      app.listenersRef.current.push({
        type: "wristbandScan",
        cb: ({ wristbandNumber, wristbandColor }) => {
          const { registerWristband } = app.Afmachine;

          registerWristband({ username, wristbandNumber }).then(() => {
            onPlayersChange(
              players.map((p) => {
                if (p.username === username)
                  return {
                    ..._player,
                    wristband: {
                      ..._player.wristband,
                      wristbandNumber,
                      wristbandColor,
                      active: true,
                      pairing: false,
                    },
                  };
                return {
                  ...p,
                  wristband: {
                    ...p.wristband,
                    pairing: false,
                  },
                };
              })
            );
          });
        },
      });
    }

    onPlayersChange(
      players.map((p) => {
        if (p.username === username) return _player;
        return {
          ...p,
          wristband: {
            ...p.wristband,
            pairing: false,
          },
        };
      })
    );
  },
  unregisterWristband: (player, onPlayerChange) => {
    const { unregisterWristband: _unregisterWristband } = app.Afmachine;

    _unregisterWristband(player)
      .then((res) => {
        onPlayerChange({
          ...player,
          wristbandMerged: false,
          wristband: {
            wristbandColor: null,
            wristbandNumber: null,
            active: false,
            pairing: false,
          },
        });
      })
      .catch((err) => console.log(err));
  },

  registerWristband: (player, onPlayerChange) => {
    const { registerWristband: _registerWristband } = app.Afmachine;

    _registerWristband({ username, wristbandNumber }).then(() => {
      onPlayersChange(
        players.map((p) => {
          if (p.username === username)
            return {
              ..._player,
              wristband: {
                ..._player.wristband,
                wristbandNumber,
                wristbandColor,
                active: true,
                pairing: false,
              },
            };
          return {
            ...p,
            wristband: {
              ...p.wristband,
              pairing: false,
            },
          };
        })
      );
    });
  },
});

export { getControllers };
