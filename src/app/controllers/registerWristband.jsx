import * as React from "react";
import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import { mapWristbandColor } from "agent_factory.shared/utils/index.js";

function handleResponse(player, wristband, res) {
  fmAgent.success({
    message: `Player ${player.username} paired with wristband
number: ${wristband.wristbandNumber}
color: ${mapWristbandColor("colorCode", wristband.wristbandColor)}`,
  });
  return {
    ...player,
    wristband: {
      ...player.wristband,
      ...wristband,
      pairing: false,
      active: true,
    },
  };
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
  registerWristband: (player, wristband) =>
    new Promise((resolve, reject) => {
      const { Afmachine } = appRef.current;
      const { unregisterWristband } = appRef.current.controllers;

      const register = () =>
        Afmachine.request(() =>
          Afmachine.players.registerWristband({
            username: player.username,
            wristbandNumber: wristband.wristbandNumber,
          })
        )
          .then((res) => handleResponse(player, wristband, res))
          .then(resolve)
          .catch(handleError)
          .catch(reject);

      if (player?.wristband?.active) {
        unregisterWristband(player).then(register).catch(reject);
      } else {
        register();
      }
    }),
});
