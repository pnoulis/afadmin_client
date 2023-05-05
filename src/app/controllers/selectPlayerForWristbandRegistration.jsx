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
