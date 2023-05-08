import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

function handleResponse(res) {
  console.log(`REGISTERED PLAYER WRISTBAND`);
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
  registerWristband: async (player) =>
    new Promise((resolve, reject) => {
      if (player.wristband.active) {
        return appRef.current
          .unregisterWristband(player)
          .then(() => appRef.current.registerWristband(player));
      }

      const Afmachine = appRef.current.Afmachine;
      Afmachine.request(() =>
        Afmachine.players.registerWristband({
          username: player?.username,
          wristbandNumber: player?.wristband?.wristbandNumber,
        })
      )
        .then(handleResponse)
        .then((res) =>
          resolve({
            ...player,
            wristband: {
              ...player.wristband,
              pairing: false,
              active: true,
            },
          })
        )
        .catch(handleError)
        .catch(reject);
    }),
});
