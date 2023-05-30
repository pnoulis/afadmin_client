import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

function handleResponse(res) {
  return res.players.map((p) => ({
    ...p,
    wristband: {
      ...p.wristband,
      pairing: false,
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
    // window.location.assign("/408.html");
  } else {
    // window.location.assign("/500.html");
    console.log(err);
  }
}

export default (appRef) => ({
  searchPlayer: async (player) =>
    appRef.current.Afmachine.request(() =>
      appRef.current.Afmachine.players.search(player)
    )
      .then(handleResponse)
      .catch(handleError),
});
