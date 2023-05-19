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
    // window.location.assign("/408.html");
  } else {
    console.log(err);
    // window.location.assign("/500.html");
  }
}

export default (appRef) => ({
  stopTeam: async (payload) =>
    new Promise((resolve, reject) => {
      alert("stop team");
      console.log(payload);
      //   const Afmachine = appRef.current.Afmachine;
      //   Afmachine.request(() => Afmachine.players.stopTeam(payload))
      //     .then(handleResponse)
      //     .then(resolve)
      //     .catch(handleError)
      //     .catch(reject);
    }),
});
