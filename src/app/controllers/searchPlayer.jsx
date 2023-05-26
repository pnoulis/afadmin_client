import * as React from "react";
import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import {
  PLAYER_SCHEMA,
  WRISTBAND_SCHEMA,
} from "agent_factory.shared/schemas.js";

function handleResponse(res) {
  return res?.players.map((p) => ({
    ...PLAYER_SCHEMA,
    ...p,
    wristband: {
      ...WRISTBAND_SCHEMA,
      ...p.wristband,
    },
  }));
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
  searchPlayer: async (searchTerm) =>
    new Promise((resolve, reject) => {
      const { Afmachine } = appRef.current;
      if (!Afmachine) throw new Error("MISSING Afmachine");
      Afmachine.request(() => Afmachine.players.search(searchTerm))
        .then(handleResponse)
        .then(resolve)
        .catch(handleError)
        .catch(reject);
    }),
});
