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
  event: async (payload) =>
    Afmachine.request(() => Afmachine.players.login(payload))
      .then(handleResponse)
      .catch(handleError),
});
