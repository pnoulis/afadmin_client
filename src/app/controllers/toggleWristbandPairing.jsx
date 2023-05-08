import * as Errors from "/src/errors.js";
import { fmAgent } from "/src/components/flash_messages/index.js";

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
      if (toPair?.wristband?.active) {
        return appRef.current
          .unregisterWristband(toPair)
          .then((unregistered) =>
            resolve(
              players.map((player) =>
                player.username === unregistered.username
                  ? unregistered
                  : player
              )
            )
          )
          .catch(reject);
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
            appRef.current
              .registerWristband({
                ...toPair,
                wristband: {
                  ...toPair.wristband,
                  wristbandNumber,
                  wristbandColor,
                },
              })
              .then((registered) => onPaired(null, registered))
              .catch(onPaired);
          },
        });
      }
      resolve(
        players.map((player) =>
          player.username === toPair.username
            ? toPair
            : {
                ...player,
                wristband: {
                  ...player.wristband,
                  pairing: false,
                },
              }
        )
      );

      // end
    }),
});

// export default (appRef) => ({
//   toggleWristbandPairing: (players, player, onToggle) => {
//     if (!player?.wristband) {
//       throw new Error("Playing missing wristband");
//     }
//     // Remove all wristband scan subscriptions
//     appRef.current.listenersRef.current = app.listenersRef.current.filter(
//       (l) => l.type !== "wristbandScan"
//     );

//     if (player?.wristband?.active) {
//       return appRef.current.unregisterWristband(player, (p) =>
//         toggleWristbandPairing(players, p, onToggle)
//       );
//     }

//     if (player?.wristband?.pairing) {
//       player = {
//         ...player,
//         wristband: {
//           ...player.wristband,
//           pairing: false,
//         },
//       };
//     } else {
//       player = {
//         ...player,
//         wristband: {
//           ...player.wristband,
//           pairing: true,
//         },
//       };

//       appRef.current.listenersRef.current.push({
//         type: "wristbandScan",
//         cb: ({ wristbandNumber, wristbandColor }) => {
//           const Afmachine = appRef.current.Afmachine.Afmachine;
//           Afmachine(() =>
//             Afmachine.players.registerWristband({
//               username: player.username,
//               wristbandNumber,
//             })
//           ).then(handleResponse);
//           then((res) =>
//             onToggle(
//               players.map((p) =>
//                 p.username === player.username
//                   ? {
//                       ...player,
//                       wristband: {
//                         ...player.wristband,
//                         wristbandNumber,
//                         wristbandColor,
//                         active: true,
//                         pairing: false,
//                       },
//                     }
//                   : {
//                       ...p,
//                       wristband: {
//                         ...p.wristband,
//                         pairing: false,
//                       },
//                     }
//               )
//             )
//           ).catch(handleError);
//         },
//       });
//     }

//     onToggle(
//       players.map((p) =>
//         p.username === player.username
//           ? player
//           : {
//               ...p,
//               wristband: {
//                 ...p.wristband,
//                 pairing: false,
//               },
//             }
//       )
//     );
//   },
// });
