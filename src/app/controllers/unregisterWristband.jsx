import * as React from "react";
import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";

function DialogConfirmWristbandUnregistration({ player, handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>Wristband</ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        Unregister player's {player} wristband?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>unregister</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
}

function handleResponse(player, res) {
  fmAgent.success({
    message: `Successfully unregistered player's ${player.username} wristband`,
  });
  return {
    ...player,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: null,
      wristbandColor: null,
      active: false,
    },
  };
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
  unregisterWristband: async (player, confirm = true) =>
    new Promise((resolve, reject) => {
      const { Afmachine } = appRef.current;
      const unregister = () =>
        Afmachine.players
          .unregisterWristband({
            username: player.username,
            wristbandNumber: player?.wristband.wristbandNumber,
          })
          .then((res) => handleResponse(player, res))
          .then(resolve)
          .catch(handleError)
          .catch(reject);

      if (confirm && player?.wristband.active) {
        renderDialog(
          null,
          DialogConfirmWristbandUnregistration,
          {
            player: player.username,
          },
          (yes) => {
            if (!yes) {
              return;
            }
            unregister();
          }
        );
      } else {
        unregister();
      }
    }),
});
