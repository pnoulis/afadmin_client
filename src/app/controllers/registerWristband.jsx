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
  console.log(res);
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
  registerWristband: async (player) =>
    new Promise((resolve, reject) => {
      const { Afmachine } = appRef.current;
      const { unregisterWristband } = appRef.current.controllers;

      const register = () =>
        Afmachine.request(() =>
          Afmachine.players.registerWristband({
            username: player?.username,
            wristbandNumber: player?.wristband.wristbandNumber,
          })
        )
          .then(handleResponse)
          .then(resolve)
          .catch(handleError)
          .catch(reject);

      if (player?.wristband.active) {
        unregisterWristband(player).then(register).catch(reject);
      } else {
        register();
      }
    }),
});
