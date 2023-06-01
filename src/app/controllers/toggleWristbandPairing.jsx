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

function DialogConfirmUnregisterWristband({ player, handleClose }) {
  return (
    <ConfirmationDialog initialOpen onClose={handleClose}>
      <ConfirmationDialogHeading>
        toggle wristband pairing mode
      </ConfirmationDialogHeading>
      <ConfirmationDialogDescription>
        Unregister players {player.username} wristband?
      </ConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>unregister</ConfirmationDialogConfirm>
    </ConfirmationDialog>
  );
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
  toggleWristbandPairing: async (
    player,
    // onPaired = (err, pairedPlayer) => {},
    onWristbandScan
  ) =>
    new Promise((resolve, reject) => {
      const { on, flush } = appRef.current;
      const {
        validateWristband,
        registerWristband,
        unregisterWristband,
        toggleWristbandPairing,
      } = appRef.current.controllers;

      const newRegisterWristbandScanListener = () => {
        flush("wristbandScan");
        on("wristbandScan", (wristband) =>
          validateWristband(wristband)
            .then((validatedWristband) =>
              onWristbandScan(null, validatedWristband, () =>
                flush("wristbandScan")
              )
            )
            .catch(handleError)
            .catch((err) =>
              onWristbandScan(err, null, () => flush("wristbandScan"))
            )
        );
      };
      // const registerWristbandScanListener = () => {
      //   flush("wristbandScan");
      //   on("wristbandScan", (wristband) => {
      //     validateWristband(wristband)
      //       .then((validatedWristband) =>
      //         registerWristband(player, validatedWristband)
      //       )
      //       .then((registered) => {
      //         flush("wristbandScan");
      //         onPaired(null, registered);
      //       })
      //       .catch(handleError)
      //       .catch(onPaired);
      //   });
      // };

      if (player.wristband.active) {
        renderDialog(
          null,
          DialogConfirmUnregisterWristband,
          { player },
          (yes) => {
            if (!yes) {
              resolve(null);
            } else {
              unregisterWristband(player, false)
                .then((unpairedPlayer) =>
                  toggleWristbandPairing(unpairedPlayer, onWristbandScan)
                )
                .then(resolve)
                .catch(reject);
            }
          }
        );
      } else {
        newRegisterWristbandScanListener();
        resolve({
          ...player,
          wristband: {
            ...player.wristband,
            pairing: !player.wristband.pairing,
          },
        });
      }
    }),
});
