import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

function handleResponse(res) {
  console.log("REGISTERED PLAYER");
  fmAgent.info({
    message: `Registered player: ${res?.player?.username}`,
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
    window.location.assign("/408.html");
  } else {
    window.location.assign("/500.html");
  }
}

export default (appRef) => ({
  registerPlayer: async (player) =>
    new Promise((resolve, reject) => {
      const Afmachine = appRef.current.Afmachine;
      Afmachine.request(() => Afmachine.players.register(player))
        .then(handleResponse)
        .then(resolve)
        .catch(handleError)
        .catch(reject);
    }),
});