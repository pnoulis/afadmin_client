import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import { Afmachine } from "/src/afmachine/Afmachine.js";
import { defer } from "react-router-dom";

function handleResponse(res) {
  return res.players;
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

async function loadAvailablePlayers() {
  // const availablePlayers = new Promise((resolve, reject) =>
  //   setTimeout(() => {
  //     Afmachine.request(() => Afmachine.players.listAvailable()).then(resolve);
  //   }, 5000)
  // );
  const availablePlayers = Afmachine.request(() =>
    Afmachine.players.listAvailable()
  )
    .then(handleResponse)
    .catch(handleError);
  return defer({ availablePlayers });
}

export { loadAvailablePlayers };
