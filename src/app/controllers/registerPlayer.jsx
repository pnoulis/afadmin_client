import * as React from "react";
import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

function handleResponse(res) {
  fmAgent.success({
    message: `Successfull registration of player:${res?.player?.username}`,
  });
  return res.player;
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
  registerPlayer: async (player) =>
    new Promise((resolve, reject) => {
      const { Afmachine } = appRef.current;
      Afmachine.request(() => appRef.current.Afmachine.players.register(player))
        .then(handleResponse)
        .then(resolve)
        .catch(handleError)
        .catch(reject);
    }),
});
