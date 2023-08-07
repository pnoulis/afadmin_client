import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { catchAferrs as __catchAferrs } from "/src/err_handling/index.js";
import { useNavigate } from "react-router-dom";
import { renderDialog } from "/src/components/dialogs/index.js";

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
 * @param {Object} services.afmachine
 */
function useApp(services, options) {
  const [app, setApp] = React.useState({
    services,
  });
  const [registrationQueue, setRegistrationQueue] = React.useState([]);

  const navigate = useNavigate();
  const catchAferrs = React.useCallback(__catchAferrs.bind(null, navigate), []);

  function registerPlayer(form) {
    return afmachine.registerPlayer(form).catch(catchAferrs());
  }

  function searchPlayer(searchTerm) {
    return afmachine.searchPlayer({ searchTerm }).catch(catchAferrs());
  }

  function addPlayerRegistrationQueue(player) {
    const queue = registrationQueue;
    const addQueue = setRegistrationQueue;
    const lnQueue = registrationQueue.length;

    player = afmachine.createPersistentPlayer(player);

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
        player = afmachine.createPersistentPlayer(player);
        player.wristband.setState(player.wristband.getRegisteredState);
        renderDialog(
          null,
          PopoverAsyncAction,
          {
            action: player.unpairWristband.bind(player),
          },
          function (err, unpaired) {
            if (err) catchAferrs()(err);
            else if (unpaired) addQueue(queue.concat(player));
          },
        );
      });
    } else {
      addQueue(queue.concat(afmachine.createPersistentPlayer(player)));
    }
  }

  function removePlayerRegistrationQueue(player) {
    const queue = registrationQueue;
    const addQueue = setRegistrationQueue;
    const lnQueue = registrationQueue.length;
    const newQueue = [];

    for (let i = 0; i < lnQueue; i++) {
      if (queue[i].username === player.username) {
        continue;
      } else {
        newQueue.push(queue[i]);
      }
    }
    setRegistrationQueue(newQueue);
  }

  function flushRegistrationQueue() {
    setRegistrationQueue([]);
  }

  return {
    app,
    afmachine,
    setApp,
    catchAferrs,
    registrationQueue,
    addPlayerRegistrationQueue,
    removePlayerRegistrationQueue,
    flushRegistrationQueue,
    registerPlayer,
    searchPlayer,
  };
}

export { useApp };
