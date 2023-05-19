import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";
import styled from "styled-components";
import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
  renderDialog,
} from "/src/components/dialogs/index.js";

const StyleConfirmationDialog = styled(ConfirmationDialog)`
  width: 400px;
`;

const StyleConfirmationDialogDescription = styled(
  ConfirmationDialogDescription
)`
  box-sizing: border-box;
  color: var(--primary-medium);
  font-family: NoirPro-SemiBold;
  font-size: var(--tx-md);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
  margin-top: 20px;
  text-align: center;
`;

function ConfirmUnregisterWristband({ username, handleClose }) {
  return (
    <StyleConfirmationDialog
      initialOpen
      onClose={handleClose}
      style={{ wdith: "400px" }}
    >
      <ConfirmationDialogHeading>
        toggle wristband pairing
      </ConfirmationDialogHeading>
      <StyleConfirmationDialogDescription>
        Unregister players {username} wristband?
      </StyleConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm style={{ width: "150px" }}>
        unregister
      </ConfirmationDialogConfirm>
    </StyleConfirmationDialog>
  );
}

function handleResponse(res) {
  console.log("TOGGLED WRISTBAND PAIRING MODE");
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
  toggleWristbandPairing: async (players, toPair, onPaired) =>
    new Promise((resolve, reject) => {
      console.log("TOGGLE WRISTBAND PAIRING");
      if (toPair?.wristband?.active) {
        renderDialog(
          null,
          ConfirmUnregisterWristband,
          {
            username: toPair.username,
          },
          (unregister) => {
            if (!unregister) return;
            appRef.current
              .unregisterWristband(toPair)
              .then((unregistered) => {
                console.log("UNREGISTERED");
                console.log(unregistered);
                return appRef.current.toggleWristbandPairing(
                  players,
                  unregistered,
                  onPaired
                );
              })
              .then(resolve)
              .catch(reject);
          }
        );
        return;
      }

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
          cb: ({ wristbandNumber, wristbandColor }) => {
            console.log("WRISTBAND SCAN RECEICEVED");
            appRef.current
              .validateWristband({ wristbandNumber })
              .then((validated) =>
                appRef.current.registerWristband({
                  ...toPair,
                  wristband: {
                    ...toPair.wristband,
                    wristbandNumber,
                    wristbandColor,
                  },
                })
              )
              .then((registered) => {
                appRef.current.listenersRef.current =
                  appRef.current.listenersRef.current.filter(
                    (l) => l.type !== "wristbandScan"
                  );
                onPaired(null, registered);
              })
              .catch((err) => {
                onPaired(err);
              });
          },
        });
      }
      resolve(
        players.map((player) => {
          if (player == null) {
            return null;
          } else if (player.username === toPair.username) {
            return toPair;
          } else {
            return {
              ...player,
              wristband: {
                ...player.wristband,
                pairing: false,
              },
            };
          }
        })
      );
    }),
});
