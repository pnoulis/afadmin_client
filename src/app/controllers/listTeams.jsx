import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import { mapTeam } from "agent_factory.shared/utils/misc.js";

function handleResponse(res) {
  return res.teams.map((team) => mapTeam(team, "frontend"));
}

function handleError(err) {
  if (err instanceof Errors.ValidationError) {
    throw {
      validationErrors: err.cause.validationErrors,
    };
  } else if (err instanceof Errors.ModelError) {
    fmAgent.warn({
      message: err.message,
    });
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
  listTeams: async (payload) =>
    new Promise((resolve, reject) => {
      const Afmachine = appRef.current.Afmachine;
      Afmachine.request(() => Afmachine.players.listTeams())
        .then(handleResponse)
        .then(resolve)
        .catch(handleError)
        .catch(reject);
    }),
});
