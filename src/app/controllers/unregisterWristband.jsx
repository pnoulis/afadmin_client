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

function DialogUnpairWristband({ handleClose }) {
  return (
    <Dialog initialOpen onClose={handleClose}>
      <DialogHeading>Unpair Wristband?</DialogHeading>
      <DialogDescription>
        It seems the player has already registered a wristband.
      </DialogDescription>
      <DialogClose tabIndex={0}>cancel</DialogClose>
      <DialogConfirm>unpair</DialogConfirm>
    </Dialog>
  );
}

function handleResponse(res) {
  console.log("UNREGISTERED PLAYER WRISTBAND");
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
  unregisterWristband: async (player) =>
    new Promise((resolve, reject) => {
      renderDialog(null, DialogUnpairWristband, (yes) => {
        if (!yes) return;
        const Afmachine = appRef.current.Afmachine;
        Afmachine.request(() =>
          Afmachine.players.unregisterWristband({
            username: player?.username,
            wristbandNumber: player?.wristband?.wristbandNumber,
          })
        )
          .then(handleResponse)
          .then(() =>
            resolve({
              ...player,
              wristbandMerged: false,
              wristband: {
                wristbandNumber: null,
                wristbandColor: null,
                active: false,
              },
            })
          )
          .catch(handleError)
          .catch(reject);
      });
    }),
});
