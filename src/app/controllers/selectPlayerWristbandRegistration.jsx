import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

function handleResponse(res) {
  console.log("SELECTED PLAYER WRISTBAND REGISTRATION");
  return res;
}

function handleError(err) {
  if (err instanceof Errors.ValidationError) {
    throw {
      validationErrors: err.cause.validationErrors,
    };
  } else if (err instanceof Errors.ModelError) {
    fmAgent.warn({ message: err.message });
    throw {
      modelError: err.message,
    };
  } else if (err instanceof Errors.TimeoutError) {
    window.location.assign("/408.html");
  } else {
    window.location.assign("/500.html");
  }
}

/*

The administrator has selected a player for wristband registration.

The wristband registration process is different for the following 3 cases:

1. The selected player is already registered to a wristband AND is not currently part of a team.

   The selected player is allowed to have his wristband swapped in the following manner:
   - Administrator is asked for confirmation.
   - The old wristband is unregistered.
   - The selected player is transferred to the wristband registration queue.

2. The selected player is currently part of a team. (playing or not).

   The selected player is not allowed to have his wristband swapped
   because he may be currently playing.

   The only way to have the player register a new wristband, is by disbanding the team he is part of, or
   removing himself from the team

3. The selected player is NOT already registered to a wristband.

   The selected player is immediattely transferred to the wristband registration queue.

*/

export default (appRef) => ({
  selectPlayerWristbandRegistration: (player) =>
    new Promise((resolve) => {
      if (player?.wristbandMerged) {
        fmAgent.warn({
          message: `Player ${player.username} is part of a team.
The team must be disbanded or the player removed from the team to register
a new wristband`,
        });
      } else if (!(player.wristband && player.wristband.active)) {
        resolve(player);
      } else {
        appRef.current.unregisterWristband(player).then(resolve);
      }
    }),
});
