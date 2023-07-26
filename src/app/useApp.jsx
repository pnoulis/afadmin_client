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

  function searchPlayer(searchTerm) {
    return Afmachine.searchPlayer({ searchTerm }).catch(catchAferrs());
  }

  function addPlayerRegistrationQueue(player) {
    const queue = registrationQueue;
    const addQueue = setRegistrationQueue;
    const lnQueue = registrationQueue.length;

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
      renderDialog(null, AlertPlayerNoWristbandPairing, { player });
    } else if (
      player.wristband.compareStates(function (states, current) {
        return current >= states.paired;
      })
    ) {
      renderDialog(null, ConfirmUnpairPlayerWristband, { player }, (yes) => {
        if (!yes) return;
        player = Afmachine.createPersistentPlayer(player);
        renderDialog(
          null,
          PopoverAsyncAction,
          {
            action: player.unpairWristband.bind(player),
          },
          function (unpaired) {
            if (player.inState("unpaired")) {
              addQueue(queue.concat(player));
            }
          },
        );
      });
    } else {
      addQueue(queue.concat(Afmachine.createPersistentPlayer(player)));
    }
  }

  function removePlayerRegistrationQueue() {}

  return {
    app,
    setApp,
    catchAferrs,
    registrationQueue,
    addPlayerRegistrationQueue,
    removePlayerRegistrationQueue,
    registerPlayer,
    searchPlayer,
  };
}

export { useApp };
