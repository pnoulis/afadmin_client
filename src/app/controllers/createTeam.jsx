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

function handleResponse(res, teamName) {
  fmAgent.success({ message: `Created team: ${teamName}` });
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
    window.location.assign("/500.html");
  }
}

export default (appRef) => ({
  createTeam: async (roster, teamName) =>
    new Promise((resolve, reject) => {
      const Afmachine = appRef.current.Afmachine;
      Afmachine.request(() =>
        Afmachine.players.createTeam({
          teamName,
          usernames: roster
            .filter((player) => player != null)
            .map((player) => player.username),
        })
      )
        .then((res) => handleResponse(res, teamName))
        .then(() => resolve(teamName))
        .catch(handleError)
        .catch(reject);
    }),
});
