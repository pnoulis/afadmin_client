import * as React from "react";
import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import {
  Dialog,
  DialogHeading,
  DialogDescription,
  DialogClose,
  DialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";

function handleResponse(res) {
  fmAgent.success({ message: res.message });
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
  toggleWristbandPairing: async (player, onPaired) =>
    new Promise((resolve, reject) => {
      const { Afmachine, on, flush } = appRef.current;
      console.log(appRef.current);
      const { validateWristband, registerWristband } =
        appRef.current.controllers;

      const registerWristbandScanListener = () =>
        on("wristbandScan", (wristband) => {
          validateWristband(wristband)
            .then(registerWristband)
            .then((registered) => {
              console.log(registered);
              alert("wristband registered");
              // flush("wristbandScan");
              // onPaired(null, registered);
            })
            .catch(handleError)
            .catch(onPaired);
        });
      // if (player?.wristband.active) {
      //   const { unregisterWristband } = appRef.current.controllers;
      //   unregisterWristband(player)
      // }

      flush("wristbandScan");
      registerWristbandScanListener();
      // if (!player.wristband.pairing) {
      // }

      resolve({
        ...player,
        wristband: {
          ...player.wristband,
          pairing: !player.wristband.pairing,
        },
      });

      // Afmachine.request(() => appRef.current.Afmachine.players.login(payload))
      //   .then(handleResponse)
      //   .then(resolve)
      //   .catch(handleError)
      //   .catch(reject);
    }),
});
