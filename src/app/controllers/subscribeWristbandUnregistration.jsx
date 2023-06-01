import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

function handleResponse(res) {
  fmAgent.success({
    message: "Successfully subscribed to wristband unregistration",
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
  subscribeWristbandUnregistration: async (listener) =>
    new Promise((resolve, reject) => {
      const { Afmachine } = appRef.current;
      Afmachine.request(() =>
        Afmachine.players.subscribeWristbandUnregistration(listener)
      )
        .then(handleResponse)
        .then(resolve)
        .catch(handleError)
        .catch(reject);
    }),
});
