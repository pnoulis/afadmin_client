import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

function handleResponse(res) {
  fmAgent.info({
    message: `Registered player: ${res.player.username}`,
  });
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
    window.location.assign("/408.html");
  } else {
    fmAgent.error({ message: err.message });
    window.location.assign("/500.html");
  }
}

export default (Afmachine) => ({
  registerPlayer: async (player) =>
    Afmachine.request(() => Afmachine.players.register(player))
      .then(handleResponse)
      .catch(handleError),
});
