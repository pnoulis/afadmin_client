import * as React from "react";
import * as Errors from "/src/errors.js";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs";

function AlertOccupiedWristband({ wristbandNumber, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>Wristband scan</AlertDialogHeading>
      <AlertDialogDescription>
        Wristband {wristbandNumber} is registered to another player.
      </AlertDialogDescription>
    </AlertDialog>
  );
}

function handleResponse(res) {
  if (res?.wristband.active) {
    throw new Errors.ModelError({
      message: "wristband paired to another player",
    });
  }
  return res.wristband;
}

function handleError(err, wristband) {
  if (err instanceof Errors.ValidationError) {
    throw {
      validationErrors: err.cause.validationErrors,
    };
  } else if (err instanceof Errors.ModelError) {
    renderDialog(null, AlertOccupiedWristband, wristband);
    throw {
      modelError: err.message,
    };
  } else if (err instanceof Errors.TimeoutError) {
    console.log(err);
    throw err;
  } else {
    console.log(err);
    throw err;
  }
}

export default (appRef) => ({
  validateWristband: async (wristband, cachedTeams) =>
    new Promise((resolve, reject) => {
      const { Afmachine } = appRef.current;
      // Cached teams
      // A cached team is one that has been created client side
      // and possibly has pair wristbands to players but not yet
      // registered them. As such the validation must take into
      // consideration the already paired wristbands
      // Such a case for example may occur on the group party mode.
      if (cachedTeams) {
        const isUnique = cachedTeams
          .map((_) => _.roster)
          .flat()
          .filter((player) => !!player)
          .every(
            (player) =>
              player.wristband?.wristbandNumber !== wristband.wristbandNumber
          );

        if (!isUnique) {
          renderDialog(null, AlertOccupiedWristband, wristband);
          reject(
            new Errors.ModelError({
              message: "wristband paired to another player",
            })
          );
        }
      }
      Afmachine.request(() =>
        Afmachine.players.infoWristband({
          wristbandNumber: wristband.wristbandNumber,
        })
      )
        .then(handleResponse)
        .then(resolve)
        .catch((err) => handleError(err, wristband))
        .catch(reject);
    }),
});
