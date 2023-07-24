import * as React from "react";
import { Afmachine } from "/src/app/afmachine.js";
import { catchAferrs as __catchAferrs } from "/src/err_handling/index.js";
import { useNavigate } from "react-router-dom";
import { renderDialog } from "/src/components/dialogs/index.js";

// ------------------------------ ALERTS ------------------------------ //
import {
  AlertDuplicatePlayerRegistrationQueue,
  AlertPlayerPartOfTeamRegistrationQueue,
} from "/src/components/dialogs/alerts/index.js";

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
    const lnQueue = registrationQueue.length;

    // Prevent duplicate players in the registration queue
    for (let i = 0; i < lnQueue; i++) {
      if (queue[i].username === player.username) {
        return renderDialog(null, AlertDuplicatePlayerRegistrationQueue, {
          player: player.username,
        });
      }
    }

    if (player.inState("inGame")) {
      // definately do not allow unregistering the wristband
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
    if (player.wristband.inState("paired")) {
      renderDialog(
        null,
        ConfirmUnpairPlayerWristband,
        { player: player.username },
        (yes) => {
          if (!yes) return;
        },
      );
    }

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
