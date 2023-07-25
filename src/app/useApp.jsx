import * as React from "react";
import { Afmachine } from "/src/app/afmachine.js";
import { catchAferrs as __catchAferrs } from "/src/err_handling/index.js";
import { useNavigate } from "react-router-dom";
import { renderDialog } from "/src/components/dialogs/index.js";
import { logPlayer } from "afmachine/src/misc/log.js";

// ------------------------------ ALERTS ------------------------------ //
import {
  AlertDuplicatePlayerRegistrationQueue,
  AlertPlayerPartOfTeamRegistrationQueue,
  AlertPlayerNoWristbandPairing,
} from "/src/components/dialogs/alerts/index.js";
import { PopoverAsyncAction } from "/src/components/async/PopoverAsyncAction.jsx";

// ------------------------------ CONFIRM ------------------------------ //
import { ConfirmUnpairPlayerWristband } from "/src/components/dialogs/confirms/index.js";

/**
 * @param {Object} services
 * @param {Object} services.Afmachine
 */
function useApp(services, options) {
  const [app, setApp] = React.useState({
    services,
  });
  const [registrationQueue, setRegistrationQueue] = React.useState([]);

  const navigate = useNavigate();
  const catchAferrs = React.useCallback(__catchAferrs.bind(null, navigate), []);

  function registerPlayer(form) {
    return Afmachine.registerPlayer(form).catch(catchAferrs());
  }

  // React.useCallback in not called in this specific occasion just for show.
  // It is actually neeeded, DON'T TOUCH
  const searchPlayer = React.useCallback(function (searchTerm) {
    return Afmachine.searchPlayer({ searchTerm }).catch(catchAferrs());
  }, []);

  function addPlayerRegistrationQueue(player) {
    const queue = registrationQueue;
    const setQueue = setRegistrationQueue;
    const lnQueue = registrationQueue.length;

    player = Afmachine.createPersistentPlayer(player);
    console.log(player);
    player.wristband.toggle();

    return;
    // Prevent duplicate players in the registration queue
    for (let i = 0; i < lnQueue; i++) {
      if (queue[i].username === player.username) {
        return renderDialog(null, AlertDuplicatePlayerRegistrationQueue, {
          player: player.username,
        });
      }
    }

    if (
      player.compareStates(function (states, current) {
        return current >= states.inTeam;
      })
    ) {
      return renderDialog(null, AlertPlayerNoWristbandPairing, { player });
    } else if (
      player.wristband.compareStates(function (states, current) {
        return current >= states.paired;
      })
    ) {
      renderDialog(null, ConfirmUnpairPlayerWristband, { player }, (yes) => {
        if (!yes) return;
        player = Afmachine.createPersistentPlayer(player);
        player.wristband.toggle((err) => {
          logPlayer(player);
        });
        // logPlayer(player);
        // renderDialog(
        //   null,
        //   PopoverAsyncAction,
        //   {
        //     action: () =>
        //       new Promise((resolve, reject) => {
        //         player.wristband.toggle((err) => {
        //           if (err) reject(err);
        //           else resolve(player);
        //         });
        //       }),
        //     timeResolving: 2000,
        //     timePending: 2000,
        //     timeRejecting: 2000,
        //   },
        //   (response) => {
        //     console.log(response);
        //   },
        // );
      });
    }

    // Is this actually needed?
    // if (player.inState("inTeam")) {
    //   // Prevent players from entering the wristband registration process if
    //   // they are part of a team.
    //   return renderDialog(null, AlertPlayerPartOfTeamRegistrationQueue, {
    //     player: player.username,
    //   });
    // }

    // If player is already paired to a wristband, the admin is allowed to
    // choose between canceling the procedure or unpairing the current wristband
    // so that a new one may be paired.
    // if (player.wristband.inState("paired")) {
    //   renderDialog(
    //     null,
    //     ConfirmUnpairPlayerWristband,
    //     { player: player.username },
    //     (yes) => {
    //       if (!yes) return;
    //     },
    //   );
    // }

    // player already has a registered wristband
    // renderDialog(null, AlertDuplicatePlayerRegistrationQueue);
  }

  function removePlayerRegistrationQueue() {}

  return {
    app,
    setApp,
    catchAferrs,
    addPlayerRegistrationQueue,
    removePlayerRegistrationQueue,
    registerPlayer,
    searchPlayer,
  };
}

export { useApp };
