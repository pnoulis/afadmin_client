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
  removePlayerWristbandRegistrationQueue: async (queue, player) =>
    new Promise((resolve, reject) => {
      const { toggleWristbandPairing } = appRef.current.controllers;
      const remove = () => queue.filter((p) => p.username !== player.username);

      if (player.wristband.pairing) {
        toggleWristbandPairing(player)
          .then((unToggled) => unToggled && resolve(remove()))
          .catch(reject);
      } else {
        resolve(remove());
      }
    }),
});
