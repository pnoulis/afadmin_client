import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

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
    console.log(err);
    throw err;
    //window.location.assign("/408.html");
  } else {
    console.log(err);
    throw err;
    //window.location.assign("/500.html");
  }
}

export default (appRef) => ({
  removePlayerTeamRoster: async (roster, player) =>
    new Promise((resolve, reject) => {
      const { toggleWristbandPairing } = appRef.current.controllers;
      const remove = () =>
        resolve([
          ...roster.filter((seat) => seat?.username !== player.username),
          null,
        ]);

      if (player.wristband.pairing) {
        toggleWristbandPairing(player)
          .then((unToggled) => unToggled && remove())
          .catch(handleError)
          .catch(reject);
      } else {
        remove();
      }
    }),
});
