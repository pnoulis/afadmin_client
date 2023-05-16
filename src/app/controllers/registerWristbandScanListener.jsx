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
  registerWristbandScanListener: async (players, toPair, onScan) =>
    new Promise((resolve, reject) => {
      if (toPair?.wristband?.active) {
        return appRef.current
          .unregisterWristband(toPair)
          .then((unregistered) =>
            resolve(
              players.map((player) =>
                player?.username === unregistered.username
                  ? unregistered
                  : player
              )
            )
          )
          .catch(reject);
      }

      console.log("REGISTER WRISTBAND SCAN LISTENER");
      console.log(players);
      console.log(toPair);
      // remove all wristband scan subscriptions
      appRef.current.listenersRef.current =
        appRef.current.listenersRef.current.filter(
          (l) => l.type !== "wristbandScan"
        );

      if (toPair?.wristband?.pairing) {
        toPair.wristband.pairing = false;
      } else {
        toPair.wristband.pairing = true;

        appRef.current.listenersRef.current.push({
          type: "wristbandScan",
          cb: (wristband) => {
            onScan(null, wristband);
          },
        });
      }
      resolve(
        players.map((player) =>
          player?.username === toPair.username
            ? toPair
            : {
                ...player,
                wristband: {
                  ...player?.wristband,
                  pairing: false,
                },
              }
        )
      );
    }),
});
